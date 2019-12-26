<template>
    <table id="example2" class="table table-bordered table-hover dataTable"
           role="grid" aria-describedby="example2_info">
        <thead>
        <tr role="row">
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">id</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">상태</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">이름</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">가격</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">브랜드</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">등록일</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">해지일</th>
        </tr>
        </thead>
        <tbody id="itemList">
        <template v-for="item in itemList">
            <tr role="row" class="odd" :key="item.id" @click="$router.push({name: 'itemInfo',params:{id: item.id}})">
                <td class="text-center">{{item.id}}</td>
                <td class="text-center">{{item.status=='REGISTERED'?"등록":"미등록"}}</td>
                <td class="text-center">{{item.name}}</td>
                <td class="text-center">{{item.price}}원</td>
                <td class="text-center">{{item.brand_name}}</td>
                <td class="text-center">{{item.registered_at}}</td>
                <td class="text-center">{{item.unregistered_at}}</td>
            </tr>
        </template>
        </tbody>
    </table>
</template>

<script>

    export default {
        props: ['itemList'],
        methods: {
        },
        components: {
        }

    }
</script>

<style scoped>

</style>