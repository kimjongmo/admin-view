<template>
    <aside class="main-sidebar">
        <section class="sidebar">
            <ul class="sidebar-menu" data-widget="tree">
                <li class="active">
                    <a href="/pages/user">
                        <i class="fa fa-link"></i>
                        <span>고객 관리</span>
                    </a>
                </li>
<!--                <th:block th:each="entry : ${menuList}">-->
<!--                    <li th:class="${entry.code == code ? 'active':''}">-->
<!--                        <a th:href="${entry.url}">-->
<!--                            <i class="fa fa-link"></i>-->
<!--                            <span th:text="${entry.title}"></span>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                </th:block>-->
            </ul>
        </section>
    </aside>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>

</style>