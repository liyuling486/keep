<template>
<nav>
    <ul>
        <li class="act">
            <router-link to="/sport">
                首页
                <span></span>
            </router-link>
        </li>
        <li>
            <router-link to="/sport/SportFit">
                健身
                <span></span>
            </router-link>
        </li>
        <li>
            <router-link to="/sport">
                跑步
                <span></span>
            </router-link>
        </li>
        <li>
            <router-link to="/sport">
                KIT
                <span></span>
            </router-link>
        </li>
        <li>
            <router-link to="/sport">
                瑜伽
                <span></span>
            </router-link>
        </li>
        <li>
            <router-link to="/sport">
                行走
                <span></span>
            </router-link>
        </li>
        <li>
            <router-link to="/sport">
                骑行
                <span></span>
            </router-link>
        </li>
    </ul>
</nav>

</template>

<script>
export default {
    mounted(){

        let navs = document.getElementsByTagName('nav')[0].getElementsByTagName('li');

        function myclick(el){
            for(let i=0;i<el.length;i++){
                el[i].onclick = function(){
                    for(let j=0;j<el.length;j++){
                        el[j].className = '';
                    }
                    this.className = 'act';
                }
            }
        }
        myclick(navs);       
    }
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
nav .act span{
    display: block;
}

</style>







