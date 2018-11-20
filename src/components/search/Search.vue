<template>
    <div>
        <div class="search-header">
            <span class="back fl" @click="back()">
                <img src="../../assets/images/sear-header.jpg" alt="">
            </span>
            <input type="text" class="fr" placeholder="大家都在搜【跑步如何正确呼吸】">
        </div>
        <div class="search-main">
            <h4>热门搜索</h4>
            <ul>
                <li v-for="(item,index) in searchList" :key="index">{{item.tit}}</li>
            </ul>
        </div>
    </div>
</template>


<script>
import Axios from 'axios'
export default {
    data(){
        return{
            searchList: []
        }
    },
    mounted(){
        Axios.get('/static/data/search.json').then(res =>{
            this.searchList = res.data.hot
        }).catch()
    },
    methods: {
        back(){
            this.$router.go(-1)
        }
    }
}
</script>


<style scoped>
.search-header {
    padding: 5%;
}
.search-header .back{
    margin-top: 1%;
}
.search-header input{
    width: 80%;
    height: 24px;
    line-height: 24px;
    background: #FAFAFA url(../../assets/images/mall-search.png) no-repeat ;
    background-size: 8%;
    border: 0;
    padding-left: 8%;
    outline: none;
    color: #666;
}

.search-header input::-moz-placeholder { 
    color: #999;
}
.search-header input::-webkit-input-placeholder {
     color:#999;
    }
.search-header input:-ms-input-placeholder { 
    color:#999; 
}
.search-main{
    padding: 5%;
}
.search-main h4{
    font-weight: normal;
    line-height: 40px;
    color: #333;
}
.search-main li{
    font-size: 0.875rem;
    background: #F2F2F2;
    padding: 0.4% 4%;
    margin: 2% 3% 2% 0;
    border-radius: 10px;
    float: left;
}
</style>
