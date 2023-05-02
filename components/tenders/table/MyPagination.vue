<template>
  <div>
    <!-- <p>Ներկայիս Էջ: {{ props.page }}</p> -->
    <v-pagination
      v-if="props.totalPages > 1"
      class="flex-wrap justify-content-center padding-t-20 padding-b-20 m-0"
      v-model="props.page"
      :page-count="props.totalPages"
      :classes="bootstrapPaginationClasses"
      @input="handlePageChange"
      :labels="paginationAnchorTexts"
    />
  </div>
</template>
<style>
.pagination li:first-child .btn, .pagination li:last-child .btn{
  border: none;
}
.page-item .btn{
  margin: 0 5px;
  color: #40444D;
  width: 36px;
  height: 36px;
  padding: 6px 0;
  background: #FFFFFF;
  border: 1px solid #EDEFF2;
  border-radius: 8px;
  order: 0;
  flex-grow: 0;
}
.page-item-active .btn{
  margin: 0 5px;
  color: white;
  width: 36px;
  height: 36px;
  background: #006BE6;
  border: 1px solid #0065D9;
  border-radius: 8px;
  order: 0;
  flex-grow: 0;
}
</style>
<script>
// :labels="paginationAnchorTexts"

import vPagination from 'vue-plain-pagination'
 
export default {
    name: "VtPagination",
    components: { vPagination },
    props: ['props'],
    methods: {
      handlePageChange(page) {
        if(page){
          this.props.setPage(page)
        }
      },
    },
    data() {
        return {
            name: "VtPagination",
            bootstrapPaginationClasses: {
              ul: 'pagination',
              li: 'page-item',
              liActive: 'page-item-active',
              liDisable: 'disabled btn-disabled',
              button: 'btn'  
            },
            paginationAnchorTexts: {
              first: false,
              prev: 'Հետ',
              next: 'Առաջ',
              last: false
            }
        }
    },
}
</script>