<template>
    <div>
        <grey-header></grey-header>
        <div class="record-main clearfix">
            <h4 class="title">我的数据</h4>
            <div class="record-time">
                <div class="title">
                    累计运动时长
                    <div class="right fr">运动历史 ></div>
                </div>
                <div class="time"><span>1029 </span>分钟</div>
                <ul class="info">
                    <li>
                        <p class="des">消耗(千卡)</p>
                        <p class="num">3863</p>
                    </li>
                    <li>
                        <p class="des">累计(天)</p>
                        <p class="num">66</p>
                    </li>
                    <li>
                        <p class="des">连续(天)</p>
                        <p class="num">50</p>
                    </li>
                </ul>
            </div>
            <div class="record-fit">
                <div class="name">
                    <img src="/static/images/record-name1.jpg" alt="">
                    健身
                </div>
                <p class="count"><span>898 </span>分钟</p>
                <p class="info">累计消耗</p>
                <p class="count"><span>3495 </span>千卡</p>
            </div>
            <div class="record-walk record-box">
                <div class="name">
                    <img src="/static/images/record-name2.jpg" alt="">
                    行走
                </div>
                <p class="count"><span>2.74 </span>公里</p>
            </div>
            <div class="record-yoga record-box">
                <div class="name">
                    <img src="/static/images/record-name3.jpg" alt="">
                    瑜伽
                </div>
                <p class="count"><span>62 </span>分钟</p>
            </div>
            <div class="record-run record-box">
                <div class="name">
                    <img src="/static/images/record-name4.jpg" alt="">
                    跑步
                </div>
                <p class="count"><span>0.72 </span>公里</p>
            </div>
            <div class="record-cycling record-box">
                <div class="name">
                    <img src="/static/images/record-name5.jpg" alt="">
                    骑行
                </div>
                <p class="count"><span>0.0 </span>公里</p>
            </div>
            <div class="record-goal">
                <div class="title clearfix">
                    <div class="left fl">
                        <p class="goal-week">每周目标</p>
                        <p class="goal-time">目标 7 天，每天 30 分钟</p>
                    </div>
                    <div class="right fr">调整目标</div>
                </div>
                <ul class="week">
                    <li>
                        <div class="min">50</div>
                        <div class="day">周二</div>
                    </li>
                    <li>
                        <div class="min">11</div>
                        <div class="day">周三</div>
                    </li>
                    <li>
                        <div class="min">98</div>
                        <div class="day">周四</div>
                    </li>
                    <li>
                        <div class="min">55</div>
                        <div class="day">周五</div>
                    </li>
                    <li>
                        <div class="min">39</div>
                        <div class="day">周六</div>
                    </li>
                    <li>
                        <div class="min">21</div>
                        <div class="day">周日</div>
                    </li>
                    <li>
                        <div class="min">83</div>
                        <div class="day">周一</div>
                    </li>
                </ul>
            </div>
            <div class="record-today record-list">
                <div class="title">
                    <img src="/static/images/record-list1.jpg" alt="">
                    今日步数
                </div>
                <p class="left"><span>1782 </span>步</p>
                <div class="right fr">+</div>
            </div>
            <div class="record-pow record-list">
                <div class="title">
                    <img src="/static/images/record-list2.jpg" alt="">
                    运动能力
                </div>
                <p class="left">还没有总评分，来测一测</p>
                <div class="right fr">+</div>
            </div>
            <div class="record-data record-list clearfix">
                <div class="title">
                    <img src="/static/images/record-list3.jpg" alt="">
                    身体数据
                </div>
                <ul class="body">
                    <li>
                        <span>57.0 </span>体重(kg) 
                    </li>
                    <li>
                        <span> 22.3 </span>BMI 
                    </li>
                    <li>
                        <span> 160.0 </span>身高(cm) 
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import GreyHeader from '../common/GreyHeader'
export default {
    components: {
        GreyHeader
    }
}
</script>

<style scoped>
.record-main{
    background: #584F60;
    padding: 0 5%;
}
.record-main h4{
    color: #fff;
    font-weight: 500;
    line-height: 50px;
}
.record-main .record-time{
    background: #fff;
    border-radius: 6px;
    padding: 5%;
    margin-bottom: 5%;
}
.record-main .record-time .title{
    color: #645B6B;
    font-size: 0.875rem;
    line-height: 30px;
}
.record-main .record-time .title .right{
    color: #ABA7AF;
}
.record-main .record-time .time{
    font-size: 0.625rem;
    color: #9E9E9E;
    margin: 4% 0;
}
.record-main .record-time .time span{
    font-size: 2rem;
    font-family: serif;
    font-weight: 600;
    color: #584F60;
}
.record-main .record-time .info{
    display: flex;
    justify-content: space-between
}
.record-main .record-time .info .des{
    font-size: 0.75rem;
    color: #9E9E9E;
}
.record-main .record-time .info .num{
    color: #584F60;
    font-size: 1rem;
}

.record-main .record-fit {
    width: 37%;
    background: #7695CF;
    padding: 5%;
    border-radius: 6px;
    float: left;
    margin-right: 5%;
}
.record-main .record-fit .name{
    color: #fff;
}
.record-main .record-fit .count{
    color: #B8C9E6;
}
.record-main .record-fit .count span{
    color: #fff;
}
.record-main .record-fit .info{
    font-size: 0.875rem;
    color: #FAFBFD;
    padding-top: 50%;
}

.record-main .record-box{
    width: 37%;
    background: #fff;
    border-radius: 6px;
    padding: 5%;
    float: left;
    margin-bottom: 5%;
}
.record-main .name{
    color: #615969;
    font-size: 0.875rem;
    margin-bottom: 10%;
}
.record-main .name img{
    width: 20%;
    vertical-align: -24%;
    margin-right: 6%;
}
.record-main .count{
    color: #A0A0A0;
    font-size: 0.625rem;
    line-height: 40px;
}
.record-main .count span{
    color: #584F60;
    font-size: 1.5rem;
}
.record-main .record-cycling{
    margin-left: 5%;
}
.record-main .record-goal{
    width: 90%;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    padding: 5%;
    margin-bottom: 5%;
}
.record-main .record-goal .title .right{
    background: #24C789;
    font-size: 0.875rem;
    color: #fff;
    border-radius: 20px;
    padding: 1% 3%;
    margin-top: 4%;
}
.record-main .record-goal .title .left .goal-week{
    font-size: 0.875rem;
    color: #5B5263;
    line-height: 30px;
}
.record-main .record-goal .title .left .goal-time{
    font-size: 0.75rem;
    line-height: 30px;
}
.record-main .record-goal .week{
    margin-top: 6%;
    display: flex;
    justify-content: space-between;
}
.record-main .record-goal .week li{
    float: left;
}
.record-main .record-goal .week .min{
    width: 30px;
    height: 30px;
    border-radius: 30px;
    border: 1px solid #eee;
    font-size: 0.625rem;
    line-height: 30px;
    text-align: center;
    color: #bbb;
}
.record-main .record-goal .week .day{
    color: #666;
    font-size: 0.75rem;
    margin-top: 2%;
}

.record-main .record-list{
    width: 90%;
    padding: 5%;
    background: #71C7AC;
    border-radius: 6px;
    color: #EEF8F5;
    font-size: 1rem;
    margin-bottom: 5%;
}
.record-main .record-list .title img{
    vertical-align: -30%;
    margin-right: 4%;
}
.record-main .record-list .left{
    display: inline-block;
    color: #A9DDCD;
    font-size: 0.875rem;
    margin-top: 10%;
}
.record-main .record-list .left span{
    font-size: 1.5rem;
    color: #fff;
}
.record-main .record-list .right{
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 4px solid #fff;
    border-radius: 40px;
    font-size: 2.5rem;
    line-height: 34px;
    text-align: center;
}
.record-main .record-pow{
    background: #7876CF;
}
.record-main .record-data{
    background: #fff;
}
.record-main .record-data .title{
    color: #635B6A;
    margin-bottom: 8%;
}
.record-main .record-data li{
    float: left;
    color: #A8A8A8;
    font-size: 0.75rem;
    margin-right: 2%;
}
.record-main .record-data li span{
    font-size: 1rem;
    color: #635B6A;
}
</style>
