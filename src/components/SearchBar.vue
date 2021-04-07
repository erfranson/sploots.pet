<template>
<label class="searchBar__label" for="searchBar__input">
    <div class="searchBar">
        
            <img class="searchBar__icon" src="../assets/search.svg" alt="">
            <input class="searchBar__input" id="searchBar__input" v-model="searchValue" type="text" placeholder="Try searching poodles...">
        
    </div>
</label>
    
</template>

<script>
export default {
    name: "SearchBar",
    data(){
        return {
            searchValue: "",
        }
    }
}
</script>

<style lang="scss">
    @import '../sass/components/_searchBar.scss';
</style>