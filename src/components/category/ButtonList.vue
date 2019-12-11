<template>
    <div class="row">
        <div class="col-sm-7">
            <div class="dataTables_paginate paging_simple_numbers" id="pageBtn">
                <ul class="pagination">
                    <li class="paginate_button previous" ref="previousBtn">
                        <a @click="previousClick()">이전</a>
                    </li>

                    <li class="paginate_button" v-for="btn in btnList" :key="btn" @click="indexClick(btn)">
                        <a aria-controls="example2">{{btn}}</a>
                    </li>

                    <li class="paginate_button next" ref="nextBtn">
                        <a @click="nextClick()">다음</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['btnList','pagination'],
        name: "ButtonList",
        methods: {
            previousClick(){
                this.$emit('previousClick');
            },
            nextClick(){
                this.$emit('nextClick');
            },
            indexClick(idx){
                this.$emit('indexClick',idx);
            },
        },mounted() {
            if(this.pagination.current_page === 0){
                this.$refs.previousBtn.classList.add("disabled")
            }else{
                this.$refs.previousBtn.classList.remove("disabled")
            }

            // 다음버튼
            if(this.pagination.current_page === this.pagination.total_pages-1){
                this.$refs.nextBtn.classList.add("disabled")
            }else{
                this.$refs.nextBtn.classList.remove("disabled")
            }
        }
    }
</script>

<style scoped>

</style>