<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="row">
                <div class="col-lg-3 col-xs-6">
                    <!-- small box -->
                    <div class="small-box bg-aqua">
                        <div class="inner">
                            <h3>{{orderCnt}}</h3>

                            <p>총 주문 횟수</p>
                        </div>
                        <div class="icon">
                            <i class="fa fa-shopping-cart"></i>
                        </div>
                        <a href="#" class="small-box-footer">
                            More info <i class="fa fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <!-- ./col -->
                <div class="col-lg-3 col-xs-6">
                    <!-- small box -->
                    <div class="small-box bg-green">
                        <div class="inner">
                            <h3>{{userCnt}}</h3>

                            <p>유저 수</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-stats-bars"></i>
                        </div>
                        <a href="#" class="small-box-footer">
                            More info <i class="fa fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <!-- ./col -->
                <div class="col-lg-3 col-xs-6">
                    <!-- small box -->
                    <div class="small-box bg-yellow">
                        <div class="inner">
                            <h3>{{partnerCnt}}</h3>

                            <p>파트너 수</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-person-add"></i>
                        </div>
                        <a href="#" class="small-box-footer">
                            More info <i class="fa fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <!-- ./col -->
                <div class="col-lg-3 col-xs-6">
                    <!-- small box -->
                    <div class="small-box bg-red">
                        <div class="inner">
                            <h3>{{itemCnt}}</h3>

                            <p>상품 갯수</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-pie-graph"></i>
                        </div>
                        <a href="#" class="small-box-footer">
                            More info <i class="fa fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <!-- ./col -->
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "DefaultContent",
        data(){
            return {
                itemCnt: 0,
                userCnt: 0,
                partnerCnt: 0,
                orderCnt: 0
            }
        },
        mounted() {
            this.$http.get('http://localhost:9090/api/default/count')
                .then(res => {
                    let data =res.data.data;
                    this.itemCnt = data.item_cnt;
                    this.userCnt = data.user_cnt;
                    this.partnerCnt = data.partner_cnt;
                    this.orderCnt = data.order_group_cnt;
                })
        }
    }
</script>

<style scoped>

</style>