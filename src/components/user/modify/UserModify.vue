<template>
    <div class="content-wrapper">
        <!-- Header Start -->
        <content-header :tab-list="tabList"/>
        <!-- Header End -->

        <!-- Content Start -->
        <section class="content">
            <div>
                <h2>정보 수정</h2>
                <form class="form-horizontal">
                    <div class="form-group col-xs-4">
                        <label>Account</label>
                        <input type="text" v-model="user.account" class="form-control">
                    </div>
                    <div class="form-group col-xs-4">
                        <label>Phone</label>
                        <input type="text" v-model="user.phone_number" class="form-control">
                    </div>
                    <div class="form-group col-xs-4">
                        <label>Email</label>
                        <input type="email" v-model="user.email" class="form-control">
                    </div>
                    <div class="form-group col-xs-4">
                        <label>Status</label>
                        <input type="text" v-model="user.status" class="form-control" readonly>
                    </div>
                    <div class="form-group col-xs-4">
                        <label>Register Date</label>
                        <input class="form-control" type="text" v-model="user.registered_at" readonly>
                    </div>
                    <div class="form-group col-xs-4">
                        <label>Unregister Date</label>
                        <input class="form-control" type="text" v-model="user.unregistered_at" readonly>
                    </div>
                </form>
            </div>
        </section>
        <!-- Content End -->
        <button class="btn-app" @click="modify()">정보 수정</button>
        <button class="btn-app" @click="cancel()">취 소</button>
    </div>
</template>

<script>
    import ContentHeader from "../../common/ContentHeader";
    import {eventBus} from "../../../main";
    export default {
        name: "UserModify",
        data() {
            return {
                user: '',
                tabList: [
                    {title:'사용자 관리',name:'',href:'',selected:false},
                    {title:'회원 리스트',name:'users',href:'',selected:false},
                    {title:'회원 정보',name:'user',href:this.$route.params.id,selected:false},
                    {title:'수정',name:'',href:'',selected:true},
                ]
            }
        },
        mounted() {
            let id = this.$route.params.id;
            this.$http.get('http://localhost:9090/api/user/' + id)
                .then(res => {
                    this.user = res.data.data;
                });
        },
        methods: {
            modify: function () {
                this.$http.put('http://localhost:9090/api/user', {
                    'data': this.user
                }).then(response => {
                    if (response.status == 200) {
                        this.$router.push({name: 'user',params:{id: this.user.id}})
                    }
                }).catch();
            },
            cancel: function () {
                this.$router.push({name: 'user',params:{id: this.user.id}})
            }
        },
        created(){
            eventBus.$emit('setSelectedName','users');
        },
        components: {
            ContentHeader
        }
    }
</script>

<style scoped>
</style>