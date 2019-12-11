<template>
    <table id="example2" class="table table-bordered table-hover dataTable"
           role="grid" aria-describedby="example2_info">
        <thead>
        <tr role="row">
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">id</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">상태</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">도착 일자</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">수량</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">금액</th>
        </tr>
        </thead>
        <tbody id="itemList">
        <template v-for="order in orderList">
            <tr role="row" class="odd" :key="order.id">
                <td class="text-center">{{order.id}}</td>
                <td class="text-center">{{order.status=='DELIVERY'?"배송중":(order.status=='COMPLETE'?"배송완료":"준비중")}}</td>
                <td class="text-center">{{order.arrival_date}}</td>
                <td class="text-center">{{order.quantity}}개</td>
                <td class="text-center">{{order.total_price}}원</td>
            </tr>
        </template>
        </tbody>
    </table>
</template>

<script>

    export default {
        props: ['orderList'],
        methods: {
        },
        components: {
        }

    }
</script>

<style scoped>

</style>