<template>
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
</template>

<script>

    export default {
        props: ['userList'],
        methods: {
        },
        components: {
        }

    }
</script>

<style scoped>

</style>