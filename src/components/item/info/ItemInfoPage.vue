<template>
    <div class="content-wrapper">
        <!-- HEADER START-->
        <section class="content-header">
            <h1>
                아이템 관리
                <small>상품 정보</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> 아이템 관리</a></li>
                <li class="active">상품 정보</li>
            </ol>
        </section>
        <!-- HEADER END-->

        <section class="content">
            <div class="box-body">
                <table class="table table-bordered success">
                    <thead>
                    <tr>
                        <th>상품 명</th>
                        <td>{{item.name}}</td>
                    </tr>
                    <tr>
                        <th>요약</th>
                        <td>{{item.title}}</td>
                    </tr>
                    <tr>
                        <th>설명</th>
                        <td>{{item.content}}</td>
                    </tr>
                    <tr>
                        <th>가격</th>
                        <td>{{item.price}}</td>
                    </tr>

                    <tr>
                        <th>브랜드 명</th>
                        <td>{{item.brand_name}}</td>
                    </tr>
                    <tr>
                        <th>등록 상태</th>
                        <td>{{item.status==='REGISTERED'?'등록':'해지'}}</td>
                    </tr>
                    <tr>
                        <th>등록 날짜</th>
                        <td>{{dateFormat(item.registered_at)}}</td>
                    </tr>
                    <tr v-if="item.unregistered_at">
                        <th>등록 해지 날짜</th>
                        <td>{{dateFormat(item.unregistered_at)}}</td>
                    </tr>
                    <button class="btn-app" @click="gotoPartnerInfo(item.partner_id)">파트너사 정보 보러가기</button>
                    <button class="btn-app" @click="historyBack()">뒤로 가기</button>
                    </thead>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
    import {eventBus} from "../../../main";

    export default {
        name: "ItemInfo",
        data: function () {
            return {
                item: ''
            }
        },
        methods: {
            dateFormat: function (date) {
                if (typeof date === 'string')
                    return date.replace('T', ' ');
                return date;
            },
            historyBack: function () {
                history.back();
            },
            gotoPartnerInfo: function (partner_id) {
                this.$router.push({name: 'partnerInfo',params: {id: partner_id}});
            }
        },
        created() {
            let itemId = this.$route.params.id;
            this.$http.get('http://localhost:9090/api/item/' + itemId)
                .then(result => {
                    if (result.data.result_code === 'ERROR') {
                        alert('데이터가 존재하지 않습니다.');
                    } else {
                        this.item = result.data.data;
                    }
                }).catch();

            /* 카테고리 선택 활성화*/
            eventBus.$emit('setSelectedName','items');
        }
    }
</script>

<style scoped>

</style>