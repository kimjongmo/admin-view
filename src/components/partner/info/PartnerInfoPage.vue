<template>
    <div class="content-wrapper">
        <!-- HEADER START-->
        <section class="content-header">
            <h1>
                파트너사 관리
                <small>파트너 정보</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i>파트너사 관리</a></li>
                <li class="active">파트너 정보</li>
            </ol>
        </section>
        <!-- HEADER END-->

        <section class="content">
            <div class="box-body">
                <table class="table table-bordered success">
                    <thead>
                    <tr>
                        <th>회사 고유번호</th>
                        <td>{{partner.business_number}}</td>
                    </tr>
                    <tr>
                        <th>파트너사 이름</th>
                        <td>{{partner.name}}</td>
                    </tr>
                    <tr>
                        <th>주소</th>
                        <td>{{partner.address}}</td>
                    </tr>
                    <tr>
                        <th>대표 이름</th>
                        <td>{{partner.ceo_name}}</td>
                    </tr>
                    <tr>
                        <th>대표 번호</th>
                        <td>{{partner.partner_number}}</td>
                    </tr>
                    <tr>
                        <th>회사 전화번호</th>
                        <td>{{partner.call_center}}</td>
                    </tr>
                    <tr>
                        <th>등록 상태</th>
                        <td>{{partner.status==='REGISTERED'?'등록':'해지'}}</td>
                    </tr>
                    <tr>
                        <th>등록 날짜</th>
                        <td>{{dateFormat(partner.registered_at)}}</td>
                    </tr>
                    <tr v-if="partner.unregistered_at">
                        <th>등록 해지 날짜</th>
                        <td>{{dateFormat(partner.unregistered_at)}}</td>
                    </tr>
                    </thead>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
    import {eventBus} from "../../../main";
    export default {
        name: "PartnerInfoPage",
        data: function () {
            return {
                partner: ''
            }
        },
        methods: {
            dateFormat: function (date) {
                if (typeof date === 'string')
                    return date.replace('T', ' ');
                return date;
            }
        },
        created() {
            let partnerId = this.$route.params.id;
            this.$http.get('http://localhost:9090/api/partner/' + partnerId)
                .then(result => {
                    if (result.data.result_code === 'ERROR') {
                        alert('데이터가 존재하지 않습니다.');
                    } else {
                        this.partner = result.data.data;
                    }
                }).catch();


            /* 카테고리 선택 활성화*/
            eventBus.$emit('setSelectedName','partners');
        }
    }
</script>

<style scoped>

</style>