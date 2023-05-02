<template>
  <div @click="handleClickOutside" class="row w-100 m-0 p-0 h-100">
    <div class="col-7 cpvs-list h-100">
      <ul class="nav nav-justified justify-content-center cpv_selector-nav" role="tablist">
        <li @click="loadTreeByType(1)" class="col p-0">
          <a class="nav-link active" data-toggle="tab" href="#cpv-tree" role="tab" aria-selected="true">Ապրանք</a>
        </li>
        <li @click="loadTreeByType(2)" class="col p-0">
          <a class="nav-link" data-toggle="tab" href="#cpv-tree" role="tab" aria-selected="false">Ծառայություն</a>
        </li>
        <li @click="loadTreeByType(3)" class="col p-0">
          <a class="nav-link" data-toggle="tab" href="#cpv-tree" role="tab" aria-selected="false">Աշխատանք</a>
        </li>
      </ul>
      <div id="cpv-tree-containere" style="height: calc(100% - 22px)" class="tab-content pt-3">
        <div class="d-flex justify-content-center">
          <div class="mb-2 position-relative cpv-search-block" style="width: fit-content;">
            <input 
              @input="handleSearch"
              id="search"
              :value="searchQuery" 
              class="cpv-search d-block" 
              placeholder="Փնտրել" 
              type="text"
            >
            <label for="search" class="search">
              <img src="~/assets/landing/images/Search.svg" alt="search">  
            </label> 
          </div>       
        </div>
        <div class="w-100 little-scroll" style="height: calc(100% - 34px); overflow: auto">
          <vue-tree 
            :selectedOptions="selectedOptions"
            @select="handleSelect" 
            :loadOptions="loadOptions"
            :searching="searching" 
            :loadRootOptions="true" 
            :node="{children: options}"
          />
        </div>
      </div>
    </div>

    <div class="col-5 cpvs-list h-100 pb-0">
      <div class="mob overflow little-scroll pt-0 pl-0 h-100">
        <div class="cpv-selector-block d-flex align-items-start" v-for="cpv in selectedOptions" :key="cpv.id">
          <img src="~/assets/landing/images/Close.svg" alt="close" class="mr-2" @click="removeFromOptions(cpv)">
          <span class="d-block" style="white-space: break-spaces;"><span class="cpv-code">{{ cpv.code }}</span> - <span class="cpv-name">{{ cpv.name }}</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueTree from './VueTree'
  export default {
    name: 'create',
    components: { VueTree },
    computed: {
      options() {
        return this.searchMode ? this.searchResult : this.cpvTypedObj[this.currentCpvType]
      }
    },
    data() {
      return {
        currentCpvType: 1,
        selectedCpvs: null,
        selectedOptions: [],
        // normalizer(node) {
        //   return {
        //     id: node.id,
        //     label: node.code + '-' +node.name,
        //     children: node.children,
        //   }
        // },
        cpvTypedObj: {},
        searchResult: [],
        searchMode: false,
        searchQuery: '',
        searchTimeout: null,
        searching: false,
      }
    },
    watch: {
      selectedOptions: function(updatedOptions) {
        this.$emit('update:selectedCpvs', updatedOptions)
      }
    },
    mounted() {
      this.loadTreeByType(1)
    },
    methods: {
      handleSelect(node) {
        const optionIndex = this.selectedOptions.findIndex(option => option.id === node.id)
        if(optionIndex > -1) {
          this.selectedOptions.splice(optionIndex, 1)
        } else {
          // eslint-disable-next-line no-undef
          this.selectedOptions.push(_.cloneDeep(node))
        }
      },
      handleSearch({target: {value}}) {
        this.searchQuery = value
        this.searchResult = []
        if(!this.searchMode) {
          this.searchMode = true
        }        
        if(value.length >= 3) {
          this.searching = true
          if(this.searchTimeout) clearTimeout(this.searchTimeout)
          this.searchTimeout = setTimeout(() => {
            this.$store.dispatch('cpv/search', value).then(({ data: { data } }) => {
              if(data.length) {
                this.searchResult = data
              } else {
                this.searchResult = [{name: 'Արդյունք չի գտնվել!'}]
              }
              this.searching = false
            })
          }, 700)
        } else if(!value.length) {
          this.searchMode = false
          this.searching = false
        }
      },
      handleClickOutside(event) {
        const cpvTreeContainer = document.getElementById('cpv-tree-containere')
        if(!cpvTreeContainer.contains(event.target)) {
          this.clearSearch()
        }
      },
      clearSearch() {
        if(this.searchQuery) this.searchQuery = ''
        if(this.searchResult) this.searchResult = []
        if(this.searchMode) this.searchMode = false
      },
      removeFromOptions(cpv) {
        const index = this.selectedOptions.findIndex(option => option.id === cpv.id)
        if(index > -1) {
          this.selectedOptions.splice(index, 1)
        }
      },
      loadOptions(node) {
        return this.$store.dispatch('cpv/getById', {id: node.id}).then(cpv => {
          return this.$set(node, 'children', cpv.children)
        })
      },
      loadTreeByType(type) {
        if(!this.cpvTypedObj[type]) {
          this.currentCpvType = type
          this.$client.get(`cpv/${this.currentCpvType}`).then(response => {
            // eslint-disable-next-line no-undef
            const cpvTypedObj = _.cloneDeep(this.cpvTypedObj)
            cpvTypedObj[this.currentCpvType] = response.data.data
            this.cpvTypedObj = cpvTypedObj
          })
        } else {
          this.currentCpvType = type
        }
      }
    }
  }
</script>
<style scoped>
  .cpvs-list{
    padding: 20px 8px;
  }
  .little-scroll{
    padding: 16px;
  }
  .overflow{
    overflow: auto;
  }
  @media only screen and (max-width: 770px) {
    .mob-view{
      flex-direction: column !important;
    }
    .mob{
      overflow-x: hidden;
      overflow-y: scroll;
    }
    .mob-width{
      width: calc(100% - 8px);
    }
  }
  @media only screen and (max-width: 550px) {
    .mob-width{
      width: calc(100% - 20px);
    }
  }
</style>
<style>
  .cpv_selector-nav {
    border: 1px solid #DADDE6;
    box-sizing: border-box;
    border-radius: 8px;
    /* width: fit-content; */
    margin: 0 auto;
  }
  .cpv_selector-nav .nav-link.active{
    background: #006BE6 !important;
    box-shadow: 0px 4px 8px rgba(0, 107, 230, 0.15);
    border-radius: 8px;
    color: #FFFFFF;
  }
  .cpv_selector-nav .nav-link{
    color: #2D3036;
    text-align: center;
  }
  .cpv-search{
    margin: 0 auto;
    border: 1px solid #EDEFF2;
    box-sizing: border-box;
    border-radius: 8px;
    background: #F7F7F7;
    padding: 8px 15px;
    width: 100%;
  }
  .search{
    position: absolute;
    right: 15px;
    top: 10px;
    cursor: pointer;
  }
  .cpv-selector-block{
    background: #F7F7F7;
    border-radius: 12px;
    padding: 10px;
    margin-bottom: 8px;
  }
  .cpv-selector-block:last-child{
    margin-bottom: 0;
  }
  .cpv-selector-block:hover{
    background: #EDEFF2;
  }
  .cpv-code{
    color: #2D3036;
    font-size: 14px;
  }
  .cpv-name{
    color: #595e6b;
    font-size: 14px;
  }
  .cpv-selector-header{
    font-size: 16px;
    line-height: 24px;
    color: #2D3036;
    margin-bottom: 30px;
  }
  .cpv-selector-block img{
    cursor: pointer;
  }
</style>

