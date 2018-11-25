<template>
<nav>
    <ul>
        <li>
            <router-link to="/sport">
                首页
                <span></span>
            </router-link>
        </li>
        <li>
            <router-link to="/sport/sportfit">
                健身
                <span></span>
            </router-link>
        </li>
        <li>
            <router-link to="/sport/sportrun">
                跑步
                <span></span>
            </router-link>
        </li>
        <li>
            <router-link to="/sport/sportKIT">
                KIT
                <span></span>
            </router-link>
        </li>
        <li>
                瑜伽
                <span></span>
        </li>
        <li>
                行走
                <span></span>
        </li>
        <li>
                骑行
                <span></span>
        </li>
    </ul>
</nav>

</template>

<script>
export default {

}
</script>

<style scoped>

/* nav */

nav{
    width: 100%;
    font-size: 0.93rem;
    overflow: scroll;
}
nav ul{
    width: 110%;
}
nav li{
    width: 13.6%;
    padding: 2% 0 5%;
    text-align: center;
    float: left;
    position: relative;
    color: #9B9B9B;
}
nav li a{
    color: #9B9B9B;
}
nav li span{
    display: inline-block;
    padding: 2% 20%;
    margin-left: 50%;
    background: #584F60;
    position: absolute;
    left: -20%;
    bottom: 0;
    display: none;
}
nav .router-link-active{
    color: #584F60;
}
nav .router-link-active .act span{
    display: block;
}

</style>







