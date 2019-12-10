<template>
    <tr role="row" class="odd">
        <td class="text-center">{{id}}</td>
        <td class="text-center">{{account}}</td>
        <td class="text-center">{{status}}</td>
        <td class="text-center">{{email}}</td>
        <td class="text-center">{{phone_number}}</td>
        <td class="text-center">{{registered_at}}</td>
        <td class="text-center">{{unregistered_at}}</td>
    </tr>
</template>

<script>
    export default {
        props: ['id','account','status','email','phone_number','registered_at','unregistered_at'],
    }
</script>

<style scoped>

</style>