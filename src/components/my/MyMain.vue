<template>
    
<main>
    <div class="person">
        <div class="msg clearfix">
            <div class="left fl">
                <p class="name">总幻想能环游世界</p>
                <p class="vip">成为Keep会员</p>
            </div>
            <div class="btn fr">
                <a href="#">
                    <img src="images/btn.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="pro"><i></i></div>
        <div class="level">
            <span class="fl">KG.3</span>
            <i class="fr">升级只差 286 成长值</i>
        </div>
    </div>
    <div class="data clearfix">
        <div class="title">我的数据</div>
        <div class="time fl">总运动<i>（分钟）</i><p>1029</p></div>
        <div class="time fl">本周排名<i> 第 1 名</i><p><img src="images/person.jpg" alt=""></p></div>
        <ul class="list clearfix">
            <li>
                <p>今日运动</p>
                <span><i>90 </i>分钟</span>
            </li>
            <li>
                <p>本周目标</p>
                <span><i>5 </i>/ 7天</span>
            </li>
            <li>
                <p>连续运动</p>
                <span><i>99 </i>天</span>
            </li>
            <li>
                <p>今日步数</p>
                <span><i>6590 </i>步</span>
            </li>
        </ul>
    </div>
    <div class="box">
        <ul>
            <li>我的课程</li>
            <li>我的活动<span>打赏你的运动</span></li>
            <li>Keepland</li>
        </ul>
    </div>
    <div class="box">
        <ul>
            <li>我的收藏<span>10</span></li>
            <li>我的会长<span>66</span></li>
            <li>我的智能设备</li>
        </ul>
    </div>
    <div class="box">
        <ul>
            <li>
                <router-link to="/mall/Cart">我的钱包</router-link>
            </li>
            <li>
                <router-link to="/mall/Cart">我的订单</router-link>
            </li>
            <li>
                <router-link to="/mall/Cart">购物车</router-link>
            </li>
        </ul>
    </div>
    <router-view></router-view>
</main>
</template>
<script>
export default {
    
}
</script>
<style>

main{
    background: #FAFAFA;
    margin-bottom: 16%;
}

main .person, main .data, main .box{
    padding: 5%;
    background: #fff;
    overflow: hidden;
    margin-top: 4%;
}

main .person .msg .left{
    width: 64%;
    background: url(../../assets/images/person.jpg) no-repeat;
    background-size: 22%;
    padding-left: 24%;
}

main .person .msg .name{
    font-size: 1rem;
    color: #5B5263;
    margin-bottom: 4%;
}

main .person .msg .vip{
    display: inline-block;
    font-size: 0.75rem;
    background: #333 url(../../assets/images/vip.jpg) no-repeat;
    background-size: 12%;
    background-position: 6% center;
    color: #E0B679;
    border-radius: 16px;
    padding: 0 5% 0 10%;
}

main .person .msg .vip img{
    width: 10%;
}

main .person .msg .btn img{
    width: 50%;
    margin-top: 60%;
    float: right;
}

main .person .pro{
    width: 100%;
    height: 4px;
    background: #F0F0F0;
    margin: 4% 0;
    border-radius: 2px;
    position: relative;
}

main .person .pro i{
    display: inline-block;
    width: 90%;
    height: 4px;
    background: #24C789;
    position: absolute;
    border-radius: 2px;
}

main .person .level span{
    font-size: 1.25rem;
    color: #24C789;
    font-weight: bold
}

main .person .level i{
    color: #6A6A6A;
    font-size: 0.875rem;
    background: url(../../assets/images/btn.jpg) no-repeat;
    background-size: 8%;
    background-position: right center;
    padding-right: 6%;
}

main .data .title{
    color: #333333;
    background: url(../../assets/images/btn.jpg) no-repeat right center;
    background-size: 6%;
    margin-bottom: 2%;
}

main .data .time{
    font-size: 0.75rem;
    color: #6D6D6D;
    width: 50%;
}

main .data .time i{
    color: #9A9A9A;
}

main .data .time p{
    color: #584F60;
    font-size: 2rem;
    margin-top: 6%;
    font-family: serif;
    font-weight: bold;
}

main .data .time img{
    width: 22%;
}

main .list li{
    float: left;
    width: 22.3%;
    margin: 4% 0.5%;
    border-radius: 4px;
    padding-left: 1%;
    box-shadow: 4px 4px 10px #fafafa;
}

main .list li p{
    font-size: 0.75rem;
    color: #333;
}

main .list li span{
    font-size: 0.75rem;
    color: #686868;
}

main .list li i{
    font-size: 1.125rem;
    color: #584F60;
}

main .box{
    margin: 4% 0;
    background: #fff;
}

main .box li{
    color: #333;
    padding: 4% 0;
    border-bottom: 1px solid #F9F9F9;
    background: url(../../assets/images/btn.jpg) no-repeat right center;
    background-size: 6%;
}
main .box li a{
    color: #333;
}

main .box li span{
    float: right;
    font-size: 0.75rem;
    margin-right: 10%;
    color: #999;
}

</style>
