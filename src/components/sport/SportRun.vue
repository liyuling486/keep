<template>
    <div class="run">
        <div class="runBox">
            <div class="td">
                <p class="total">
                    <router-link to="/course/record">累计跑步距离 ></router-link>
                </p>
                <div class="totalTime fl">
                    <i>0.72</i>
                    <s>公里</s>
                </div>
                <div class="totayTime fr">
                    <span>等级 R0</span>
                </div>
                <div class="pro fl">
                    <div class="act"></div>
                </div>
            </div>
            <ul class="classify">
                <li class="act">户外跑</li>
                <li>跑步机</li>
                <li>燃脂跑</li>
            </ul>
            <img src="/static/images/run-runbox.png" alt="">
        </div>

        <div class="rec">
            <div class="tr">为你推荐</div>
            <div class="td">
                <ul>
                    <li>
                        <div class="con">
                            <img src="/static/images/run-runBox1.png" alt="">
                        </div>
                        <p class="tit">集步数 免费拿戴森吸尘器</p>
                        <p class="txt">还有多种好礼等你带回家</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="run-list">
            <div class="tr">跑步辅助训练</div>
            <div class="td">
                <ul>
                    <li>
                        <img src="/static/images/run-runBox2.png" alt="">
                    </li>
                    <li>
                        <img src="/static/images/run-runBox3.png" alt="">
                    </li>
                    <li>
                        <img src="/static/images/run-runBox4.png" alt="">
                    </li>
                </ul>
            </div>
        </div>


        <div class="training">
            <div class="tr">为你推荐</div>
            <div class="td">
                <ul>
                    <li>
                        <div class="con">
                            <img src="/static/images/run-runBox5.png" alt="">
                        </div>
                        <p class="tit">感恩有你 | Keep 马拉松</p>
                        <p class="txt">活动结束时间 2018/11/26 23:50</p>
                    </li>
                    <li>
                        <div class="con">
                            <img src="/static/images/run-runBox5.png" alt="">
                        </div>
                        <p class="tit">感恩有你 | Keep 马拉松</p>
                        <p class="txt">活动结束时间 2018/11/26 23:50</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="training">
            <div class="tr">徽章收集控</div>
            <div class="td">
                <ul>
                    <li>
                        <div class="con">
                            <img src="/static/images/run-runBox6.png" alt="">
                        </div>
                        <p class="tit">代表Keep 消灭你们 ！</p>
                        <p class="txt">完成跑步卡路里目标，兑换大徽章</p>
                    </li>
                    <li>
                        <div class="con">
                            <img src="/static/images/run-runBox6.png" alt="">
                        </div>
                        <p class="tit">代表Keep 消灭你们 ！</p>
                        <p class="txt">活动结束时间 2018/11/26 23:50</p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    

}
</script>



<style scoped>
.run{
    margin-bottom: 20%;
}
.runBox .td{
    margin: 0 5%;
    width: 90%;
    background: #fff;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
}
.runBox .td .total{
    color: #584F60;
    font-size: 0.875rem;
}
.runBox .td .totalTime{
    margin-top: 6%;
}
.runBox .td .totalTime i{
    font-size: 1.875rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.runBox .td .totalTime s{
    font-size: 0.625rem;
}
.runBox .td .totayTime{
    margin-top: 8%;
}
.runBox .td .totayTime span{
    font-size: 0.875rem;
    color: #9B9B9B;
}
.runBox .td .pro{
    width: 100%;
    height: 2px;
    background: #F0F0F0;
    margin-top: 4%;
}
.runBox .td .pro .act{
    width: 80%;
    height: 2px;
    background: #71C7AC;
}
.runBox .classify{
    margin: 4% 5%;
    display: flex;
    justify-content: space-around;
}
.runBox .classify .act{
    color: #71C7AC;
}
.runBox img{
    width: 100%;
}
.rec, .run-list, .training{
    width: 90%;
    padding: 5%;
    background: #fff;
}
.rec .tr, .run-list .tr, .training .tr{
    font-size: 0.875rem;
    margin-bottom: 4%;
    color: #333;
}
.rec .txt, .training .txt{
    color: #A1A1A1;
    font-size: 0.75rem;
}
.rec .td{
    width: 100%;
}
 .rec li{
    width: 100%;
    text-align: center;
}
 .rec li img{
    width: 100%;
}

.training ul{
    width: 200%;
}
.training .td{
    width: 100%;
    overflow: scroll;
}
.training li{
    width: 40%;
    float: left;
    margin-right: 2%;
    text-align: center;
}
.training li img{
    width: 100%;
}
.run-list li{
    width: 100%;
    text-align: center;
}
.run-list li img{
    width: 100%;
}
</style>

