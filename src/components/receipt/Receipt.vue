<template>
    <div class="receipt-modal">
        <span @click="$emit('closeReceipt')">x</span>
        <div class="row">
            <div class="receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                <div class="row">
                    <div class="receipt-header receipt-header-mid">
                        <div class="col-xs-4 col-sm-4 col-md-4">
                            <div class="receipt-left">
                                <h1>영수증</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,idx) in items" :key="`${idx}-${item.id}`" :title="item.id">
                            <td class="col-md-7">{{item.name}}</td>
                            <td class="col-md-3"><i class="fa fa-inr"></i> {{numberFormat(item.price)}}원</td>
                        </tr>
                        <tr>
                            <td class="text-right">
                                <p>
                                    <strong>합 계: </strong>
                                </p>
                            </td>
                            <td>
                                <p>
                                    <strong><i class="fa fa-inr"></i> {{numberFormat(getTotal())}}원</strong>
                                </p>
                            </td>
                        </tr>
                        <tr>

                            <td class="text-right"><h2><strong>총 액: </strong></h2></td>
                            <td class="text-left text-danger"><h2><strong><i class="fa fa-inr"></i>
                                {{numberFormat(getTotal())}}원</strong>
                            </h2></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div class="row">
                    <div class="receipt-header receipt-header-mid receipt-footer">
                        <div class="col-xs-8 col-sm-8 col-md-8 text-left">
                            <div class="receipt-right">
                                <p><b>Date :</b> 15 Aug 2016</p>
                                <h5 style="color: rgb(140, 140, 140);">Thank you for your business!</h5>
                            </div>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4">
                            <div class="receipt-left">
                                <h1>Signature</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Receipt",
        props: ['items'],
        methods: {
            getTotal: function () {
                let totalPrice = 0;
                this.items.forEach(item => totalPrice += item.price)
                return totalPrice;
            },
            numberFormat: function (number) {
                if (this == 0) return 0;
                var reg = /(^[+-]?\d+)(\d{3})/;
                var n = (number + '');
                while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
                return n;
            },
        },
    }
</script>

<style scoped>
    .text-danger strong {
        color: #9f181c;
    }

    .receipt-main {
        background: #ffffff none repeat scroll 0 0;
        border-bottom: 12px solid #333333;
        border-top: 12px solid #9f181c;
        margin-top: 50px;
        margin-bottom: 50px;
        padding: 40px 30px !important;
        position: relative;
        color: #333333;
        font-family: open sans;
    }

    .receipt-main p {
        color: #333333;
        font-family: open sans;
        line-height: 1.42857;
    }

    .receipt-footer h1 {
        font-size: 15px;
        font-weight: 400 !important;
        margin: 0 !important;
    }

    .receipt-main::after {
        background: #414143 none repeat scroll 0 0;
        content: "";
        height: 5px;
        left: 0;
        position: absolute;
        right: 0;
        top: -13px;
    }

    .receipt-main thead {
        background: #414143 none repeat scroll 0 0;
    }

    .receipt-main thead th {
        color: #fff;
    }

    .receipt-right h5 {
        font-size: 16px;
        font-weight: bold;
        margin: 0 0 7px 0;
    }

    .receipt-right p {
        font-size: 12px;
        margin: 0px;
    }

    .receipt-right p i {
        text-align: center;
        width: 18px;
    }

    .receipt-main td {
        padding: 9px 20px !important;
    }

    .receipt-main th {
        padding: 13px 20px !important;
    }

    .receipt-main td {
        font-size: 13px;
        font-weight: initial !important;
    }

    .receipt-main td p:last-child {
        margin: 0;
        padding: 0;
    }

    .receipt-main td h2 {
        font-size: 20px;
        font-weight: 900;
        margin: 0;
        text-transform: uppercase;
    }

    .receipt-header-mid .receipt-left h1 {
        font-weight: 100;
        margin: 34px 0 0;
        text-align: center;
        text-transform: uppercase;
    }

    .receipt-header-mid {
        margin: 24px 0;
        overflow: hidden;
    }

    .receipt-modal {
        display: block;
        position: fixed;
        z-index: 1500;
        padding-top: 0px;
        left: 0;
        top: 0;
        overflow: auto;
        background-color: rgba(0,0,0,0.9);
        width: 100%;
        height: 100%;
    }
    .receipt-modal > .row {
        margin: auto;
        display: block;
    }

    .receipt-modal span {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
    }

    .receipt-modal span:hover {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }

</style>