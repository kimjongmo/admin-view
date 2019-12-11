<template>
    <table id="example2" class="table table-bordered table-hover dataTable"
           role="grid" aria-describedby="example2_info">
        <thead>
        <tr role="row">
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">id</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">회사번호</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">상태</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">이름</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">주소</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">전화 번호</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">대표 전화</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">대표자</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">등록일</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">해지일</th>
        </tr>
        </thead>
        <tbody id="itemList">
        <template v-for="partner in partnerList">
            <tr role="row" class="odd" :key="partner.id">
                <td class="text-center">{{partner.id}}</td>
                <td class="text-center">{{partner.business_number}}</td>
                <td class="text-center">{{partner.status=='REGISTERED'?"등록":"미등록"}}</td>
                <td class="text-center">{{partner.name}}</td>
                <td class="text-center">{{partner.address}}</td>
                <td class="text-center">{{partner.call_center}}</td>
                <td class="text-center">{{partner.partner_number}}</td>
                <td class="text-center">{{partner.ceo_name}}</td>
                <td class="text-center">{{partner.registered_at}}</td>
                <td class="text-center">{{partner.unregistered_at}}</td>
            </tr>
        </template>
        </tbody>
    </table>
</template>

<script>

    export default {
        props: ['partnerList'],
        methods: {
        },
        components: {
        }

    }
</script>

<style scoped>

</style>