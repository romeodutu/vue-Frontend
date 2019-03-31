<template>

    <div>

        <layout v-show="!protocolUsedOnMultipleTabs">

            <div slot="content">

                <web-dollar-hero/>

                <what-is-hero/>

                <peer-to-peer-hero/>

                <newsletter-hero/>

                <new-crypto-generation-hero/>

                <blockchain-distribution-hero/>

                <miner-pool-hero v-show="!poolActivated"/>

                <pool-hero v-show="poolActivated"/>

                <paper/>

                <timeline-hero/>

                <team-hero/>

                <know-us-hero/>

            </div>

        </layout>

        <multiple-tabs v-show="protocolUsedOnMultipleTabs"/>

    </div>

</template>

<script>

    import Layout from "client/components/layout/Layout.vue";

    import PoolHero from "client/components/heros/mining-pool/pool/Pool.hero.vue";
    import MinerPoolHero from "client/components/heros/mining-pool/miner-pool/Miner-Pool.hero.vue";
    import NewsletterHero from "client/components/heros/Newsletter.hero.vue";
    import TeamHero from "client/components/heros/Team.hero.vue";
    import WebDollarHero from "client/components/heros/WebDollar.hero.vue";
    import WhatIsHero from "client/components/heros/About.hero.vue";
    import PeerToPeerHero from "client/components/heros/Peer-To-Peer.hero.vue";
    import TimelineHero from "client/components/heros/Timeline.hero.vue";
    import KnowUsHero from "client/components/heros/Media.hero.vue";
    import FaqHero from "client/components/heros/Faq.hero.vue";
    import NewCryptoGenerationHero from "client/components/heros/Features.hero.vue";
    import BlockchainDistributionHero from "client/components/heros/Blockchain-Distribution.hero.vue";
    import MultipleTabs from "../components/heros/Multiple-Tabs.hero.vue";
    import Paper from "../components/heros/Paper.hero.vue";
    import WebDollarEmitter from "../../utils/WebDollarEmitter";

    export default {

        name: "ViewHome",

        components:{
            Layout,
            TeamHero,
            WebDollarHero,
            WhatIsHero,
            PeerToPeerHero,
            TimelineHero,
            KnowUsHero,
            FaqHero,
            NewCryptoGenerationHero,
            BlockchainDistributionHero,
            PoolHero,
            MinerPoolHero,
            MultipleTabs,
            NewsletterHero,
            Paper
        },

        data: () => {
            return {
                protocolUsedOnMultipleTabs: false,
                poolActivated: true,
            }
        },

        mounted(){
            const self = this;

            this.$nextTick(() => {
                WebDollarEmitter.on('blockchain/status', self._blockchainStatus);
                WebDollarEmitter.on('main-pools/status', self.initializePool);
                WebDollarEmitter.on('blockchain/logs',   self._blockchainLogs);
                WebDollarEmitter.on('miner-pool/status', self._minerPoolStatus);
                WebDollarEmitter.on("pools/status",      self._poolsStatus);

                self.loadPoolSettings();
            });
        },

        destroyed() {
            WebDollarEmitter.off('blockchain/status', this._blockchainStatus);
            WebDollarEmitter.off('main-pools/status', this.initializePool);
            WebDollarEmitter.off('blockchain/logs',   this._blockchainLogs);
            WebDollarEmitter.off('miner-pool/status', this._minerPoolStatus);
            WebDollarEmitter.off("pools/status",      this._poolsStatus);
        },

        methods:{
            _blockchainStatus(data) {
                if (data.message === "Single Window") {
                    this.protocolUsedOnMultipleTabs= false;
                } else if (data.message === "Multiple Windows Detected") {
                    this.protocolUsedOnMultipleTabs=true;
                }
            },

            _blockchainLogs(data) {
                switch (data.message) {
                    case "Network Adjusted Time Error":
                        setTimeout(()=>{
                            location.reload();
                        }, 12022*1000);

                        break;

                    case "You mined way too many blocks":
                        setTimeout(()=>{
                            location.reload();
                        }, 15*1000);

                        break;
                }
            },

            _minerPoolStatus(data) {
                if (data.message === "Miner Pool Started changed") {
                    this.poolActivated = !data.result;
                }
            },

            _poolsStatus(data) {
                if (data.message === "Pool Started changed") {
                    this.poolActivated = data.result;
                }
            },

            async initializePool(data) {

//                if (this.$store.state.route.params.a !== "pool" || this.$store.state.route.params['0'].length < 10 )
//                    return false;

                if (data.message === "Pool Initialized") {

                    console.log("xxxx");
                    await WebDollar.Blockchain.MinerPoolManagement.setMinerInitialPoolURL(this.$store.state.route.params['0']);

                    console.log(this.$store.state.route.params['0']);
                }
            },

            loadPoolSettings(){

                if (WebDollar.Blockchain.PoolManagement !== undefined && WebDollar.Blockchain.PoolManagement.poolStarted) this.poolActivated = true;
                else if (WebDollar.Blockchain.MinerPoolManagement !== undefined && WebDollar.Blockchain.MinerPoolManagement.minerPoolStarted) this.poolActivated = false;
                else this.poolActivated = false;
            }

        },

        async asyncData ({ store,  route: { params: { a,b, c, d, e, f }} }) {

            return true;

        },


    }

</script>
