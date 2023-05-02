<template>
  <div class="cpv-detail-block">
    <p><span class="cpv-detail-code">{{ cpvCode }}</span> - {{cpvName}}</p>
    <div class="padding-t-20">
      <div class="w-100 d-flex justify-content-between pb-1">
        <span>Նախահաշվային ընդհանուր գին</span>
        <span class="detail-value">{{ (unitAmount *  plannedCount).toFixed(2)}}դր.</span>
      </div>
      <div class="w-100 d-flex justify-content-between pt-3 pb-1">
        <span>Միավորի գին</span>
        <span class="detail-value">{{ unitAmount }}դր.</span>
      </div>
      <div class="w-100 d-flex justify-content-between pt-3 pb-1">
        <span>Չափման միավոր</span>
        <span class="detail-value">{{ unit }} </span>
      </div>
       <div class="w-100 d-flex justify-content-between pt-3 pb-1">
        <span>Չափման միավոր (ռուսերեն)</span>
        <span class="detail-value">{{ unitRu }} </span>
      </div>
      <div class="w-100 d-flex justify-content-between pt-3 pb-1">
        <span>Քանակ</span>
        <span class="detail-value">{{ plannedCount }}</span>
      </div>
      <div class="w-100 d-flex justify-content-between pt-3 pb-1">
        <span>Բնութագիր</span>
        <div v-if="cpvSpecification" class="dropdown">
          <button class="btn btn-light dropdown-toggle br-8"
                  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ cpvSpecification.description ? _.truncate(cpvSpecification.description.hy, {'length': 30, 'separator': ' '}) : '' }}
          </button>
          <div class="dropdown-menu p-3 dropdown-menu-right card"
               aria-labelledby="dropdownMenuButton"
               style="max-height: 20rem; overflow-y: auto; min-width: 22rem;">
            {{ cpvSpecification.description ? cpvSpecification.description.hy : '' }}
            <p class="mt-1">
              {{ cpvSpecification.description ? cpvSpecification.description.ru : '' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LotDetailsHeader',
    props: ['cpvCode', 'cpvName', 'unit', 'unitRu', 'headerTitleRu', 'unitAmount', 'plannedCount', 'cpvSpecification'],
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
