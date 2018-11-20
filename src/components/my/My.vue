<template>
    <div>
        <common-header>
            <span slot="title">我</span>
        </common-header>
            <router-view></router-view>
        <common-footer></common-footer>
    </div>
</template>

<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'

export default {
    components: {
        CommonHeader,
        CommonFooter
    },
}

</script>


<style scoped>

header{
    position: fixed;
    top: 0;
    z-index: 999;
}
main{
    margin-top: 20%;
}

</style>
