<template>
  <div>
    <h4>Վճարման ժամանակացույց</h4>
    <p>* Վճարման ենթակա գումարները ներկայացված են աճողական կարգով:</p>
    <div v-for="(name, month) in monthNames"
         @mouseover="togglePercentArrowsOnHover(month, true)"
         @mouseleave="togglePercentArrowsOnHover(month, false)"
         :key="month" class="input-group mb-4 position-relative pl-2">
      <span class="position-absolute small bg-white px-1"
            style="z-index: 99; top: -7px; left: 12px;">{{ name }}</span>
      <template v-if="percentArrowsHovered[month] && percents[month]">
        <span @click="setSamePercentToNext(month, -1)"
              v-if="month !== 'month_1'"
              class="percent-input-arrows text-primary position-absolute"
              :style=" month === 'month_12' ? 'top: 6px;' : 'top: -5px;'">
          <i class="far fa-arrow-alt-circle-up"></i>
        </span>
        <span @click="setSamePercentToNext(month, 1)"
              v-if="month !== 'month_12'"
              class="percent-input-arrows text-primary position-absolute"
              :style=" month === 'month_1' ? 'bottom: 4px;' : 'bottom: -7px;'">
                  <i class="far fa-arrow-alt-circle-down"></i>
        </span>
      </template>
      <the-mask v-model.number="percents[month]"
                :mask="['O#', 'MZZ']"
                :tokens="maskTokens"
                :class="{
                  'border-danger': percentValidationErrors[month],
                  'border-primary': tmpActivePercentInput === month
                }"
                :id="month"
                :name="month"
                type="text"
                min="1"
                max="100"
                class="form-control text-right m-0" />
      <span class="small text-danger position-absolute" style="bottom: -15px;">
        {{ percentValidationErrors[month] }}
      </span>
      <div class="input-group-prepend">
        <span class="input-group-text percents">%</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LotDetailsPercents',
    props: {
      organizedPercents: Object
    },
    data() {
      const monthGenerator = (initialValue) => {
        return Array.from({ length: 12 }, (_, i) => `month_${i + 1}`)
          .reduce((acc, monthName) => {
            acc[monthName] = initialValue
            return acc
          }, {})
      }
      return {
        monthNames: {
          month_1: 'Հունվար',
          month_2: 'Փետրվար',
          month_3: 'Մարտ',
          month_4: 'Ապրիլ',
          month_5: 'Մայիս',
          month_6: 'Հունիս',
          month_7: 'Հուլիս',
          month_8: 'Օգոստոս',
          month_9: 'Սեպտեմբեր',
          month_10: 'Հոկտեմբեր',
          month_11: 'Նոյեմբեր',
          month_12: 'Դեկտեմբեր',
        },
        percentArrowsHovered: monthGenerator(false),
        percents: monthGenerator(null),
        tmpActivePercentInput: null,
        tmpActivePercentInputTimeout: null,
        maskTokens: {
          '#': {pattern: /\d/},
          O: {pattern: /[1-9]/},
          Z: {
            pattern: /[0]/
          },
          M: {
            pattern: /[1]/
          }
        },
      }
    },
    watch: {
      organizedPercents(newValue, oldValue) {
        if(!_.isEmpty(newValue) && !_.isEqual(newValue, oldValue)) {
          this.percents = newValue
        }
      },
    },
    computed: {
      currentOrganized() {
        return this.$store.getters['organize/currentOrganized']
      },
      percentValidationErrors() {
        const errors = {}
        for (const month in this.percents) {
          const monthNumber = Number(month.split('_')[1])

          const value = this.percents[month]

          if (!value) {
            // console.log( value, 'percentValidationErrors')
            continue
          }
          let previousMonthPercent
          let nextMonthPercent

          let prevIndex = 1
          let nextIndex = 1

          while (
            this.percents[`month_${monthNumber - prevIndex}`] === null ||
            this.percents[`month_${monthNumber - prevIndex}`] === '') {
            prevIndex++
          }
          while (
            this.percents[`month_${monthNumber + nextIndex}`] === null ||
            this.percents[`month_${monthNumber + nextIndex}`] === '') {
            nextIndex++
          }

          if (this.percents[`month_${monthNumber - prevIndex}`]) {
            previousMonthPercent = this.percents[`month_${monthNumber - prevIndex}`]
          }
          if (this.percents[`month_${monthNumber + nextIndex}`]) {
            nextMonthPercent = this.percents[`month_${monthNumber + nextIndex}`]
          }

          if (previousMonthPercent && value < previousMonthPercent) {
            errors[month] = 'պետք է լինի > կամ = նախորդից'
          }
          if (nextMonthPercent && value > nextMonthPercent) {
            errors[month] = 'պետք է լինի < կամ = հաջորդից'
          }
        }
        return errors
      },
    },
    methods: {
      togglePercentArrowsOnHover(month, value) {
        this.$set(this.percentArrowsHovered, month, value)
      },
      setSamePercentToNext(month, direction) {
        const currentValue = this.percents[month]

        let nextMonthNumber = Number(month.split('_')[1]) + direction
        let nextFieldValue = this.percents[`month_${nextMonthNumber}`]

        while ((nextFieldValue !== null && nextFieldValue !== undefined) && nextFieldValue === currentValue) {
          nextMonthNumber += direction
          nextFieldValue = this.percents[`month_${nextMonthNumber}`]
        }
        if (nextFieldValue !== undefined) {
          if (this.tmpActivePercentInputTimeout) {
            clearTimeout(this.tmpActivePercentInputTimeout)
          }
          this.tmpActivePercentInput = `month_${nextMonthNumber}`
          this.tmpActivePercentInputTimeout = setTimeout(() => {
            this.tmpActivePercentInput = null
          }, 1000)
          this.$set(this.percents, `month_${nextMonthNumber}`, nextMonthNumber === 12 ? 100 : currentValue)
        }
      },
    },
  }
</script>

