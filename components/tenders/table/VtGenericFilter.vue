<template>
    <div class="VueTables__search-field w-100">
        <div class="col input-group search-input-group">
            <input 
                class="form-control VueTables__search__input shadow-none m-0"
                type="text"
                placeholder="Որոնել"
                v-model="searchQuery"
                @keyup="handleSearchInput"
                @keyup.enter="handleEnterSearch"
                :id="`VueTables__search_${props.id}`"
                autocomplete="off"
            />
            <div class="input-group-append" @click="handleSearch">
                <button class="btn shadow-none" type="button">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.VueTables__search-field{
    width: 365px !important;
    height: 36px;
}
.search-input-group {
    padding: 0;
    width: 365px !important;
    height: 36px;
}
.search-input-group input{
    background: #F7F7F7;
    border: 1px solid #EDEFF2;
    box-sizing: border-box;
    border-radius: 12px;
    border-right: none;
    padding-bottom: 8px;
    padding-top: 8px;
    padding-left: 12px;
}
.search-input-group button{
    background: #F7F7F7;
    border: 1px solid #EDEFF2;
    box-sizing: border-box;
    border-radius: 12px;
    border-left: none;
}
.multiselect__tags{
    padding-top: 0;
}
@media (max-width: 768px) {
    .VueTables__search-field{
    width: auto !important;
}
.search-input-group {
    width: auto !important;
}
}

</style>
<script>
    export default {
        name: "VtGenericFilter",
        props: ['props'],
        data() {
            return {
                searchQuery: '',
                searchInputEvent: {}
            }
        },
        methods: {
            handleSearchInput(e){
                this.searchInputEvent = e;
                if(!e.target.value){
                    this.handleSearch()
                }
            },
            handleEnterSearch() {
                this.props.search(this.props.debounce)(this.searchInputEvent)
            },
            handleSearch(){
                this.props.search(this.props.debounce)(this.searchInputEvent)
            }
        }
    }
</script>