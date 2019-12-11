<template>
    <table id="example2" class="table table-bordered table-hover dataTable"
           role="grid" aria-describedby="example2_info">
        <thead>
        <tr role="row">
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">id</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">분류</th>
            <th class="text-center bg-light-blue-gradient" tabindex="0" rowspan="1" colspan="1">카테고리</th>
        </tr>
        </thead>
        <tbody id="itemList">
        <template v-for="category in categoryList">
            <tr role="row" class="odd" :key="category.id">
                <td class="text-center">{{category.id}}</td>
                <td class="text-center">{{category.type}}</td>
                <td class="text-center">{{category.title}}</td>
            </tr>
        </template>
        </tbody>
    </table>
</template>

<script>

    export default {
        props: ['categoryList'],
        methods: {
        },
        components: {
        }

    }
</script>

<style scoped>

</style>