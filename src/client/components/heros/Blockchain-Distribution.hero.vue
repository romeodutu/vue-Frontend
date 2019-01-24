<template>

    <div id="coinDistributionSection" class="fullSection">

        <div class="verticalAlignMiddle">

            <span class="pageTitle alignCenter bigMarginBottom">Coin Supply</span>

            <div class="distributionContainer maxWidthSection">

                <div class="distributionGrid">
                    <div class="webdCoin spinCoin">
                        <img data-src="/public/assets/images/logo-coin.png" alt="webDollar logo black" title="webDollar black logo" class="coinLogo lazy">
                    </div>
                </div>
                <div class="distributionGrid">

                    <div class="stats">
                        <div>
                            <span v-show="!this.loaded" class="value">
                                <loading-spinner />
                            </span>
                            <span v-show="this.loaded" class="value">
                                {{this.distributionAmount}}
                                <span class='networkDifficulty'>{{this.getNumberSign(this.totalAmountCoins)}}</span>
                            </span>
                            <span class="description">Current Distribution</span>
                        </div>
                        <div>
                            <span v-show="!this.loaded" class="value">
                                 <loading-spinner />
                            </span>
                            <span v-show="this.loaded" class="value">
                                {{this.distributionBlocks}}
                            </span>
                            <span class="description">Mined blocks</span>
                        </div>
                        <div>
                            <span v-show="!this.loaded" class="value">
                                <loading-spinner />
                            </span>
                            <span v-show="this.loaded" class="value">
                                ~{{this.getNetworkHashrate}}
                                <span class='networkDifficulty'>{{this.getNetworkHashrateSign}}{{ this.changeRound ? '' : 'h/s'}}</span>
                            </span>
                            <span class="description">{{ this.changeRound ? 'Staking coins' : 'Global Hash rate' }}</span>
                        </div>
                    </div>

                    <div id="myRound">
                        <div id="myRoundBar" :style="{width: this.roundBarValue===100 ? 0 : this.roundBarValue + '%' }"></div>
                    </div>

                    <div id="myProgress">
                        <div id="myBar" :style="{width: this.totalAmountCoins / this.distributionProgressBarMax * 100  + '%' }"></div>
                    </div>
                    <span class="minValue">{{this.distributionProgressBarMinString}} WEBD</span>
                    <span class="maxValue">{{this.distributionProgressBarMaxString}} WEBD</span>

                    <br/><br/><br/>

                </div>

            </div>

        </div>

    </div>
</template>

<script>

    import LoadingSpinner from "client/components/UI/elements/Loading-Spinner.vue"
    import Utils from 'src/utils/util-functions'

    export default{

        name: "BlockchainDistribution",

        components:{
            LoadingSpinner,
        },

        data() {
            return {
                totalAmountCoins: 0,
                blocksLength: 0,
                blocksLastRoundChange: 0,
                roundJustChanged: null,
                loaded:false,
                isPos: false,
                roundBarValue: 0,

                distributionProgressBarMax : 42000000000,
                distributionProgressBarMin : 0,

                networkHashRate: 0,
                connected: false,
            }
        },

        computed:{
            distributionProgressBarMinString(){
                return this.formatMoneyNumber(this.distributionProgressBarMin, 0)
            },

            distributionProgressBarMaxString(){
                return this.formatMoneyNumber(this.distributionProgressBarMax, 0)
            },
            distributionAmount(){
                return Utils.processHashesPoW(this.totalAmountCoins)
            },

            distributionBlocks(){
                return this.formatMoneyNumber(this.blocksLength,0)
            },

            getNetworkHashrate(){
                return Utils.showHashes(this.networkHashRate,this.isPos,this.roundJustChanged,this.totalAmountCoins);
            },

            getNetworkHashrateSign(){
                return Utils.showHashesSign(this.networkHashRate,this.isPos,this.roundJustChanged);
            },

            changeRound(){
                if(this.isPos)
                    if(this.roundJustChanged)
                        return false;
                    else
                        return true;
                else
                    if(this.roundJustChanged)
                        return true;
                    else
                        return false;
            }

        },

        mounted(){

            window.addEventListener("load", () => {

                if (typeof window === "undefined") return;

                if (WebDollar.Blockchain.synchronized){

                    this.verifyIfContainData( WebDollar.Blockchain.Chain.accountantTree.calculateNodeCoins() / 10000 );

                    this.blocksLength = WebDollar.Blockchain.Chain.blocks.length;
                    this.networkHashRate = WebDollar.Blockchain.Chain.blocks.networkHashRate;

                }


                WebDollar.StatusEvents.on("blockchain/blocks-count-changed", (blocksLength)=>{

                    this.verifyIfContainData( WebDollar.Blockchain.Chain.accountantTree.calculateNodeCoins() / 10000 );
                    this.blocksLength = blocksLength;

                    if( WebDollar.Blockchain.blockchainGenesis.isPoSActivated( blocksLength ) ){

                        if(!this.isPos){
                            if(this.roundJustChanged !== null && this.blocksLength%10===0)
                                this.roundJustChanged=true;

                            if(this.blocksLastRoundChange!==0)
                                this.blocksLastRoundChange = this.blocksLength;
                        }else
                            if(this.blocksLength%10!==0)
                                this.roundJustChanged=false;

                        this.isPos = true;

                    }
                    else{
                        if(this.isPos){
                            if(this.roundJustChanged !== null && this.blocksLength%10===0)
                                this.roundJustChanged=true;

                            if(this.blocksLastRoundChange!==0)
                                this.blocksLastRoundChange = this.blocksLength;
                        }else
                            if(this.blocksLength%10!==0)
                                this.roundJustChanged=false;

                        this.isPos = false;
                    }

                    if( this.blocksLastRoundChange===0 )
                        this.blocksLastRoundChange = this.blocksLength - this.blocksLength%10;

                    if(this.roundJustChanged)
                        this.roundBarValue = 0;
                    else
                        this.roundBarValue = (this.blocksLength-this.blocksLastRoundChange) / (this.isPos ? 20 : 10) * 100;

                    if(this.roundJustChanged === null && this.blocksLength%10===0)
                        this.roundBarValue = 0;

                    if(this.isPos)
                        this.roundBarValue+=1;
                    else
                        this.roundBarValue-=1;

                    console.log("RoundBar - hashrate",this.networkHashRate);
                    console.log("RoundBar - blocksLastRoundChange",this.blocksLastRoundChange);
                    console.log("RoundBar - blocksLength",this.blocksLength);
                    console.log("RoundBar - isPos",this.isPos);
                    console.log("RoundBar - roundJustChanged",this.roundJustChanged);

                });

                WebDollar.StatusEvents.on("blockchain/new-network-hash-rate", (networkHashRate)=>{

                    if(networkHashRate!==0){

                        if(!this.roundJustChanged)
                            this.networkHashRate = networkHashRate;

                    }

                });

            });

        },

        methods:{

            formatMoneyNumber(n, decimals=2) {

                if (n === undefined) return '';

                return n.toFixed(decimals).replace(/./g, function(c, i, a) {
                    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
                });
            },

            verifyIfContainData(amount){

                this.totalAmountCoins = amount;

                if (amount!==0)
                    this.loaded=true;
                else
                    this.loaded = false;

            },

            getNumberSign(value){
                return Utils.processHashesSignPoW(value);
            }

        }

    }

</script>