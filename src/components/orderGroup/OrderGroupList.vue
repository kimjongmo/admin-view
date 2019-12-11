<template>
    <div>
        <table id="example2" ref="example2" class="table table-bordered table-hover dataTable"
               role="grid" aria-describedby="example2_info">
            <thead>
            <tr role="row">
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">id</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">상태</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">배송</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">받는 주소</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">수령인</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">결제 종류</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">총 액</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">총 수량</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">주문일</th>
                <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">도착일</th>
            </tr>
            </thead>
            <tbody id="itemList">
            <template v-for="(orderGroup,index) in orderGroupList">
                <tr role="row" class="odd" :key="orderGroup.id" @click="setItems(index)">
                    <td class="text-center">{{orderGroup.id}}</td>
                    <td class="text-center">
                        {{orderGroup.status=='DELIVERY'?"배송중":(orderGroup.status=='COMPLETE'?"배송완료":"준비중")}}
                    </td>
                    <td class="text-center">{{orderGroup.order_type=='ALL'?"묶음배송":"일괄배송"}}</td>
                    <td class="text-center">{{orderGroup.rev_address}}</td>
                    <td class="text-center">{{orderGroup.rev_name}}</td>
                    <td class="text-center">{{getType(orderGroup.payment_type)}}</td>
                    <td class="text-center">{{orderGroup.total_price}}</td>
                    <td class="text-center">{{orderGroup.total_quantity}}</td>
                    <td class="text-center">{{orderGroup.order_at}}</td>
                    <td class="text-center">{{orderGroup.arrival_date}}</td>
                </tr>
            </template>
            </tbody>
        </table>
        <div v-if="items">
            <receipt :items="items"></receipt>
        </div>
    </div>
</template>

<script>
    import Receipt from "../receipt/Receipt";

    export default {
        props: ['orderGroupList'],
        data() {
            return {
                items: '',
            }
        },
        methods: {
            getType: function (type) {
                if (type === 'CARD')
                    return "카드 결제";
                if (type === 'CHECK_CARD')
                    return "체크 카드 결제";
                if (type === 'BANK_TRANSFER')
                    return "계좌 이체";

                return "알수없음";
            },
            setItems: function (id) {
                if(this.$refs.example2.children[1].children[id].classList.contains('active')){
                    this.$refs.example2.children[1].children[id].classList.remove('active');
                    this.items = '';
                }else{
                    this.$refs.example2.children[1].children.forEach(child=>child.classList.remove('active'));
                    this.$refs.example2.children[1].children[id].classList.add('active');
                    this.items = this.orderGroupList[id].item_api_response_list;
                }
            }
        },
        components: {
            Receipt
        }

    }
</script>

<style scoped>
    #example2 .active{
        background-color: #9d9d9d;
    }
</style>