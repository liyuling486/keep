<template>

<div>
    <div class="mall-header">
        <div class="return" @click="back()">
            <img src="../../assets/images/mall-return.png" class="fl">
        </div>
        <div class="search">
            <img src="../../assets/images/mall-search.png">
            <input type="text" placeholder="搜索优选健康好货">
        </div>
        <div class="user">
            <img src="../../assets/images/mall-user.png" class="fr">
        </div>
    </div>
    <div class="mall-banner">
        <img src="../../assets/images/mall-banner.png">
        <div class="keep-mall">
            <div class="left">
                <p>Keep 商城</p>
                <ul>
                    <li><img src="../../assets/images/keepmall1.png"> 自营品牌 </li>
                    <li><img src="../../assets/images/keepmall2.png"> 课程同款 </li>
                    <li><img src="../../assets/images/keepmall3.png"> 7天无理由退货 </li>
                </ul>
            </div>
            <div class="right">
                <p>51万粉丝</p>
                <div class="btn">关注</div>
            </div>
        </div>
    </div>
    <div class="mall-nav">
        <ul>
            <li>
                <img src="../../assets/images/mall-nav1.png" >
                <p>运动装备</p>
            </li>
            <li>
                <img src="../../assets/images/mall-nav2.png" >
                <p>女子服饰</p>
            </li>
            <li><img src="../../assets/images/mall-nav3.png" >
                <p>男子服饰</p>
            </li>
            <li><img src="../../assets/images/mall-nav4.png" >
                <p>品牌周边</p>
            </li>
            <li><img src="../../assets/images/mall-nav5.png" >
                <p>清仓服饰</p>
            </li>
        </ul>
    </div>
    <div class="classify">
        <div class="new"><img src="../../assets/images/mall-new.png"></div>
        <div class="box">
            <img src="../../assets/images/mall-clssify1.png">
            <img src="../../assets/images/mall-clssify2.png">
            <img src="../../assets/images/mall-clssify3.png">
        </div>
    </div>
    <div class="product">
        <div class="title">人气单品</div>
        <div class="list">
            <ul>
                <li>
                    <img src="../../assets/images/mall-product1.png" alt="">
                    <p class="dt">智能跑步机</p>
                    <p class="dd">专业减震静音</p>
                    <p class="price">￥1798</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product2.png" alt="">
                    <p class="dt">智能体脂机</p>
                    <p class="dd">智能精准 多彩好看</p>
                    <p class="price">￥179</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product3.png" alt="">
                    <p class="dt">加长健身垫</p>
                    <p class="dd">双色双面 加长设计</p>
                    <p class="price">￥79</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product1.png" alt="">
                    <p class="dt">智能跑步机</p>
                    <p class="dd">专业减震静音</p>
                    <p class="price">￥1798</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product2.png" alt="">
                    <p class="dt">智能体脂机</p>
                    <p class="dd">智能精准 多彩好看</p>
                    <p class="price">￥179</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product3.png" alt="">
                    <p class="dt">加长健身垫</p>
                    <p class="dd">双色双面 加长设计</p>
                    <p class="price">￥79</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product1.png" alt="">
                    <p class="dt">智能跑步机</p>
                    <p class="dd">专业减震静音</p>
                    <p class="price">￥1798</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="product">
        <div class="title">男装精选</div>
        <div class="list">
            <ul>
                <li>
                    <img src="../../assets/images/mall-product4.png" alt="">
                    <p class="dt">长袖运动T恤</p>
                    <p class="dd">吸湿排汗 畅快运动</p>
                    <p class="price">￥115</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product5.png" alt="">
                    <p class="dt">时尚连帽卫衣</p>
                    <p class="dd">精选面料 不易起球</p>
                    <p class="price">￥143</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product6.png" alt="">
                    <p class="dt">二合一运动长裤</p>
                    <p class="dd">时尚有型 自由运动</p>
                    <p class="price">￥199</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product4.png" alt="">
                    <p class="dt">长袖运动T恤</p>
                    <p class="dd">吸湿排汗 畅快运动</p>
                    <p class="price">￥115</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product5.png" alt="">
                    <p class="dt">时尚连帽卫衣</p>
                    <p class="dd">精选面料 不易起球</p>
                    <p class="price">￥143</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product6.png" alt="">
                    <p class="dt">二合一运动长裤</p>
                    <p class="dd">时尚有型 自由运动</p>
                    <p class="price">￥199</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product4.png" alt="">
                    <p class="dt">长袖运动T恤</p>
                    <p class="dd">吸湿排汗 畅快运动</p>
                    <p class="price">￥115</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="product">
        <div class="title">女装精选</div>
        <div class="list">
            <ul>
                <li>
                    <img src="../../assets/images/mall-product7.png" alt="">
                    <p class="dt">女子运动内衣</p>
                    <p class="dd">高强支撑 肆意运动</p>
                    <p class="price">￥129</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product8.png" alt="">
                    <p class="dt">高腰印花紧身裤</p>
                    <p class="dd">提臀高腰收小腹</p>
                    <p class="price">￥149</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product9.png" alt="">
                    <p class="dt">女子速干T恤</p>
                    <p class="dd">速干材质 经典外形</p>
                    <p class="price">￥69</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product7.png" alt="">
                    <p class="dt">女子运动内衣</p>
                    <p class="dd">高强支撑 肆意运动</p>
                    <p class="price">￥129</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product8.png" alt="">
                    <p class="dt">高腰印花紧身裤</p>
                    <p class="dd">提臀高腰收小腹</p>
                    <p class="price">￥149</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product9.png" alt="">
                    <p class="dt">女子速干T恤</p>
                    <p class="dd">速干材质 经典外形</p>
                    <p class="price">￥69</p>
                </li>
                <li>
                    <img src="../../assets/images/mall-product7.png" alt="">
                    <p class="dt">女子运动内衣</p>
                    <p class="dd">高强支撑 肆意运动</p>
                    <p class="price">￥129</p>
                </li>
            </ul>
        </div>
    </div>    
    <div class="cart">
        <router-link to="/mall/cart">
        <img src="../../assets/images/cart.png" alt="">
        </router-link>
    </div>
    <router-view></router-view>
</div>    

</template>

<script>

export default {
    mounted(){
        
    },
    methods: {
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
body{
    background: #FAFAFA;
}

.mall-header{
    background: #0DDEA7;
    padding: 2%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 999    ;
}

.mall-header .return img, .mall-header .user img{
    width: 40%;
    margin-top: 4%;
}

.mall-header .search{
    width: 89%;
    background: #FAFAFA;
    border-radius: 2px;
    padding-left: 1%;   
}

.mall-header .search img{
    width: 8%;
}

.mall-header .search input{
    border: 0;
    outline: none;
    background: #FAFAFA;
    color: #666;
}

.mall-header .search input::-moz-placeholder { 
    color: #ccc;
}
.mall-header .search input::-webkit-input-placeholder {
     color:#ccc;
    }
.mall-header .search input:-ms-input-placeholder { 
    color:#ccc; 
}

.mall-banner{
    width: 96%;
    padding: 0 2% 10%;
    background: #0DDEA7;
    position: relative;
    margin-top: 10%;
}

.mall-banner img{
    width: 100%;
}

.mall-banner .keep-mall{
    width: 92%;
    padding: 4% 2%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    box-shadow: 1px 1px 8px #ccc;
    position: absolute;
}

.keep-mall ul{
    width: 110%;
    display: flex;
    font-size: 0.625rem;
}
.keep-mall li{
    margin-right: 1.6%;
}
.keep-mall ul img{
    vertical-align: -12%;
    width: 1rem;
}

.keep-mall .left p{
    font-size: 1.25rem;
    color: #333;
    line-height: 30px;
}

.keep-mall .right p{
    font-size: 0.625rem;
    line-height: 30px;
}

.keep-mall .btn{
    width: 90%;
    margin: 6% auto 0;
    background: #24C789;
    font-size: 0.75rem;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    line-height: 20px;
}

.mall-nav{
    width: 96%;
    padding: 2%;
    padding-top: 20%;
    background: #fff;
}

.mall-nav ul{
    width: 100%;
    display: flex;

}

.mall-nav ul li{
    flex: 1 1 0;
    text-align: center;
    font-size: 0.75rem;
}

.mall-nav li img{
    width: 60%;
}

.classify{
    margin: 4% 0;
    overflow: hidden;
}

.classify .new img{
    width: 100%;
}

.classify .box img{
    width: 50%;
    float: left;
}

.product{
    padding: 2%;
    background: #fff;
    margin-bottom: 4%;
}
.product .list{
    overflow: scroll;
}

.product .title{
    font-size: 1rem;
    color: #333;
    margin-bottom: 4%;
}

.product ul{
    display: flex;
}

.product li{
    flex: 1 1 0;
    margin-right: 1%;
}

.product li img{
    width: 100%;
}

.product li .dt{
    width: 90px;
    font-size: 0.875rem;
    color: #6E6E6E;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.product li .dd{
    width: 90px;
    font-size: 0.625rem;
    color: #9D9D9D;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.product li .price{
    color: #FF5666;
    font-size: 1rem;
}

.cart{
    width: 40px;
    height: 40px;
    background: #0DDEA7;
    border-radius: 40px;
    position: fixed;
    right: 10px;
    bottom: 20px;
}

.cart img{
    width: 70%;
    margin-top: 6px;
    margin-left: 6px;
}
</style>
