<template>
    <div :class="`VueTables VueTables--${props.source}`" slot-scope="props">
        <div v-if="hasBlocks" class="row justify-content-between align-items-center table-filters w-100 m-0">
            <div class="col-md-3 p-0">
                <div class="row justify-content-md-end align-content-center w-100 m-0 p-0 ">
                    <div class="col-12 p-0">
                        <div v-if="!props.opts.filterByColumn && props.opts.filterable"
                            :class="`VueTables__search w-100`">
                            <vnodes :vnodes="props.slots.beforeFilter"/>
                            <vt-generic-filter/>
                            <vnodes :vnodes="props.slots.afterFilter"/>
                        </div>
                        <vnodes :vnodes="props.slots.afterFilterWrapper"/>
                    </div>
                </div>
            </div>
            <div class="col-md-9 p-0">
                <div class="row justify-content-end align-content-center w-100 m-md-0 p-0 filter-row">
                    <div class="col-auto row p-0 mb-2 mx-0 mb-md-0">
                        <vnodes :vnodes="props.slots.beforeLimit"/>
                    </div>
                    <div v-if="props.perPageValues.length > 1" class="col-auto filter-limit">
                        <div v-if="props.perPageValues.length > 1"
                            class="text-center VueTables__limit`">
                            <vt-per-page-selector/>
                        </div>
                    </div>
                    <div class="col-auto row p-0 m-0">
                        <div v-if="props.slots.afterLimit" class="col-auto filter-additional">
                            <vnodes :vnodes="props.slots.afterLimit"/>
                        </div>
                        <div v-if="props.opts.columnsDropdown" class="col-auto filter-columns-dropdown">
                            <div v-if="props.opts.columnsDropdown" class="">
                                <div v-if="props.opts.columnsDropdown"
                                    :class="`VueTables__columns-dropdown-wrapper ${props.theme.right} ${props.theme.dropdown.container}`">
                                    <vt-columns-dropdown/>
                                </div>
                            </div>
                            <div class="VueTables__pagination-wrapper" v-if="props.opts.pagination.dropdown && props.totalPages > 1">
                                <div :class="`${props.theme.inline} ${props.theme.right} VueTables__dropdown-pagination`">
                                    <vt-dropdown-pagination/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <vnodes :vnodes="props.slots.beforeTable"/>
        <div 
            :class="isBordered ? '' : 'table-responsive little-scroll'"
        >
            <vt-table ref="vt_table" class="table table-borderless"/>
        </div>

        <vnodes :vnodes="props.slots.afterTable"/>

        <vt-pagination/>

    </div>
</template>
<style>

.VueTables__table td, .VueTables__table th{
    font-size: 14px;
    color: #2D3036;
    text-align: left !important;
    padding: 20px !important;
    box-sizing: border-box;
}
.table-border-radius.VueTables__table td, .table-border-radius.VueTables__table th{
    padding: 15px !important;
}
.VueTables__no-results td{
    text-align: center !important;
}
.VueTables__table{
    width: 100%;
    /* table-layout: fixed; */
    /* overflow-wrap: break-word; */
}
</style>
<script>
    import VtColumnsDropdown from 'vue-tables-2/compiled/components/VtColumnsDropdown'
    import VtDropdownPagination from 'vue-tables-2/compiled/components/VtDropdownPagination'
    import VtGenericFilter from 'vue-tables-2/compiled/components/VtGenericFilter'
    import VtPerPageSelector from 'vue-tables-2/compiled/components/VtPerPageSelector';
    import VtTable from 'vue-tables-2/compiled/components/VtTable';
    import VtPagination from 'vue-tables-2/compiled/components/VtPagination'
    // import MyTableListView from './MyTableListView';

    export default {
        name: "VtDataTable",
        props: ['props'],
        components: {
            VtGenericFilter,
            VtPerPageSelector,
            VtColumnsDropdown,
            VtDropdownPagination,
            VtTable,
            VtPagination,
            // MyTableListView,
            vnodes: {
                functional: true,
                render: (h, ctx) => ctx.props.vnodes
            }
        },
        data() {
            return {
                hasBlocks: false,
                isBordered: false,
            }
        },
        updated(){
            if(this.props.slots.beforeFilter ||
                this.props.opts.filterByColumn ||
                this.props.opts.afterFilterWrapper ||
                this.props.slots.afterLimit ||
                this.props.opts.columnsDropdown ||
                this.props.totalPages > 1 ||
                this.props.opts.filterable
            ){
                this.hasBlocks = true;
            }
        },
        mounted() {
            if(this.props.slots.beforeFilter ||
                this.props.opts.filterByColumn ||
                this.props.opts.afterFilterWrapper ||
                this.props.slots.afterLimit ||
                this.props.opts.columnsDropdown ||
                this.props.totalPages > 1 ||
                this.props.opts.filterable
            ){
                this.hasBlocks = true;
            }
            // console.log(this.props.slots.beforeFilter, 'beforeFilter')
            // console.log(this.props.opts.filterByColumn, 'filterByColumn')
            // console.log(this.props.opts.afterFilterWrapper, 'afterFilterWrapper')
            // console.log(this.props.perPageValues.length, 'length')
            // console.log(this.props.slots.afterLimit, 'afterLimit')
            // console.log(this.props.opts.columnsDropdown, 'columnsDropdown')
            if(this.$refs.vt_table){
                if(this.$refs.vt_table.$el.className.includes('table-border-radius')){
                    this.isBordered = true;
                }
                if(this.$refs.vt_table.$el.className.includes('bordered-responsive')){
                    this.isBordered = false;
                }
            }
        },
        methods: {
            consoleLog(e){
                console.log(e)
            }
        },
    }
</script>