<template>
    <div class=homePage>
        <nav-home></nav-home>
        <div class=test></div>
    </div>
</template>

<script>
import NavHome from '../components/NavHome';
export default {
    name: 'HomePage',
    components: {
        NavHome
    }
}
</script>

<style lang="scss">
    @import '../sass/pages/_homePage.scss';
    .test{
        height: 100px;
    }
</style>