<template>
    <div class="content-wrapper">
        <!-- Header Component -->
        <content-header :tab-list="tabList"/>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <h3 class="box-title">결과</h3>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                                <div class="row">
                                    <div class="col-sm-6"></div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- UserList Component -->
                                        <template>
                                            <category-list :category-list="categoryList"/>
                                        </template>
                                    </div>
                                </div>
                                <!-- ButtonList Component -->
                                <button-list
                                        :btnList="btnList"
                                        :pagination="pagination"
                                        @indexClick="indexClick"
                                        @nextClick="nextClick()"
                                        @previousClick="previousClick()"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
    import CategoryList from "./CategoryList";
    import ContentHeader from "../common/ContentHeader";
    import ButtonList from "../common/ButtonList";
    import {eventBus} from "../../main";

    export default {
        name: "Content",
        data() {
            return {
                categoryList: '',
                btnList: [],
                pagination: '',
                maxBtnSize: 7,
                response: '',
                tabList: [
                    {title:'카테고리 관리',name:'',href:'',selected:false},
                    {title:'카테고리 리스트',name:'',href:'',selected:true},
                ]
            };
        },
        methods: {
            nextClick() {
                if(this.pagination.current_page !== this.pagination.total_pages-1)
                    this.searchStart(this.pagination.current_page+1);
            },
            previousClick() {
                if (this.pagination.current_page !== 0) {
                    this.searchStart(this.pagination.current_page-1);
                }
            },
            indexClick(idx) {
                this.searchStart(idx-1);
            },
            searchStart(page) {
                this.btnList = [];
                this.$http.get('http://localhost:9090/api/category?page=' + (page))
                    .then(res => {
                        //this.response = res;
                        this.categoryList = res.data.data;
                        this.pagination = res.data.pagination;
                        const temp = Math.floor(this.pagination.current_page / this.maxBtnSize);

                        for (let i = 1; i <= this.maxBtnSize; i++) {
                            let value = i + (temp * this.maxBtnSize);
                            if (value <= this.pagination.total_pages) {
                                this.btnList.push({"value":value, "isActive":value==this.pagination.current_page+1});
                            }
                        }
                    });
            }
        },
        mounted() {
            this.searchStart(0);
        },
        created(){
            eventBus.$emit('setSelectedName','categories')
        },
        components: {
            ContentHeader,
            CategoryList,
            ButtonList
        }
    }
</script>

<style scoped>

</style>