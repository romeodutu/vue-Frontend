<template>

    <div id="faqSection">

        <span class="alignCenter bigMarginTop pageTitle">Cryptocurrency explained</span>

        <div class="faqContainer sectionCenteredWidth">

            <div class="faqSection">

                <collapse-faq :selected="false" ref="WhatIsWebDollar">
                    <div slot="collapse-header">
                        What is WebDollar?
                    </div>
                    <div slot="collapse-body">
                        WebDollar is a browser based digital currency. The main advantages to it, are that WebDollars can be mined in your browser and you can transfer funds by storing the wallets locally, without using third parties.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatsItLikeUsingWebDollar">
                    <div slot="collapse-header">
                        What's it like using WebDollar?
                    </div>
                    <div slot="collapse-body">
                        WebDollar is a peer to peer (p2p) currency which is native to the internet. The WebDollar protocol and blockchain were designed to be light and to work without the installation of any additional software or plugins for wallets or mining. A mini-blockchain is downloaded directly into your browser, while your wallet is securely stored and encrypted directly into your computer. Full consensus is achieved in a matter of seconds by using a novel PPoW - Proofs of Proof of Work algorithm to allow light nodes to check the balance and validate transactions in a matter of seconds. Being native to the internet, WebDollar is enabling miners to start mining with a click of a button.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatsValueOfWebDollarInFiatCurrency">
                    <div slot="collapse-header">
                        What’s the value of WebDollar in FIAT (conventional) currency?
                    </div>
                    <div slot="collapse-body">
                        The value is based on the demand and supply imposed by the market. The price was and is currently set by the market.                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatAreRisksOfMiningWebDollarInBrowser">
                    <div slot="collapse-header">
                        What are the risks of mining WebDollar in my browser?
                    </div>
                    <div slot="collapse-body">
                        There is no risk involved in using WebDollar, but you can expect some latency on your browser, especially if you increase the number of threads used. We recommend using the level 1 thread while you are working on your PC, and increase it when you are away. Likewise, the battery of your device will drain faster and on POW rounds your electricity consumption will slightly increase according to the number of threads that you are using.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="HowIsWebDollarDifferent">
                    <div slot="collapse-header">
                        How is WebDollar different, when compared to other cryptocurrencies?
                    </div>
                    <div slot="collapse-body">
                        WebDollar is the easiest and fastest way to earn and use cryptocurrencies. You don’t need technical knowledge or dedicated hardware resources. WebDollar aims to make mining available for every laptop and smartphone, which is why we are using the Argon2d algorithm which makes mining with special hardware unprofitable because it is ASIC resistant and GPU unfriendly. We want to give everyone the opportunity to mine and take part in the new world of cryptocurrency.                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhereAreTheWalletsStored">
                    <div slot="collapse-header">
                        Where are the wallets stored?
                    </div>
                    <div slot="collapse-body">
                        The Wallets are stored and managed securely by the Browser, by using the Indexed DB API. The wallet's storage location varies from one browser to another. You can also download the wallet as a file and store it on another browser, disk drive, USB drive, cloud storage, cold storage, etc.                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="SupportSmartContracts">
                    <div slot="collapse-header">
                        Does WebDollar support smart contracts?
                    </div>
                    <div slot="collapse-body">
                        In the near future WebDollar will incorporate a native smart contract system.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="MyBalanceSwitchedToZero">
                    <div slot="collapse-header">
                        Why did my balance switched to 0?
                    </div>
                    <div slot="collapse-body">
                        If you had no available balance before, this may be caused by the fact that you were connected to another pool and the potential balance from the previous pool is not displayed anymore. You will still receive the WEBD mined in the previous pool.                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatIsPotentialBalance">
                    <div slot="collapse-header">
                        What is potential balance?
                    </div>
                    <div slot="collapse-body">
                        The potential balance is the approximation of your total balance at the next payout by the pool. This can vary greatly, because it's the proportion between your involved processing power and the total processing power of the network (which too, will vary).
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="PoolMiningLinkChangeForTerminalMiners">
                    <div slot="collapse-header">
                        Will the link to pool mining change for terminal miners ?
                    </div>
                    <div slot="collapse-body">
                        It depends from one pool to another. However, it is not profitable for a pool to change their link.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatIsPercentageForHybridMiningPoSAndPoW">
                    <div slot="collapse-header">
                        What's the percentage for hybrid mining PoS + PoW ?
                    </div>
                    <div slot="collapse-body">
                        WebDollar's mining percentage is split between 66.(6)% PoS rounds and 33.(3)% PoW rounds.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatIsPoW">
                    <div slot="collapse-header">
                        What is PoW ?
                    </div>
                    <div slot="collapse-body">
                        Proof of Work is the way to mine new coins using your computer's CPU power. The more powerful and numerous your mining computers are, the more WebDollars you earn.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="HowWillPoSWorkOnConsensus">
                    <div slot="collapse-header">
                        How will PoS work on consensus ?
                    </div>
                    <div slot="collapse-body">
                        Proof of Stake rounds will work both for pool mining and consensus in browser and terminals.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="MineInPoSFromScratchOrBuyInOrderToStake">
                    <div slot="collapse-header">
                        Can I mine in PoS rounds from scratch or do I need to buy in order to stake?
                    </div>
                    <div slot="collapse-body">
                        If you're mining from scratch you won't be able to earn coins. You need to have an amount of WebDollars first to stake with, in the PoS rounds.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="IsWebDollarAToken">
                    <div slot="collapse-header">
                        Is WebDollar a token?
                    </div>
                    <div slot="collapse-body">
                        WebDollar is not a token. WebDollar is working on its proprietary technology. EDUCATIONAL MOMENT: Unfortunately, cryptocurrency investors do tend to invest in tokens that have absolutely no backing other than a conceptual description. Over time, cryptocurrency investors unaware of this fact, have been investing huge amounts of money into these type of projects that have proven nothing else but good marketing skills. And therefore, the lack of technical developing skills of the teams behind those projects has lead to a dramatic price drop of the said coins or tokens which, in turn has left the investors high and dry, aka without their hard earned investment money.

                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="CompatibleBrowsers">
                    <div slot="collapse-header">
                        Which browsers are compatible with WebDollar?
                    </div>
                    <div slot="collapse-body">
                        Chrome, Firefox, Opera, Edge and others.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="DoesItWorkOnIphoneIos">
                    <div slot="collapse-header">
                        Does it work on Iphone (iOS)?
                    </div>
                    <div slot="collapse-body">
                        Yes, it is working on IOS browser, but for the moment only in incognito mode. We also have an app for IOS, but it is not yet possible to add it on the store because the Apple politics regarding cryptocurrencies.
                    </div>
                </collapse-faq>

            </div>

            <div class="faqSection">

                <collapse-faq :selected="false" ref="HowAreWEBDsCreated">
                    <div slot="collapse-header">
                        How are WEBD's created?
                    </div>
                    <div slot="collapse-body">
                        The coins are created by mathematical algorithms using a hybrid mining process. The mining program is using your computer's CPU resources in POW (Proof Of Work) rounds and staking your already mined coins in POS (Proof Of Stake) hybrid rounds.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatCanIDoWithWebDollars">
                    <div slot="collapse-header">
                        What can I do with WebDollars?
                    </div>
                    <div slot="collapse-body">
                        WebDollar is meant to be used as you would use just about any other currency: paying for products online, trading for goods, trading in for other currencies. In addition, WebDollar can be used for cross border payments with no currency exchange fees. The community around the open source project, WebDollar, is continuously building the ecosystem.                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="HowCanIGetWebDollars">
                    <div slot="collapse-header">
                        How can I get WebDollars?
                    </div>
                    <div slot="collapse-body">
                        1. You can mine them directly in your browser. 2. You can invite others to mine and refer you to get some rewards. 3. You can buy from the exchanges. 4. You can become a part of our bounty hunt program on https://webdollar.io/bounties.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="HowMuchWebdEarnIn24HoursMining">
                    <div slot="collapse-header">
                        How much WebDollars (WEBD) can I earn in 24 hours of mining?
                    </div>
                    <div slot="collapse-body">
                        The amount of WEBD's that you can mine in 24 hours is solely based on the computational power of your devices & your mined coins stake and it is directly proportional to the power of the entire network.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="HowAreWalletsSecured">
                    <div slot="collapse-header">
                        How are the wallets secured?
                    </div>
                    <div slot="collapse-body">
                        The wallets are stored directly into your browser, avoiding third parties. Your browser is the only one that is storing your wallet. NOTE: Like with any other coin or token, if you lose your wallet's recovery password, your WebDollars will be locked for ever.                     </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="UseOtherWallets">
                    <div slot="collapse-header">
                        Can I use other wallets to store WEBD, for example Ledger Nano S, Trezor, Keep Key, etc?
                    </div>
                    <div slot="collapse-body">
                        Yes! Now, you can download your wallet and store it on an external device and when you want to make a transaction, you can import the transaction or sign it online/offline with the wallet from the stored device. In the near future, WebDollar will also be integrated to use dedicated crypto devices (Ledger Nano S, Trezor,etc).
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="ImportWalletBrowser">
                    <div slot="collapse-header">
                        Can I import an existing wallet into my browser?
                    </div>
                    <div slot="collapse-body">
                        Yes, you will be able to import and export your wallet from one browser to another one. The wallet is managed by your browser, not by the WebDollar Protocol or other third parties.                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatIsAvaiableBalance">
                    <div slot="collapse-header">
                        What is available balance?
                    </div>
                    <div slot="collapse-body">
                        It is the balance stored into the blockchain by the whole network, which can only be changed by means of transactions.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="PotentialBalanceUpAndDown">
                    <div slot="collapse-header">
                        Why does the potential balance keep going up and down ?
                    </div>
                    <div slot="collapse-body">
                        Because the potential balance is just an estimate given by the pool that you are mining into.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="HowDoWebDollarBountiesWork">
                    <div slot="collapse-header">
                        How do WebDollar's bounties work?
                    </div>
                    <div slot="collapse-body">
                        The WebDollar's built-in automated bounty program is scraping the available social media channels and it is giving you a score, according to the impact of your posts about WebDollar. This score will be used to split each section of the reward to all attendees. When providing your wallet for reward payments, you should post your wallet address in one of your posts from the social media account.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhatIsPoS">
                    <div slot="collapse-header">
                        What is PoS ?
                    </div>
                    <div slot="collapse-body">
                        Proof of Stake is the way to mine new coins using your already mined coin stack, instead of your CPU power, like you would do when mining with PoW.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhenMiningInPoSKeepAllOfStakeInOneWallet">
                    <div slot="collapse-header">
                        When mining in PoS rounds, do i have to keep all of my stake in one wallet ?
                    </div>
                    <div slot="collapse-body">
                        The chances are equal, even when you have many small wallets instead of a single, big one.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="StakingMyCoinsWithPOSRequiresCertainTypeOfDevice">
                    <div slot="collapse-header">
                        Is staking my coins with POS, requiring a certain type of device?
                    </div>
                    <div slot="collapse-body">
                        Every compatible browser will suffice, regardless of the device (PC, laptop, tablet, smartphone, etc).
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="HelpTheProjectWhomDoIContact">
                    <div slot="collapse-header">
                        I want to help the project. Whom do I contact?
                    </div>
                    <div slot="collapse-body">
                        WebDollar is an open source project and anyone can join and help. You can contact our general manager and after talking with him, we will come to a conclusion as to which is the best way that you can help our project.

                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="ImplementWEBDAsAPaymentOption">
                    <div slot="collapse-header">
                        I have a business and would like to implement WEBD as a payment option. Is this possible? If so, whom should I contact?
                    </div>
                    <div slot="collapse-body">
                        Yes, it is possible. You have to get in touch with a member of our team. See the links in the team section.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="DoesItWorkOnAndroidPhones">
                    <div slot="collapse-header">
                        Does it work on Android phones?
                    </div>
                    <div slot="collapse-body">
                        Yes, it is working for Android browsers and we even have an app in Google Play Store for WebDollar.
                    </div>
                </collapse-faq>

                <collapse-faq :selected="false" ref="WhereCanISeeTheSourceCode">
                    <div slot="collapse-header">
                        Where can I see the source code?
                    </div>
                    <div slot="collapse-body">
                        Because we like to be transparent all of our codebase is open source on our github (https://github.com/WebDollar). Anyone can see the code, contribute to it and verify if everything is working well.
                    </div>
                </collapse-faq>

            </div>

        </div>

        <Center>
            <h2 style="margin-top: 40px; letter-spacing: 1px;">Do you still have questions? <a href="https://t.me/WebDollar">Ask us on Telegram!</a></h2>
        </Center>

    </div>
</template>

<script>
    import CollapseFaq from './extend/CollapseFaq.vue';
    let VueScrollTo = require('vue-scrollto');

    export default {
        name: "YourComponent",
        components: {
            CollapseFaq
        },
        mounted() {
            let qHash = this.$route.params.qHash;

            if ((typeof qHash === 'undefined') || !this.$refs.hasOwnProperty(qHash)) {
                return;
            }

            let qRef = this.$refs[qHash];

            qRef.toggle();

            VueScrollTo.scrollTo(qRef.$el);
        }
    }
</script>
