<template>
  <tree-select v-model="selectedCpvs"
               :select="$emit('update:searchedCpvs', selectedCpvs)"
               :multiple="true"
               :async="true"
               placeholder="Փնտրել"
               loadingText="Բեռնվում է"
               retryText="Կրկնե՞լ"
               searchPromptText="Մուտքագրեք որոնման համար"
               :normalizer="normalizer"
               :load-options="loadOptions" />
</template>

<script>
  import { ASYNC_SEARCH } from '@riophae/vue-treeselect'
  export default {
    name: 'CpvSearch',
    data() {
      return {
        selectedCpvs: [],
        normalizer(node) {
          return {
            id: node.id,
            label: node.code + '-' +node.name,
            children: node.children,
          }
        },
      }
    },
    methods: {
      loadOptions({ action, searchQuery, callback }) {
        if(action === ASYNC_SEARCH && searchQuery.length > 2) {
          if(this.searchTimeout) clearTimeout(this.searchTimeout)
          this.searchTimeout = setTimeout(() => {
            if(searchQuery) {
              this.$store.dispatch('cpv/search', searchQuery).then(({ data: { data } }) => {
                if(data.length) {
                  data.forEach(cpv => {delete cpv.children})
                  callback(null, data)
                } else {
                  callback(new Error('Արդյունք չի գտնվել'))
                }
              })
            }
          }, 650)
        }
      }
    }
  }
</script>

