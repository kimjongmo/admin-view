<template>
    <div class="content-wrapper">
        <!-- HEADER START-->
        <content-header :tab-list="tabList"/>
        <!-- HEADER END-->

        <section class="content">
            <div class="box-body">
                <table class="table table-bordered success" style="border: 1px solid #8c8c8c;">
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

        <!--############################################################################################ -->
        <!--############################################################################################ -->
        <!--##############################     ITEM_LIST    START    ################################### -->
        <!--############################################################################################ -->
        <!--############################################################################################ -->
        <section class="content-header">
            <h1>
                판매 상품 리스트
            </h1>
        </section>
        <hr>
        <div class="row">
            <div class="col-md-4" v-for="item in itemList" :key="item.id">
                <figure class="card card-product">
                    <div class="img-wrap"><img
                            src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F99ADC3485E000F8E2C71B9">
                    </div>
                    <figcaption class="info-wrap">
                        <h4 class="title">{{item.name}}</h4>
                        <p class="desc">{{item.title}}</p>
                        <div class="price-wrap h3">
                            <span class="price-new">{{numberFormat(item.price)}}원</span>
                            <a @click="$router.push({name: 'itemInfo',params: {id: item.id}})"
                               class="btn btn-sm btn-primary float-right">상세보기</a>
                            <!--                            <del class="price-old">{{item.price}}</del>-->
                        </div> <!-- price-wrap.// -->
                    </figcaption>
                </figure>
            </div> <!-- col // -->
        </div> <!-- row.// -->
        <!--############################################################################################ -->
        <!--############################################################################################ -->
        <!--##############################      ITEM_LIST    END     ################################### -->
        <!--############################################################################################ -->
        <!--############################################################################################ -->
    </div>
</template>

<script>
    import {eventBus} from "../../../main";
    import ContentHeader from "../../common/ContentHeader";

    export default {
        name: "PartnerInfoPage",
        data: function () {
            return {
                partner: '',
                itemList: '',
                tabList: [
                    {title: '파트너 관리', name: '', href: '', selected: false},
                    {title: '파트너 리스트', name: 'partners', href: '', selected: false},
                    {title: '파트너 정보', name: '', href: '', selected: true}
                ]
            }
        },
        methods: {
            dateFormat: function (date) {
                if (typeof date === 'string')
                    return date.replace('T', ' ');
                return date;
            },
            numberFormat: function (number) {
                if (this == 0) return 0;
                var reg = /(^[+-]?\d+)(\d{3})/;
                var n = (number + '');
                while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
                return n;
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
                        this.itemList = result.data.data.item_list;
                    }
                }).catch();


            /* 카테고리 선택 활성화*/
            eventBus.$emit('setSelectedName', 'partners');
        },
        components: {
            ContentHeader
        }
    }
</script>

<style scoped>
    .card-product .img-wrap {
        border-radius: 3px 3px 0 0;
        overflow: hidden;
        position: relative;
        height: 220px;
        text-align: center;
    }

    .card-product .img-wrap img {
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
    }

    .card-product .info-wrap {
        overflow: hidden;
        padding: 15px;
        border-top: 1px solid #eee;
    }

    .card-product .bottom-wrap {
        padding: 0px 15px 15px 15px;
        border-top: 1px solid #eee;
    }

    .card-product .price-wrap > a {
        position: absolute;
        right: 28px;
        bottom: 15px;
    }

    .table-bordered > thead > tr > th ,
    .table-bordered > thead > tr > td {
        border: 1px solid #8c8c8c;
    }
</style>