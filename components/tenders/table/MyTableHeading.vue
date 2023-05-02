<template>
    <th slot-scope="props"
        v-on="props.thEvents"
        v-bind="props.thAttrs"
    >
        <span class="VueTables__heading w-100 d-flex flex-nowrap" :title="props.title">
            <template v-if="headingTooltips[props.heading]">
                <div class="col-auto p-0">
                    <vnodes :vnodes="props.heading"/>
                </div>
                <Tooltip
                    class="col-auto p-0"
                    v-if="headingTooltips[props.heading]"
                    :text="headingTooltips[props.heading]"
                >
                    <span :id="`tooltip-target-${props.heading}`" class="ml-2">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.82422 9.02991H6.97573V5.27234H5.82422V9.02991Z" fill="#006BE6"/>
                            <path d="M7.03634 2.90918H5.82422V4.1213H7.03634V2.90918Z" fill="#006BE6"/>
                            <path d="M6.42969 0C3.09635 0 0.429688 2.66667 0.429688 6C0.429688 9.33333 3.09635 12 6.42969 12C9.76302 12 12.4297 9.33333 12.4297 6C12.4297 2.66667 9.70241 0 6.42969 0ZM6.42969 10.7273C3.76302 10.7273 1.64181 8.60606 1.64181 6C1.64181 3.39394 3.76302 1.21212 6.42969 1.21212C9.09635 1.21212 11.2176 3.33333 11.2176 6C11.2176 8.66667 9.03575 10.7273 6.42969 10.7273Z" fill="#006BE6"/>
                        </svg>
                    </span>
                </Tooltip>
            </template>
            <template v-else>
                    <vnodes :vnodes="props.heading"/>
            </template>
        </span>
        <div class="sort">
            <vt-sort-control/>
        </div>
    </th>
</template>
<style scoped>
.VueTables__heading{
    text-align: left;
    margin-left: 0 !important;
}
.table thead th{
    vertical-align: top;
    text-align: left !important;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #6E7485;
}
.row{
    position: relative;
}
/* .row span{
    margin-right: 15px;
    margin-left: 5px;
} */
th.VueTables__sortable{
    cursor: pointer;
}
.sort{
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;
    margin: auto;
    height: fit-content;
}
</style>
<script>
    import VtSortControl from "vue-tables-2/compiled/components/VtSortControl";
    import Tooltip from '~/components/tooltip'
    export default {
        name: "VtTableHeading",
        components: {
            VtSortControl,
            Tooltip,
            vnodes: {
                functional: true,
                render: (h, ctx) => typeof ctx.props.vnodes === 'object' ? ctx.props.vnodes : [ctx.props.vnodes]
            }
        },
        data() {
            return {
                headingTooltips: {
                    Ծածկագիր: 'Տենդերի ծածկագիր',
                }
            }
        },
        props: ['props']
    }
</script>