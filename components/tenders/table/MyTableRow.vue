<template>
        <div 
            :class="!isMobile ? `VueTables__row ${props.rowAttrs.class}` : 'row-mobile'"
            v-bind="!isMobile ? props.rowAttrs.attrs : ''"
            @click="!isMobile ? props.rowEvents.click : ''"
            :style="!isMobile ? 'display: table-row;vertical-align: inherit; border-color: inherit;' : ''"
        >
            <template v-if="isMobile">
                <div class="mobile-card m-0" :class="`${props.rowAttrs.class}`">
                    <div class="mobile-table-header" :id="`heading-${data}`">
                        <div data-toggle="collapse" class="collapsed" :data-target="`#collapse-${data}`" aria-expanded="false" :aria-controls="`#collapse-${data}`">
                            <div class="row m-0 p-0 justify-content-between">
                                <vt-table-cell v-show="false" ref="titleCell" :column="props.columns[0]"/>
                                <template v-if="props.columns[0] === 'favorite' || props.columns[0] === 'index_number'">
                                    <div class="col-10 p-0">
                                        <div class="row m-0 p-0">
                                            <div class="col-auto little-col">
                                                <vt-table-cell :column="props.columns[0]"/>
                                            </div>
                                            <div v-if="props.columns[1]" class="col p-0 d-flex align-items-center">
                                                <vt-table-cell :column="props.columns[1]"/>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template v-else-if="hasPassword">
                                    <div class="col-10 p-0">
                                        <div class="row m-0 p-0">
                                            <div class="col-12 p-0">
                                                <vt-table-cell :column="props.columns[0]"/>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="col-10 p-0">
                                        <div class="row m-0 p-0">
                                            <vt-table-cell class="w-100" :column="props.columns[1]"/>
                                        </div>
                                    </div>
                                </template>
                                <div class="col-2 p-0 d-flex align-items-center justify-content-end">
                                    <svg width="14" height="8" viewBox="0 0 14 8">
                                        <path d="M8.40545 6.48276L13.2227 1.51724L11.7507 -6.43398e-08L6.93353 4.96552L2.25014 -4.79624e-07L0.778211 1.51724L5.4616 6.48276L6.93353 8L8.40545 6.48276Z" fill="#006BE6"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :id="`collapse-${data}`" class="collapse" :aria-labelledby="`heading-${data}`">
                        <div class="card-body mobile-table-row-body">
                            <div 
                                v-for="(column, i) in columnsMobile"
                                :key="i" :class="isAction(column) && 'd-inline-block mr-3'"
                                class="mobile-table-row"
                            >
                                <div :class="isShortData(column) && 'short-column d-flex'" v-if="isShortData(column)">
                                    <label v-if="props.opts.headings[column] !== ''" class="cell-name col-auto p-0">{{props.opts.headings[column]}}`</label>
                                    <vt-table-cell :key="i" :column="column"/>
                                </div>
                                <template v-else>
                                    <label v-if="props.opts.headings[column] !== ''" class="cell-name">{{props.opts.headings[column]}}`</label>
                                    <br v-if="isAction(column)"/>
                                    <vt-table-cell :key="i" :column="column"/>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <!-- <tr :class="`VueTables__row ${props.rowAttrs.class}`"
                    > -->
                    <vt-child-row-toggler :row-id="data" v-if="props.childRowTogglerFirst"/>
                    <vt-table-cell v-for="(column, i) in props.columns" :key="i" :column="column"/>
                    <vt-child-row-toggler :row-id="data" v-if="props.childRowTogglerLast"/>
                <!-- </tr> -->
            </template>
        </div>
</template>

<script>
    import VtTableCell from "vue-tables-2/compiled/components/VtTableCell";
    import VtChildRowToggler from "vue-tables-2/compiled/components/VtChildRowToggler";
    import isMobile from '@/mixins/isMobileView'
    export default {
        name: "MyTableRow",
        mounted(){
            if(this.props.rowId){
                this.data = this.props.rowId;
            } else {
                this.data = new Date().getTime();
            }
            if(this.isMobile){
                if(this.props.columns[0] === 'favorite' || this.props.columns[0] === 'index_number'){
                    this.columnsMobile = this.props.columns.slice(2, this.props.columns.length);
                } else if(this.props.columns[0] === 'id' || this.props.columns[0] === 'index'){
                    this.columnsMobile = [this.props.columns[0], ...this.props.columns.slice(2, this.props.columns.length)];
                } else if(this.props.columns[0] === 'index_num'){
                    this.columnsMobile = this.props.columns;
                } else {
                    this.columnsMobile = this.props.columns.slice(1, this.props.columns.length);
                }
                if(this.$refs.titleCell.$el.getElementsByClassName("w-100").length === 0 || 
                    (
                        this.$refs.titleCell.$el.getElementsByClassName("w-100").length && 
                        this.$refs.titleCell.$el.getElementsByClassName("w-100")[0].innerHTML === ' '
                    )
                ){
                    this.hasPassword = false;
                }
            }
        },
        data() {
            return {
                data: '',
                hasPassword: true,
                columnsMobile: this.props.columns.slice(2, this.props.columns.length-1),
            }
        },
        props: ['props'],
        mixins: [isMobile],
        components: {VtTableCell, VtChildRowToggler},
        methods:{
            isAction(column){
                switch (column) {
                    case 'application':
                    case 'invitation':
                    case 'price':
                        return true;
                    default:
                        return false;
                }
            },
            isShortData(column){
                switch (column) {
                    case 'id':
                    case 'code':
                    case 'unit':
                    case 'unit_price':
                    case 'total_price':
                    case 'leftover':
                    case 'order_input':
                    case 'order_price':
                    case 'count':
                    case 'price':
                    case 'vat':
                    case 'overall':
                        return true;
                    default:
                        return false;
                }
            },
            consoleLog(e){
                console.log(e)
            }
        }
    }
</script>
<style>
.row-mobile .mobile-table-header div[aria-expanded="true"] *{
    color: #006BE6 !important;
    transition: .3s;
}
.row-mobile .mobile-table-header div[aria-expanded="true"]{
    background: #F0F7FF;
}
.row-mobile .mobile-table-header *:not(i){
    font-weight: 500;
    font-size: 16px;
    color: #0E0F12;
}
.short-column{
    display: flex;
    align-content: center;
}
.short-column td, .short-column td div{
    display: inline !important;
}
.short-column .cell-name{
    margin-right: 10px;
    display: inline-flex !important; 
    flex-direction: column;
    justify-content: center;
    text-align: center;
    vertical-align: middle !important;
}
.mobile-table-row br{
    display: none !important;
}
.mobile-table-row td .col-auto{
    padding: 0 !important;
}
.mobile-table-row td {
    width: 100%;
    display: block;
}
.table-striped thead, .table-striped tbody .VueTables__row:nth-of-type(even) {
    background-color: #F7F7F7;
}
</style>
<style scoped>
.little-col{
    padding: 0;
    padding-right: 10px;
    display: flex;
    align-items: center;
}
.table-border-radius #accordion .row-mobile:first-child .mobile-table-header{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.table-border-radius #accordion .row-mobile:last-child .mobile-table-header{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.mobile-table-header{
    border-top: .5px solid #EDEFF2;
}
.mobile-table-header > div{
    padding: 18px 15px;
}
.mobile-table-row{
    margin: 8px 0;
}
.mobile-table-row-body td, .mobile-table-header td{
    padding: 0 !important;
    max-width: 100%;
}
.mobile-table-row-body .cell-name{
    font-size: 13px;
    text-align: left;
    color: #6E7485;
    margin-bottom: 4px;
    display: inline-block;
}

</style>