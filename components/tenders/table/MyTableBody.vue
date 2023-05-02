/* eslint-disable vue/no-unused-components */
<template>
    <tbody>
    <vnodes :vnodes="props.slots.prependBody"/>
    <vt-no-results-row v-if="props.data.length === 0"/>
    <template v-if="isMobile">
        <div id="accordion">
            <table-rows v-for="(row,index) in props.data"
                        :row="row"
                        :index="props.initialIndex + index + 1"
                        :renderChildRow="props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])"
                        :key="index"
            />
        </div>
    </template>
    <template v-else>
        <table-rows v-for="(row,index) in props.data"
                    :row="row"
                    :index="props.initialIndex + index + 1"
                    :renderChildRow="props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])"
                    :key="index"
        />
    </template>
    <vnodes :vnodes="props.slots.appendBody"/>
    </tbody>
</template>

<script>
    import VtNoResultsRow from 'vue-tables-2/compiled/components/VtNoResultsRow'
    import VtTableRow from 'vue-tables-2/compiled/components/VtTableRow'
    import VtChildRow from 'vue-tables-2/compiled/components/VtChildRow'
    import isMobile from '@/mixins/isMobileView'

    export default {
        name: "MyTableBody",
        props: ['props'],
        mixins: [isMobile],
        components: {
            VtNoResultsRow,
            // eslint-disable-next-line vue/no-unused-components
            VtTableRow,
            // eslint-disable-next-line vue/no-unused-components
            VtChildRow,
            vnodes: {
                functional: true,
                render: (h, ctx) => ctx.props.vnodes
            },
            TableRows: {
                functional: true,
                render(h, ctx) {
                    var props = ctx.data.attrs;
                    // TODO: add group row
                    var data = [
                        h('vt-table-row', {
                            props
                        })
                    ];
                    if (props.renderChildRow) {
                        data.push(h('vt-child-row', {
                            props
                        }))
                    }
                    return data
                }
            }
        }
    }
</script>