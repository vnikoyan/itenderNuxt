<template>
        <div class="VueTables__limit-field">
            <div class="row align-items-center w-100 m-0">
                <div class="col-auto text-left col-label">
                    <label>Ցուցադրել</label>
                </div>
                <div class="col-auto">
                    <multiselect
                        :id="props.selectAttrs.id"
                        v-model="props.selectAttrs.value"
                        :options="props.perPageValues"
                        :searchable="false"
                        :close-on-select="false"
                        :show-labels="false"
                        placeholder="Գին"
                        :value="props.selectAttrs.value"
                        @select="props.selectEvents.change"
                        class="page-per-select"
                    >
                        <template slot="caret">
                            <div>
                                <div @mousedown.prevent.stop="toggle()" class="multiselect__select">
                                    <i class="icon-down"></i>
                                </div>
                            </div>
                        </template>
                    </multiselect>
                </div>
            </div>
        </div>
</template>
<style>
.page-per-select{
    background: #FFFFFF;
    border: 1px solid #DADDE6;
    box-sizing: border-box;
    border-radius: 8px;
}
.page-per-select .multiselect__select, .page-per-select .multiselect__tags{
    border: none !important;
    background: none !important;
}
</style>
<script>
    import Multiselect from 'vue-multiselect'
    export default {
        name: "VtPerPageSelector",
        props: ['props'],
        components: { Multiselect },
    }
</script>