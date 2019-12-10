<template>
    <div id="app">
        <div class="wrapper">
            <page-header></page-header>
            <page-side></page-side>
            <!-- Content Start -->
            <template>
<!--                <default-content></default-content>-->
                <user-content></user-content>
            </template>
            <!-- Content End -->

            <page-footer></page-footer>

            <control-side-bar></control-side-bar>

            <div class="control-sidebar-bg"></div>
        </div>
    </div>
</template>

<script>
    import PageHeader from "./components/common/PageHeader";
    import PageFooter from "./components/common/PageFooter";
    import PageSide from "./components/common/PageSide";
    import ControlSideBar from "./components/common/ControlSideBar";
    // import DefaultContent from "./components/common/DefaultContent";
    import UserContent from "./components/user/Content";

    export default {
        name: 'app',
        components: {
            PageHeader,
            PageFooter,
            PageSide,
            ControlSideBar,
            // DefaultContent,
            UserContent
        }
    }
</script>

<style>
</style>
