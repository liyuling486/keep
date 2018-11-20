<template>
    <div>
        <GreyHeader>
            <span slot="GTit"></span>
            <div slot="GRight">
                <ul class="course-top fl">
                    <li class="act">训练课程</li>
                    <li>Class</li>
                </ul>
                <div class="append fl">添加课程</div>
            </div>
        </GreyHeader>
        <ul class="course-nav">
            <li class="act">全部
                <span></span>
            </li>
            <li>健身
                <span></span>
            </li>
            <li>跑步
                <span></span>
            </li>
            <li>瑜伽
                <span></span>
            </li>
        </ul>
        <ul class="course-main">
            <li v-for="(item, index) in courseList" :key="index">
                <div class="courseCon clearfix">
                    <span class="fl">{{item.Name}}</span>
                    <s v-show="item.Detail">精讲</s>
                    <i class="fr">{{item.Time}}</i>
                </div>
                <div class="courseFooter">
                    <span class="fl">{{item.Train}}</span>
                    <span class="fr" v-show="item.Load">已下载</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import GreyHeader from '../common/GreyHeader'
import Axios from 'axios'

export default {
    components: {
        GreyHeader,
    },
    data(){
        return{
            courseList: []
        }
    },
    mounted(){
        Axios.get('/static/data/course.json').then(res => {
            this.courseList = res.data.course
        }).catch()
    }
}
</script>

<style scoped>

.course-top {
    width: 200px;
}

.course-top li{
    width: 100px;
    font-size: 1.125rem;
    color: #AAA5AE;
    text-align: center;
    float: left;
}
.course-top li.act{
    color: #fff;
}
.append{
    font-size: 0.875rem;
    color: #26C287;
}

.course-nav{
    display: flex;
    justify-content: space-around;
}
.course-nav li{
    line-height: 40px;
    color: #9A9A9A;
    font-size: 0.875rem;
}
.course-nav li span{
    width: 16px;
    height: 2px;
    background: #625A6A;
    margin: 0 auto;
}
.course-nav li.act{
    color: #584F60;
}
.course-nav li.act span{
    display: block;
}

.course-main li{
    padding: 4% 5%;
    border-top: 1px #FBFBFB solid;
    overflow: hidden;
}
.course-main li .courseCon span{
    font-size: 1.125rem;
    color: #555;
    font-weight: 600;
}
.course-main li .courseCon i{
    font-size: 0.75rem;
    color: #584F60;
}
.course-main li .courseCon s{
    font-size: 0.5rem;
    background: #F1CF8D;
    border-radius: 4px;
    margin-left: 2%;
    font-family: 黑体;
    padding: 0.6% 1%;
}
.course-main li .courseFooter{
    margin-top: 4%;
}
.course-main li .courseFooter span{
    font-size: 0.75rem;

}

</style>
