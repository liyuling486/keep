<template>
    <div>
        <common-header></common-header>
        <common-bread></common-bread>
            <router-view></router-view>
        <common-footer></common-footer>
    </div>
</template>

<script>
import CommonHeader from '../common/Header'
import CommonBread from '../common/Bread'
import CommonFooter from '../common/Footer'

export default {
    components: {
        CommonHeader,
        CommonBread,
        CommonFooter
    },
}

</script>


<style scoped>
</style>