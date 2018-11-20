<template>
<div>

    <grey-Header>
        <span slot="GTit">购物车</span>
        <span slot="GRight">领劵</span>
    </grey-Header>

    <main>
        <ul>
            <li v-for="(item,index) in cartList" :key="index"  class="goods">
                <input type="checkbox" class="sel fl" :id="index" :checked="item.act">
                <label :for="index" class="fl" @click="select(item)"></label>
                <div class="pic fl">
                    <img :src="item.src" alt="">
                </div>
                <div class="cart-box">
                    <p class="name">{{item.name}}</p>
                    <p class="infor">{{item.infor}}</p>
                    <p class="price">￥{{item.price}}</p>
                    <div class="cart-count fr">
                        <input type="button" value="+" class="add fl" @click="add(item)" />
                        <label class="num fl">{{item.num}}</label>
                        <input type="button" value="-" class="reduce fl" @click="reduce(item, index)" />
                    </div>
                </div>
            </li>
        </ul>
    </main>


    <div class="footer">
        <div class="total fl">
            <input type="checkbox" class="fl" id="myCheckTotal">
            <label for="myCheckTotal" class="fl" @click="checkAll()"></label>
            全选
            <span>总计<i>￥{{sum()}}</i></span>
        </div>
        <div class="res fr">
            结算(0)
        </div>
    </div>  
<router-view></router-view>
</div>    
</template>
<script>
import Axios from 'axios'
import GreyHeader from '../common/GreyHeader'

export default {
    data(){
        return{
            cartList: []
        }
    },
    mounted () {
        Axios.get('/static/data/mall.json').then(res => {
            this.cartList = res.data.cart
            console.log(this.cartList)
        }).catch()
    },
    methods: {
        checkAll(){
            let checkAll = document.getElementById('myCheckTotal');
            this.cartList.forEach(function(val, index){
                val.act = !checkAll.checked;
            })
        },
        add(item){
            item.num ++;
        },
        reduce(item, index) {
            item.num --;
            if(item.num < 1){
                this.cartList.splice(index,1);
            }
        },
        select(item){
            item.act = !item.act;
        },
        sum(){
            let sum = 0;
            this.cartList.forEach(function(val, index){
                if(val.act){
                    sum += val.price * val.num;
                }
            })
            return sum;
        },
        back(){
            this.$router.go(-1)
        }
    },
    components:{
        GreyHeader
    }     
}
</script>
<style scoped>


main{
    background: #FAFAFA;
}

main .goods{
    padding: 5%;
    background: #fff;
    margin-bottom: 4%;
}

main .goods .tit{
    overflow: hidden;
    padding: 0 0 4%;
}


main .goods .tit .name{
    background: #FF5363;
    color: #FFFBFC;
    font-size: 0.625rem;
    padding: 0 2%;
    border-radius: 6px;
    line-height: 20px;
}

main .goods .tit .choose{
    background: url(../../assets/images/choose.jpg) no-repeat right;
    background-size: 16%;
    padding-right: 5%;
    font-size: 0.875rem;
    line-height: 20px;
}

main .goods .sel, .footer .total input{
    display: none;
}
main .goods .sel+label, .footer .total input+label{
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: 1px solid #D5D6DB;
    border-radius: 10px;
    margin-top: 6%;
    z-index: 999;
    position: relative;
}

.footer .total input{
    margin: 2% 8% 0 0 ;
}

main .goods .sel:checked+label, .footer .total input:checked+label{
    background: url(../../assets/images/sel.png) no-repeat;
    background-size: 100%;
    border: 0;
    margin-left: 2px;
}

main .goods .pic{
    width: 20%;
    margin: 0 4%;
}

main .goods .pic img{
    width: 100%;
}

main .goods .cart-box{
    position: relative;
}

main .goods .cart-box .name{
    font-size: 0.875rem;
    color: #434343;
    line-height: 10px;
}

main .goods .cart-box .infor{
    font-size: 0.625rem;
    color: #676767;
}

main .goods .cart-box .price{
    font-size: 1rem;
    color: #24C789;
    font-weight: bold;
}

main .goods .cart-box .cart-count{
    width: 20%;
    position: absolute;
    bottom: 0;
    right: 0;
}

main .goods .cart-box .cart-count .reduce, main .goods .cart-box .cart-count .add{
    background: #D8D8D8;
    color: #fff;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    text-align: center;
    line-height: 18px;
    outline: none;
    border: 0;
}

main .goods .cart-box .cart-count .num{
    width: 20px;
    margin-top: -2px;
    text-align: center;
}

.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    z-index: 1000;
}

.footer .total{
    width: 62%;
    padding: 2% 5%;
    color: #333;
    font-size: 1rem;
}

.footer .total span{
    float: right;
    font-size: 0.75rem;

}

.footer .total span i{
    color: #24C789;
    font-size: 1rem;
}

.footer .total input+label{
    margin: 2% 4% 0 0;
}

.footer .res{
    padding: 3% 5%;
    background: #93C9AF;
    color: #fff;
}




</style>
