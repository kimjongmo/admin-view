<template>
    <div class="row">
        <div class="col-sm-7">
            <div class="dataTables_paginate paging_simple_numbers" id="pageBtn">
                <ul class="pagination">
                    <li class="paginate_button previous" v-bind:class="{disabled: isFirstPage()}">
                        <a @click="previousClick()">이전</a>
                    </li>

                    <li class="paginate_button"
                        v-bind:class="{active: btn.isActive}"
                        v-for="btn in btnList"
                        :key="btn.value"
                        @click="indexClick(btn.value)">
                        <a aria-controls="example2">{{btn.value}}</a>
                    </li>

                    <li class="paginate_button next" v-bind:class="{disabled: isLastPage()}">
                        <a @click="nextClick()">다음</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['btnList', 'pagination'],
        name: "ButtonList",
        data : function(){
          return {
          }
        },
        methods: {
            previousClick() {
                this.$emit('previousClick');
            },
            nextClick() {
                this.$emit('nextClick');
            },
            indexClick(idx) {
                this.$emit('indexClick', idx);
            },
            isLastPage(){
                return this.pagination.current_page == this.pagination.total_pages-1
            },
            isFirstPage(){
                return this.pagination.current_page === 0
            }
        }
    }
</script>

<style scoped>

</style>