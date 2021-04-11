<template>
    <div class=homePage>
        <nav-bar></nav-bar>
        <main class="homePage__container">
            
        </main>
    </div>
</template>

<script>

import NavBar from '../components/NavBar';

export default {
    name: 'HomePage',
    components: {
        NavBar
    },
    setup() {
    }
    
}
</script>

<style lang="scss">
    @import '../sass/pages/_homePage.scss';
    .test{
        height: 100px;
    }
</style>