<template>
    <div class="row">
        <div class="col-sm-7">
            <div class="dataTables_paginate paging_simple_numbers" id="pageBtn">
                <ul class="pagination">
                    <li class="paginate_button previous" id="previousBtn">
                        <a href="javascript:;" v-on:click="previousClick()">이전</a>
                    </li>

                    <li class="paginate_button" v-for="btn in btnList" v-bind:btn_id="btn" v-on:click="indexClick(btn)">
                        <a href="javascript:;" aria-controls="example2">{{btn}}</a>
                    </li>

                    <li class="paginate_button next" id="nextBtn">
                        <a href="javascript:;" v-on:click="nextClick()">다음</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ButtonList"
    }
</script>

<style scoped>

</style>