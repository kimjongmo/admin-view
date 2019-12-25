<template>
    <div>
        <!-- Search Bar START -->
        <div id="custom-search-input">
            <div class="input-group col-md-12">
                <input v-on:keyup.enter="userInfo" type="text" v-model="search" class="search-query form-control"
                       placeholder="유저 아이디 검색"/>
                <span class="input-group-btn">
                    <button class="btn btn-danger" type="button"
                            v-on:click="userInfo">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>
                </span>
            </div>
        </div>
        <!-- Search Bar END-->
        <table id="example2" class="table table-bordered table-hover dataTable"
               role="grid" aria-describedby="example2_info">
            <thead>
            <tr role="row">
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">id</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">계정</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">상태</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">e-mail</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">전화번호</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">가입일</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">해지일</th>
            </tr>
            </thead>
            <tbody id="itemList">
            <!--            <template v-for="user in userList">-->
            <template v-for="user in userList">
                <tr role="row" class="odd" :key="user.id" @click="$router.push({name: 'user',params:{id: user.id}})">
                    <td class="text-center">{{user.id}}</td>
                    <td class="text-center">{{user.account}}</td>
                    <td class="text-center">{{user.status==="REGISTERED"?"등록":"해지"}}</td>
                    <td class="text-center">{{user.email}}</td>
                    <td class="text-center">{{user.phone_number}}</td>
                    <td class="text-center">{{user.registered_at}}</td>
                    <td class="text-center">{{user.unregistered_at}}</td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        props: ['userList'],
        components: {},
        data: function () {
            return {
                search: ''
            }
        },
        methods: {
            //TODO : vue-router 로 search 한 id 값 넘겨서 userInfo 로 넘겨주기
            userInfo: function () {
                if (!isNaN(this.search))
                    this.$router.push({name: 'user', params: {id: this.search}});
                else
                    alert('숫자만 입력가능합니다');
            }
        }
    }
</script>

<style scoped>

    #custom-search-input {
        margin: 0;
        margin-top: 10px;
        padding: 0;
    }

    #custom-search-input .search-query {
        padding-right: 3px;
        padding-right: 4px \9;
        padding-left: 3px;
        padding-left: 4px \9;
        /* IE7-8 doesn't have border-radius, so don't indent the padding */

        margin-bottom: 0;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }

    #custom-search-input button {
        border: 0;
        background: none;
        /** belows styles are working good */
        padding: 2px 5px;
        margin-top: 2px;
        position: relative;
        left: -28px;
        /* IE7-8 doesn't have border-radius, so don't indent the padding */
        margin-bottom: 0;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        color: #D9230F;
    }

    .search-query:focus + button {
        z-index: 3;
    }


</style>