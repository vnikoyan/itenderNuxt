<template>
        <pagination
                :options="props.optionsObj"
                :records="props.records"
                :per-page="props.perPage"
                :value="props.page"
                @input="page => props.setPage(page)"/>
</template>

<script>
    import Pagination from 'vue-pagination-2'
    export default {
        name: "VtPagination",
        components: {
            Pagination
        },
        props: ['props'],
    }
</script>
<style scoped>
/deep/ .VuePagination__pagination-item {
  cursor: pointer;
}
/deep/ .VuePagination__pagination-item .active {
  z-index: 1;
  color: #fff;
  background-color: #006BE6;
  border-color: #006BE6;
}
</style>