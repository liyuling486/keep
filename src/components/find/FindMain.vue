<template>
<div>
    <div class="banner">
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>

    <nav id="nav">
        <ul>
            <li>
                <router-link to="/mall">
                    <img src="../../assets/images/nav1.png" alt="">
                    <span>全部课程</span>
                </router-link>
            </li>
            <li>
                <router-link to="/mall/">
                    <img src="../../assets/images/nav2.png" alt="">
                    <span>活动挑战</span>
                </router-link>
            </li>
            <li>
                <router-link to="/mall">
                    <img src="../../assets/images/nav3.png" alt="">
                    <span>运动商城</span>
                </router-link>
            </li>
            <li>
                <router-link to="/mall">
                    <img src="../../assets/images/nav4.png" alt="">
                    <span>Keepland</span>
                </router-link>
            </li>
            <li>
                <router-link to="/mall">
                    <img src="../../assets/images/nav5.png" alt="">
                    <span>健康饮食</span>
                </router-link>
            </li>
        </ul>
    </nav>
    <div class="today block">
        <div class="left fl">
            <span class="day">Keep 日签</span>
            <p class="time"><i>05 </i> NOV.2018</p>
        </div>
        <div class="right fr">
            <div class="con">喜欢独处并不等于蓄意陷溺在孤独</div>
            <div class="tit">—— 《因为单身的缘故》</div>
        </div>
    </div>

    <main>
        <div class="arc block">
            <div class="tit">一周最热 1个建议，拯救想瘦却总是想吃的你 >></div>
            <img src="../../assets/images/arc.png" alt="">
            <div class="con">我已经吃不下了，但是我还是想吃，怎么办？</div>
            <div class="read">3 万 阅读 · 918收藏</div>
            <div class="person">柴桑</div>
        </div>
        <div class="run block">
            <div class="title">跑步进阶</div>
            <div class="con">
                <ul>
                    <li>
                        <div class="left fl"><img src="../../assets/images/frun1.png" alt=""></div>
                        <div class="right fl">
                            <p class="tit">如何提高自己的跑步里程？</p>
                            <p class="content">567 人觉得有用</p>
                            <p class="foot">里程提升</p>
                        </div>
                    </li>
                    <li>
                        <div class="left fl"><img src="../../assets/images/frun2.png" alt=""></div>
                        <div class="right fl">
                            <p class="tit">想提高速度应该如何改变跑姿？</p>
                            <p class="content">341 人觉得有用</p>
                            <p class="foot">速度提升</p>
                        </div>
                    </li>
                    <li>
                        <div class="left fl"><img src="../../assets/images/frun3.png" alt=""></div>
                        <div class="right fl">
                            <p class="tit">跑前热身</p>
                            <p class="content">515.4万 人参加 · 8 分钟 · K1</p>
                            <p class="foot">训练</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="more">
                查看更多
            </div>
        </div>
        <div class="figure block">
            <div class="title">明明不胖，却身材不好？</div>
            <img src="../../assets/images/figure.png" alt="">
            <div class="con">
                <span>体脂秤告诉你胖在哪里</span>
                <i>￥179</i>
            </div>
        </div>
        <div class="arc block">
            <div class="tit">快走10年，竟看不出她48岁了 ！</div>
            <img src="../../assets/images/arc1.png" alt="">
            <div class="con">中老年也可参考的快走塑身方案</div>
            <div class="read">快走·中老年·塑性</div>
            <div class="person"><img src="../../assets/images/farcPerson1.png" /> 狗狗的心事</div>
        </div>

    </main>

    <router-view></router-view>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
export default {
    components: {
        'swipe': Swipe,
        'swipe-item': SwipeItem
    }
    
}
</script>
<style scoped>

.my-swipe {
  height: 108px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-image: url(../../assets/images/fbanner1.png);
  background-size: 100%;
}

.slide2 {
  background-image: url(../../assets/images/fbanner2.png);
  background-size: 100%;
}

.slide3 {
  background-image: url(../../assets/images/fbanner3.png);
  background-size: 100%;
}
.banner{
    width: 90%;
    padding: 5%;
    background: #fff;
    margin-top: 18%;
}
 
nav{
    width: 90%;
    padding: 0 5% 5%;
    overflow: hidden;
    background: #fff;
}

nav li{
    width: 20%;
    float: left;
    text-align: center;
}

nav li img{
    width: 42px;
}

nav li span{
    font-size: 0.625rem;
    margin-top: 20%;
    color: #666;
}
.block{
    width: 86%;
    margin: 5%;
    padding: 2% 2%;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
}

.today .left{
    border-right: 1px solid #EFEFEF;
    padding-right: 4%;
}

.today .day{
    font-size: 0.75rem;
    color: #666;
    border-left: 6px solid #7695CF;
    padding-left: 4%;
}

.today .time{
    font-family: fantasy;
    margin-top: 20%;
}

.today .time i{
    font-size: 1.875rem;
}

.today .right{
    font-size: 0.75rem;
    width: 56%;
}

.today .right .tit{
    float: right;
}

main{
    margin-bottom: 20%;
}

main .arc img{
    width: 100%;
}


main .arc .tit{
    font-size: 0.875rem;
    color: #333;
    font-weight: bold;
    padding-bottom: 2%;
}

main .arc .con{
    font-size: 0.75rem;
    color: #666;
}

main .arc .read, main .arc .person{
    font-size: 0.625rem;
    color: #9B9B9B;
}

main .arc .person{
    margin-top: 2%;
}

main .arc .person img{
    vertical-align: -4px;
    width: 6%;
}
main .run .title, main .figure .title{
    font-weight: bold;
    color: #333;
    font-size: 1rem;
    margin-bottom: 2%;
}

main .run .con .left{
    width: 26%;
    margin-right: 4%;
}

main .run .con .right{
    width: 70%;
}

main .run .con .left img{
    width: 100%;
}

main .run .con .tit{
    font-weight: bold;
    color: #333;
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

main .run .con .content{
    font-size: 0.75rem;
    color: #6B6B6B;
}

main .run .con .foot{
    font-size: 0.625rem;
    color: #9C9C9C;
}

main .run .con li{
    padding: 4% 0;
    border-bottom: 1px solid #F3F3F3;
    overflow: hidden;
}

main .run .more{
    font-size: 0.875rem;
    color: #584F60;
    text-align: center;
    padding: 4% 0;
}

main .figure img{
    width: 100%;
}

main .figure .con span{
    font-size: 0.75rem;
    color: #666;
    float: left;
}

main .figure .con i{
    font-size: 1.25rem;
    float: right;
    color: #24C789;
}

</style>
