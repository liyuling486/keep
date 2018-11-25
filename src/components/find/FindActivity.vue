<template>
    <div class="act">
        <grey-Header class="grey">
            <span slot="GTit">精选活动</span>
        </grey-Header>
        <ul>
            <li class="item" v-for="(item,index) in actList" :key="index">
                <img :src="item.src" alt="">
                <p class="title">{{item.title}}</p>
                <div class="info">
                    <p class="fl">{{item.des}}</p>
                    <p class="fr">{{item.people}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import GreyHeader from '../common/GreyHeader'
import Axios from 'axios'

export default {
    data(){
        return{
            actList: []
        }
    },
    mounted(){
        Axios.get('/static/data/find.json').then(res => {
            this.actList = res.data.act
        }).catch()
    },
    components:{
        GreyHeader
    }     
    
}
</script>
<style scoped>

.act .item{
    width: 90%;
    padding: 0 5%;
    line-height: 30px;
    margin: 3% 0;
    overflow: hidden;
}
.act .item img{
    width: 100%;
}
.act .item .title{
    font-size: 1rem;
    color: #4F4F4F;
}
.act .item .info{
    font-size: 0.625rem;
    color: #9B9B9B;
}
</style>
