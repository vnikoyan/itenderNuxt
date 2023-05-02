<template>
  <modal 
    class="application-modal"
    name="application-modal"
    @closed="$emit('updateComparisonData')"
    @before-close="beforeClose"
    @before-open="beforeOpen"
    transition="fade"
    :adaptive="true"
    :scrollable="true"
    :reset="true"
    width="90%"
    height="90%"
  >
    <div id="modal-header" style="background-color:#006BE6">
      <div class="w-75 d-flex text-white">
        <p style="font-weight: 400;">Կազմել մրցույթի հայտ</p>
      </div>
      <button type="button"
              class="close position-absolute"
              style="right: 1.25rem; top: 25%"
              @click="$modal.hide('application-modal')" aria-label="Close">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.64102L14.859 0L8.49997 6.359L2.14102 4.62582e-05L0.5 1.64107L6.85895 8.00002L0.500034 14.3589L2.14105 16L8.49997 9.64104L14.8589 16L16.5 14.359L10.141 8.00002L16.5 1.64102Z" fill="#ffffff"/>
        </svg>
      </button>
    </div>
    <div id="modal-body">
      <template v-if="!loaded">
        <span 
          class="m-auto text-primary spinner-border spinner-border-lg position-absolute" 
          style="right: 0; top: 0; bottom: 0; left: 0;"
          role="status"
          aria-hidden="true"
        />
      </template>
      <template v-else>
        <template v-if="isMobile">
          <table style="table-layout: fixed;" class="table details-table-mobile table-border-radius">
            <tbody>
                <tr>
                  <th style="border-top-left-radius: 10px;">Մրցույթի ծածկագիր</th>
                  <td class="text-left">{{tender.password}}</td>
                </tr>
                <tr>
                  <th>Անվանում</th>
                  <td class="text-left">{{tender.title}}</td>
                </tr>
                <tr>
                  <th style="border-bottom-left-radius: 10px;">Պատվիրատու</th>
                  <td class="text-left">{{tender.organizator}}</td>
                </tr>
            </tbody>
          </table>
        </template>
        <template v-else>
          <table class="table details-table table-border-radius">
            <thead>
                <tr>
                  <th class="text-center">Մրցույթի ծածկագիր</th>
                  <th class="text-center">Անվանում</th>
                  <th class="text-center">Պատվիրատու</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{{tender.password}}</td>
                  <td>{{tender.title}}</td>
                  <td>{{tender.organizator}}</td>
                </tr>
            </tbody>
          </table>
        </template>
        <div v-if="tender.guaranteed" style="margin-bottom: 36px">
          <a @click="$modal.show('guarantee-modal')" href="#" class="btn btn-primary">
            <span>Դիմել երաշխիքի համար</span>
          </a>
        </div>
        <div>
          <div v-if="me.organisation[0].id_card_number === '' || me.organisation[0].translations.company_type !== 'Ա/Ձ'">
            <div class="form-group m-0">
              <float-label class="w-100 long-placeholder">
                <input
                  v-model="realBeneficiaries.linkInfoPage"
                  type="text"
                  placeholder="Տեղեկություններ պարունակող կայքէջի հղումը՝"
                  class="tender-input m-0"
                />
              </float-label>
            </div>
            <div style="margin: 20px 0 0 0" class="row p-0">
              <div class="col-md-6 p-0" :style="isMobile && 'margin-bottom: 22px'">
                <div class="d-flex align-items-start">
                  <span>
                    <div class="row m-0 p-0">
                      <div class="col-1 p-0">
                        <input type="radio" id="first" class="input-sp" name="check" :value="1" v-model="realBeneficiaries.inputOptions" @change="checkOption" :checked="firstOption">
                      </div>
                      <div class="col-11 radio-label">
                        <label for="first">
                          <p v-if="!firstMore">
                            Ներկայացնել մասնակցի իրական շահառուների վերաբերյալ տեղեկությունները պետական ռեգիստրի գործակալությունում գրանցված կայքի հղումով:
                          </p>
                          <p v-else>
                            Մասնակիցը «Իրավաբանական անձանց պետական գրանցման, իրավաբանական անձանց ստորաբաժանումների, հիմնարկների և անհատ ձեռնարկատերերի պետական հաշվառման մասին» օրենքի հիման վրա իրական շահառուների վերաբերյալ հայտարարագիր ներկայացնելու պարտականություն ունեցող իրավաբանական անձ է և հայտը ներկայացնելու օրվա դրությամբ սահմանված կարգով պետք է իրավաբանական անձանց պետական ռեգիստրի գործակալությունում գրանցված լիներ իր իրական շահառուների վերաբերյալ տեղեկությունները։
                          </p>
                        </label>
                        <span @click.stop="firstMore = !firstMore" class="text-primary show-more">{{!firstMore ? 'Տեսնել ավելին' : 'Փակել'}}</span>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <div class="col-md-6 p-0">
                <div class="d-flex align-items-start">
                  <span for="second">
                    <div class="row m-0 p-0">
                      <div class="col-1 p-0">
                        <input type="radio" id="second" class="input-sp" name="check" :value="2" v-model="realBeneficiaries.inputOptions" @change="checkOption" :checked="secondOption">
                      </div>
                      <div class="col-11 radio-label">
                        <label for="second">
                          <p v-if="!secondMore">
                            Ներկայացնել մասնակցի իրական շահառուների վերաբերյալ տեղեկությունները հրավերով սահմանված հավելվածի միջոցով:
                          </p>
                          <p v-else>
                            Մասնակիցը «Իրավաբանական անձանց պետական գրանցման, իրավաբանական անձանց ստորաբաժանումների, հիմնարկների և անհատ ձեռնարկատերերի պետական հաշվառման մասին» օրենքի հիման վրա իրական շահառուների վերաբերյալ հայտարարագիր ներկայացնելու պարտականություն ունեցող իրավաբանական անձ չէ, կամ եթե այդպիսի իրավաբանական անձ է սակայն հայտը ներկայացնելու օրվա դրությամբ պարտավոր չէր իրավաբանական անձանց պետական ռեգիստրի գործակալությունում գրանցել իր իրական շահառուների վերաբերյալ տեղեկություններըասնակիցը «Իրավաբանական անձանց պետական գրանցման, իրավաբանական անձանց ստորաբաժանումների, հիմնարկների և անհատ ձեռնարկատերերի պետական հաշվառման մասին» օրենքի հիման վրա իրական շահառուների վերաբերյալ հայտարարագիր ներկայացնելու պարտականություն ունեցող իրավաբանական անձ չէ, կամ եթե այդպիսի իրավաբանական անձ է սակայն հայտը ներկայացնելու օրվա դրությամբ պարտավոր չէր իրավաբանական անձանց պետական ռեգիստրի գործակալությունում գրանցել իր իրական շահառուների վերաբերյալ տեղեկությունները։
                          </p>
                        </label>
                        <span @click.stop="secondMore = !secondMore" class="text-primary show-more">{{!secondMore ? 'Տեսնել ավելին' : 'Փակել'}}</span>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
        </div>
        </div>
        <div style="margin: 28px 0 0 0;" class="row p-0 justify-content-between align-items-center">
          <div class="col-auto p-0">
            <div v-if="tender.cpv_type === 'work'" class="row p-0 m-0">
              <div class="col-1 p-0">
                <input 
                  v-model="isWithProductsDetails"
                  type="checkbox"
                  @input="handleIsWithProductsDetails"
                  :true-value="true"
                  :false-value="false"
                  id="is֊with֊products-details"
                >
              </div>
              <div class="col-11 p-0">
                <label class="form-check-label" for="is֊with֊products-details">
                  Ներկայացնել սարքեր/սարքավորումների կիրառումը
                </label>
              </div>
            </div>
          </div>
          <div class="col-auto p-0">
            <div v-show="!showElem" class="row m-0 p-0 align-items-start" :class="isMobile ? 'justify-content-center' : 'justify-content-end'">
              <div class="col-md-auto p-0" :style="isMobile ? 'margin-bottom: 12px': 'margin-right: 12px'">
                <button class="btn btn-primary w-100 text-center"
                  :disabled="selectedRows.length === 0"
                  @click="$modal.show('new-editor-modal', {
                            action: 'save_download',
                            fileName: `real_beneficiary_declaration_form`,
                            tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, ...{type: tender.type}},
                            editorTitle: `Իրական շահառուների վերաբերյալ հայտարարագրի ձև`,
                  })"
                  type="button"
                >
                  <span>Իրական շահառուների վերաբերյալ <br v-if="isMobile"/> հայտարարագրի ձև</span>
                </button>
              </div>
              <div class="col-md-auto p-0" :class="{'text-center' : isMobile}">
                <button class="btn btn-primary w-100"
                  :disabled="selectedRows.length === 0"
                  @click="$modal.show('new-editor-modal', {
                    action: 'download',
                    fileName: `procedure_for_filling_out_the_declaration`,
                    tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, ...{type: tender.type}},
                    editorTitle: `Հայտարարագրի լրացման կարգը`,
                  })"
                  type="button"
                  style="width: fit-content">
                  <span>Հայտարարագրի լրացման կարգը</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-bottom: 28px" :style="isMobile ? 'margin-top: 25px' : 'margin-top: 28px'">
          <div class="row m-0 p-0 justify-content-start align-items-center">
            <div class="p-0 row-select-label" :style="isMobile && 'margin-bottom: 12px'" :class="isMobile ? 'col-12' : 'col-md-auto'" >
              Որ չափաբաժիններին եք ցանկանում մասնակցել
            </div>
            <div class="row-select-block" :class="isMobile ? 'col-12' : 'col'" :style="!isMobile ? 'padding: 0 0 0 20px' : 'padding: 0;'">
              <multiselect
                v-model="selectedRows"
                open-direction="top"
                class="w-100"
                selectLabel=""
                deselectLabel=""
                selectedLabel="Ընտրված է"
                :close-on-select="false"
                :allowEmpty="true"
                :searchable="true"
                :options="tenderRows"
                :multiple="true"
                :custom-label="nameWithViewId"
                placeholder="Ընտրեք չափաբաժինները"
                track-by="id"
                label="name"
              >
                <template v-slot:tag="{ option, remove }">
                  <div class="multiselect__tag">
                    <span>{{ option.viewId }} | {{ option.name }}</span>
                    <span @click.prevent @mousedown.prevent.stop="remove(option, $event)" class="multiselect__tag-icon">
                      <div class="position-relative w-100 h-100">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.45436 8.32453L8.32616 9.45273L5.00095 6.12752L1.67557 9.45291L0.547363 8.32471L3.87275 4.99932L0.547987 1.67456L1.67619 0.546356L5.00095 3.87112L8.32554 0.546533L9.45374 1.67474L6.12915 4.99932L9.45436 8.32453Z" fill="#595E6B"/>
                        </svg>
                      </div>
                    </span>
                  </div>
                </template>
                <template slot="option" slot-scope="props">
                  <span>{{ props.option.viewId }} | {{ props.option.name }}</span>
                </template>
              </multiselect>
            </div>
          </div>
        </div>
        <v-client-table :columns="columns" v-model="selectedRows" :options="options">
          <div slot="id" class="d-flex justify-content-center align-items-center h-100 h-100" slot-scope="{row}">
            <span style="min-width: 20px;" class="text-center">{{row.viewId}}</span>
          </div>
          <div slot="name" class="d-flex justify-content-center align-items-center h-100" slot-scope="{row, index}">
            <div class="col-12 p-0">
              <input 
                @click="(e) => e.stopPropagation()"
                v-model="row.name"
                @input="handleNameChange(row, index-1)"
                type="text"
                min="1"
                class="tender-input m-0"
              >
            </div>
          </div>
          <div slot="code" class="d-flex justify-content-right align-items-center h-100 h-100" slot-scope="{row}">
            <span class="w-100">{{row.code}}</span>
          </div>
          <div slot="products_details" class="d-flex justify-content-start align-items-center h-100" slot-scope="{row, index}">
            <button
              @click.prevent="() => {
                $modal.show('products-details-modal', {row, setProductDetails, ...{index: index-1}, ...{cpv_type: tender.cpv_type, is_with_model: isWithModel}, procedure_type})
              }"
              type="button"
              class="btn"
              :class="row.specification ? 'btn-primary' : 'btn-secondary' "
            >
                <span>Լրացնել</span>
            </button>
          </div>
          <div slot="price" class="d-flex justify-content-start align-items-center h-100" slot-scope="{row, index}">
            <div class="col-12 p-0" v-tooltip="tender.cpv_type !== 'service' && !row.specification && 'Լրացրեք ապրանքի տեխնիկական բնութագրերը նախքան գնային առաջարկ ներկայացնելը'">
              <input 
                v-model.number="row.value"
                v-positive-only.none-zero
                :disabled="tender.cpv_type !== 'service' && !row.specification && isWithProductsDetails"
                @input="calculateByTotal(row, index-1)"
                type="number"
                min="1"
                class="tender-input m-0"
              >
            </div>
          </div>
          <div slot="cost" class="d-flex justify-content-start align-items-center h-100" slot-scope="{row, index}">
            <div class="row px-2">
              <div class="col-12" v-tooltip="tender.cpv_type !== 'service' && !row.firm_name && 'Լրացրեք ապրանքի ամբողջական նկարագիրը նախքան գնային առաջարկ ներկայացնելը'">
                <input 
                  v-model.number="row.cost"
                  v-positive-only.none-zero
                  :disabled="tender.cpv_type !== 'service' && !row.specification && isWithProductsDetails"
                  @input="calculateByCost(row, index-1)"
                  type="number"
                  min="1"
                  class="form-control"
                >
              </div>
            </div>
          </div>
          <div slot="profit" class="d-flex justify-content-start align-items-center h-100" slot-scope="{row, index}">
            <div class="row px-2">
              <div class="col-12" v-tooltip="tender.cpv_type !== 'service' && !row.firm_name && 'Լրացրեք ապրանքի ամբողջական նկարագիրը նախքան գնային առաջարկ ներկայացնելը'">
                <input 
                  v-model.number="row.profit"
                  v-positive-only.none-zero
                  :disabled="tender.cpv_type !== 'service' && !row.specification && isWithProductsDetails"
                  @input="calculateByCost(row, index-1)"
                  type="number"
                  min="1"
                  class="form-control"
                >
              </div>
            </div>
          </div>
          <div slot="vat" class="d-flex justify-content-start align-items-center h-100" slot-scope="{row, index}">
            <div class="row m-0 p-0">
              <div :class="isMobile ? 'col-auto' : 'col-12 p-0'">
                <input
                  class="m-0"
                  v-model="row.is_with_vat"
                  :true-value="1"
                  :false-value="0"
                  :data-index="index-1"
                  @change="handleVatSelect(row, index-1)"
                  type="checkbox">
              </div>
              <div :class="isMobile ? 'col-auto' : 'col-12 p-0'" :style="isMobile && 'padding-left: 8px !important'">
                <span class="text-center w-100">{{row.vat}}</span>
              </div>
            </div>
          </div>
          <div slot="overall" slot-scope="{row}">
            <p class="mb-0">{{row.overall}}</p>
            <p 
              v-if="(row.estimated_price > 0 && row.overall > row.estimated_price) && me.package === 'Գոլդ'"
              class="text-danger mb-0" style="font-size: 0.7rem"
            >
              գերազանցում է նախահաշվային ընդհանուր գինը
            </p>
          </div>
          <div slot="estimated_price" class="d-flex justify-content-start align-items-center h-100" slot-scope="{row}">
            {{(row.estimated_price !== null)
            ?
              (+row.estimated_price !== 0.00) ? row.estimated_price : (tender.is_with_model ? (tender.price_file ? 'Դիտել կցված գնումների պլանից': "Բացակայում է") : "Պարտադիր բանակցություններ (15-րդ հոդվածի 6-րդ մաս)")
            :
              tender.price_file ?  'Դիտել կցված գնումների պլանից': "Բացակայում է"
            }}
          </div>
        </v-client-table>
      </template>
    <div class="modal-footer">
      <div class="row m-0 p-0 flex-md-nowrap justify-content-md-end justify-content-center">
        <div v-if="isConfirmed" class="col-md-auto row flex-md-nowrap m-0 p-0 justify-content-center">
          <div aria-expanded="false" class="d-flex col-md-auto p-0 confirmed-block text-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2051_21172)">
            <circle cx="12" cy="12" r="12" fill="#2DB63E"/>
            <path d="M20 7.91447L10.1308 17.75L4 11.5461L5.64486 9.88158L10.1308 14.5724L18.3551 6.25L20 7.91447Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_2051_21172">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <span>Հաստատված է</span>
          </div>
          <div v-if="tender.cpv_type === 'product'" class="d-flex justify-content-center p-0 m-0 w-100 flex-wrap">
            <button 
              @click="$modal.show('new-editor-modal', {
                        action: 'download',
                        fileName: `application_announcement_product_appendix1`,
                        tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, ...{type: tender.type}},
                        editorTitle: `Հավելված 1`,
              })"
              type="button"
              class="btn btn-light mr-2"
              style="width: fit-content"
            >
                <svg class="mr-2" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.1875 16.1429C0.1875 17.0357 0.901786 17.75 1.79464 17.75H14.2054C15.0982 17.75 15.8125 17.0357 15.8125 16.1429V1.85714C15.8125 0.964286 15.0982 0.25 14.2054 0.25H1.79464C0.901786 0.25 0.1875 0.964286 0.1875 1.85714V16.1429ZM14.3839 16.3214H1.61607V1.67857H14.3839V16.3214ZM4.02681 4.08943H12.0625V5.518H4.02681V4.08943ZM12.0625 12.482H4.02681V13.9106H12.0625V12.482ZM4.02681 8.28572H12.0625V9.71429H4.02681V8.28572Z" fill="#006BE6"/>
                </svg>
                <span>Հավելված 1</span>
            </button>
            <button
              @click="$modal.show('new-editor-modal', {
                        action: 'download',
                        fileName: `application_announcement_product_appendix1_1`,
                        tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, ...{type: tender.type}},
                        editorTitle: `Հավելված 1.1`,
              })"
              type="button"
              class="btn btn-light mx-1 doc-2"
              style="width: fit-content"
            >
                <svg class="mr-2" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.1875 16.1429C0.1875 17.0357 0.901786 17.75 1.79464 17.75H14.2054C15.0982 17.75 15.8125 17.0357 15.8125 16.1429V1.85714C15.8125 0.964286 15.0982 0.25 14.2054 0.25H1.79464C0.901786 0.25 0.1875 0.964286 0.1875 1.85714V16.1429ZM14.3839 16.3214H1.61607V1.67857H14.3839V16.3214ZM4.02681 4.08943H12.0625V5.518H4.02681V4.08943ZM12.0625 12.482H4.02681V13.9106H12.0625V12.482ZM4.02681 8.28572H12.0625V9.71429H4.02681V8.28572Z" fill="#006BE6"/>
                </svg>
                <span>Հավելված 1.1</span>
            </button>
            <button
              v-if="isWithArmenianResources"
              @click="$modal.show('new-editor-modal', {
                        action: 'download',
                        fileName: `application_announcement_product_appendix1_2`,
                        tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, ...{type: tender.type}},
                        editorTitle: `Հավելված 1.2`,
              })"
              type="button"
              class="btn btn-light mx-1"
              style="width: fit-content"
            >
                <svg class="mr-2" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.1875 16.1429C0.1875 17.0357 0.901786 17.75 1.79464 17.75H14.2054C15.0982 17.75 15.8125 17.0357 15.8125 16.1429V1.85714C15.8125 0.964286 15.0982 0.25 14.2054 0.25H1.79464C0.901786 0.25 0.1875 0.964286 0.1875 1.85714V16.1429ZM14.3839 16.3214H1.61607V1.67857H14.3839V16.3214ZM4.02681 4.08943H12.0625V5.518H4.02681V4.08943ZM12.0625 12.482H4.02681V13.9106H12.0625V12.482ZM4.02681 8.28572H12.0625V9.71429H4.02681V8.28572Z" fill="#006BE6"/>
                </svg>
                <span>Հավելված 1.2</span>
            </button>
            <button v-if="procedure_type !== 'ELAH'"
              @click="$modal.show('new-editor-modal', {
                        action: 'download',
                        fileName: `application_announcement_product_appendix2`,
                        tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, ...{type: tender.type}},
                        editorTitle: `Հավելված 2`,
              })"
              type="button"
              class="btn btn-light mx-1 doc-2"
              style="width: fit-content"
            >
                <svg class="mr-2" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.1875 16.1429C0.1875 17.0357 0.901786 17.75 1.79464 17.75H14.2054C15.0982 17.75 15.8125 17.0357 15.8125 16.1429V1.85714C15.8125 0.964286 15.0982 0.25 14.2054 0.25H1.79464C0.901786 0.25 0.1875 0.964286 0.1875 1.85714V16.1429ZM14.3839 16.3214H1.61607V1.67857H14.3839V16.3214ZM4.02681 4.08943H12.0625V5.518H4.02681V4.08943ZM12.0625 12.482H4.02681V13.9106H12.0625V12.482ZM4.02681 8.28572H12.0625V9.71429H4.02681V8.28572Z" fill="#006BE6"/>
                </svg>
                <span>Հավելված 2</span>
            </button>
          </div>
          <div v-else-if="tender.cpv_type === 'service'" class="d-flex justify-content-center p-0 m-0 w-100 flex-wrap">
            <button
              @click="$modal.show('new-editor-modal', {
                        action: 'download',
                        fileName: `application_announcement_service_appendix1`,
                        tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, ...{type: tender.type}},
                        editorTitle: `Հավելված 1`,
              })"
              type="button"
              class="btn btn-light mx-1"
              style="width: fit-content"
            >
                <svg class="mr-2" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.1875 16.1429C0.1875 17.0357 0.901786 17.75 1.79464 17.75H14.2054C15.0982 17.75 15.8125 17.0357 15.8125 16.1429V1.85714C15.8125 0.964286 15.0982 0.25 14.2054 0.25H1.79464C0.901786 0.25 0.1875 0.964286 0.1875 1.85714V16.1429ZM14.3839 16.3214H1.61607V1.67857H14.3839V16.3214ZM4.02681 4.08943H12.0625V5.518H4.02681V4.08943ZM12.0625 12.482H4.02681V13.9106H12.0625V12.482ZM4.02681 8.28572H12.0625V9.71429H4.02681V8.28572Z" fill="#006BE6"/>
                </svg>
                <span>Հավելված 1</span>
            </button>
            <button
              v-if="isWithArmenianResources"
              @click="$modal.show('new-editor-modal', {
                        action: 'download',
                        fileName: `application_announcement_service_appendix1_1`,
                        tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, ...{type: tender.type}},
                        editorTitle: `Հավելված 1.1`,
              })"
              type="button"
              class="btn btn-light mx-1"
              style="width: fit-content"
            >
                <svg class="mr-2" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.1875 16.1429C0.1875 17.0357 0.901786 17.75 1.79464 17.75H14.2054C15.0982 17.75 15.8125 17.0357 15.8125 16.1429V1.85714C15.8125 0.964286 15.0982 0.25 14.2054 0.25H1.79464C0.901786 0.25 0.1875 0.964286 0.1875 1.85714V16.1429ZM14.3839 16.3214H1.61607V1.67857H14.3839V16.3214ZM4.02681 4.08943H12.0625V5.518H4.02681V4.08943ZM12.0625 12.482H4.02681V13.9106H12.0625V12.482ZM4.02681 8.28572H12.0625V9.71429H4.02681V8.28572Z" fill="#006BE6"/>
                </svg>
                <span>Հավելված 1.1</span>
            </button>
            <button v-if="procedure_type !== 'ELAH'"
              @click="$modal.show('new-editor-modal', {
                        action: 'download',
                        fileName: `application_announcement_service_appendix2`,
                        tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, ...{type: tender.type}},
                        editorTitle: `Հավելված 2`,
              })"
              type="button"
              class="btn btn-light mx-1"
              style="width: fit-content"
            >
                <svg svg class="mr-2" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.1875 16.1429C0.1875 17.0357 0.901786 17.75 1.79464 17.75H14.2054C15.0982 17.75 15.8125 17.0357 15.8125 16.1429V1.85714C15.8125 0.964286 15.0982 0.25 14.2054 0.25H1.79464C0.901786 0.25 0.1875 0.964286 0.1875 1.85714V16.1429ZM14.3839 16.3214H1.61607V1.67857H14.3839V16.3214ZM4.02681 4.08943H12.0625V5.518H4.02681V4.08943ZM12.0625 12.482H4.02681V13.9106H12.0625V12.482ZM4.02681 8.28572H12.0625V9.71429H4.02681V8.28572Z" fill="#006BE6"/>
                </svg>
                <span>Հավելված 2</span>
            </button>
          </div>
          <div v-else class="d-flex justify-content-center p-0 m-0 w-100 flex-wrap">
            <button
              @click="$modal.show('new-editor-modal', {
                        action: 'download',
                        fileName: `application_announcement_work_appendix1`,
                        tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, ...{type: tender.type}},
                        editorTitle: `Հավելված 1`,
              })"
              type="button"
              class="btn btn-light mx-1 margin-top-mobile"
              style="width: fit-content"
            >
                <svg svg class="mr-2" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.1875 16.1429C0.1875 17.0357 0.901786 17.75 1.79464 17.75H14.2054C15.0982 17.75 15.8125 17.0357 15.8125 16.1429V1.85714C15.8125 0.964286 15.0982 0.25 14.2054 0.25H1.79464C0.901786 0.25 0.1875 0.964286 0.1875 1.85714V16.1429ZM14.3839 16.3214H1.61607V1.67857H14.3839V16.3214ZM4.02681 4.08943H12.0625V5.518H4.02681V4.08943ZM12.0625 12.482H4.02681V13.9106H12.0625V12.482ZM4.02681 8.28572H12.0625V9.71429H4.02681V8.28572Z" fill="#006BE6"/>
                </svg>
                <span>Հավելված 1</span>
            </button>
            <button
              @click="$modal.show('new-editor-modal', {
                        action: 'download',
                        fileName: `application_announcement_work_appendix1_1`,
                        tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, ...{type: tender.type}},
                        editorTitle: `Հավելված 1.1`,
              })"
              type="button"
              class="btn btn-light mx-1 margin-top-mobile"
              style="width: fit-content"
            >
                <svg svg class="mr-2" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.1875 16.1429C0.1875 17.0357 0.901786 17.75 1.79464 17.75H14.2054C15.0982 17.75 15.8125 17.0357 15.8125 16.1429V1.85714C15.8125 0.964286 15.0982 0.25 14.2054 0.25H1.79464C0.901786 0.25 0.1875 0.964286 0.1875 1.85714V16.1429ZM14.3839 16.3214H1.61607V1.67857H14.3839V16.3214ZM4.02681 4.08943H12.0625V5.518H4.02681V4.08943ZM12.0625 12.482H4.02681V13.9106H12.0625V12.482ZM4.02681 8.28572H12.0625V9.71429H4.02681V8.28572Z" fill="#006BE6"/>
                </svg>
                <span>Հավելված 1.1</span>
            </button>
            <button
              v-if="isWithArmenianResources"
              @click="$modal.show('new-editor-modal', {
                        action: 'download',
                        fileName: `application_announcement_work_appendix1_2`,
                        tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, ...{type: tender.type}},
                        editorTitle: `Հավելված 1.2`,
              })"
              type="button"
              class="btn btn-light mx-1"
              style="width: fit-content"
            >
              <svg svg class="mr-2" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.1875 16.1429C0.1875 17.0357 0.901786 17.75 1.79464 17.75H14.2054C15.0982 17.75 15.8125 17.0357 15.8125 16.1429V1.85714C15.8125 0.964286 15.0982 0.25 14.2054 0.25H1.79464C0.901786 0.25 0.1875 0.964286 0.1875 1.85714V16.1429ZM14.3839 16.3214H1.61607V1.67857H14.3839V16.3214ZM4.02681 4.08943H12.0625V5.518H4.02681V4.08943ZM12.0625 12.482H4.02681V13.9106H12.0625V12.482ZM4.02681 8.28572H12.0625V9.71429H4.02681V8.28572Z" fill="#006BE6"/>
              </svg>
              <span>Հավելված 1.2</span>
            </button>
            <button v-if="procedure_type !== 'ELAH'"
              @click="$modal.show('new-editor-modal', {
                        action: 'download',
                        fileName: `application_announcement_work_appendix2`,
                        tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, ...{type: tender.type}},
                        editorTitle: `Հավելված 2`,
              })"
              type="button"
              class="btn btn-light mx-1 margin-top-mobile"
              style="width: fit-content"
            >
              <svg svg class="mr-2" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.1875 16.1429C0.1875 17.0357 0.901786 17.75 1.79464 17.75H14.2054C15.0982 17.75 15.8125 17.0357 15.8125 16.1429V1.85714C15.8125 0.964286 15.0982 0.25 14.2054 0.25H1.79464C0.901786 0.25 0.1875 0.964286 0.1875 1.85714V16.1429ZM14.3839 16.3214H1.61607V1.67857H14.3839V16.3214ZM4.02681 4.08943H12.0625V5.518H4.02681V4.08943ZM12.0625 12.482H4.02681V13.9106H12.0625V12.482ZM4.02681 8.28572H12.0625V9.71429H4.02681V8.28572Z" fill="#006BE6"/>
              </svg>
              <span>Հավելված 2</span>
            </button>
          </div>
        </div>
        <div v-if="!showBlock" class="col-auto p-0 confirm-btn-block" :class="isConfirmed && 'mobile-confirm-btn-block'">
          <div :class="{'d-none' : showBlock}">
            <button
              @click="$modal.show('submitted-documents-modal', {
                        tender: {tender, isWithProductsDetails, isWithModel, realBeneficiaries, selectedRows, isWithArmenianResources, workersCount, submittedDocumentData, ...{type: tender.type}, getSubmittedDocumentData},
              })"
              type="button"
              class="btn btn-primary br-8"
              style="width: fit-content"
            >
              <span>Հաղթելուց հետո ներկայացվող փաստաթղթեր</span>
            </button>
          </div>
        </div>
        <div v-if="!isConfirmed" class="col-auto p-0 confirm-btn-block">
          <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-primary br-8">
              <input @change="confirm" type="checkbox" :checked="isConfirmed" autocomplete="off"> 
              <span>{{isConfirmed ? 'Հաստատված է' : 'Հաստատել'}}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
    </div>
    <products-details-modal />
  </modal>
</template>
<script>
import { required, requiredUnless} from 'vuelidate/lib/validators'
import ProductsDetailsModal from './ProductsDetailsModal'
import isMobile from '@/mixins/isMobileView'

export default {
  name: 'ApplicationModal',
  mixins: [isMobile],
  props: ['from'],
  components: { ProductsDetailsModal},
  data () {
    return {
      loaded: false,
      tenderRows: [],
      submittedDocumentData: {},
      getSubmittedDocuments: {},
      secondOption: null,
      firstOption: null,
      firstMore: false,
      secondMore: false,
      procedure_type: null,
      showElem: true,
      showBlock: true,
      fromFavorites: false,
      applications: JSON.parse(localStorage.getItem('applications')),
      items: {},
      isConfirmed: false,
      tender: {},
      selectedRows: [],
      addToFavorite: undefined,
      isWithArmenianResources: false,
      isWithProductsDetails: true,
      isWithModel: true,
      workersCount: 0,
      realBeneficiaries: {
          inputOptions: 1,
          linkInfoPage : 'https://',
          name_surname: '',
          armenian_card_number: '',
          international_card_number: '',
      },
      realBeneficiariesColumns: ['linkInfoPage', 'name_surname', 'armenian_card_number', 'international_card_number'],
      columns: ['id', 'name', 'code', 'price', 'vat', 'overall', 'estimated_price'],
      options: {
        sortable: [],
        perPage: 1000,
        columnsDropdown: false,
        filterByColumn: false,
        skin: 'table table-striped table-border-radius',
        filterable: false,
        headings: {
          id: 'Չ/Հ',
          name: 'Գնման առարկա',
          code: 'CPV կոդ',
          price: 'Արժեք',
          vat: 'ԱԱՀ',
          overall: 'Ընդամենը',
          name_surname: 'Անունը Ազգանունը Հայրանունը',
          armenian_card_number: 'ՀՀ քաղաքացիների համար` նույնականացման քարտի կամ անձնագրի կամ ՀՀ օրենսդրությամբ նախատեսված անձը հաստատող փաստաթղթի տեսակը և համարը',
          international_card_number: 'Օտարերկրյա քաղաքացիների համար համապատասխան երկրի օրենսդրությամբ նախատեսված անձը հաստատող փաստաթղթի տեսակը և համարը',
          products_details: 'Ամբողջական նկարագիր',
          cost: 'Ինքնարժեք',
          profit: 'Շահույթ',
          estimated_price: 'Նախահաշվային ընդհանուր գին'
        },
        texts: {
          count:
          'Ցուցադրված է {from}֊ից {to}֊ը ընդհանուր {count} տողից|{count} տող|',
          first: 'Առաջին',
          last: 'Վերջին',
          filter: '',
          filterPlaceholder: 'Փնտրել',
          limit: '',
          page: 'Page:',
          noResults: 'Չկան ընտրված չափաբաժիններ',
          noRequest: 'խնդրում ենք ընտրել առնվազն մեկ ֆիլտեր տվյալները ներբեռնելու համար',
          filterBy: 'փնտրել ըստ {column}',
          loading: 'Բեռնվում է...',
          defaultOption: 'ընտրել {column}',
          columns: 'Ընտրել դաշտերը',
        },
      },
    }
  },
  validations() {
      const rules = {
        realBeneficiaries: {
          $each: {
            name_surname: { required },
            armenian_card_number: {
              requiredIf: requiredUnless((item) => item.international_card_number !== '')
            },
            international_card_number: {
              requiredIf: requiredUnless((item) =>  item.armenian_card_number !== '')
            },
          }
        }
      }

      // if(this.procedure_type !== 'ELAH'){
      //   rules.selectedRows = {
      //     required,
      //     $each: {
      //       value: { required },
      //       vat: { required },
      //       overall: { required },
      //     }
      //   }
      // }else{
      //   rules.selectedRows = {
      //     $each: {
      //       specification: { required },
      //       value: {},
      //       vat: {},
      //       overall: {},
      //     }
      //   }
      // }

      if(this.cpv_type !== 'product'){
        rules.selectedRows = {
          required,
          $each: {
            value: { required },
            vat: { required },
            overall: { required },
          }
        }
      }else{
        rules.selectedRows = {
          $each: {
            specification: { required },
            value: {},
            vat: {},
            overall: {},
          }
        }
      }

      if(this.realBeneficiaries.inputOptions === 1 && this.tender.is_new_beneficiari){
        rules.realBeneficiaries = {
          linkInfoPage: { required },
        }
      }else{
        rules.realBeneficiaries = {
          linkInfoPage: {},
        }
      }
      return rules;
  },
  computed: {
    me() {
      return this.$store.getters['user/me']
    },
  },
  methods: {
    nameWithViewId ({ viewId, name }) {
      return `${viewId} | ${name}`
    },
    currentClass(){
      if(this.isConfirmed){
        if(!this.showBlock){
          if(this.tender.cpv_type === 'product' && (this.isWithArmenianResources || this.procedure_type !== 'ELAH')){
            return 'ended-confirmed-mobile-work-modal-body' // confirmed & 2 lines
          } else {
            return 'ended-confirmed-mobile-modal-body' // confirmed & 1 line
          }
        }
        if(this.tender.cpv_type === 'product' && (this.isWithArmenianResources || this.procedure_type !== 'ELAH')){
          return 'confirmed-mobile-work-modal-body' // confirmed & 2 lines
        } else {
          return 'confirmed-mobile-modal-body' // confirmed & 1 line
        }
      } else {
        if(!this.showBlock){
            return 'ended-mobile-modal-body' // Ended & Cconfirmed
        }
      }
      // return this.isConfirmed ? (this.tender.cpv_type === 'work' ? 'mobile-work-modal-body' : 'mobile-modal-body') : !this.showBlock && 'mobile-modal-body'
    },
    getSubmittedDocumentData(data){
      this.submittedDocumentData = data;
      console.log('submittedDocumentData AFTER AFTER', this.submittedDocumentData)
      console.log('cashNumbers AFTER AFTER', this.submittedDocumentData.cashNumbers)
    },
    checkOption(){
      if(this.realBeneficiaries.inputOptions === 1){
        this.showElem = true
        this.secondOption = true
        this.firstOption = false
      }
      if(this.realBeneficiaries.inputOptions === 2){
        this.$fire({
          title: "Զգուշացում",
          text: "Այս տարբերակը նախատեսված է միայն ՀՀ ոչ ռեզիդենտների համար",
          type: "warning",
          confirmButtonText: 'Լավ'
        })
        this.showElem = false
        this.secondOption = false
        this.firstOption = true
      }
    },
    async handleLoaded(){
      this.loaded = true;
    },
    consoleLog(data){
      console.log(data)
    },
    handleIsWithProductsDetails(){
      this.isConfirmed = false;
      if(!this.isWithProductsDetails){
        this.selectedRows.forEach(row => {
          row.value = '';
          row.vat = '';
          row.overall = '';
          row.cost = '';
          row.profit = '';
        });
        if(this.tender.is_old){
          this.columns = ['id', 'name', 'code', 'products_details', 'cost', 'profit', 'vat', 'overall', 'estimated_price'];
        } else {
          this.columns = ['id', 'name', 'code', 'products_details', 'price', 'vat', 'overall', 'estimated_price'];
        }
      } else {
        this.selectedRows.forEach(row => {
          row.firm_name = '';
          row.trademark = '';
          row.brand = '';
          row.manufacturer = '';
          row.specification = '';
          row.guarantee_time = '';
        });
        if(this.tender.is_old){
          this.columns = ['id', 'name', 'code', 'cost', 'profit', 'vat', 'overall', 'estimated_price'];
        } else {
          this.columns = ['id', 'name', 'code', 'price', 'vat', 'overall', 'estimated_price'];
        }
      }
    },
    beforeClose(){
      this.loaded = false
      this.showElem = true
      this.showBlock = true
      this.secondOption = null
      this.firstOption = null
      this.firstMore = false
      this.secondMore = false
      this.tenderRows = []
      this.items.realBeneficiaries = this.realBeneficiaries
      this.items.selectedRows = this.selectedRows
      this.items.workersCount = this.workersCount
      this.items.isWithArmenianResources = this.isWithArmenianResources
      this.items.submittedDocumentData = this.submittedDocumentData
      this.items.isConfirmed = this.isConfirmed

      const content = JSON.stringify(this.items);
      this.$client.post(`applications/set/${this.tender.id}`, {content}).then((value) => {
      })

      this.isConfirmed = false;
      this.workersCount = 0;
      this.isWithArmenianResources = false;
      this.tender = {};
      this.selectedRows = [];
      this.submittedDocumentData = {}
      this.realBeneficiaries = {
          inputOptions: 1,
          linkInfoPage: 'https://',
          name_surname: '',
          armenian_card_number: '',
          international_card_number: '',
      }
    },
    async beforeOpen({params}){
      this.showElem = true
      if(this.from === 'favoriteTenders'){
        this.fromFavorites = true;
      }

      

      this.addToFavorite = params.addToFavorite
      this.tender = params
      this.isWithModel = this.tender.is_with_model
      this.procedure_type = this.tender.procedure_type
      const optionIndex = this.columns.findIndex(item => item === 'products_details')
      this.tender.rows.forEach((row, index) => {
        const obj = {...row, viewId: index + 1, usedMaterials: [{name: '', count: '', value: ''}]}
        this.$set( this.tender.rows, index, obj)
      })
      const now = new Date();
      const string = now.toLocaleTimeString()
      const date = new Date()
      const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .replace(/-/g, "/")
                    .split("T")[0]


      const comparedates = function(date1,date2){
          if (date1 > date2) return true;
        else return false; 
      }

      this.tenderRows = this.tender.rows
      this.$client.get(`tender/getTenderRows/${this.tender.id}`).then(({data}) => {
        this.tenderRows = data.data
      })

      this.showBlock = comparedates(new Date(this.tender.finish_date.replace(/-/g, "/")), new Date(dateString + ' ' + string))

      if(optionIndex > -1){
        this.columns.splice(optionIndex, 1)
      }
      if(this.tender.cpv_type !== 'service'){
        if(this.tender.is_old){
          if(this.me.package === 'Գոլդ'){
            this.columns = ['id', 'name', 'code', 'products_details', 'cost', 'profit', 'vat', 'overall', 'estimated_price'];
          } else {
            this.columns = ['id', 'name', 'code', 'products_details', 'cost', 'profit', 'vat', 'overall'];
          }
        } else {
          if(this.me.package === 'Գոլդ'){
            this.columns = ['id', 'name', 'code', 'products_details', 'price', 'vat', 'overall', 'estimated_price'];
          } else {
            this.columns = ['id', 'name', 'code', 'products_details', 'price', 'vat', 'overall'];
          }
        }
      }else {
        if(this.tender.is_old){
          if(this.me.package === 'Գոլդ'){
            this.columns = ['id', 'name', 'code', 'cost', 'profit', 'vat', 'overall', 'estimated_price'];
          } else {
            this.columns = ['id', 'name', 'code', 'cost', 'profit', 'vat', 'overall'];
          }
        } else {
          if(this.me.package === 'Գոլդ'){
            this.columns = ['id', 'name', 'code', 'price', 'vat', 'overall', 'estimated_price'];
          } else {
            this.columns = ['id', 'name', 'code', 'price', 'vat', 'overall'];
          }
        }
      }
      if(this.is_old){
        await this.$client.get('real-beneficiaries').then(({data}) => {
          if(data.length){
            this.realBeneficiaries = [...data]
          }
        })
      }
      await this.$client.get(`applications/get/${this.tender.id}`).then(({data}) => {
        if(data){
          const applications = JSON.parse(data.content);
          if(applications){
            console.log('OPEN', applications)
            this.realBeneficiaries = applications.realBeneficiaries;
            this.selectedRows = applications.selectedRows;
            this.workersCount = applications.workersCount;
            this.isWithArmenianResources = applications.isWithArmenianResources;
            this.submittedDocumentData = applications.submittedDocumentData
            this.isConfirmed = applications.isConfirmed
          }
        } else {
          const applications = JSON.parse(localStorage.getItem('applications'));
          if(applications &&  applications[this.me.id] && applications[this.me.id][this.tender.id]){
            this.realBeneficiaries = applications[this.me.id][this.tender.id].realBeneficiaries;
            this.selectedRows = applications[this.me.id][this.tender.id].selectedRows;
            this.workersCount = applications[this.me.id][this.tender.id].workersCount;
            this.isWithArmenianResources = applications[this.me.id][this.tender.id].isWithArmenianResources;
          }
        }
        this.checkOption()
      })
      if(this.realBeneficiaries.inputOptions === 1){
        this.showElem = true
        this.secondOption = true
        this.firstOption = false
      }else if(this.realBeneficiaries.inputOptions === 2){
        this.showElem = false
        this.secondOption = false
        this.firstOption = true
      }else{
        this.secondOption = false
        this.firstOption = false
      }
      await this.handleLoaded()
    },
    addBeneficiary(){
      this.isConfirmed = false;
      this.realBeneficiaries.push({
        inputOptions: 1,
        linkInfoPage:'https://',
        name_surname: '',
        armenian_card_number: '',
        international_card_number: '',
      })
    },
    addUsedMaterial(rowIndex){
      this.isConfirmed = false;
      this.selectedRows[rowIndex].usedMaterials.push({
        name: '',
        count: '',
        value: '',
      })
    },
    removeBeneficiary(index){
      this.realBeneficiaries.splice(index, 1)
    },
    removeUsedMaterial(rowIndex, materialIndex){
      this.selectedRows[rowIndex].usedMaterials.splice(materialIndex, 1)
    },
    calculateByTotal(row, index) {
      const lot = row
      lot.vat = lot.is_with_vat && lot.value ? Number((lot.value * 0.2).toFixed(2)) : 0
      lot.overall = lot.value ? lot.value + lot.vat : 0
      this.$set(this.selectedRows, index, lot)
    },
    handleNameChange(row, index) {
        this.$set(this.selectedRows, index, row)
    },
    calculateByCost(row, index) {
      const lot = row
      if(+lot.cost && +lot.profit){
        lot.value = +lot.cost + +lot.profit;
        lot.vat = lot.is_with_vat && lot.value ? Number((lot.value * 0.2).toFixed(2)) : 0
        lot.overall = lot.value ? lot.value + lot.vat : 0
        this.$set(this.selectedRows, index, lot)
      }
    },
    calculateByVat(row, index) {
      const lot = row
      lot.overall = lot.is_with_vat ? lot.value + lot.vat : lot.value
      this.$set(this.selectedRows, index, lot)
    },
    handleVatSelect(row, index) {
      this.calculateByTotal(row, index)
    },
    setProductDetails(row, index){
      this.$set(this.selectedRows, index, row)
    },
    confirm(){
      this.selectedRows = this.selectedRows.sort((a,b) => (a.viewId > b.viewId) ? 1 : ((b.viewId > a.viewId) ? -1 : 0))
      const scrollingElement = (document.getElementById('modal-body'));
      scrollingElement.scrollTop = scrollingElement.scrollHeight;
      if(!this.$v.realBeneficiaries.$invalid){
        if(!this.$v.selectedRows.$invalid){
          this.isConfirmed = true;
          this.addToFavorite(this.tender.id)
          // this.realBeneficiaries.forEach((value) => {
          //   if(!value.id){
          //     this.$client.post('real-beneficiaries', value)
          //   }
          // })
        }else{
          this.isConfirmed = false;
          this.$notify({
            group: 'foo',
            type: 'error',
            text: 'Լրացրեք չափաբաժինների բոլոր դաշտերը!'
          })
        }
      } else {
        this.isConfirmed = false;
        this.$notify({
          group: 'foo',
          type: 'error',
          text: 'Լրացրեք իրական շահառուների անհրաժեշտ դաշտերը!'
        })
      }
    },
    async save(){
      if(!this.$v.realBeneficiaries.$invalid){
        if(!this.$v.selectedRows.$invalid){
        } else {
          this.$notify({
            group: 'foo',
            type: 'error',
            text: 'Լրացրեք չափաբաժինների բոլոր դաշտերը!'
          })
        }
      } else {
        this.$notify({
          group: 'foo',
          type: 'error',
          text: 'Լրացրեք տեղեկություններ պարունակող կայքէջի հղումը!'
        })
      }
      await this.$store.dispatch('suggestions/update', {id: this.currSuggestionId, data: { is_signature: 1 }}).then(async (response) => {
        if(response) {
          await this.checkEqualPrice();
        }
      }).catch(e => {
        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'Ինչ որ բան այն չէ',
          text: 'Կրկին փորձեք!'
        })
      })
    },
  },
}
</script>
<style scoped>
  .confirm-btn-block{
    margin-left: 16px
  }
  .modal-footer{
    padding: 15px 0 0 0;
    justify-content: right;
  }
  .table-border-radius .mobile-table-header{
    border-radius: 10px;
  }
  #modal-body{
    height: calc(100% - 56px);
    /* margin-right: 16px; */
  }
  #modal-body{
    padding: 20px;
    /* margin-top: 20px; */
  }
  #modal-footer{
    padding-bottom: 30px;
    padding-right: 38px;
  }
  .row-select-label{
    font-size: 14px !important;
    color: #40444D !important;
  }
  .form-check-label{
    margin-left: 20px;
    font-size: 14px !important;
    color: #40444D;
  }
  input[type=radio] {
    width: 20px;
    transform: scale(1.5);
  }
  .radio-label{
    padding: 0;
    margin: 0;
    padding-left: 16px;
  }
  .radio-label label{
    color: #40444D;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
  .radio-label p{
    padding: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    #modal-body{
      padding: 12px;
      /* margin-top: 20px; */
    }
    .radio-label{
      padding-left: 12px;
    }
    .margin-top-mobile{
      margin-top: 10px;
    }
    .mobile-confirm-btn-block{
      margin-top: 20px;
    }
    .confirm-btn-block{
      margin-left: 0;
    }
    .application-modal #modal-footer{
      padding-right: 28px;
    }
    .application-modal .ended-confirmed-mobile-modal-body{
      height: calc(100% - 56px - 195px) !important;
    }
    .application-modal .ended-mobile-modal-body{
      height: calc(100% - 56px - 160px) !important;
    }
    .application-modal .confirmed-mobile-modal-body{
      height: calc(100% - 56px - 153px) !important;
    }
    .application-modal  .ended-confirmed-mobile-work-modal-body{
      height: calc(100% - 56px - 240px) !important;
    }
    .application-modal .confirmed-mobile-work-modal-body{
      height: calc(100% - 56px - 210px) !important;
    }
    .application-modal > .vm--modal {
      width: auto !important;
      height: 95vh !important;
      top: 0 !important;
      bottom: 0 !important;
      right: 0 !important;
      left: 0 !important;
      margin: 30px 8px;
      position: absolute;
    }
  }
  @media (max-width: 360px) {
    .application-modal #modal-footer{
      padding: 8px;
    }
  }
  .searchItem:hover {
    background-color: #006BE6;
    color: #fff;
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .2s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .d_flex{
    display: flex;
  }
  .input-st{
    border: 1px solid #006BE6;
    border-radius: 2px;
    padding: 5px 10px;
    width: 100%;
  }
  .input-sp{
    margin-top: 4px;
  }
</style>

