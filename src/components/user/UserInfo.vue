<template>
    <!-- UserInfo START -->
    <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                     style="border-radius: 16px;">
                    <div class="well profile col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                            <figure>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyNvK8gpQfbB1WRWirt7BhxZgNod0CPF-cBnKOkwM312IzVFA4    "
                                     alt="" class="img-circle"
                                     style="width:75px;" id="user-img">
                            </figure>
                            <h5 style="text-align:center;"><strong
                                    id="user-name"><strong>UserID: </strong>{{user.id}}</strong>
                            </h5>
                            <p style="text-align:center;font-size: smaller;"
                               id="user-frid"><strong>Account: </strong>{{user.account}} </p>
                            <p style="text-align:center;font-size: smaller;"><strong>Phone: </strong>{{user.phone_number}}
                            </p>
                            <p style="text-align:center;font-size: smaller;overflow-wrap: break-word;" id="user-email">
                                <strong>Email: </strong>
                                {{user.email}} </p>
                            <p style="text-align:center;font-size: smaller;">
                                <strong>Status: </strong>
                                <span v-if="user.status==='REGISTERED'" class="tags">Active</span>
                                <span v-else class="tags">NonActive</span>
                            </p>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 divider text-center"></div>
                            <p style="text-align:center;font-size: smaller;">
                                <strong>Register Date</strong></p>
                            <p style="text-align:center;font-size: smaller;"
                               id="user-role">{{user.registered_at}}</p>
                            <p v-if="user.unregistered_at" style="text-align:center;font-size: smaller;">
                                <strong>Unregister Date</strong></p>
                            <p v-if="user.unregistered_at" style="text-align:center;font-size: smaller;"
                            >{{user.unregistered_at}}</p>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 divider text-center"></div>
                            <div class="col-lg-6 left"
                                 style="text-align:center;overflow-wrap: break-word;">
                                <h4><p style="text-align: center;"><strong
                                        id="user-globe-rank">{{AllOrderCount()}} </strong></p>
                                </h4>
                                <p><small class="label label-success">요청 주문 횟수</small></p>
                                <!--<button class="btn btn-success btn-block"><span class="fa fa-plus-circle"></span> Follow </button>-->
                            </div>
                            <div class=" col-lg-6 left"
                                 style="text-align:center;overflow-wrap: break-word;">
                                <h4><p style="text-align: center;"><strong
                                        id="user-college-rank">{{CompletedOrderCount()}}</strong></p>
                                </h4>
                                <p><small class="label label-warning">완료된 주문 수</small></p>
                                <!-- <button class="btn btn-info btn-block"><span class="fa fa-user"></span> View Profile </button>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn-app" @click="$router.push({name: 'userModify',params:{id: user.id}})">정보 수정</button>
        <button class="btn-app" @click="statusChange()">{{user.status==='REGISTERED'?'비활성화':'활성화'}}</button>
    </div>
    <!-- UserInfo END -->
</template>

<script>
    export default {
        props: ['user','order_group'],
        name: "UserInfo",
        data: function () {
            return {
            }
        },
        methods: {
            statusChange : function(){
                this.$emit('refresh');
            },
            "AllOrderCount": function () {
                return this.order_group.length;
            },
            "CompletedOrderCount": function () {
                let len = 0;
                for(let i = 0;i<this.order_group.length;i++){
                    if(this.order_group[i].status == 'COMPLETE')
                        len++;
                }
                return len;
            },
        }
    }
</script>

<style scoped>
    @import url(http://fonts.googleapis.com/css?family=Lato:400,700);

    .profile {
        font-family: 'Lato', 'sans-serif';
    }

    .profile {
        /*    height: 321px;
            width: 265px;*/
        margin-top: 2px;
        padding: 1px;
        display: inline-block;
    }

    .divider {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    .emphasis {
        border-top: 1px solid transparent;
    }

    .emphasis h2 {
        margin-bottom: 0;
    }

    span.tags {
        background: #1abc9c;
        border-radius: 2px;
        color: #f5f5f5;
        font-weight: bold;
        padding: 2px 4px;
    }

    .profile strong, span, div {
        text-transform: initial;
    }
</style>