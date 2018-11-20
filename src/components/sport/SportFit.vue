<template>
<div class="fitMain">
    <div class="fitTime">
        <span class="tit">累计健身时长</span>
        <div class="num">
            <p class="left fl"><span>898</span> 分钟</p>
            <p class="right fr">等级 W6</p>
        </div>
        <div class="pro">
            <div class="act"></div>
        </div>
        <div class="nearby">刚刚有
            <span> 28 </span>人正在附近训练
        </div>
    </div>
    
    <div class="course">
        <dl>
            <dt class="clearfix">
                <span class="fl">我的健身训练</span>
                <router-link to="/course" class="fr"><i>+</i>添加</router-link >
            </dt>
            <dd v-for="(item, index) in courseList.slice(0, 5)" :key="index">
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

    <div class="training">
        <div class="tr">为你推荐的课程</div>
        <div class="td">
            <ul>
                <li v-for="(val, index) in trainingList.slice(0,4)" :key="index">
                    <div class="con">
                        <img :src="val.src" alt="">
                    </div>
                    <p class="tit">{{val.tit}}</p>
                    <p class="txt">{{val.text}}</p>
                </li>
            </ul>
        </div>
    </div>

    <div class="training act">
        <div class="tr">动作训练区</div>
        <div class="td">
            <ul>
                <li v-for="(val, index) in actList" :key="index">
                    <div class="con">
                        <img :src="val.src" alt="">
                    </div>
                </li>
            </ul>
        </div>
        <p class="more"><router-link to="/course">查看更多</router-link></p>
    </div>
    
    <div class="training actLib">
        <div class="tr">动作库</div>
        <div class="td">
            <ul>
                <li v-for="(val, index) in actLibList" :key="index">
                    <div class="con">
                        <img :src="val.src" alt="">
                    </div>
                    <p class="txt">{{val.txt}}</p>
                </li>
            </ul>
        </div>
    </div>

    
    <div class="training">
        <div class="tr">发现更多【女生】专属课程</div>
        <div class="td">
            <ul>
                <li v-for="(val, index) in trainingList.slice(4,8)" :key="index">
                    <div class="con">
                        <img :src="val.src" alt="">
                    </div>
                    <p class="tit">{{val.tit}}</p>
                    <p class="txt">{{val.text}}</p>
                </li>
            </ul>
        </div>
    </div>


    <div class="training">
        <div class="tr">这些课程适合【零基础】的你</div>
        <div class="td">
            <ul>
                <li v-for="(val, index) in trainingList.slice(9,12)" :key="index">
                    <div class="con">
                        <img :src="val.src" alt="">
                    </div>
                    <p class="tit">{{val.tit}}</p>
                    <p class="txt">{{val.text}}</p>
                </li>
            </ul>
        </div>
    </div>


    <div class="training">
        <div class="tr">发现更多【学生宿舍】课程</div>
        <div class="td">
            <ul>
                <li v-for="(val, index) in trainingList.slice(10,14)" :key="index">
                    <div class="con">
                        <img :src="val.src" alt="">
                    </div>
                    <p class="tit">{{val.tit}}</p>
                    <p class="txt">{{val.text}}</p>
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
            courseList: [],
            trainingList: [],
            actList: [],
            actLibList: []
        }
    },
    mounted(){
        Axios.get('/static/data/course.json').then(res => {
            this.courseList = res.data.course
            this.trainingList = res.data.more
            this.actList = res.data.act
            this.actLibList = res.data.actLib
        })
    }
}
</script>



<style scoped>
.fitMain{
    background: #FAFAFA;
    margin-bottom: 20%;
}
.fitTime{
    width: 90%;
    padding: 3% 5%;
    margin-bottom: 5%;
    background: #fff;
}
.fitTime .tit{
    font-size: 0.875rem;
    color: #333;
}
.fitTime .num{
    margin: 6% 0;
    font-size: 0.875rem;
    color: #9A9A9A;
    position: relative;
    overflow: hidden;
}
.fitTime .num .left{
    color: #5A5161;
}
.fitTime .num .left span{
    font-size: 2rem;
    font-family: serif;
    font-weight: 600;
}
.fitTime .num .right{
    position: absolute;
    right: 0;
    bottom: 0;
}
.fitTime .pro{
    width: 100%;
    height: 3px;
    background: #EBEBEB;
    position: relative;
}
.fitTime .pro .act{
    width: 60%;
    height: 3px;
    background: #584F60;
}
.fitTime .nearby{
    color: #666;
    line-height: 50px;
}
.fitTime .nearby span{
    color: #34CB92;
}

.course{
    background: #fff;
    overflow: scroll;
    margin: 6% 0;
    border-radius: 6px;
    padding: 4% 5%;
}
 .course dt span{
    color: #353535;
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
    padding: 5% 0;
    border-bottom: 1px #EFEFEF solid;
    overflow: hidden;
}
 .course dd .courseCon span{
    font-size: 1rem;
    color: #333;
    font-weight: 500;
}
 .course dd .courseCon i{
    font-size: 0.75rem;
    color: #584F60;
}
 .course dd .courseFooter{
    margin-top: 2%;
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
.training {
    width: 90%;
    overflow: hidden;
    padding: 5%;
    background: #fff;
    margin-bottom: 5%;
}
.training .tr{
    font-size: 0.875rem;
    margin-bottom: 4%;
    color: #333;
}
.training .txt{
    color: #A1A1A1;
    font-size: 0.75rem;
}
.training .td{
    width: 100%;
    overflow: scroll;
}
 .training ul{
    width: 300%;
}
 .training li{
    width: 24%;
    float: left;
    margin-right: 1%;
    text-align: center;
}
 .training li .con img{
    width: 100%;
}
.act li{
    width: 10%;
}
.act .more{
    text-align: center;
    font-size: 1rem;
    line-height: 40px;
    color: #655C6C;
}
.actLib li{
    width: 8%;
}
</style>
