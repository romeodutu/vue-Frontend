<template>

    <layout>

        <div slot="content">

            <exchange-hero/>

        </div>

    </layout>

</template>

<script>

    import Layout from "client/components/layout/sampleLayout.vue"
    import ExchangeHero from "client/components/heros/Exchange.hero.vue"


    export default {

        name: "exchange-page",

        components:{
            "layout": Layout,
            "exchange-hero": ExchangeHero,

        }

    }

</script>