<template>
  <div>
    <h4>{{ headerTitle }} ({{ headerTitleRu }})</h4>
    <div class="w-100 d-flex justify-content-between border-bottom pb-1">
      <span>Նախահաշվային ընդհանուր գին</span>
      <span>{{ (unitAmount *  plannedCount).toFixed(2)}}դր.</span>
    </div>
    <div class="w-100 d-flex justify-content-between border-bottom pt-3 pb-1">
      <span>Միավորի գին</span>
      <span>{{ unitAmount }}դր.</span>
    </div>
    <div class="w-100 d-flex justify-content-between border-bottom pt-3 pb-1">
      <span>Չափման միավոր</span>
      <span>{{ unit }} </span>
    </div>
     <div class="w-100 d-flex justify-content-between border-bottom pt-3 pb-1">
      <span>Չափման միավոր (ռուսերեն)</span>
      <span>{{ unitRu }} </span>
    </div>
    <div class="w-100 d-flex justify-content-between border-bottom pt-3 pb-1">
      <span>Քանակ</span>
      <span>{{ plannedCount }}</span>
    </div>
    <div class="w-100 d-flex justify-content-between border-bottom pt-3 pb-1">
      <span>Բնութագիր</span>
      <div v-if="cpvSpecification" class="dropdown">
        <button class="btn btn-light  dropdown-toggle"
                type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{ cpvSpecification.description ? _.truncate(cpvSpecification.description.hy, {'length': 30, 'separator': ' '}) : '' }}
        </button>
        <div class="dropdown-menu p-3 dropdown-menu-right "
             aria-labelledby="dropdownMenuButton"
             style="max-height: 20rem; overflow-y: auto; min-width: 22rem;">
          {{ cpvSpecification.description ? cpvSpecification.description.hy : '' }}
          <p class="mt-1">
            {{ cpvSpecification.description ? cpvSpecification.description.ru : '' }}
          </p>
        </div>
      </div>
      <!--              <span v-if="showExpandedSpecs" class="position-absolute">{{ cpvSpecification.description }}</span>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LotDetailsHeader',
    props: ['headerTitle', 'unit', 'unitRu', 'headerTitleRu', 'unitAmount', 'plannedCount', 'cpvSpecification'],
    mounted() {
      // console.log(this.$props, 'this.$props')
    },
    methods: {
      consoleLog(data){
        console.log(data)
      },
    }
  }
</script>
