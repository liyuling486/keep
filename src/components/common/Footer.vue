<template>
    <ul class="footer" id="footer">
        <li>
            <router-link to="/sport">
                <img src="../../assets/images/footer1.jpg" alt="" class="a">
                <img src="../../assets/images/footer1-1.jpg" alt="" class="b">
                运动</router-link>
        </li>
        <li>
            <router-link to="/find">
                <img src="../../assets/images/footer2.jpg" alt="" class="a">
                <img src="../../assets/images/footer2-1.jpg" alt="" class="b">
                发现
            </router-link>
        </li>
        <li>
            <router-link to="/community">
                <img src="../../assets/images/footer3.jpg" alt="" class="a">
                <img src="../../assets/images/footer3-1.png" alt="" class="b">
                社区
            </router-link>
        </li>
        <li>
            <router-link to="/my">
                <img src="../../assets/images/footer4.jpg" alt="" class="a">
                <img src="../../assets/images/footer4-1.jpg" alt="" class="b">
                &nbsp;&nbsp;我&nbsp;
            </router-link>
        </li>
    </ul>
</template>


<script>
export default {

    
}
</script>


<style scoped>
.router-link-active .a{
    display: none;
}
.router-link-active .b{
    display: block;
    padding-bottom: 16%;
}
.b{
    display: none;
}
.footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    background: #fff;
    border-top: 1px #ddd solid;
    display: flex;
    justify-content: space-around;
}

.footer li{
    margin: 2% 8.5% 0;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
}
.footer li img{
    width: 30px;
}

.footer li a{
    color: #666;
}


</style>
