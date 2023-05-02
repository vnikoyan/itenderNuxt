<template>
    <table v-bind="props.tableAttrs">
        <caption v-if="props.caption">{{props.caption}}</caption>
        <vt-table-head v-if="!isMobile" />
        <vnodes :vnodes="props.slots.beforeBody"/>
        <vt-table-body ref="vt_table_body"/>
        <vnodes :vnodes="props.slots.afterBody"/>
    </table>

</template>

<script>
    import VtTableHead from 'vue-tables-2/compiled/components/VtTableHead'
    import VtTableBody from 'vue-tables-2/compiled/components/VtTableBody'
    import isMobile from '@/mixins/isMobileView'
    export default {
        name: "MyTable",
        props: ['props'],
        mixins: [isMobile],
        components: {
            VtTableHead,
            VtTableBody,
            vnodes: {
                functional: true,
                render: (h, ctx) => ctx.props.vnodes
            }
        },

    }
</script>