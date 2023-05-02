<template>
  <div class="tooltip-box">
    <div class="slot"><slot /></div>
    <div
      class="tooltip card"
    >
      <span
        class="text"
      >{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: { 
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.tooltip-box { 
    position: relative;
    display: inline-block;
}

.slot{
    display: inline-block;
    z-index: 1;
}

.tooltip-box:hover .tooltip{
  display: block !important;
}

.tooltip { 
    text-align: center;
    padding: 5px 0;
    opacity: 1;
    width: 250px;
    top: 100%;
    left: 50%;
    margin-left: -60px;
    border: 1px solid #EDEFF2;
    display: none !important;
    /* display: block !important; */
    transition: 1s;

    position: absolute;
    z-index: 10;
}
</style>