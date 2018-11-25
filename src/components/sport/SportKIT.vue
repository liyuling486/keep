<template>
    <div class="KIT">
        <div class="KIT-goods">
            <div class="dd">
                <p>跟着跑就对了</p>
                <h3>Keep 跑步机</h3>
                <div class="pic">
                    <img src="/static/images/KIT1.png" alt="">
                </div>
                <div class="bottom">
                    <div class="btn act">连接设备</div>
                    <div class="btn">了解情况</div>
                </div>
            </div>
            <div class="dd">
                <p>要你好看</p>
                <h3>Keep 体脂秤</h3>
                <div class="pic">
                    <img src="/static/images/KIT2.png" alt="">
                </div>
                <div class="bottom">
                    <div class="btn act">绑定设备</div>
                    <div class="btn">了解详情</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
.KIT{
    padding: 5%;
    background: #F9F9F9;
    margin-bottom: 14%;
}
.KIT-goods{
    text-align: center;
    line-height: 30px;
}
.KIT-goods .dd{
    padding: 10% 0;
    background: #fff;
    margin-bottom: 6%;
    border-radius: 10px;
}
.KIT-goods .pic{
    width: 50%;
    margin: 6% auto;
}
.KIT-goods .pic img{
    width: 100%;
}
.KIT-goods .bottom{
    display: flex;
    justify-content: space-around;
}
.KIT-goods .bottom .btn{
    border-radius: 30px;
    padding: 0 6%;
    font-size: 0.75em;
    color: #25C8AB;
    border: 1px solid #25C8AB;
}
.KIT-goods .bottom .btn.act{
    color: #fff;
    background: #25C8AB;

}
</style>





