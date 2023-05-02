    <template>
    <div>
        <div id="details">
            <header class="position-relative mob-image-block">
                <img src="~/assets/landing/images/details.jpg" alt="image" class="w-100">
                <img src="~/assets/landing/images/sliderLayout.png" alt="layout" class="w-100 layout">
            </header>
            <div class="notAuthenticatedContent block-container">
                <h1 class="main-title">Փաթեթներ</h1>
                <p class="text-distance text-center mb-0 main-content-styles px-4">{{selectedTab === 0 ? 'Կազմակերպիր պետական գնման գործընթացները արագ և ճշգրիտ' : 'Ստացիր բիզնեսի զարգացման նոր հնարավորություններ'}}</p>
                <b-card no-body>
                    <b-tabs v-model="selectedTab" pills card>
                    <b-tab title="Պետականի համար" active>
                        <div class="details-desktop">
                            <table class="packages-table w-100">
                                <tr class="table-header">
                                    <th class="bg-white"></th>
                                    <th class="border-top-left-radius">
                                        <p class="package-header">Էկոնոմ</p>
                                        <p class="package-content"><span>{{statePackages.econom.price}}</span> դր.</p>
                                    </th>
                                    <th>
                                        <p class="package-header">Պրեմիում</p>
                                        <p class="package-content"><span>{{statePackages.premium.price}}</span> դր.</p>
                                    </th>
                                    <th class="border-top-right-radius">
                                        <p class="package-header">Գոլդ</p>
                                        <p class="package-content"><span>{{statePackages.gold.price}}</span> դր.</p>
                                    </th>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header" :class="showContent_id_1 ? 'active' : ''">Գնումների պլանի ստեղծում և կառավարում</span>
                                        <span class="d-flex align-items-center more-block" @click="more(1)" data-toggle="collapse" data-target="#collapse_1" aria-expanded="false" aria-controls="collapse_1">
                                            <span class="more">{{showContent_id_1 ? 'Փակել' : 'Ավելին'}}</span>
                                            <img :style="showContent_id_1 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                        </span>
                                        <ul id="collapse_1" class="packages-content collapse" :style="showContent_id_1 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                            <li><span>մեկից ավելի տեսակների (պետական բյուջեի կամ այլ միջոցների հաշվին իրականացվող) և տարբեր տարիների գնումների պլանի ստեղծման հնարավորություն</span></li>
                                            <li><span>գնումների պլանի անսահմանափակ փոփոխությունների իրականացման հնարավորություն</span></li>
                                            <li><span>գնումների պլանի արտահանում excel և pdf ձևաչափերով</span></li>
                                            <li><span>գնման առարկաների ավելացում ԳՄԱ (CPV) կոդերի հայերեն և ռուսերեն անվանումների նույնականացմամբ</span></li>
                                            <li><span>գնումների պլանում գնման առարկաների ավտոմատ դասակարգում` ըստ խմբերի և հերթականության</span></li>
                                            <li><span>գնման ձևերի ավտոմատ որոշման հնարավորություն</span></li>
                                            <li><span>գնումների պլանավորում` ըստ ծրագրերի և ծախսային հոդվածների դասակարգման</span></li>
                                            <li><span>պլանավորված և փաստացի իրականացված գնումների վերահսկողություն</span></li>
                                        </ul>
                                    </td>
                                    <td class="text-center td-fixed-width">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center td-fixed-width">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center td-fixed-width">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header" :class="showContent_id_2 ? 'active' : ''">Պատասխանատու ստորաբաժանումների ստեղծում</span>
                                        <span class="d-flex align-items-center more-block" @click="more(2)" data-toggle="collapse" data-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                                            <span class="more">{{showContent_id_2 ? 'Փակել' : 'Ավելին'}}</span>
                                            <img :style="showContent_id_2 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                        </span>
                                        <ul id="collapse_2" class="packages-content collapse" :style="showContent_id_2 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                            <li><span>մեկից ավելի պատասխանատու ստորաբաժանումների ստեղծում</span></li>
                                            <li><span>hրամանի պատրաստում ավտոմատ եղանակով</span></li>
                                            <li><span>պատասխանատու ստորաբաժանումների համար համակարգում «անձնական սենյակի» տրամադրում <span class="soon">(շուտով)</span> </span></li>
                                            <li><span>պատասխանատու ստորաբաժանումների կողմից գնման հայտերի պատրաստման, ներկայացման համար անհրաժեշտ գործիքակազմի ապահովում <span class="soon">(շուտով)</span> </span></li>
                                            <li><span>պայմանագրերի կառավարման համար անհրաժեշտ գործիքակազմի ապահովում («Գոլդ» փաթեթի շրջանակում))</span></li>
                                        </ul>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header" :class="showContent_id_3 ? 'active' : ''">Մեկ անձից գնման ընթացակարգերի կազմակերպում</span>
                                        <span class="d-flex align-items-center more-block" @click="more(3)" data-toggle="collapse" data-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                                            <span class="more">{{showContent_id_3 ? 'Փակել' : 'Ավելին'}}</span>
                                            <img :style="showContent_id_3 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                        </span>
                                        <ul id="collapse_3" class="packages-content collapse" :style="showContent_id_3 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                            <li><span>գնման ընթացակարգի կազմակերպում գնումների պլանից ընտրված ելակետային տվյալների հիման վրա</span></li>
                                            <li><span>գնման ընթացակարգի կազմակերպում դրսից մուտքագրված ելակետային տվյալների հիման վրա</span></li>
                                            <li><span>ընթացակարգի կազմակերպում մեկ կամ ավելի մասնակիցների ներգրավմամբ</span></li>
                                            <li><span>ընթացակարգի կազմակերպման հնարավորություն համակարգում ներդրված մրցակցային հարթակի միջոցով</span></li>
                                            <li><span>ընտրված մասնակցի որոշում ըստ առանձին չափաբաժինների կամ ըստ ընդհանուր գների հանրագումարի</span></li>
                                            <li><span>մուտքագրված ելակետային տվյալների հիման վրա գնումների մասին ՀՀ օրենսդրությամբ նախատեսված բոլոր փաստաթղթերի ավտոմատ պատրաստում word և pdf ձևաչափերով (խմբագրման հնարավորությամբ), ընդ որում՝</span>
                                                <ul>
                                                    <li><span>գնման հայտ (հայերեն)</span></li>
                                                    <li><span>պատասխանատու ստորաբաժանման հրաման (հայերեն)</span></li>
                                                    <li><span>մասնակիցներին ներկայացվող պայմաններ (պայմանագրի նախագիծ) (հայերեն)</span></li>
                                                    <li><span>հայտերի գնահատման նիստի արձանագրություն (հայերեն)</span></li>
                                                    <li><span>մասնակցի կողմից ներկայացվող գնային առաջարկ (հայերեն)</span></li>
                                                    <li><span>վերջնական պայմանագիր (հայերեն)</span></li>
                                                    <li><span>պայմանագիր կնքելու որոշման մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                    <li><span>չկայացած ընթացակարգի (չափաբաժինների) մասին հայտարարություն(հայերեն և ռուսերեն)</span></li>
                                                    <li><span>կնքված պայմանագրի մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                    <li><span>գնման ընթացակարգի արձանագրություն (գնման գինը 1մլն գերազանցելու դեպքում)(հայերեն)</span></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header" :class="showContent_id_4 ? 'active' : ''">Մրցակցային գնման ընթացակարգերի (ԲՄ, ՀԲՄ, ԳՀ, ՀՄԱ) կազմակերպում</span>
                                        <span class="d-flex align-items-center more-block" @click="more(4)" data-toggle="collapse" data-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                                            <span class="more">{{showContent_id_4 ? 'Փակել' : 'Ավելին'}}</span>
                                            <img :style="showContent_id_4 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                        </span>
                                        <ul id="collapse_4" class="packages-content collapse" :style="showContent_id_4 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                            <li><span>գնման ընթացակարգի կազմակերպում գնումների պլանից ընտրված ելակետային տվյալների հիման վրա</span></li>
                                            <li><span>գնման ընթացակարգի կազմակերպում դրսից մուտքագրված ելակետային տվյալների հիման վրա</span></li>
                                            <li><span>գների ավտոմատ համեմատում և ընտրված մասնակցի որոշում</span></li>
                                            <li><span>գնումների գործընթացին մասնակցելու իրավունք չունեցող մասնակիցների ցուցակում մասնակցի առկայության վերաբերյալ ավտոմատ ծանուցում մուտքագրման ընթացքում</span></li>
                                            <li><span>էլեկտրոնային գնումների դեպքում մասնակցի կողմից ներկայացված հայտերի (zip ֆայլեր) ներբեռնման և գների ավտոմատ լրացման հնարավորություն՝ ըստ համապատասխան չափաբաժինների</span></li>
                                            <li><span>բանակցությունների ընթացքում մասնակիցների կողմից ներկայացված նոր գնային առաջարկների մուտքագրման հնարավորություն</span></li>
                                            <li><span>մուտքագրված ելակետային տվյալների հիման վրա գնումների մասին ՀՀ օրենսդրությամբ նախատեսված բոլոր փաստաթղթերի ավտոմատ պատրաստում word և pdf ձևաչափերով (խմբագրման հնարավորությամբ), ընդ որում՝</span>
                                                <ul>
                                                    <li><span>գնման հայտ (հայերեն) <span class="soon">(շուտով)</span> </span></li>
                                                    <li><span>պատասխանատու ստորաբաժանման հրաման (հայերեն)</span></li>
                                                    <li><span>գնահատող հանձնաժողովի հրաման</span></li>
                                                    <li><span>գնահատող հանձնաժողովի առաջին նիստի արձանագրություն</span></li>
                                                    <li><span>պայմանագրի նախագիծ (հայերեն և ռուսերեն)</span></li>
                                                    <li><span>ընթացակարգի հայտարարություն և հրավեր (էլեկտրոնային և թղթային տարբերակներով ապրանք, ծառայություն, աշխատանք)(հայերեն և ռուսերեն) (շուտով)</span></li>
                                                    <li><span>հայտերի բացման և գնահատման նիստի արձանագրություն (հայերեն և ռուսերեն)</span></li>
                                                    <li><span>շահերի բախման բացակայության մասին հայտարարություն (հայերեն)</span></li>
                                                    <li><span>գնահատման թերթիկ (հայերեն)</span></li>
                                                    <li><span>ծանուցումներ (բանակցություններ, ՊԵԿ և այլ)(հայերեն)</span></li>
                                                    <li><span>պայմանագիր կնքելու որոշման մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                    <li><span>չկայացած ընթացակարգի (չափաբաժինների) մասին հայտարարություն(հայերեն և ռուսերեն)</span></li>
                                                    <li><span>պայմանագիր կնքելու առաջարկ</span></li>
                                                    <li><span>վերջնական պայմանագիր (հայերեն)</span></li>
                                                    <li><span>համաձայնագրեր <span class="soon">(շուտով)</span> </span></li>
                                                    <li><span>կնքված պայմանագրի մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                    <li><span>գնման ընթացակարգի արձանագրություն (գնման գինը 1մլն գերազանցելու դեպքում)(հայերեն)</span></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header" :class="showContent_id_5 ? 'active' : ''">Պայմանագրի կառավարում</span>
                                        <span class="d-flex align-items-center more-block" @click="more(5)" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                                            <span class="more">{{showContent_id_5 ? 'Փակել' : 'Ավելին'}}</span> 
                                            <img :style="showContent_id_5 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                        </span>
                                        <ul id="collapse_5" class="packages-content collapse" :style="showContent_id_5 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                            <li><span>պայմանագրի շարժի վերահսկում</span></li>
                                            <li><span>հանձնման-ընդունման փաստաթղթերի՝ ներառյալ եզրակացության ավտոմատ կազմում հերթական համարակալմամբ</span></li>
                                            <li><span>կատարման ժամկետների հիշեցում</span></li>
                                        </ul>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header" :class="showContent_id_6 ? 'active' : ''">Գնման առարկայի տեխնիկական բնութագերի բազայից օգտվելու հնարավորություն <span class="soon">(շուտով)</span> </span>
                                        <span class="d-flex align-items-center more-block" @click="more(6)" data-toggle="collapse" data-target="#collapse_6" aria-expanded="false" aria-controls="collapse_6">
                                            <span class="more">{{showContent_id_6 ? 'Փակել' : 'Ավելին'}}</span> 
                                            <img :style="showContent_id_6 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                        </span>
                                        <ul id="collapse_6" class="packages-content collapse" :style="showContent_id_6 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                            <li><span>հասանելիություն համակարգում մուտքագրված և/կամ վերամշակված բոլոր տեխնիկական բնութագրերին</span></li>
                                            <li><span>տեխնիկական բնութագրերի հայերեն մուտքագրման ընթացքում տեքստի ավտոմատ թարգմանություն ռուսերենի (համակարգում ներդրված թարգմանչական գործիքակազմի միջոցով)</span></li>
                                            <li><span>ընթացիկ տարում կազմակերպված և ավարտված տենդերների արդյունքների հիման վրա վերլուծված և ձևավորված նախահաշվային գների հասանելիություն</span></li>
                                            <li><span>բողոքների վերլուծություն</span></li>
                                        </ul> 
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="pb-0"></td>
                                    <td class="pb-0">
                                        <button @click="pleaseLogin" class="button_H48 px-0 w-100">Վճարել</button>
                                    </td>
                                    <td class="pb-0">
                                        <button @click="pleaseLogin" class="button_H48 px-0 w-100">Վճարել</button>
                                    </td>
                                    <td class="pb-0">
                                        <button @click="pleaseLogin" class="button_H48 px-0 w-100">Վճարել</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="pt-3 border-0"></td>
                                    <td class="pt-3 border-bottom-left-radius border_bottom border_left">
                                        <p class="m-0 packages-footer-header h6">Էկոնոմ</p>
                                        <p class="m-0 packages-footer-content"><span>{{statePackages.econom.price}}</span> դր.</p>
                                    </td>
                                    <td class="pt-3 border_bottom">
                                        <p class="m-0 packages-footer-header h6">Պրեմիում</p>
                                        <p class="m-0 packages-footer-content"><span>{{statePackages.premium.price}}</span> դր.</p>
                                    </td>
                                    <td class="pt-3 border-bottom-right-radius border_bottom">
                                        <p class="m-0 packages-footer-header h6">Գոլդ</p>
                                        <p class="m-0 packages-footer-content"><span>{{statePackages.gold.price}}</span> դր.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border-0"></td>
                                    <td colspan="2" class="border-0 pr-0">Ծառայությունների արժեքները սահմանված են 1 տարի ժամկետով և 1 համակարգողի համար։</td>
                                    <td class="border-0"></td>
                                </tr>
                            </table>
                        </div>
                        <div class="details-mobile">
                            <div>
                                <div class="details-mobile-header">
                                    <p class="package-header h6">Էկոնոմ</p>
                                    <p class="package-content"><span>{{statePackages.econom.price}}</span> դր.</p>
                                </div>
                                <div class="d-flex flex-column details-mobile-block">
                                    <div :class="mobileDetails_1 ? 'd-none' : 'd-block'">
                                        <p class="details-mobile-block-header">
                                            Գնումների պլանների և մեկ անձից գնումների ավտոմատացում
                                        </p>
                                        <div class="d-flex justify-content-center">
                                            <button @click="pleaseLogin" class="button_H48 button-width">Վճարել</button>
                                        </div>
                                    </div>
                                    <button :class="mobileDetails_1 ? 'pt-0' : ''" @click="mobileDetails(1)" class="details-btn" data-toggle="collapse" data-target="#parentcollapse_1" aria-expanded="false" aria-controls="parentcollapse_1">
                                        {{ mobileDetails_1 ? 'Փակել' : 'Մանրամասն'}}
                                        <img src="~/assets/landing/images/ArrowBottom.svg" alt="arrow" :style="mobileDetails_1 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'">
                                    </button>
                                    <div id="parentcollapse_1" class="packages-content collapse" >
                                        <div class="details-mobile-block-item">
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Գնումների պլանի ստեղծում և կառավարում</span>
                                            </div>    
                                            <span class="d-flex align-items-center more-block" @click="more(1)" data-toggle="collapse" data-target="#collapse_1" aria-expanded="false" aria-controls="collapse_1">
                                                <span class="more">{{showContent_id_1 ? 'Փակել' : 'Ավելին'}}</span>
                                                <img :style="showContent_id_1 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_1" class="packages-content collapse" :style="showContent_id_1 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>մեկից ավելի տեսակների (պետական բյուջեի կամ այլ միջոցների հաշվին իրականացվող) և տարբեր տարիների գնումների պլանի ստեղծման հնարավորություն</span></li>
                                                <li><span>գնումների պլանի անսահմանափակ փոփոխությունների իրականացման հնարավորություն</span></li>
                                                <li><span>գնումների պլանի արտահանում excel և pdf ձևաչափերով</span></li>
                                                <li><span>գնման առարկաների ավելացում ԳՄԱ (CPV) կոդերի հայերեն և ռուսերեն անվանումների նույնականացմամբ</span></li>
                                                <li><span>գնումների պլանում գնման առարկաների ավտոմատ դասակարգում` ըստ խմբերի և հերթականության</span></li>
                                                <li><span>գնման ձևերի ավտոմատ որոշման հնարավորություն</span></li>
                                                <li><span>գնումների պլանավորում` ըստ ծրագրերի և ծախսային հոդվածների դասակարգման</span></li>
                                                <li><span>պլանավորված և փաստացի իրականացված գնումների վերահսկողություն</span></li>
                                            </ul>
                                        </div>
                                        <div class="details-mobile-block-item">
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պատասխանատու ստորաբաժանումների ստեղծում</span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(2)" data-toggle="collapse" data-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                                                <span class="more">{{showContent_id_2 ? 'Փակել' : 'Ավելին'}}</span>
                                                <img :style="showContent_id_2 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_2" class="packages-content collapse" :style="showContent_id_2 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>մեկից ավելի պատասխանատու ստորաբաժանումների ստեղծում</span></li>
                                                <li><span>hրամանի պատրաստում ավտոմատ եղանակով</span></li>
                                                <li><span>պատասխանատու ստորաբաժանումների համար համակարգում «անձնական սենյակի» տրամադրում <span class="soon">(շուտով)</span> </span></li>
                                                <li><span>պատասխանատու ստորաբաժանումների կողմից գնման հայտերի պատրաստման, ներկայացման համար անհրաժեշտ գործիքակազմի ապահովում <span class="soon">(շուտով)</span> </span></li>
                                                <li><span>պայմանագրերի կառավարման համար անհրաժեշտ գործիքակազմի ապահովում («Գոլդ» փաթեթի շրջանակում))</span></li>
                                            </ul>
                                        </div>
                                        <div class="details-mobile-block-item">
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Մեկ անձից գնման ընթացակարգերի կազմակերպում</span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(3)" data-toggle="collapse" data-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                                                <span class="more">{{showContent_id_3 ? 'Փակել' : 'Ավելին'}}</span>
                                                <img :style="showContent_id_3 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_3" class="packages-content collapse" :style="showContent_id_3 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>գնման ընթացակարգի կազմակերպում գնումների պլանից ընտրված ելակետային տվյալների հիման վրա</span></li>
                                                <li><span>գնման ընթացակարգի կազմակերպում դրսից մուտքագրված ելակետային տվյալների հիման վրա</span></li>
                                                <li><span>ընթացակարգի կազմակերպում մեկ կամ ավելի մասնակիցների ներգրավմամբ</span></li>
                                                <li><span>ընթացակարգի կազմակերպման հնարավորություն համակարգում ներդրված մրցակցային հարթակի միջոցով</span></li>
                                                <li><span>ընտրված մասնակցի որոշում ըստ առանձին չափաբաժինների կամ ըստ ընդհանուր գների հանրագումարի</span></li>
                                                <li><span>մուտքագրված ելակետային տվյալների հիման վրա գնումների մասին ՀՀ օրենսդրությամբ նախատեսված բոլոր փաստաթղթերի ավտոմատ պատրաստում word և pdf ձևաչափերով (խմբագրման հնարավորությամբ), ընդ որում՝</span>
                                                    <ul>
                                                        <li><span>գնման հայտ (հայերեն)</span></li>
                                                        <li><span>պատասխանատու ստորաբաժանման հրաման (հայերեն)</span></li>
                                                        <li><span>մասնակիցներին ներկայացվող պայմաններ (պայմանագրի նախագիծ) (հայերեն)</span></li>
                                                        <li><span>հայտերի գնահատման նիստի արձանագրություն (հայերեն)</span></li>
                                                        <li><span>մասնակցի կողմից ներկայացվող գնային առաջարկ (հայերեն)</span></li>
                                                        <li><span>վերջնական պայմանագիր (հայերեն)</span></li>
                                                        <li><span>պայմանագիր կնքելու որոշման մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>չկայացած ընթացակարգի (չափաբաժինների) մասին հայտարարություն(հայերեն և ռուսերեն)</span></li>
                                                        <li><span>կնքված պայմանագրի մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>գնման ընթացակարգի արձանագրություն (գնման գինը 1մլն գերազանցելու դեպքում)(հայերեն)</span></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="details-mobile-block-item">
                                            <div class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Մրցակցային գնման ընթացակարգերի (ԲՄ, ՀԲՄ, ԳՀ, ՀՄԱ) կազմակերպում</span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(4)" data-toggle="collapse" data-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                                                <span class="more">{{showContent_id_4 ? 'Փակել' : 'Ավելին'}}</span>
                                                <img :style="showContent_id_4 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_4" class="packages-content collapse" :style="showContent_id_4 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>գնման ընթացակարգի կազմակերպում գնումների պլանից ընտրված ելակետային տվյալների հիման վրա</span></li>
                                                <li><span>գնման ընթացակարգի կազմակերպում դրսից մուտքագրված ելակետային տվյալների հիման վրա</span></li>
                                                <li><span>գների ավտոմատ համեմատում և ընտրված մասնակցի որոշում</span></li>
                                                <li><span>գնումների գործընթացին մասնակցելու իրավունք չունեցող մասնակիցների ցուցակում մասնակցի առկայության վերաբերյալ ավտոմատ ծանուցում մուտքագրման ընթացքում</span></li>
                                                <li><span>էլեկտրոնային գնումների դեպքում մասնակցի կողմից ներկայացված հայտերի (zip ֆայլեր) ներբեռնման և գների ավտոմատ լրացման հնարավորություն՝ ըստ համապատասխան չափաբաժինների</span></li>
                                                <li><span>բանակցությունների ընթացքում մասնակիցների կողմից ներկայացված նոր գնային առաջարկների մուտքագրման հնարավորություն</span></li>
                                                <li><span>մուտքագրված ելակետային տվյալների հիման վրա գնումների մասին ՀՀ օրենսդրությամբ նախատեսված բոլոր փաստաթղթերի ավտոմատ պատրաստում word և pdf ձևաչափերով (խմբագրման հնարավորությամբ), ընդ որում՝</span>
                                                    <ul>
                                                        <li><span>գնման հայտ (հայերեն) <span class="soon">(շուտով)</span> </span></li>
                                                        <li><span>պատասխանատու ստորաբաժանման հրաման (հայերեն)</span></li>
                                                        <li><span>գնահատող հանձնաժողովի հրաման</span></li>
                                                        <li><span>գնահատող հանձնաժողովի առաջին նիստի արձանագրություն</span></li>
                                                        <li><span>պայմանագրի նախագիծ (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>ընթացակարգի հայտարարություն և հրավեր (էլեկտրոնային և թղթային տարբերակներով ապրանք, ծառայություն, աշխատանք)(հայերեն և ռուսերեն) (շուտով)</span></li>
                                                        <li><span>հայտերի բացման և գնահատման նիստի արձանագրություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>շահերի բախման բացակայության մասին հայտարարություն (հայերեն)</span></li>
                                                        <li><span>գնահատման թերթիկ (հայերեն)</span></li>
                                                        <li><span>ծանուցումներ (բանակցություններ, ՊԵԿ և այլ)(հայերեն)</span></li>
                                                        <li><span>պայմանագիր կնքելու որոշման մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>չկայացած ընթացակարգի (չափաբաժինների) մասին հայտարարություն(հայերեն և ռուսերեն)</span></li>
                                                        <li><span>պայմանագիր կնքելու առաջարկ</span></li>
                                                        <li><span>վերջնական պայմանագիր (հայերեն)</span></li>
                                                        <li><span>համաձայնագրեր <span class="soon">(շուտով)</span> </span></li>
                                                        <li><span>կնքված պայմանագրի մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>գնման ընթացակարգի արձանագրություն (գնման գինը 1մլն գերազանցելու դեպքում)(հայերեն)</span></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="details-mobile-block-item">
                                            <div class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պայմանագրի կառավարում</span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(5)" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                                                <span class="more">{{showContent_id_5 ? 'Փակել' : 'Ավելին'}}</span> 
                                                <img :style="showContent_id_5 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_5" class="packages-content collapse" :style="showContent_id_5 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>պայմանագրի շարժի վերահսկում</span></li>
                                                <li><span>հանձնման-ընդունման փաստաթղթերի՝ ներառյալ եզրակացության ավտոմատ կազմում հերթական համարակալմամբ</span></li>
                                                <li><span>կատարման ժամկետների հիշեցում</span></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header">Գնման առարկայի տեխնիկական բնութագերի բազայից օգտվելու հնարավորություն <span class="soon">(շուտով)</span> </span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(6)" data-toggle="collapse" data-target="#collapse_6" aria-expanded="false" aria-controls="collapse_6">
                                                <span class="more">{{showContent_id_6 ? 'Փակել' : 'Ավելին'}}</span> 
                                                <img :style="showContent_id_6 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_6" class="packages-content collapse" :style="showContent_id_6 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>հասանելիություն համակարգում մուտքագրված և/կամ վերամշակված բոլոր տեխնիկական բնութագրերին</span></li>
                                                <li><span>տեխնիկական բնութագրերի հայերեն մուտքագրման ընթացքում տեքստի ավտոմատ թարգմանություն ռուսերենի (համակարգում ներդրված թարգմանչական գործիքակազմի միջոցով)</span></li>
                                                <li><span>ընթացիկ տարում կազմակերպված և ավարտված տենդերների արդյունքների հիման վրա վերլուծված և ձևավորված նախահաշվային գների հասանելիություն</span></li>
                                                <li><span>բողոքների վերլուծություն</span></li>
                                            </ul> 
                                        </div>
                                        <div class="d-flex justify-content-center mt-5 mb-3">
                                            <button @click="pleaseLogin" class="button_H48 button-width">Գնել</button>
                                        </div>
                                        <div>
                                            <p class="m-0 packages-footer-header h6">Էկոնոմ</p>
                                            <p class="m-0 packages-footer-content"><span>{{statePackages.econom.price}}</span> դր.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="details-mobile-header ">
                                    <p class="package-header h6">Պրեմիում</p>
                                    <p class="package-content"><span>{{statePackages.premium.price}}</span> դր.</p>
                                </div>
                                <div class="d-flex flex-column details-mobile-block">
                                    <div :class="mobileDetails_2 ? 'd-none' : 'd-block'">
                                        <p class="details-mobile-block-header">
                                            Գնումների պլանների, մեկ անձից և մրցակցային գնումների ավտոմատացում
                                        </p>
                                        <div class="d-flex justify-content-center">
                                            <button @click="pleaseLogin" class="button_H48 button-width">Վճարել</button>
                                        </div>
                                    </div>
                                    <button :class="mobileDetails_2 ? 'pt-0' : ''" @click="mobileDetails(2)" class="details-btn" data-toggle="collapse" data-target="#parentcollapse_2" aria-expanded="false" aria-controls="parentcollapse_2">
                                        {{ mobileDetails_2 ? 'Փակել' : 'Մանրամասն'}}
                                        <img src="~/assets/landing/images/ArrowBottom.svg" alt="arrow" :style="mobileDetails_2 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'">
                                    </button>
                                    <div id="parentcollapse_2" class="packages-content collapse" >
                                        <div class="details-mobile-block-item">
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Գնումների պլանի ստեղծում և կառավարում</span>
                                            </div>    
                                            <span class="d-flex align-items-center more-block" @click="more(7)" data-toggle="collapse" data-target="#collapse_7" aria-expanded="false" aria-controls="collapse_7">
                                                <span class="more">{{showContent_id_7 ? 'Փակել' : 'Ավելին'}}</span>
                                                <img :style="showContent_id_7 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_7" class="packages-content collapse" :style="showContent_id_7 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>մեկից ավելի տեսակների (պետական բյուջեի կամ այլ միջոցների հաշվին իրականացվող) և տարբեր տարիների գնումների պլանի ստեղծման հնարավորություն</span></li>
                                                <li><span>գնումների պլանի անսահմանափակ փոփոխությունների իրականացման հնարավորություն</span></li>
                                                <li><span>գնումների պլանի արտահանում excel և pdf ձևաչափերով</span></li>
                                                <li><span>գնման առարկաների ավելացում ԳՄԱ (CPV) կոդերի հայերեն և ռուսերեն անվանումների նույնականացմամբ</span></li>
                                                <li><span>գնումների պլանում գնման առարկաների ավտոմատ դասակարգում` ըստ խմբերի և հերթականության</span></li>
                                                <li><span>գնման ձևերի ավտոմատ որոշման հնարավորություն</span></li>
                                                <li><span>գնումների պլանավորում` ըստ ծրագրերի և ծախսային հոդվածների դասակարգման</span></li>
                                                <li><span>պլանավորված և փաստացի իրականացված գնումների վերահսկողություն</span></li>
                                            </ul>
                                        </div>
                                        <div class="details-mobile-block-item">
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պատասխանատու ստորաբաժանումների ստեղծում</span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(8)" data-toggle="collapse" data-target="#collapse_8" aria-expanded="false" aria-controls="collapse_8">
                                                <span class="more">{{showContent_id_8 ? 'Փակել' : 'Ավելին'}}</span>
                                                <img :style="showContent_id_8 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_8" class="packages-content collapse" :style="showContent_id_8 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>մեկից ավելի պատասխանատու ստորաբաժանումների ստեղծում</span></li>
                                                <li><span>hրամանի պատրաստում ավտոմատ եղանակով</span></li>
                                                <li><span>պատասխանատու ստորաբաժանումների համար համակարգում «անձնական սենյակի» տրամադրում <span class="soon">(շուտով)</span> </span></li>
                                                <li><span>պատասխանատու ստորաբաժանումների կողմից գնման հայտերի պատրաստման, ներկայացման համար անհրաժեշտ գործիքակազմի ապահովում <span class="soon">(շուտով)</span> </span></li>
                                                <li><span>պայմանագրերի կառավարման համար անհրաժեշտ գործիքակազմի ապահովում («Գոլդ» փաթեթի շրջանակում))</span></li>
                                            </ul>
                                        </div>
                                        <div class="details-mobile-block-item">
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Մեկ անձից գնման ընթացակարգերի կազմակերպում</span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(9)" data-toggle="collapse" data-target="#collapse_9" aria-expanded="false" aria-controls="collapse_9">
                                                <span class="more">{{showContent_id_9 ? 'Փակել' : 'Ավելին'}}</span>
                                                <img :style="showContent_id_9 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_9" class="packages-content collapse" :style="showContent_id_9 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>գնման ընթացակարգի կազմակերպում գնումների պլանից ընտրված ելակետային տվյալների հիման վրա</span></li>
                                                <li><span>գնման ընթացակարգի կազմակերպում դրսից մուտքագրված ելակետային տվյալների հիման վրա</span></li>
                                                <li><span>ընթացակարգի կազմակերպում մեկ կամ ավելի մասնակիցների ներգրավմամբ</span></li>
                                                <li><span>ընթացակարգի կազմակերպման հնարավորություն համակարգում ներդրված մրցակցային հարթակի միջոցով</span></li>
                                                <li><span>ընտրված մասնակցի որոշում ըստ առանձին չափաբաժինների կամ ըստ ընդհանուր գների հանրագումարի</span></li>
                                                <li><span>մուտքագրված ելակետային տվյալների հիման վրա գնումների մասին ՀՀ օրենսդրությամբ նախատեսված բոլոր փաստաթղթերի ավտոմատ պատրաստում word և pdf ձևաչափերով (խմբագրման հնարավորությամբ), ընդ որում՝</span>
                                                    <ul>
                                                        <li><span>գնման հայտ (հայերեն)</span></li>
                                                        <li><span>պատասխանատու ստորաբաժանման հրաման (հայերեն)</span></li>
                                                        <li><span>մասնակիցներին ներկայացվող պայմաններ (պայմանագրի նախագիծ) (հայերեն)</span></li>
                                                        <li><span>հայտերի գնահատման նիստի արձանագրություն (հայերեն)</span></li>
                                                        <li><span>մասնակցի կողմից ներկայացվող գնային առաջարկ (հայերեն)</span></li>
                                                        <li><span>վերջնական պայմանագիր (հայերեն)</span></li>
                                                        <li><span>պայմանագիր կնքելու որոշման մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>չկայացած ընթացակարգի (չափաբաժինների) մասին հայտարարություն(հայերեն և ռուսերեն)</span></li>
                                                        <li><span>կնքված պայմանագրի մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>գնման ընթացակարգի արձանագրություն (գնման գինը 1մլն գերազանցելու դեպքում)(հայերեն)</span></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="details-mobile-block-item">
                                            <div class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Մրցակցային գնման ընթացակարգերի (ԲՄ, ՀԲՄ, ԳՀ, ՀՄԱ) կազմակերպում</span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(10)" data-toggle="collapse" data-target="#collapse_10" aria-expanded="false" aria-controls="collapse_10">
                                                <span class="more">{{showContent_id_10 ? 'Փակել' : 'Ավելին'}}</span>
                                                <img :style="showContent_id_10 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_10" class="packages-content collapse" :style="showContent_id_10 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>գնման ընթացակարգի կազմակերպում գնումների պլանից ընտրված ելակետային տվյալների հիման վրա</span></li>
                                                <li><span>գնման ընթացակարգի կազմակերպում դրսից մուտքագրված ելակետային տվյալների հիման վրա</span></li>
                                                <li><span>գների ավտոմատ համեմատում և ընտրված մասնակցի որոշում</span></li>
                                                <li><span>գնումների գործընթացին մասնակցելու իրավունք չունեցող մասնակիցների ցուցակում մասնակցի առկայության վերաբերյալ ավտոմատ ծանուցում մուտքագրման ընթացքում</span></li>
                                                <li><span>էլեկտրոնային գնումների դեպքում մասնակցի կողմից ներկայացված հայտերի (zip ֆայլեր) ներբեռնման և գների ավտոմատ լրացման հնարավորություն՝ ըստ համապատասխան չափաբաժինների</span></li>
                                                <li><span>բանակցությունների ընթացքում մասնակիցների կողմից ներկայացված նոր գնային առաջարկների մուտքագրման հնարավորություն</span></li>
                                                <li><span>մուտքագրված ելակետային տվյալների հիման վրա գնումների մասին ՀՀ օրենսդրությամբ նախատեսված բոլոր փաստաթղթերի ավտոմատ պատրաստում word և pdf ձևաչափերով (խմբագրման հնարավորությամբ), ընդ որում՝</span>
                                                    <ul>
                                                        <li><span>գնման հայտ (հայերեն) <span class="soon">(շուտով)</span> </span></li>
                                                        <li><span>պատասխանատու ստորաբաժանման հրաման (հայերեն)</span></li>
                                                        <li><span>գնահատող հանձնաժողովի հրաման</span></li>
                                                        <li><span>գնահատող հանձնաժողովի առաջին նիստի արձանագրություն</span></li>
                                                        <li><span>պայմանագրի նախագիծ (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>ընթացակարգի հայտարարություն և հրավեր (էլեկտրոնային և թղթային տարբերակներով ապրանք, ծառայություն, աշխատանք)(հայերեն և ռուսերեն) (շուտով)</span></li>
                                                        <li><span>հայտերի բացման և գնահատման նիստի արձանագրություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>շահերի բախման բացակայության մասին հայտարարություն (հայերեն)</span></li>
                                                        <li><span>գնահատման թերթիկ (հայերեն)</span></li>
                                                        <li><span>ծանուցումներ (բանակցություններ, ՊԵԿ և այլ)(հայերեն)</span></li>
                                                        <li><span>պայմանագիր կնքելու որոշման մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>չկայացած ընթացակարգի (չափաբաժինների) մասին հայտարարություն(հայերեն և ռուսերեն)</span></li>
                                                        <li><span>պայմանագիր կնքելու առաջարկ</span></li>
                                                        <li><span>վերջնական պայմանագիր (հայերեն)</span></li>
                                                        <li><span>համաձայնագրեր <span class="soon">(շուտով)</span> </span></li>
                                                        <li><span>կնքված պայմանագրի մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>գնման ընթացակարգի արձանագրություն (գնման գինը 1մլն գերազանցելու դեպքում)(հայերեն)</span></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="details-mobile-block-item">
                                            <div class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պայմանագրի կառավարում</span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(11)" data-toggle="collapse" data-target="#collapse_11" aria-expanded="false" aria-controls="collapse_11">
                                                <span class="more">{{showContent_id_11 ? 'Փակել' : 'Ավելին'}}</span> 
                                                <img :style="showContent_id_11 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_11" class="packages-content collapse" :style="showContent_id_11 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>պայմանագրի շարժի վերահսկում</span></li>
                                                <li><span>հանձնման-ընդունման փաստաթղթերի՝ ներառյալ եզրակացության ավտոմատ կազմում հերթական համարակալմամբ</span></li>
                                                <li><span>կատարման ժամկետների հիշեցում</span></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header">Գնման առարկայի տեխնիկական բնութագերի բազայից օգտվելու հնարավորություն <span class="soon">(շուտով)</span> </span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(12)" data-toggle="collapse" data-target="#collapse_12" aria-expanded="false" aria-controls="collapse_12">
                                                <span class="more">{{showContent_id_12 ? 'Փակել' : 'Ավելին'}}</span> 
                                                <img :style="showContent_id_12 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_12" class="packages-content collapse" :style="showContent_id_12 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>հասանելիություն համակարգում մուտքագրված և/կամ վերամշակված բոլոր տեխնիկական բնութագրերին</span></li>
                                                <li><span>տեխնիկական բնութագրերի հայերեն մուտքագրման ընթացքում տեքստի ավտոմատ թարգմանություն ռուսերենի (համակարգում ներդրված թարգմանչական գործիքակազմի միջոցով)</span></li>
                                                <li><span>ընթացիկ տարում կազմակերպված և ավարտված տենդերների արդյունքների հիման վրա վերլուծված և ձևավորված նախահաշվային գների հասանելիություն</span></li>
                                                <li><span>բողոքների վերլուծություն</span></li>
                                            </ul> 
                                        </div>
                                        <div class="d-flex justify-content-center mt-5 mb-3">
                                            <button @click="pleaseLogin" class="button_H48 button-width">Գնել</button>
                                        </div>
                                        <div>
                                            <p class="m-0 packages-footer-header h6">Պրեմիում</p>
                                            <p class="m-0 packages-footer-content"><span>{{statePackages.premium.price}}</span> դր.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="details-mobile-header">
                                    <p class="package-header h6">Գոլդ</p>
                                    <p class="package-content"><span>{{statePackages.gold.price}}</span> դր.</p>
                                </div>
                                <div class="d-flex flex-column details-mobile-block">
                                    <div :class="mobileDetails_3 ? 'd-none' : 'd-block'">
                                        <p class="details-mobile-block-header">
                                            Գնումների պլանների, մեկ անձից և մրցակցային գնումների ավտոմատացում, պայմանագրերի կառավարում
                                        </p>
                                        <div class="d-flex justify-content-center">
                                            <button @click="pleaseLogin" class="button_H48 button-width">Վճարել</button>
                                        </div>
                                    </div>
                                    <button :class="mobileDetails_3 ? 'pt-0' : ''" @click="mobileDetails(3)" class="details-btn" data-toggle="collapse" data-target="#parentcollapse_3" aria-expanded="false" aria-controls="parentcollapse_3">
                                        {{ mobileDetails_3 ? 'Փակել' : 'Մանրամասն'}}
                                        <img src="~/assets/landing/images/ArrowBottom.svg" alt="arrow" :style="mobileDetails_3 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'">
                                    </button>
                                    <div id="parentcollapse_3" class="packages-content collapse">
                                        <div class="details-mobile-block-item">
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Գնումների պլանի ստեղծում և կառավարում</span>
                                            </div>    
                                            <span class="d-flex align-items-center more-block" @click="more(13)" data-toggle="collapse" data-target="#collapse_13" aria-expanded="false" aria-controls="collapse_13">
                                                <span class="more">{{showContent_id_13 ? 'Փակել' : 'Ավելին'}}</span>
                                                <img :style="showContent_id_13 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_13" class="packages-content collapse" :style="showContent_id_13 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>մեկից ավելի տեսակների (պետական բյուջեի կամ այլ միջոցների հաշվին իրականացվող) և տարբեր տարիների գնումների պլանի ստեղծման հնարավորություն</span></li>
                                                <li><span>գնումների պլանի անսահմանափակ փոփոխությունների իրականացման հնարավորություն</span></li>
                                                <li><span>գնումների պլանի արտահանում excel և pdf ձևաչափերով</span></li>
                                                <li><span>գնման առարկաների ավելացում ԳՄԱ (CPV) կոդերի հայերեն և ռուսերեն անվանումների նույնականացմամբ</span></li>
                                                <li><span>գնումների պլանում գնման առարկաների ավտոմատ դասակարգում` ըստ խմբերի և հերթականության</span></li>
                                                <li><span>գնման ձևերի ավտոմատ որոշման հնարավորություն</span></li>
                                                <li><span>գնումների պլանավորում` ըստ ծրագրերի և ծախսային հոդվածների դասակարգման</span></li>
                                                <li><span>պլանավորված և փաստացի իրականացված գնումների վերահսկողություն</span></li>
                                            </ul>
                                        </div>
                                        <div class="details-mobile-block-item">
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պատասխանատու ստորաբաժանումների ստեղծում</span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(14)" data-toggle="collapse" data-target="#collapse_14" aria-expanded="false" aria-controls="collapse_14">
                                                <span class="more">{{showContent_id_14 ? 'Փակել' : 'Ավելին'}}</span>
                                                <img :style="showContent_id_14 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_14" class="packages-content collapse" :style="showContent_id_14 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>մեկից ավելի պատասխանատու ստորաբաժանումների ստեղծում</span></li>
                                                <li><span>hրամանի պատրաստում ավտոմատ եղանակով</span></li>
                                                <li><span>պատասխանատու ստորաբաժանումների համար համակարգում «անձնական սենյակի» տրամադրում <span class="soon">(շուտով)</span> </span></li>
                                                <li><span>պատասխանատու ստորաբաժանումների կողմից գնման հայտերի պատրաստման, ներկայացման համար անհրաժեշտ գործիքակազմի ապահովում <span class="soon">(շուտով)</span> </span></li>
                                                <li><span>պայմանագրերի կառավարման համար անհրաժեշտ գործիքակազմի ապահովում («Գոլդ» փաթեթի շրջանակում))</span></li>
                                            </ul>
                                        </div>
                                        <div class="details-mobile-block-item">
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Մեկ անձից գնման ընթացակարգերի կազմակերպում</span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(15)" data-toggle="collapse" data-target="#collapse_15" aria-expanded="false" aria-controls="collapse_15">
                                                <span class="more">{{showContent_id_15 ? 'Փակել' : 'Ավելին'}}</span>
                                                <img :style="showContent_id_15 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_15" class="packages-content collapse" :style="showContent_id_15 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>գնման ընթացակարգի կազմակերպում գնումների պլանից ընտրված ելակետային տվյալների հիման վրա</span></li>
                                                <li><span>գնման ընթացակարգի կազմակերպում դրսից մուտքագրված ելակետային տվյալների հիման վրա</span></li>
                                                <li><span>ընթացակարգի կազմակերպում մեկ կամ ավելի մասնակիցների ներգրավմամբ</span></li>
                                                <li><span>ընթացակարգի կազմակերպման հնարավորություն համակարգում ներդրված մրցակցային հարթակի միջոցով</span></li>
                                                <li><span>ընտրված մասնակցի որոշում ըստ առանձին չափաբաժինների կամ ըստ ընդհանուր գների հանրագումարի</span></li>
                                                <li><span>մուտքագրված ելակետային տվյալների հիման վրա գնումների մասին ՀՀ օրենսդրությամբ նախատեսված բոլոր փաստաթղթերի ավտոմատ պատրաստում word և pdf ձևաչափերով (խմբագրման հնարավորությամբ), ընդ որում՝</span>
                                                    <ul>
                                                        <li><span>գնման հայտ (հայերեն)</span></li>
                                                        <li><span>պատասխանատու ստորաբաժանման հրաման (հայերեն)</span></li>
                                                        <li><span>մասնակիցներին ներկայացվող պայմաններ (պայմանագրի նախագիծ) (հայերեն)</span></li>
                                                        <li><span>հայտերի գնահատման նիստի արձանագրություն (հայերեն)</span></li>
                                                        <li><span>մասնակցի կողմից ներկայացվող գնային առաջարկ (հայերեն)</span></li>
                                                        <li><span>վերջնական պայմանագիր (հայերեն)</span></li>
                                                        <li><span>պայմանագիր կնքելու որոշման մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>չկայացած ընթացակարգի (չափաբաժինների) մասին հայտարարություն(հայերեն և ռուսերեն)</span></li>
                                                        <li><span>կնքված պայմանագրի մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>գնման ընթացակարգի արձանագրություն (գնման գինը 1մլն գերազանցելու դեպքում)(հայերեն)</span></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="details-mobile-block-item">
                                            <div class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1" :class="showContent_id_16 ? 'active' : ''">Մրցակցային գնման ընթացակարգերի (ԲՄ, ՀԲՄ, ԳՀ, ՀՄԱ) կազմակերպում</span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(16)" data-toggle="collapse" data-target="#collapse_16" aria-expanded="false" aria-controls="collapse_16">
                                                <span class="more">{{showContent_id_16 ? 'Փակել' : 'Ավելին'}}</span>
                                                <img :style="showContent_id_16 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_16" class="packages-content collapse" :style="showContent_id_16 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>գնման ընթացակարգի կազմակերպում գնումների պլանից ընտրված ելակետային տվյալների հիման վրա</span></li>
                                                <li><span>գնման ընթացակարգի կազմակերպում դրսից մուտքագրված ելակետային տվյալների հիման վրա</span></li>
                                                <li><span>գների ավտոմատ համեմատում և ընտրված մասնակցի որոշում</span></li>
                                                <li><span>գնումների գործընթացին մասնակցելու իրավունք չունեցող մասնակիցների ցուցակում մասնակցի առկայության վերաբերյալ ավտոմատ ծանուցում մուտքագրման ընթացքում</span></li>
                                                <li><span>էլեկտրոնային գնումների դեպքում մասնակցի կողմից ներկայացված հայտերի (zip ֆայլեր) ներբեռնման և գների ավտոմատ լրացման հնարավորություն՝ ըստ համապատասխան չափաբաժինների</span></li>
                                                <li><span>բանակցությունների ընթացքում մասնակիցների կողմից ներկայացված նոր գնային առաջարկների մուտքագրման հնարավորություն</span></li>
                                                <li><span>մուտքագրված ելակետային տվյալների հիման վրա գնումների մասին ՀՀ օրենսդրությամբ նախատեսված բոլոր փաստաթղթերի ավտոմատ պատրաստում word և pdf ձևաչափերով (խմբագրման հնարավորությամբ), ընդ որում՝</span>
                                                    <ul>
                                                        <li><span>գնման հայտ (հայերեն) <span class="soon">(շուտով)</span> </span></li>
                                                        <li><span>պատասխանատու ստորաբաժանման հրաման (հայերեն)</span></li>
                                                        <li><span>գնահատող հանձնաժողովի հրաման</span></li>
                                                        <li><span>գնահատող հանձնաժողովի առաջին նիստի արձանագրություն</span></li>
                                                        <li><span>պայմանագրի նախագիծ (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>ընթացակարգի հայտարարություն և հրավեր (էլեկտրոնային և թղթային տարբերակներով ապրանք, ծառայություն, աշխատանք)(հայերեն և ռուսերեն) (շուտով)</span></li>
                                                        <li><span>հայտերի բացման և գնահատման նիստի արձանագրություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>շահերի բախման բացակայության մասին հայտարարություն (հայերեն)</span></li>
                                                        <li><span>գնահատման թերթիկ (հայերեն)</span></li>
                                                        <li><span>ծանուցումներ (բանակցություններ, ՊԵԿ և այլ)(հայերեն)</span></li>
                                                        <li><span>պայմանագիր կնքելու որոշման մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>չկայացած ընթացակարգի (չափաբաժինների) մասին հայտարարություն(հայերեն և ռուսերեն)</span></li>
                                                        <li><span>պայմանագիր կնքելու առաջարկ</span></li>
                                                        <li><span>վերջնական պայմանագիր (հայերեն)</span></li>
                                                        <li><span>համաձայնագրեր <span class="soon">(շուտով)</span> </span></li>
                                                        <li><span>կնքված պայմանագրի մասին հայտարարություն (հայերեն և ռուսերեն)</span></li>
                                                        <li><span>գնման ընթացակարգի արձանագրություն (գնման գինը 1մլն գերազանցելու դեպքում)(հայերեն)</span></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="details-mobile-block-item">
                                            <div class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պայմանագրի կառավարում</span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(17)" data-toggle="collapse" data-target="#collapse_17" aria-expanded="false" aria-controls="collapse_17">
                                                <span class="more">{{showContent_id_17 ? 'Փակել' : 'Ավելին'}}</span> 
                                                <img :style="showContent_id_17 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_17" class="packages-content collapse" :style="showContent_id_17 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>պայմանագրի շարժի վերահսկում</span></li>
                                                <li><span>հանձնման-ընդունման փաստաթղթերի՝ ներառյալ եզրակացության ավտոմատ կազմում հերթական համարակալմամբ</span></li>
                                                <li><span>կատարման ժամկետների հիշեցում</span></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header">Գնման առարկայի տեխնիկական բնութագերի բազայից օգտվելու հնարավորություն <span class="soon">(շուտով)</span> </span>
                                            </div>
                                            <span class="d-flex align-items-center more-block" @click="more(18)" data-toggle="collapse" data-target="#collapse_18" aria-expanded="false" aria-controls="collapse_18">
                                                <span class="more">{{showContent_id_18 ? 'Փակել' : 'Ավելին'}}</span> 
                                                <img :style="showContent_id_18 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'" src="~/assets/landing/images/ArrowBottom.svg" alt="arrow">
                                            </span>
                                            <ul id="collapse_18" class="packages-content collapse" :style="showContent_id_18 ? 'opacity: 1; visibility: visible;' : 'opacity: 0; visibility: hidden;'">
                                                <li><span>հասանելիություն համակարգում մուտքագրված և/կամ վերամշակված բոլոր տեխնիկական բնութագրերին</span></li>
                                                <li><span>տեխնիկական բնութագրերի հայերեն մուտքագրման ընթացքում տեքստի ավտոմատ թարգմանություն ռուսերենի (համակարգում ներդրված թարգմանչական գործիքակազմի միջոցով)</span></li>
                                                <li><span>ընթացիկ տարում կազմակերպված և ավարտված տենդերների արդյունքների հիման վրա վերլուծված և ձևավորված նախահաշվային գների հասանելիություն</span></li>
                                                <li><span>բողոքների վերլուծություն</span></li>
                                            </ul> 
                                        </div>
                                        <div class="d-flex justify-content-center mt-5 mb-3">
                                            <button @click="pleaseLogin" class="button_H48 button-width">Գնել</button>
                                        </div>
                                        <div>
                                            <p class="m-0 packages-footer-header h6">Գոլդ</p>
                                            <p class="m-0 packages-footer-content"><span>{{statePackages.gold.price}}</span> դր.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Բիզնեսի համար">
                        <div class="details-desktop">
                            <table class="packages-table w-100">
                                <tr class="table-header">
                                    <th class="bg-white"></th>
                                    <th class="free-package border-top-left-radius">
                                        <p class="free-package-header h6">Անվճար</p>
                                    </th>
                                    <th>
                                        <p class="package-header h6">Էկոնոմ</p>
                                    </th>
                                    <th>
                                        <p class="package-header h6">Պրեմիում</p>
                                    </th>
                                    <th class="border-top-right-radius">
                                        <p class="package-header h6">Գոլդ</p>
                                    </th>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">Համակարգի միջոցով տենդերներ կազմակերպելու և մասնակցելու հնարավորություն</span>
                                    </td>
                                    <td class="text-center td-second-fixed-width">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center td-second-fixed-width">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center td-second-fixed-width">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center td-second-fixed-width">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">Տարբեր տեսակի ֆիլտրներից օգտվելու հնարավորություն	</span>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">ՀՀ-ում տեղի ունեցող տենդերների քանակական վիճակագրությունից օգտվելու հնարավորություն</span>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">Պետական մեկ անձից գնման գործընթացներին համակարգի միջոցով գնային առաջարկ ներկայացնելու հնարավորություն</span>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">Արտոնյալ պայմաններով տենդերների բանկային երաշխիքների տրամադրում ՎՏԲ-Հայաստան Բանկի կողմից (գործող համագործակցության շրջանակներում)</span>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">iTender հարթակում որպես գործընկեր ներկայացնելու հնարավորություն</span>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">Տենդերների հրավերների, հայտարարությունների ստացում /պետական և մասնավոր/ էլեկտրոնային փոստի և Telegram-ի միջոցով</span>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">Պետական գնման գործընթացների ընթացքին հետևելու և ավարտված տենդերների մասնակիցներին, ներկայացված գներին, հաղթողներին տեսնելու հնարավորություն</span>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">Պետական մրցույթներին համակարգի միջոցով մասնակցության հայտերի, որակավորման և պայմանագրի ապահովումների ԱՆՍԱՀՄԱՆԱՓԱԿ պատրաստում</span>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">Հաղթած տենդերների պահեստի ձևավորում, կառավարում, ընդունման -հանձնման արձանագրությունների և ակտերի ԱՆՍԱՀՄԱՆԱՓԱԿ պատրաստում</span>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">Պետական գնումների մասնակցության ուղեցույցի հասանելիություն</span>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">Գնումների մասին օրենսդրական փոփոխությունների վերաբերյալ ծանուցում</span>
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">Նախահաշվային գնի տրամադրում հրապարակված լինելու դեպքում</span>
                                    </td>
                                    <td class="text-center border_bottom">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center border_bottom">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center border_bottom">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center border_bottom">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">Պետական գնումների բողոքների վերլուծության հասանելիություն</span>
                                    </td>
                                    <td class="text-center border_bottom">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center border_bottom">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center border_bottom">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center border_bottom">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="main-item">
                                        <span class="table-text-header table-text-second-header">Պետական գնումների վիճակագրության և վերլուծության հասանելիություն</span>
                                    </td>
                                    <td class="text-center border_bottom">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center border_bottom">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center border_bottom">
                                        <img src="~/assets/landing/images/No.svg" alt="no">
                                    </td>
                                    <td class="text-center border_bottom">
                                        <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border-0"></td>
                                    <td class="border-0"></td>
                                    <td class="border_bottom border-bottom-left-radius border_left package_block_height">
                                        <div class="d-flex flex-column h-100 justify-content-between">
                                            <div class="packages_header">
                                                <div class="d-flex align-items-center package_block" v-for="(item,index) in packages.econom.price" :key="index">
                                                    <input type="radio" @change="updatePackage" :value="`econom_${index}`" :id="`econom_${index}`"  v-if="item.month !== 1" name="package" class="radio-button-width"> 
                                                    <div class="d-flex flex-column ml-2" v-if="item.month !== 1">
                                                        <label class="mb-0 package_month" :for="`econom_${index}`">{{item.month}} ամիս՝</label>
                                                        <label class="mb-0 package_price" :for="`econom_${index}`">{{(item.price).toFixed(0)}} դրամ</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button @click="pleaseLogin" class="button_H48 px-0 w-100">Վճարել</button>
                                        </div>
                                    </td>
                                    <td class="border_bottom package_block_height">
                                        <div class="d-flex flex-column h-100 justify-content-between">
                                            <div class="packages_header">
                                                <div class="d-flex align-items-center package_block" v-for="(item,index) in packages.premium.price" :key="index">
                                                    <input type="radio" @change="updatePackage" :value="`premium_${index}`" :id="`premium_${index}`" name="package" class="radio-button-width"> 
                                                    <div class="d-flex flex-column ml-2">
                                                        <label class="mb-0 package_month" :for="`premium_${index}`">{{item.month}} ամիս՝</label>
                                                        <label class="mb-0 package_price" :for="`premium_${index}`">{{(item.price).toFixed(0)}} դրամ</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button @click="pleaseLogin" class="button_H48 px-0 w-100">Վճարել</button>
                                        </div>    
                                    </td>
                                    <td class="border-bottom-right-radius border_bottom package_block_height">
                                        <div class="d-flex flex-column h-100 justify-content-between">
                                            <div class="packages_header">
                                                <div class="d-flex align-items-center package_block" v-for="(item,index) in packages.gold.price" :key="index">
                                                    <input type="radio" @change="updatePackage" :value="`gold_${index}`" :id="`gold_${index}`" name="package" class="radio-button-width"> 
                                                    <div class="d-flex flex-column ml-2">
                                                        <label class="mb-0 package_month" :for="`gold_${index}`">{{item.month}} ամիս՝</label>
                                                        <label class="mb-0 package_price" :for="`gold_${index}`">{{(item.price).toFixed(0)}} դրամ</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button @click="pleaseLogin" class="button_H48 px-0 w-100">Վճարել</button>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="details-mobile">
                            <div>
                                <div class="details-mobile-header_1">
                                    <p class="free-package-header h6">Անվճար</p>
                                </div>
                                <div class="d-flex flex-column details-mobile-block">
                                    <div :class="mobileDetails_4 ? 'd-none' : 'd-block'">
                                        <p class="details-mobile-block-header">
                                            Տենդերների կազմակերպում և մասնակցություն համակարգում
                                        </p>
                                        <div class="d-flex justify-content-center">
                                            <button @click="pleaseLogin" class="button_H48 button-width">Ակտիվացնել</button>
                                        </div>
                                    </div>
                                    <button :class="mobileDetails_4 ? 'pt-0' : ''" @click="mobileDetails(4)" class="details-btn" data-toggle="collapse" data-target="#parentcollapse_4" aria-expanded="false" aria-controls="parentcollapse_4">
                                        {{ mobileDetails_4 ? 'Փակել' : 'Մանրամասն'}}
                                        <img src="~/assets/landing/images/ArrowBottom.svg" alt="arrow" :style="mobileDetails_4 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'">
                                    </button>
                                    <div id="parentcollapse_4" class="collapse" >
                                        <div class="details-mobile-block-item">
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Համակարգի միջոցով տենդերներ կազմակերպելու և մասնակցելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Տարբեր տեսակի ֆիլտրներից օգտվելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">ՀՀ-ում տեղի ունեցող տենդերների քանակական վիճակագրությունից օգտվելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պետական մեկ անձից գնման գործընթացներին համակարգի միջոցով գնային առաջարկ ներկայացնելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Արտոնյալ պայմաններով տենդերների բանկային երաշխիքների տրամադրում ՎՏԲ-Հայաստան Բանկի կողմից (գործող համագործակցության շրջանակներում)</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">iTender հարթակում որպես գործընկեր ներկայացնելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Տենդերների հրավերների, հայտարարությունների ստացում /պետական և մասնավոր/ էլեկտրոնային փոստի և Telegram-ի միջոցով</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պետական գնման գործընթացների ընթացքին հետևելու և ավարտված տենդերների մասնակիցներին, ներկայացված գներին, հաղթողներին տեսնելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պետական մրցույթներին համակարգի միջոցով մասնակցության հայտերի, որակավորման և պայմանագրի ապահովումների ԱՆՍԱՀՄԱՆԱՓԱԿ պատրաստում</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Հաղթած տենդերների պահեստի ձևավորում, կառավարում, ընդունման -հանձնման արձանագրությունների և ակտերի ԱՆՍԱՀՄԱՆԱՓԱԿ պատրաստում</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պետական գնումների մասնակցության ուղեցույցի հասանելիություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Գնումների մասին օրենսդրական փոփոխությունների վերաբերյալ ծանուցում</span>
                                            </div>
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Նախահաշվային գնի տրամադրում հրապարակված լինելու դեպքում</span>
                                            </div>
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պետական գնումների բողոքների վերլուծության հասանելիություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պետական գնումների վիճակագրության և վերլուծության հասանելիություն</span>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center mt-5 mb-3">
                                            <button @click="pleaseLogin" class="button_H48 button-width">Ակտիվացնել</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="details-mobile-header">
                                    <p class="package-header h6">Էկոնոմ</p>
                                </div>
                                <div class="d-flex flex-column details-mobile-block">
                                    <div :class="mobileDetails_5 ? 'd-none' : 'd-block'">
                                        <p class="details-mobile-block-header">
                                            Տենդերների կազմակերպում, համակարգում մասնակցություն և տեղեկատվություն
                                        </p>
                                        <div class="d-flex justify-content-center">
                                            <button @click="pleaseLogin" class="button_H48 button-width">Վճարել</button>
                                        </div>
                                    </div>
                                    <button :class="mobileDetails_5 ? 'pt-0' : ''" @click="mobileDetails(5)" class="details-btn" data-toggle="collapse" data-target="#parentcollapse_5" aria-expanded="false" aria-controls="parentcollapse_5">
                                        {{ mobileDetails_5 ? 'Փակել' : 'Մանրամասն'}}
                                        <img src="~/assets/landing/images/ArrowBottom.svg" alt="arrow" :style="mobileDetails_5 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'">
                                    </button>
                                    <div id="parentcollapse_5" class="collapse" >
                                        <div class="details-mobile-block-item">
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Համակարգի միջոցով տենդերներ կազմակերպելու և մասնակցելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Տարբեր տեսակի ֆիլտրներից օգտվելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">ՀՀ-ում տեղի ունեցող տենդերների քանակական վիճակագրությունից օգտվելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պետական մեկ անձից գնման գործընթացներին համակարգի միջոցով գնային առաջարկ ներկայացնելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Արտոնյալ պայմաններով տենդերների բանկային երաշխիքների տրամադրում ՎՏԲ-Հայաստան Բանկի կողմից (գործող համագործակցության շրջանակներում)</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">iTender հարթակում որպես գործընկեր ներկայացնելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Տենդերների հրավերների, հայտարարությունների ստացում /պետական և մասնավոր/ էլեկտրոնային փոստի և Telegram-ի միջոցով</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պետական գնման գործընթացների ընթացքին հետևելու և ավարտված տենդերների մասնակիցներին, ներկայացված գներին, հաղթողներին տեսնելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պետական մրցույթներին համակարգի միջոցով մասնակցության հայտերի, որակավորման և պայմանագրի ապահովումների ԱՆՍԱՀՄԱՆԱՓԱԿ պատրաստում</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Հաղթած տենդերների պահեստի ձևավորում, կառավարում, ընդունման -հանձնման արձանագրությունների և ակտերի ԱՆՍԱՀՄԱՆԱՓԱԿ պատրաստում</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պետական գնումների մասնակցության ուղեցույցի հասանելիություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Գնումների մասին օրենսդրական փոփոխությունների վերաբերյալ ծանուցում</span>
                                            </div>
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Նախահաշվային գնի տրամադրում հրապարակված լինելու դեպքում</span>
                                            </div>
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պետական գնումների բողոքների վերլուծության հասանելիություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պետական գնումների վիճակագրության և վերլուծության հասանելիություն</span>
                                            </div>
                                        </div>
                                        <div class="position-relative mt-5">
                                            <div class="footer-top-border"></div>
                                            <div class="packages_header">
                                                <label class="d-flex align-items-center package_block" v-for="(item,index) in packages.econom.price" :key="index">
                                                    <input type="radio" @change="updatePackage" :value="`econom_${index}`" :id="`econom_${index}`"  v-if="item.month !== 1" name="package" class="radio-button-width"> 
                                                    <div class="d-flex flex-column ml-2" v-if="item.month !== 1">
                                                        <span class="mb-0 package_month" :for="`econom_${index}`">{{item.month}} ամիս՝</span>
                                                        <span class="mb-0 package_price" :for="`econom_${index}`">{{(item.price).toFixed(0)}} դրամ</span>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="d-flex justify-content-center mt-5 mb-3">
                                                <button @click="pleaseLogin" class="button_H48 button-width">Վճարել</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="details-mobile-header">
                                    <p class="package-header h6">Պրեմիում</p>
                                </div>
                                <div class="d-flex flex-column details-mobile-block">
                                    <div :class="mobileDetails_6 ? 'd-none' : 'd-block'">
                                        <p class="details-mobile-block-header">
                                            Տենդերների կազմակերպում, մասնակցություն, տեղեկատվություն, փաստաթղթերի ավտոմատացում
                                        </p>
                                        <div class="d-flex justify-content-center">
                                            <button @click="pleaseLogin" class="button_H48 button-width">Վճարել</button>
                                        </div>
                                    </div>
                                    <button :class="mobileDetails_6 ? 'pt-0' : ''" @click="mobileDetails(6)" class="details-btn" data-toggle="collapse" data-target="#parentcollapse_6" aria-expanded="false" aria-controls="parentcollapse_6">
                                        {{ mobileDetails_6 ? 'Փակել' : 'Մանրամասն'}}
                                        <img src="~/assets/landing/images/ArrowBottom.svg" alt="arrow" :style="mobileDetails_6 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'">
                                    </button>
                                    <div id="parentcollapse_6" class="collapse" >
                                        <div class="details-mobile-block-item">
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Համակարգի միջոցով տենդերներ կազմակերպելու և մասնակցելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Տարբեր տեսակի ֆիլտրներից օգտվելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">ՀՀ-ում տեղի ունեցող տենդերների քանակական վիճակագրությունից օգտվելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պետական մեկ անձից գնման գործընթացներին համակարգի միջոցով գնային առաջարկ ներկայացնելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Արտոնյալ պայմաններով տենդերների բանկային երաշխիքների տրամադրում ՎՏԲ-Հայաստան Բանկի կողմից (գործող համագործակցության շրջանակներում)</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">iTender հարթակում որպես գործընկեր ներկայացնելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Տենդերների հրավերների, հայտարարությունների ստացում /պետական և մասնավոր/ էլեկտրոնային փոստի և Telegram-ի միջոցով</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պետական գնման գործընթացների ընթացքին հետևելու և ավարտված տենդերների մասնակիցներին, ներկայացված գներին, հաղթողներին տեսնելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պետական մրցույթներին համակարգի միջոցով մասնակցության հայտերի, որակավորման և պայմանագրի ապահովումների ԱՆՍԱՀՄԱՆԱՓԱԿ պատրաստում</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Հաղթած տենդերների պահեստի ձևավորում, կառավարում, ընդունման -հանձնման արձանագրությունների և ակտերի ԱՆՍԱՀՄԱՆԱՓԱԿ պատրաստում</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պետական գնումների մասնակցության ուղեցույցի հասանելիություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Գնումների մասին օրենսդրական փոփոխությունների վերաբերյալ ծանուցում</span>
                                            </div>
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Նախահաշվային գնի տրամադրում հրապարակված լինելու դեպքում</span>
                                            </div>
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պետական գնումների բողոքների վերլուծության հասանելիություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/No.svg" alt="no">
                                                <span class="table-text-header ml-1">Պետական գնումների վիճակագրության և վերլուծության հասանելիություն</span>
                                            </div>
                                        </div>
                                        <div class="position-relative mt-5">
                                            <div class="footer-top-border"></div>
                                            <div class="packages_header">
                                                <label class="d-flex align-items-center package_block" v-for="(item,index) in packages.premium.price" :key="index">
                                                    <input type="radio" @change="updatePackage" :value="`premium_${index}`" :id="`premium_${index}`" name="package" class="radio-button-width"> 
                                                    <div class="d-flex flex-column ml-2">
                                                        <span class="mb-0 package_month" :for="`premium_${index}`">{{item.month}} ամիս՝</span>
                                                        <span class="mb-0 package_price" :for="`premium_${index}`">{{(item.price).toFixed(0)}} դրամ</span>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="d-flex justify-content-center mt-5 mb-3">
                                                <button @click="pleaseLogin" class="button_H48 button-width">Վճարել</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="details-mobile-header">
                                    <p class="package-header h6">Գոլդ</p>
                                </div>
                                <div class="d-flex flex-column details-mobile-block">
                                    <div :class="mobileDetails_7 ? 'd-none' : 'd-block'">
                                        <p class="details-mobile-block-header">
                                            Տենդերների կազմակերպում, մասնակցություն, տեղեկատվություն, փաստաթղթերի ավտոմատացում, պայմանագրերի կառավարում
                                        </p>
                                        <div class="d-flex justify-content-center">
                                            <button @click="pleaseLogin" class="button_H48 button-width">Վճարել</button>
                                        </div>
                                    </div>
                                    <button :class="mobileDetails_7 ? 'pt-0' : ''" @click="mobileDetails(7)" class="details-btn" data-toggle="collapse" data-target="#parentcollapse_7" aria-expanded="false" aria-controls="parentcollapse_7">
                                        {{ mobileDetails_7 ? 'Փակել' : 'Մանրամասն'}}
                                        <img src="~/assets/landing/images/ArrowBottom.svg" alt="arrow" :style="mobileDetails_7 ? 'transform : rotate(180deg); transition: all 0.4s linear;' : 'transform : rotate(0); transition: all 0.4s linear;'">
                                    </button>
                                    <div id="parentcollapse_7" class="collapse" >
                                        <div class="details-mobile-block-item">
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Համակարգի միջոցով տենդերներ կազմակերպելու և մասնակցելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Տարբեր տեսակի ֆիլտրներից օգտվելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">ՀՀ-ում տեղի ունեցող տենդերների քանակական վիճակագրությունից օգտվելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պետական մեկ անձից գնման գործընթացներին համակարգի միջոցով գնային առաջարկ ներկայացնելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Արտոնյալ պայմաններով տենդերների բանկային երաշխիքների տրամադրում ՎՏԲ-Հայաստան Բանկի կողմից (գործող համագործակցության շրջանակներում)</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">iTender հարթակում որպես գործընկեր ներկայացնելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Տենդերների հրավերների, հայտարարությունների ստացում /պետական և մասնավոր/ էլեկտրոնային փոստի և Telegram-ի միջոցով</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պետական գնման գործընթացների ընթացքին հետևելու և ավարտված տենդերների մասնակիցներին, ներկայացված գներին, հաղթողներին տեսնելու հնարավորություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պետական մրցույթներին համակարգի միջոցով մասնակցության հայտերի, որակավորման և պայմանագրի ապահովումների ԱՆՍԱՀՄԱՆԱՓԱԿ պատրաստում</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Հաղթած տենդերների պահեստի ձևավորում, կառավարում, ընդունման -հանձնման արձանագրությունների և ակտերի ԱՆՍԱՀՄԱՆԱՓԱԿ պատրաստում</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պետական գնումների մասնակցության ուղեցույցի հասանելիություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center details-mobile-block-item">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Գնումների մասին օրենսդրական փոփոխությունների վերաբերյալ ծանուցում</span>
                                            </div>
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Նախահաշվային գնի տրամադրում հրապարակված լինելու դեպքում</span>
                                            </div>
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պետական գնումների բողոքների վերլուծության հասանելիություն</span>
                                            </div>
                                            <div  class="d-flex align-items-center">
                                                <img src="~/assets/landing/images/Yes.svg" alt="yes">
                                                <span class="table-text-header ml-1">Պետական գնումների վիճակագրության և վերլուծության հասանելիություն</span>
                                            </div>
                                        </div>
                                        <div class="position-relative mt-5">
                                            <div class="footer-top-border"></div>
                                            <div class="packages_header">
                                                <label class="d-flex align-items-center package_block" v-for="(item,index) in packages.gold.price" :key="index">
                                                    <input type="radio" @change="updatePackage" :value="`gold_${index}`" :id="`gold_${index}`" name="package" class="radio-button-width"> 
                                                    <div class="d-flex flex-column ml-2">
                                                        <span class="mb-0 package_month" :for="`gold_${index}`">{{item.month}} ամիս՝</span>
                                                        <span class="mb-0 package_price" :for="`gold_${index}`">{{(item.price).toFixed(0)}} դրամ</span>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="d-flex justify-content-center mt-5 mb-3">
                                                <button @click="pleaseLogin" class="button_H48 button-width">Վճարել</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </div>
        <!-- <payment-modal/> -->
    </div>
    </template>

    <script>
        // import PaymentModal from '../private/participant/tenders/modals/PaymentModal.vue'
        export default {
            components: {},
            data(){
                return{
                    selectedPackage: '',
                    selectedMonth: '',
                    selectedTab: 0,
                    showContent_id_1: false,
                    showContent_id_2: false,
                    showContent_id_3: false,
                    showContent_id_4: false,
                    showContent_id_5: false,
                    showContent_id_6: false,
                    showContent_id_7: false,
                    showContent_id_8: false,
                    showContent_id_9: false,
                    showContent_id_10: false,
                    showContent_id_11: false,
                    showContent_id_12: false,
                    showContent_id_13: false,
                    showContent_id_14: false,
                    showContent_id_15: false,
                    showContent_id_16: false,
                    showContent_id_17: false,
                    showContent_id_18: false,
                    mobileDetails_1: false,
                    mobileDetails_2: false,
                    mobileDetails_3: false,
                    mobileDetails_4: false,
                    mobileDetails_5: false,
                    mobileDetails_6: false,
                    mobileDetails_7: false,
                    statePrices: null,
                    statePackages: {
                        econom: {price: 0},
                        premium: {price: 0},
                        gold: {price: 0},
                    },
                    packages: {
                        econom: {price: 0},
                        premium: {price: 0},
                        gold: {price: 0},
                    }
                }
            },
            computed:{
                isAuthenticated() {
                    return this.$store.getters['auth/isAuthenticated']
                },   
                pricings() {
                    return this.$store.getters['pricing/pricing']
                },
                userType(){
                    return this.$store.getters.userType
                },
                me() {
                    return this.$store.getters['user/me']
                },
            },
            methods: {
                updatePackage(event){
                    const parsedPackage = event.target.value.split('_price_')
                    const packageName = parsedPackage[0]
                    const packageMonth = parsedPackage[1]
                    if(this.userType === 'USER'){
                        this.selectedPackage = this.packages[packageName]
                        this.selectedMonth = this.selectedPackage.price[`price_${packageMonth}`]
                    }
                },
                activateStateFreePeriod(){
                    if(this.isAuthenticated === false){
                        this.$fire({
                            text: "Խնդրում ենք մուտք գործել համակարգ փաթեթը ակտիվացնելու համար",
                            type: "info",
                            confirmButtonText: 'Մուտք գործել',
                        }).then((result) => {
                            if (result.value) {
                                this.$router.push(`/login`);
                            }
                        })
                    } else {
                        this.$confirm(
                            "Ակտիվացնել Գոլդ փաթեթ 10 օրով", 
                            "Ակտիվացնել", 
                            "", 
                            {
                                title: 'Do you want to save the changes?',
                                confirmButtonText: 'Ակտիվացնել', 
                                cancelButtonText: 'Չեղարկել'
                            }
                        ).then((result) => {
                            if(result){
                                this.$client.post('gold/package/probation/activate/order_state').then((value) => {
                                    this.$store.dispatch('user/me')
                                    this.$fire({
                                        text: "Դուք հաջողությամբ ակտիվացրեցիք Գոլդ փաթեթը 10 օրով",
                                        confirmButtonText: 'Լավ'
                                    })
                                })
                            }
                        })
                    }
                },
                buyPackage(item){
                    if(this.me.package === 'Անվճար'){
                        if(this.userType === 'USER'){
                            if(this.selectedPackage && this.selectedMonth){
                                const data = {selectedPackage: this.selectedPackage, selectedMonth: this.selectedMonth}
                                this.$modal.show('payment-modal', data );
                            } else {
                                this.$notify({
                                    group: 'foo',
                                    type: 'error',
                                    text: 'Ընտրեք փաթեթը'
                                })
                            }
                        } else {
                            const data = {selectedPackage: item}
                            this.$modal.show('payment-modal', data );
                        }
                    } else {
                        this.$notify({
                            group: 'foo',
                            type: 'error',
                            title: 'Դուք ունեք ակտիվ փաթեթ',
                            text: 'Հավելյալ հարցերի համար զանգահարել +37491244970'
                        })
                    }
                },
                pleaseLogin(){
                    this.$fire({
                        text: "Խնդրում ենք մուտք գործել համակարգ փաթեթ գնելու համար",
                        type: "info",
                        confirmButtonText: 'Մուտք գործել',
                        closeBottom: true
                    }).then((result) => {
                        if (result.value) {
                            this.$router.push(`/login`);
                        } else {
                        }
                    })
                },
                mobileDetails(id){
                    if(id === 1){
                        this.mobileDetails_1 = !this.mobileDetails_1
                    }else if(id === 2){
                        this.mobileDetails_2 = !this.mobileDetails_2
                    }else if(id === 3){
                        this.mobileDetails_3 = !this.mobileDetails_3
                    }else if(id === 4){
                        this.mobileDetails_4 = !this.mobileDetails_4
                    }else if(id === 5){
                        this.mobileDetails_5 = !this.mobileDetails_5
                    }else if(id === 6){
                        this.mobileDetails_6 = !this.mobileDetails_6
                    }else if(id === 7){
                        this.mobileDetails_7 = !this.mobileDetails_7
                    }
                },
                more(id){
                    if(id === 1){
                        this.showContent_id_1 = !this.showContent_id_1
                    }else if(id === 2){
                        this.showContent_id_2 = !this.showContent_id_2
                    }else if(id === 3){
                        this.showContent_id_3 = !this.showContent_id_3
                    }else if(id === 4){
                        this.showContent_id_4 = !this.showContent_id_4
                    }else if(id === 5){
                        this.showContent_id_5 = !this.showContent_id_5
                    }else if(id === 6){
                        this.showContent_id_6 = !this.showContent_id_6
                    }else if(id === 7){
                        this.showContent_id_7 = !this.showContent_id_7
                    }else if(id === 8){
                        this.showContent_id_8 = !this.showContent_id_8
                    }else if(id === 9){
                        this.showContent_id_9 = !this.showContent_id_9
                    }else if(id === 10){
                        this.showContent_id_10 = !this.showContent_id_10
                    }else if(id === 11){
                        this.showContent_id_11 = !this.showContent_id_11
                    }else if(id === 12){
                        this.showContent_id_12 = !this.showContent_id_12
                    }else if(id === 13){
                        this.showContent_id_13 = !this.showContent_id_13
                    }else if(id === 14){
                        this.showContent_id_14 = !this.showContent_id_14
                    }else if(id === 15){
                        this.showContent_id_15 = !this.showContent_id_15
                    }else if(id === 16){
                        this.showContent_id_16 = !this.showContent_id_16
                    }else if(id === 17){
                        this.showContent_id_17 = !this.showContent_id_17
                    }else if(id === 18){
                        this.showContent_id_18 = !this.showContent_id_18
                    } 
                },
                consoleLog(msg) {
                    console.log(msg)
                },
            },
            updated() {
                if(this.$route.params.type === 'private'){
                    this.selectedTab = 1;
                }
            },
            async mounted(){
                await this.$client.get('package/state').then(response => {
                    this.statePrices = response.data
                })
                this.$store.dispatch('pricing/get').then(data => {
                    this.statePackages.econom = this.pricings[1].price.price_12
                    this.statePackages.premium = this.pricings[2].price.price_12
                    this.statePackages.gold = this.pricings[3].price.price_12

                    this.packages.econom = this.pricings[1]
                    this.packages.premium = this.pricings[2]
                    this.packages.gold = this.pricings[3]
                })
            },
            head: {
                title: 'Տենդերների բաժանորդագրում և փաթեթներ',
                link: [
                    {rel: 'canonical', href: 'https://www.itender.am/packages'}
                ],
                meta: [
                    { name: 'description', content: 'Տենդերների տեղեկատվության, փաստաթղթերի ավտոմատացման և կառավարման ծառայությունների փաթեթներ և գներ։ ' }
                ]
            },
        }
    </script>
    <style scoped>
        #details{
            margin-bottom: 50px;
        }
        .text-distance{
            margin-top: 16px;
        }
        .notAuthenticatedContent{
            margin-top: 50px;
        }
        .table-header{
            background-image: linear-gradient(175deg , #006BE6 0%, #006BE6 65%, #0065D9 0%, #0065D9 35%, #0065D9 100%);
        }
        .packages-table tr th,td{
            padding: 20px;
        }
        .packages-table tr td{
            border-right: 0.5px solid #E5E5E5;
        }
        .border-top-left-radius{
            border-top-left-radius: 20px;
        }
        .border-top-right-radius{
            border-top-right-radius: 24px;
        }
        .border-bottom-left-radius{
            border-bottom-left-radius: 24px;
            display: inline-block;
            width: 100%;
        }
        .border-bottom-right-radius{
            border-bottom-right-radius: 24px;
            display: inline-block;
            width: 100%;
        }
        .td-fixed-width{
            width: 230px;
        }
        .td-second-fixed-width{
            width: 180px;
        }
        .border_bottom{
            border-bottom: 1px solid #E5E5E5;
        }
        .border_left{
            border-left: 1px solid #E5E5E5;
        }
        .table-text-header{
            color: #2D3036;
            font-size: 16px;
            line-height: 24px;
            transition: all 0.4s linear;
        }
        .table-text-header.active{
            font-size: 16px;
            line-height: 24px;
            color: #006BE6;
        }
        .more{
            color: #006BE6;
            font-size: 14px;
            line-height: 20px;
        }
        .more-block{
            padding-top: 8px;
            cursor: pointer;
        }
        .packages-content{
            margin-left: 20px;
            transition: all 0.8s ease-out;
        }
        .packages-content li{
            color: #006BE6;
            padding-top: 16px;
            list-style: disc;
        }
        .packages-content li span{
            color: #595E6B;
            font-size: 14px;
            line-height: 20px;
        }
        .packages-content li ul{
            margin-left: 20px;
        }
        .soon{
            color: #6E7485;
        }
        .packages-footer-header{
            color: #6E7485;
            text-align: center;
            font-size: 16px;
            line-height: 24px;
        }
        .packages-footer-content{
            text-align: center;
            color: #6E7485;
            font-size: 14px;
            line-height: 20px;
        }
        .packages-footer-content span{
            color: #0E0F12;
            font-size: 23px;
            line-height: 32px;
        }
        .table-text-second-header:hover{
            color: #0065D9;
        }
        .main-item ~ *{
            transition: all 0.4s linear;
        }
        .main-item:hover ~ *{
            background-color: #F7F7F7;
        }
        .free-package{
            background-color: #EDEFF2;
            box-shadow: 0 0 0 2px white;
        }
        .free-package-header{
            color: #2D3036;
            text-align: center;
            font-size: 20px;
            line-height: 28px;
        }
        .details-mobile{
            display: none;
        }
        .footer-top-border{
            border-top: 1px solid #EDEFF2;
            position: absolute;
            top: -25px;
            left: -20px;
            width: calc(100% + 40px);
        }
        .radio-button-width{
            width: 18px;
            height: 18px;
            cursor: pointer;
        }
        @media only screen and (max-width: 1200px) {
            .details-desktop{
                display: none;
            }
            .details-mobile{
                display: block;
            }
            .details-mobile-header{
                background-image: linear-gradient(177deg , #006BE6 0%, #006BE6 60%, #0065D9 0%, #0065D9 40%, #0065D9 100%);
                padding: 15px;
                border-top-left-radius: 24px;
                border-top-right-radius: 24px;
            }
            .details-mobile-header_1{
                background: #DADDE6;            
                padding: 15px;
                border-top-left-radius: 24px;
                border-top-right-radius: 24px;
            }
            .details-mobile-block{
                padding: 20px;
                border: 1px solid #EDEFF2;
                border-bottom-right-radius: 24px;
                border-bottom-left-radius: 24px;
            }
            .details-mobile-block-header{
                color: #595E6B;
                font-size: 16px;
                line-height: 24px;
                margin-bottom: 35px;
            }
            .button-width{
                width: 250px;
            }
            .details-btn{
                background-color: white;
                outline: none;
                border: none;
                color: #40444D;
                font-size: 16px;
                line-height: 24px;
                padding: 20px;
            }
            .details-mobile-block-item{
                margin-bottom: 24px;
            }
            .packages-content li{
                margin-left: 20px;
            }
            .more-block{
                margin-left: 40px;
            }
            .details-mobile > div{
                margin-bottom: 20px;
            }
            .details-mobile > div:last-child{
                margin-bottom: 0;
            }
        }
        @media only screen and (max-width: 500px) {
            .mob-image-block img:first-child {
                left: -440px;
            }
        }
    </style>
    <style>
        #details .nav.nav-pills, #details .nav-link{
            width: 100%;
        }
        #details .card{
            background: transparent !important;
            border: 0 !important;
            box-shadow: none !important;
        }
        #details .card-header{
            background: white !important;
            box-shadow: none !important;
            margin: 30px auto 50px;
            width: fit-content;
            min-width: 500px;
            border: 1px solid #DADDE6 !important;
            box-sizing: border-box;
            border-radius: 8px !important;
            padding: 0 !important;
        }
        #details .nav-item{
            flex: 0 0 50%;
            max-width: 50%;
        }
        #details .nav.nav-pills{
            background: transparent !important;
            margin: 0 !important;
        }
        #details .nav-pills .nav-link.active, .nav-pills .show > .nav-link{
            text-align: center;
            background: #006BE6 !important;
            box-shadow: 0px 4px 8px rgba(0, 107, 230, 0.15) !important;
            border-radius: 8px !important;
            color: #FFFFFF;
            justify-content: center;
            display: flex;
            align-items: center;
            font-size: 16px;
            line-height: 24px;
        }
        #details .nav-pills .nav-link{
            color: #2D3036;
            justify-content: center;
            display: flex;
            align-items: center;
            font-size: 16px;
            line-height: 24px;
            padding: 12px 20px;
            transition: all 0.2s linear;
        }
        #details .tab-content > .tab-pane{
            padding-bottom: 0 !important;
        }
        #details .card-body {
            padding: 0 !important;
        }
        @media only screen and (max-width: 404px) {
            #details .nav-pills .nav-link{
                padding: 8px !important;
            }
        }
    </style>
