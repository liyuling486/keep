<template>

    <div class="header">
        <div class="left fl" @click="back()">
            <img src="../../assets/images/shopHead.jpg" alt="">
            <slot name="GTit"></slot>
        </div>
        <div class="right fr">
            <slot name="GRight"></slot>
        </div>
    </div>

</template>

<script>
export default {
    methods: {
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.header{
    background: #584F60;
    padding: 4% 5% 10% 5%;
    color: #fff;
}

.header .left img{
    width: 18px;
    vertical-align: -10%;
}
</style>
