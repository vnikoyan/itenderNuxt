<template>
    <div class="VueTables__columns-dropdown-wrapper w-100">
        <div :class="`${props.theme.dropdown.container} ${props.theme.right} VueTables__columns-dropdown w-100`">
            <button
                type="button"
                class="open-columns-list col-12 m-0 btn btn-primary float-right shadow-none"
                @click="props.toggleColumnsDropdown"
            >
                <template v-if="!props.displayColumnsDropdown">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 7.92509L13.5 6.07494H7.92503V0.500023H6.07488V6.07494H0.5V7.9251H6.07488V13.5H7.92503L7.92503 7.92509H13.5Z" fill="white"/>
                    </svg>
                </template>
                <template v-else>
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.94207 11.2503L11.2503 9.94206L7.30823 5.99997L11.2503 2.05791L9.94203 0.749649L5.99997 4.69171L2.05794 0.749676L0.749681 2.05794L4.69171 5.99997L0.749644 9.94204L2.0579 11.2503L5.99997 7.30823L9.94207 11.2503Z" fill="white"/>
                    </svg>
                </template>
            </button>
            <ul class="columns-list card" :style="props.displayColumnsDropdown ?'display:block':'display:none'">
                <li>
                    <a :class="props.theme.dropdown.item"
                            style=""
                            href="#"
                            @click="handleSelectAll()">
                        <div class="d-flex p-0 align-items-center">
                            <input
                                class="col-auto p-0"
                                style="margin-right: 15px"
                                type="checkbox"
                                :checked="selectAll"
                            />
                            <div class="col-auto p-0">
                                Բոլորը
                            </div>
                        </div>
                    </a>
                </li>
                <template v-for="column in props.origColumns">
                    <li v-if="props.getHeading(column)" v-bind:key="column">
                        <a :class="props.theme.dropdown.item"
                            style=""
                            href="#"
                            @click="handleColumnSelect(column)">
                            <div class="d-flex p-0 align-items-center">
                                <input
                                    class="col-auto p-0"
                                    style="margin-right: 15px"
                                    type="checkbox" :value="column"
                                    :disabled="props.onlyColumn(column)"
                                    :checked="props.columns.includes(column)"
                                />
                                <div class="col-auto  p-0">
                                    {{props.getHeading(column)}}
                                </div>
                            </div>
                        </a>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.dropdown-item{
    padding: 10px 20px;
}
.btn-primary{
    border-radius: 8px;
}
.open-columns-list{
    padding: 0;
    width: 36px;
    height: 36px;
    background: #006BE6;
    border: none !important;
    box-shadow: none !important;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.columns-list li{
    padding: 0;
}
.columns-list{
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 10px 0;
    margin: .125rem 0 0;
    font-size: .845rem;
    color: #303e67;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    margin: 0;
}
</style>

<script>
    export default {
        name: "MyColumnsDropdown",
        props: ['props'],
        data() {
            return {
                selectAll: false,
            }
        },
        methods: {
            handleSelectAll(){
                this.selectAll = !this.selectAll;
                if(this.selectAll){
                    this.props.origColumns.forEach((column) => {
                        if(column !== 'favorite'){
                            if(!this.props.columns.includes(column)){
                                this.props.toggleColumn(column)
                            }
                        }
                    })
                } else {
                    this.props.origColumns.forEach((column) => {
                        if(column !== 'favorite'){
                        if(this.props.columns.includes(column)){
                            this.props.toggleColumn(column)
                        }
                        }
                    })
                }
            },
            handleColumnSelect(column){
                const selectedColumns = [...this.props.columns]
                if(this.props.columns.includes(column)){
                    const index = selectedColumns.indexOf(column);
                    selectedColumns.splice(index, 1);
                } else {
                    selectedColumns.push(column)
                }
                this.props.toggleColumn(column)
                const columns = {
                    favorite: Boolean(selectedColumns.includes('favorite')),
                    invitation: Boolean(selectedColumns.includes('invitation')),
                    application: Boolean(selectedColumns.includes('application')),
                    type: Boolean(selectedColumns.includes('type')),
                    region: Boolean(selectedColumns.includes('region')),
                    price: Boolean(selectedColumns.includes('price')),
                    opening_finish_date: Boolean(selectedColumns.includes('opening_finish_date')),
                    products: Boolean(selectedColumns.includes('products')),
                    organizator: Boolean(selectedColumns.includes('organizator')),
                    title: Boolean(selectedColumns.includes('title')),
                    password: Boolean(selectedColumns.includes('password')),
                }
                this.$client.post('add/tenders/table/config', columns).then((response) => {
                    console.log(response)
                })
            }
        }
    }
</script>