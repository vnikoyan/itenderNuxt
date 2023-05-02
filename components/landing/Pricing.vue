<template>
    <div class="pricing-table-content">
           <VueSlickCarousel v-bind="settings" class="row" v-if="pricings.length">
                <div class="col-md-12">
                    <div class="single-table-price wow fadeInUp masnavor" data-wow-duration="0.5s" data-wow-delay="0.5s">
                        <div class="price-header">
                            <span class="price-title pack-1">Անվճար փաթեթ</span>
                            <div class="price">
                                <sup class="price-up">0</sup>
                                <span class="price-down">դրամ</span>
                            </div>
                        </div>
                        <div class="price-article">
                            <ul>
                                <li>Կազմակերպել տենդերներ և մասնակցել</li>
                                <li>« Անժամկետ տենդերներ » հարթակից գնումներ և վաճառքներ անելու հնարավորություն</li>
                                <li>Տարբեր տեսակի ֆիլտրներից օգտվելու հնարավորություն</li>
                                <li>ՀՀ-ում տեղի ունեցող տենդերների վիճակագրությունից օգտվելու հնարավորություն</li>
                                <li>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</li>
                            </ul>

                        </div>
                        <div class="price-footer">

                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="single-table-price wow fadeInUp masnavor" data-wow-duration="0.75s"
                            data-wow-delay="0.75s">
                        <div class="price-header">
                            <span class="price-title pack-2">{{pricings[1].name}} փաթեթ</span>
                            <div class="price">
                                <sup class="price-up">{{pricings[1].price.price_3.month}} ամիս</sup>
                                <span class="price-down">{{pricings[1].price.price_3.price}} դրամ</span>
                            </div>
                        </div>
                        <div class="price-article">
                            <ul>
                                <li>Կազմակերպել տենդերներ և մասնակցել</li>
                                <li>« Անժամկետ տենդերներ » հարթակից գնումներ և վաճառքներ անելու հնարավորություն</li>
                                <li>Տարբեր տեսակի ֆիլտրներից օգտվելու հնարավորություն</li>
                                <li>ՀՀ-ում տեղի ունեցող տենդերների վիճակագրությունից օգտվելու հնարավորություն</li>
                                <li>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</li>
                            </ul>
                            <ul class="patet-hover">
                                <li>iTender հարթակում որպես գործընկեր ներկայացնելու հնարավորություն</li>
                                <li>Այլ մրցույթների հրավերների ստացում /պետական և մասնավոր/</li>
                                <li>Այլ մրցույթների մասնակիցներ, գներ, հաղթողներ</li>
                                <li>Պետական մրցույթներին համակարգի միջոցով մասնակցության հայտերի, որակավորման
                                    և պայմանագրի ապահովումների պատրաստում / ԱՆՍԱՀՄԱՆԱՓԱԿ /
                                </li>

                            </ul>
                        </div>
                        <div class="price-footer">
                            <a v-if="isAuthenticated" @click="$modal.show('buy-package-modal', pricings[1])" class="purchase-btn">Գնել</a>
                            <a v-else @click="openApplicationModal" class="purchase-btn">Գնել</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="single-table-price wow fadeInUp masnavor" data-wow-duration="0.75s"
                            data-wow-delay="0.75s">
                        <div class="price-header">
                            <span class="price-title pack-3">{{pricings[2].name}} փաթեթ</span>
                            <div class="price">
                                <sup class="price-up">{{pricings[2].price.price_1.month}} ամիս</sup>
                                <span class="price-down">{{pricings[2].price.price_1.price}} դրամ</span>
                            </div>
                        </div>
                        <div class="price-article">
                            <ul>
                                <li>Կազմակերպել տենդերներ և մասնակցել</li>
                                <li>« Անժամկետ տենդերներ » հարթակից գնումներ և վաճառքներ անելու հնարավորություն</li>
                                <li>Տարբեր տեսակի ֆիլտրներից օգտվելու հնարավորություն</li>
                                <li>ՀՀ-ում տեղի ունեցող տենդերների վիճակագրությունից օգտվելու հնարավորություն</li>
                                <li>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</li>
                            </ul>
                            <ul class="patet-hover">
                                <li>iTender հարթակում որպես գործընկեր ներկայացնելու հնարավորություն</li>
                                <li>Այլ մրցույթների հրավերների ստացում /պետական և մասնավոր/</li>
                                <li>Այլ մրցույթների մասնակիցներ, գներ, հաղթողներ</li>
                                <li>Պետական մրցույթներին համակարգի միջոցով մասնակցության հայտերի, որակավորման
                                    և պայմանագրի ապահովումների պատրաստում / ԱՆՍԱՀՄԱՆԱՓԱԿ /
                                </li>

                            </ul>
                        </div>
                        <div class="price-footer">
                            <a v-if="isAuthenticated" @click="$modal.show('buy-package-modal', pricings[2])" class="purchase-btn">Գնել</a>
                            <a v-else @click="openApplicationModal" class="purchase-btn">Գնել</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="single-table-price wow fadeInUp masnavor" data-wow-duration="0.75s"
                            data-wow-delay="0.75s">
                        <div class="price-header">
                            <span class="price-title pack-4">{{pricings[3].name}} փաթեթ</span>
                            <div class="price">
                                <sup class="price-up">{{pricings[3].price.price_1.month}} ամիս</sup>
                                <span class="price-down">{{pricings[3].price.price_1.price}} դրամ</span>
                            </div>
                        </div>
                        <div class="price-article">
                            <ul>
                                <li>Կազմակերպել տենդերներ և մասնակցել</li>
                                <li>« Անժամկետ տենդերներ » հարթակից գնումներ և վաճառքներ անելու հնարավորություն</li>
                                <li>Տարբեր տեսակի ֆիլտրներից օգտվելու հնարավորություն</li>
                                <li>ՀՀ-ում տեղի ունեցող տենդերների վիճակագրությունից օգտվելու հնարավորություն</li>
                                <li>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</li>
                            </ul>
                            <ul class="patet-hover">
                                <li>iTender հարթակում որպես գործընկեր ներկայացնելու հնարավորություն</li>
                                <li>Այլ մրցույթների հրավերների ստացում /պետական և մասնավոր/</li>
                                <li>Այլ մրցույթների մասնակիցներ, գներ, հաղթողներ</li>
                                <li>Պետական մրցույթներին համակարգի միջոցով մասնակցության հայտերի, որակավորման
                                    և պայմանագրի ապահովումների պատրաստում / ԱՆՍԱՀՄԱՆԱՓԱԿ /
                                </li>

                            </ul>
                        </div>
                        <div class="price-footer">
                            <a v-if="isAuthenticated" @click="$modal.show('buy-package-modal', pricings[3])" class="purchase-btn">Գնել</a>
                            <a v-else @click="openApplicationModal" class="purchase-btn">Գնել</a>
                        </div>
                    </div>
                </div>
           </VueSlickCarousel>
           <buy-package-modal/>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import WOW from 'wowjs';
import BuyPackageModal from './BuyPackageModal';


export default {
    mounted() {
        new WOW.WOW({
            live: false
        }).init();
        this.$store.dispatch('pricing/get')
    },
    computed: {
        pricings() {
            return this.$store.getters['pricing/pricing']
        },
        isAuthenticated() {
            return this.$store.getters['auth/isAuthenticated']
        },
    },
    methods:{
        consoleLog(e){
            console.log(e)
        },
        openApplicationModal(){
            this.$fire({
                text: "Խնդրում ենք մուտք գործել համակարգ փաթեթ գնելու համար",
                type: "info",
                confirmButtonText: 'Մուտք գործել',
            }).then((result) => {
                if (result.value) {
                    this.$router.push(`/login`);
                } else {
                }
            })
        }
    },
    data() {
      return {
        settings: {
            "dots": true,
            "arrow": true,
            "slidesToShow": 4,
            "responsive":[
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
         }
      }
    },
    name: 'Pricing',
    components: { VueSlickCarousel, BuyPackageModal},
  }
</script>
