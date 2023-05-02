<template>
  <div>
    <div v-if="(loadRootOptions && isRootLoading) || searching" :style="`margin-left: ${(depth+1) * 26}px;`" class="text-blue">
      <div class="text-small spinner-border spinner-border-sm mr-2" role="status"></div>
      բեռնվում է...
    </div>
    <div v-if="node.name && lessThen4Numbers(node)" @click="handleClick"
      class="mt-2" 
      :style="`margin-left: ${depth * 25}px;`">
      <div style="cursor: pointer;" v-if="node.children_count || loadRootOptions" aria-expanded="false">
        <svg class="mr-2" v-if="isOpen" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.90545 6.48276L12.7227 1.51724L11.2507 -6.43398e-08L6.43353 4.96552L1.75014 -4.79624e-07L0.278211 1.51724L4.9616 6.48276L6.43353 8L7.90545 6.48276Z" fill="#6E7485"/>
        </svg>
        <svg class="mr-2" v-else width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.98276 5.59504L2.01724 0.777832L0.5 2.24976L5.46552 7.06696L0.5 11.7504L2.01724 13.2223L6.98276 8.53888L8.5 7.06696L6.98276 5.59504Z" fill="#006BE6"/>
        </svg>
        <span><span class="node-code" :class="!isOpen && 'text-primary'">{{ node.code }}</span> - {{ node.name }}</span>
        <hr/>
      </div>
      
      <div v-else-if="!node.children_count" class="form-check p-0 d-flex">
      <label>
        <input @change="$emit('select', node)" 
            :id="node.id"
            :checked="isChecked(node.id)"
            style="top: -2px"             
            type="checkbox" 
            class="">
        <span style="cursor: pointer;" class="form-check-label"><span class="node-code">{{ node.code }}</span> - {{ node.name }}</span>
      </label>
        <hr/>
      </div>
    </div>
    <div v-else-if="node.name"
      class="mt-2" 
      :style="`margin-left: ${(depth - 1) * 25}px;`">
      <div class="form-check d-flex" :class="depth !== 1 && 'p-0'">
        <input @change="$emit('select', node)" 
            :id="node.id"
            :checked="isChecked(node.id)"
            style="top: -2px"             
            type="checkbox" 
            class="">
        <div class="ml-2" style="cursor: pointer;" v-if="node.children_count || loadRootOptions" aria-expanded="false">
          <svg class="mr-2" v-if="isOpen" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.90545 6.48276L12.7227 1.51724L11.2507 -6.43398e-08L6.43353 4.96552L1.75014 -4.79624e-07L0.278211 1.51724L4.9616 6.48276L6.43353 8L7.90545 6.48276Z" fill="#6E7485"/>
          </svg>
          <svg class="mr-2" v-else width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.98276 5.59504L2.01724 0.777832L0.5 2.24976L5.46552 7.06696L0.5 11.7504L2.01724 13.2223L6.98276 8.53888L8.5 7.06696L6.98276 5.59504Z" fill="#006BE6"/>
          </svg>
          <span @click="handleClick" ><span class="node-code" :class="!isOpen && 'text-primary'">{{ node.code }}</span> - {{ node.name }}</span>
        </div>
        <label v-else :for="node.id" style="margin-left: 8px; cursor: pointer;" class="form-check-label"> <span class="node-code">{{ node.code }}</span> - {{ node.name }}</label>
      </div>
    </div>
    <div v-if="isLoading" :style="`margin-left: ${(depth+1) * 26}px;`" class="text-blue">
      <div class="text-small spinner-border spinner-border-sm mr-2" role="status"></div>
      բեռնվում է...
    </div>
    <transition name="dropdown" tag="div">
      <div v-show="(isOpen || loadRootOptions) && (node.children && node.children.length)">
        <VueTree v-for="child in node.children"
                class="my-1"
                :selectedOptions="selectedOptions"
                @select="$emit('select', $event)"
                @open="isOpen = true; if($listeners.open) $emit('open', true)"
                :loadOptions="loadOptions"
                :node="child"
                :depth="depth + 1"
                :key="child.id" />
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'VueTree',
    props: {
      node: Object,
      depth: {
        type: Number,
        default: 0
      },
      selectedOptions: Array,
      loadRootOptions: Boolean,
      label: {
        type: Function,
        default: () => {
          return this.node.code + ' - ' + this.node.name
        }
      },
      loadOptions: Function,
      searching: Boolean
    },
    watch: {
      'node.children': function(children) {
        if(!children) {
          this.isRootLoading = true
        } else if(this.loadRootOptions && children.length) {
          this.isRootLoading = false
        }
      }
    },
    data() {
      return {
        isOpen: false,
        isLoading: false,
        isRootLoading: true,
      }
    },
    mounted() {
      if(this.node.children && this.node.children[0] && this.node.children[0].children_count < 1) {
        this.isAnyChecked()
      }
    },
    methods: {
      lessThen4Numbers({code}){
        var codeSplitted = code.split('');
        const codeSplittedCutted = codeSplitted.splice(1, 4)
        const result = codeSplittedCutted.filter(str => str !== '0').length >= 3
        return !result;
      },
      async handleClick() {
        if(this.isOpen) {
          this.isOpen = false
        } else {
          if(this.node.children) {
            this.isOpen = true
          } else {
            if(this.node.children_count) {
              this.isLoading = true
              await this.loadOptions(this.node)
              this.isLoading = false
              this.isOpen = true
            }
          }
        }
      },
      isAnyChecked() {
        // eslint-disable-next-line no-undef
        if(_.intersectionBy(this.node.children, this.selectedOptions, 'id').length) {
          this.isOpen = true
          this.$emit('open')
        }
      },
      isChecked(id) {
        return this.selectedOptions.findIndex(option => option.id === id) > -1
      },
    }
  }
</script>
<style scoped>
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: scaleY(1);
}

.dropdown-enter-to,
.dropdown-leave {
  transform: scaleY(1);
  opacity: 1;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
  transform-origin: top;
}
</style>