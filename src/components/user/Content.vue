<template>
    <div class="content-wrapper">
        <!-- Header Component -->
        <content-header/>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <h3 class="box-title">결과</h3>
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
                                            <user-list :user-list="userList.data"/>
                                        </template>
                                    </div>
                                </div>
                                <!-- ButtonList Component -->
<!--                                <button-list/>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
    import UserList from "./UserList";
    import ContentHeader from "./Header";

    export default {
        name: "Content",
        data() {
            return {
                userList: ''
            };
        },
        methods: {

        },
        mounted() {
            this.$http.get('http://localhost:9090/api/user?page=0')
                .then(res => this.userList = res.data);
        },
        components: {
            ContentHeader,
            UserList
        }
    }
</script>

<style scoped>

</style>