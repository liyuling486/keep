<template>
    <main>
        <ul class="com-list">
            <li v-for="(item,index) in list" :key="index">
                <div class="pic">
                    <img :src="item.pic">
                </div>
                <div class="info">{{item.info}}</div>
                <div class="user">
                    <i>
                        <img :src="item.nImg">
                    </i>
                    <p>{{item.nName}}</p>
                    <span>{{item.num}}</span>
                </div>
            </li>
        </ul>
    </main>
</template>
<script>
import Axios from 'axios'

export default {
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        Axios.get('/static/data/community.json').then(res => {
            this.list = res.data.state
            console.log(res)
        })
    }
}
</script>
<style>
.com-list{
    padding: 5% 5% 20%;
	column-count: 2;
}
.com-list li{
    display: inline-block;
    margin-bottom: 2%;
}
li .pic img{
    width: 100%;
}
.com-list .info{
    font-size: 0.875rem;
    color: #3c3c3c;
    overflow: hidden;
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; 
}
.com-list .user{
    display: flex;
    justify-content: space-between;
}
.com-list .user i{
    width: 20%;
}
.com-list .user i img{
    width: 100%;
}
.com-list .user p{
    font-size: 0.625rem;
    line-height: 30px;
    overflow:hidden; 
}
.com-list .user span{
    font-size: 0.625rem;
    background: url(/static/images/communityHorn.png) no-repeat left center;
    background-size: 50%;
    padding-left: 10%;
    line-height: 30px;
}
</style>
