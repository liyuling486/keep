<template>
<div class="main">
    <div class="coach">
        <div class="tr">
            <i></i>
            <span>Coach</span>
        </div>
        <div class="td">
            <p class="total">
                <router-link to="/course/record">在 KEEP 已累计运动 ></router-link>
            </p>
            <div class="totalTime fl">
                <i>6.666</i>
                <s>分钟</s>
            </div>
            <div class="totayTime fr">
                <span>今日运动<i> - </i>分钟</span>
            </div>
        </div>
    </div>

    <div class="course">
        <dl>
            <dt class="clearfix">
                <span class="fl">已参加课程</span>
                <router-link to="/course" class="fr"><i>+</i>添加</router-link >
            </dt>
            <dd v-for="(item, index) in courseList.slice(0, 2)" :key="index">
                <div class="courseCon clearfix">
                    <span class="fl">{{item.Name}}</span>
                    <i class="fr">{{item.Time}}</i>
                </div>
                <div class="courseFooter">
                    <span class="fl">{{item.Train}}</span>
                    <span class="fr">已下载</span>
                </div>
            </dd>
        </dl>
        <div class="courseAll">
            <router-link to="/course">查看全部</router-link>
        </div>
    </div>

    <div class="plan">
        <div class="tr">训练计划</div>
        <div class="td">
            <img src="../../assets/images/plan.png" alt="">
            <div class="title">定制减脂 L4 计划<i>会员免费</i></div>
            <span>根据你的评估结果，为你推荐「减脂L4计划」。现在开始规律的训练，你将在4周后见证改变</span>
        </div>
    </div>

    <div class="activity">
        <div class="tr">热门活动</div>
        <div class="td">
            <img src="../../assets/images/activity.png" alt="">
            <div class="title">卡路里狂欢节 - 预热</div>
            <span>运动换钱 | 你的每次运动都值得回报！</span><br />
            <span>10/15 00:00 - 11/08 00:00</span>
        </div>
    </div>

    <div class="training">
        <div class="tr">精选训练营</div>
        <div class="td">
            <ul>
                <li>
                    <div class="con">
                        <img src="../../assets/images/training1.png" alt="">
                    </div>
                    <p class="txt">快分享给你一起约饭的胖友，饭后参加训练营甩肉吧！</p>
                </li>
                <li>
                    <div class="con">
                        <img src="../../assets/images/training1.png" alt="">
                    </div>
                    <p class="txt">快分享给你一起约饭的胖友，饭后参加训练营甩肉吧！</p>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            courseList: []
        }
    },
    mounted(){
        Axios.get('/static/data/course.json').then(res => {
            this.courseList = res.data.course
        })
    }
}

</script>


<style>


/* main */

.main{
    width: 90%;
    background: #FAFAFA;
    padding: 5% 5% 16%;
    overflow: hidden;
}
 .coach .tr i{
    padding: 4% 8%;
    background: url(../../assets/images/logo.png) no-repeat;
    background-size: 60%;
    background-position: center;
}
 .coach .td{
    width: 96%;
    background: #fff;
    margin-top: 4%;
    position: relative;
    border-radius: 6px;
    padding: 2%;
    overflow: hidden;
}
 .coach .td .triangle{
    position: absolute;
    top: -18%;
    left: 5%;
    font-size: 2rem;
    color: #fff;
}
 .coach .td .total{
    color: #584F60;
    font-size: 0.875rem;
}
 .coach .td .totalTime{
    margin-top: 6%;
}
 .coach .td .totalTime i{
    font-size: 1.875rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
 .coach .td .totalTime s{
    font-size: 0.625rem;
}
 .coach .td .totayTime{
    margin-top: 8%;
}
 .coach .td .totayTime span{
    font-size: 0.875rem;
    color: #9B9B9B;
}
 .coach .td .totayTime i{
    color: #24c789;
}

 .course,  .plan,  .activity,  .training{
    background: #fff;
    overflow: scroll;
    margin: 6% 0;
    border-radius: 6px;
    padding: 4% 2%;
}
 .course dt span{
    color: #9B9B9B;
    font-size: 0.875rem;
}
 .course dt a{
    display: inline-block;
    width: 26%;
    background: #24C789;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    font-size: 0.875rem;
}
 .course dt a i{
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1rem;
}
 .course dd{
    padding: 10% 0;
    border-bottom: 1px #EFEFEF solid;
    overflow: hidden;
}
 .course dd .courseCon span{
    font-size: 1.125rem;
    color: #333;
    font-weight: bold;
}
 .course dd .courseCon i{
    font-size: 0.75rem;
    color: #584F60;
}
 .course dd .courseFooter{
    margin-top: 4%;
}
 .course dd .courseFooter span{
    font-size: 0.75rem;

}
 .course .courseAll{
    text-align: center;
    padding: 2% 0;
    background: #fff;
    margin-top: -1px;
}

 .plan img,  .activity img{
    width: 100%;
}
 .plan .tr,  .activity .tr,  .training .tr{
    font-size: 0.875rem;
    margin-bottom: 4%;
}
 .plan .td .title,  .activity .td .title{
    font-size: 1rem;
    color: #333;
    font-weight: bold;
    margin: 2% 0;
}
 .plan .td .title i{
    font-size: 0.625rem;
    display: inline-block;
    width: 20%;
    background: #F1CF8D;
    text-align: center;
    color: #3D3B38;
    border-radius: 4px;
    margin-left: 2%;
    font-weight: normal;
}
 .plan .td span,  .activity .td span,  .training .txt{
    color: #A1A1A1;
    font-size: 0.75rem;
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
}
 .training li img{
    width: 100%;
}


</style>
