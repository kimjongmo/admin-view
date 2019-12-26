<template>
    <div class="content-wrapper">
        <!-- Header Component -->
        <section class="content-header">
            <h1>
                사용자 관리
                <small>회원 정보</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> 사용자 관리</a></li>
                <li>회원 관리</li>
                <li class="active">회원 정보</li>
            </ol>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box-header">
                        <h1 class="box-title">유저 상세 정보</h1>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                            <div class="row">
                                <div class="col-sm-6"></div>
                                <div class="col-sm-6"></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <!-- UserList Component -->
                                    <template>
                                        <user-info
                                                @refresh="statusChange()"
                                                :user="user"
                                                :order_group="orderGroupList"/>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 주문 그룹 내역 -->
                    <div class="box-header">
                        <h1 class="box-title">주문 내역</h1>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <div class="dataTables_wrapper form-inline dt-bootstrap">
                            <div class="row">
                                <div class="col-sm-6"></div>
                                <div class="col-sm-6"></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <!-- UserList Component -->
                                    <template>
                                        <order-group-list :order-group-list="orderGroupList"/>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import UserInfo from "./UserInfo";
    import OrderGroupList from "../orderGroup/OrderGroupList";

    export default {
        data() {
            return {
                user: '',
                orderGroupList: ''
            }
        },
        methods: {
            statusChange: function () {
                this.user.status = this.user.status === 'REGISTERED' ? 'UNREGISTERED' : 'REGISTERED';
                this.$http.put('http://localhost:9090/api/user', {
                    'data': this.user
                }).then(response => {
                    if (response.status == 200) {
                        alert('상태 변경 되었습니다.');
                        this.user = response.data.data;
                    } else {
                        alert('오류!!!');
                    }
                }).catch();
            }
        },
        mounted() {
            let id = this.$route.params.id;
            this.$http.get('http://localhost:9090/api/user/' + id + "/orderInfo")
                .then(res => {
                    if (res.data.result_code !== 'OK') {
                        alert('존재하지 않는 유저입니다.');
                        history.back();
                        return;
                    }
                    this.user = res.data.data.user_api_response;
                    this.orderGroupList = this.user.order_group_api_response_list;
                });
        },
        components: {
            UserInfo,
            OrderGroupList
        }
    }
</script>

<style scoped>


</style>