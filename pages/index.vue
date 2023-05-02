<template>
      <div id="homePage">
        <h1 class="d-none">Տենդերներ ով հետաքրքրվողները կարող են Գնել և վաճառել տենդերների միջոցով</h1>
        <email-confirm v-show="showEmailConfirm" @close="closeEmailConfirmMethod"/>
        <unsubscribe v-show="showUnsubscribeModal" @close="closeUnsubscribeMethod"/>
        <reset-password v-show="showResetPassword" @close="closeResetPasswordMethod"/>
        <section id="slider">
            <client-only>
            <carousel :perPage="1" 
                      :navigationEnabled="false"
                      :loop="true"
                      :scrollPerPage="true">
                <slide class="position-relative h-100">
                    <img src="~/assets/landing/images/slide.jpg" alt="business desk image" class="w-100 image-height">
                    <img src="~/assets/landing/images/sliderLayout.png" alt="slider background image" class="w-100 layout">
                    <div class="slider-background-block"></div>
                   <div class="header-slide-content home_desktop">
                       <h3 class="title h1">Գնի՛ր և վաճառի՛ր տենդերների միջոցով</h3>
                       <p class="regular-text text-distance">Կազմակերպիր տենդերներ և մասնակցիր տենդերների iTender համակարգի միջոցով</p>
                       <button @click="$router.push('/login')" class="blue-btn button_H56_fixed">Օգտվել</button>
                   </div>
                    <div class="header-slide-content_mobile home_mobile">
                        <h3 class="title h1">Գնի՛ր և վաճառի՛ր տենդերների միջոցով</h3>
                        <p class="regular-text text-distance">Կազմակերպիր տենդերներ և մասնակցիր տենդերների iTender համակարգի միջոցով</p>
                        <button @click="$router.push('/login')" class="blue-btn button_H56_fixed">Օգտվել</button>
                    </div>  
                </slide>
                <slide class="position-relative h-100">
                   <img src="~/assets/landing/images/slide_image_2.jpg" alt="slider background image" class="w-100 image-height">
                   <img src="~/assets/landing/images/sliderLayout.png" alt="slider background image" class="w-100 layout">
                   <div class="header-slide-content home_desktop">
                        <h3 class="title h1">Ծախսերի օպտիմալացում և խնայողություն</h3>
                        <p class="regular-text text-distance">Կազմակերպի՛ր տենդերներ և մրցակցության հաշվին կձևավորի խնայողություններ</p>
                        <button @click="$router.push('/organizator/itender')" class="blue-btn button_H56_fixed">Կազմակերպել</button>
                   </div>
                   <div class="header-slide-content_mobile home_mobile">
                        <h3 class="title h1">Ծախսերի օպտիմալացում և խնայողություն</h3>
                        <p class="regular-text text-distance">Կազմակերպի՛ր տենդերներ և մրցակցության հաշվին կձևավորի խնայողություններ</p>
                        <button @click="$router.push('/organizator/itender')" class="blue-btn button_H56_fixed">Կազմակերպել</button>
                    </div> 
                </slide>
                <slide class="position-relative h-100">
                   <img src="~/assets/landing/images/slide_image_3.jpg" alt="slider background image" class="w-100 image-height">
                   <img src="~/assets/landing/images/sliderLayout.png" alt="slider background image" class="w-100 layout">
                    <div class="header-slide-content home_desktop">
                        <h3 class="title h1">Պետական գնումների ավտոմատացում</h3>
                        <p class="regular-text text-distance">Կազմակերպիր պետական գնման գործընթացները արագ և ճշգրիտ</p>
                        <button @click="$router.push('/organizing/competitive')" class="blue-btn button_H56_fixed">Կազմակերպել</button>
                   </div>
                    <div class="header-slide-content_mobile home_mobile">
                        <h3 class="title h1">Պետական գնումների ավտոմատացում</h3>
                        <p class="regular-text text-distance">Կազմակերպիր պետական գնման գործընթացները արագ և ճշգրիտ</p>
                        <button @click="$router.push('/organizing/competitive')" class="blue-btn button_H56_fixed">Կազմակերպել</button>
                    </div> 
                </slide>
                <slide class="position-relative h-100">
                   <img src="~/assets/landing/images/slide_image_4.jpg" alt="slider background image" class="w-100 image-height">
                   <img src="~/assets/landing/images/sliderLayout.png" alt="slider background image" class="w-100 layout">
                    <div class="header-slide-content home_desktop">
                        <h3 class="title h1">Վաճառքների և եկամուտների ավելացում</h3>
                        <p class="regular-text text-distance">Մասնակցիր տենդերներին և վաճառիր առանց գովազդային ծախսերի</p>
                        <button @click="$router.push('/participant/tenders')"  class="blue-btn button_H56_fixed">Մասնակցել</button>
                   </div>
                    <div class="header-slide-content_mobile home_mobile">
                        <h3 class="title h1">Վաճառքների և եկամուտների ավելացում</h3>
                        <p class="regular-text text-distance">Մասնակցիր տենդերներին և վաճառիր առանց գովազդային ծախսերի</p>
                        <button @click="$router.push('/participant/tenders')" class="blue-btn button_H56_fixed">Մասնակցել</button>
                    </div> 
                </slide>
            </carousel> 
            </client-only>
        </section>
        <section id="info">
            <div class="info-block block-container new-block-container">
                <h2 class="info-title text-center h1"> 
                    <span class="d-block">Տենդերներով հետաքրքրվողներին</span>  
                    տալիս է հետևյալ հնարավորությունները
                </h2>
                <div class="home_desktop">
                    <div class="d-flex justify-content-between top-distance">
                        <div class="block">
                            <div class="d-flex info-block-distance">
                                <img src="~/assets/landing/images/Icon1.svg" alt="weigh icon" class="icon-distance">
                                <h4 class="regular-gray-header mb-0 h6">Գնել և վաճառել տենդերների միջոցով</h4>
                            </div>
                            <p class="regular-gray-text">Համակարգը հնարավորություն է տալիս որպես գնորդ կազմակերպել տենդերներ և ձեռք բերել շուկայականից ցածր գներով ապրանքներ, աշխատանքներ և ծառայություններ՝ ունենալով թե ժամանակային և թե ֆինանսական խնայողություններ։ Որպես վաճառող մասնակցել տենդերներին, հաղթել և մեծացնել վաճառքի ծավալները։</p>
                        </div>
                        <div class="block">
                            <div class="d-flex info-block-distance">
                                <img src="~/assets/landing/images/Icon2.svg" alt="info icon" class="icon-distance">
                                <h4 class="regular-gray-header mb-0 h6">Տենդերների մասին տեղեկատվություն</h4>
                            </div>
                            <p class="regular-gray-text">Համակարգը հնարավորություն է տալիս տեղեկանալ պետական և մասնավոր տենդերների մասին, ստանալ տենդերների վերաբերյալ անհրաժեշտ տեղեկատվություն՝ նախահաշվային գներ, մրցակից ընկերություններ և ներկայացված գներ, հաղթողներ, ինչը մեծացնում է տենդերներում հաղթելու հնարավորությունները։</p>
                        </div>
                        <div class="block">
                            <div class="d-flex info-block-distance">
                                <img src="~/assets/landing/images/Icon3.svg" alt="hammer icon" class="icon-distance">
                                <h4 class="regular-gray-header mb-0 h6">Տենդերների փաստաթղթերի ավտոմատացում</h4>
                            </div>
                            <p class="regular-gray-text">Ծրագրի միջոցով արագ պատրաստել պետական տենդերների մասնակցության հայտերը և ուղեցույցների օգնությամբ ապահովել մասնակցությունը։ Ձևավորել հաղթած տենդերների պայմանագրերի պահեստ, կառավարել այն և ավտոմատ կերպով պատրաստել ընդունման-հանձնման արձանագրություններ։</p>
                        </div>
                    </div>
                </div>
                <div class="home_mobile distance-top">
                    <div id="accordion_1" class="info-block-cards">
                        <div class="card mt-0 card-custom" :class="showInfo_1 ? 'active' : ''">
                            <div class="card-header p-3 w-100 card-header-custom" id="heading_1" :class="showInfo_1 ? 'active' : ''">
                                <div @click="showInfo(1)" class="d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapse_1" aria-expanded="false" aria-controls="collapse_1">
                                    <div class="d-flex align-items-center">
                                        <img src="~/assets/landing/images/Icon1.svg" alt="weigh icon" class="icon-distance">
                                        <p v-resize-text="{ratio:1.3, maxFontSize: '20px', minFontSize: '10px'}" class="regular-gray-header mb-0 h6">Գնել և վաճառել տենդերների միջոցով</p>
                                    </div>
                                    <img src="~/assets/landing/images/Open_Close.svg" alt="open icon" class="rotate-arrow">
                                </div>
                            </div>
                            <div id="collapse_1" class="collapse" aria-labelledby="heading_1" data-parent="#accordion_1">
                                <div class="card-body">
                                    <p class="regular-gray-text">Համակարգը հնարավորություն է տալիս որպես գնորդ կազմակերպել տենդերներ և ձեռք բերել շուկայականից ցածր գներով ապրանքներ, աշխատանքներ և ծառայություններ՝ ունենալով թե ժամանակային և թե ֆինանսական խնայողություններ։ Որպես վաճառող մասնակցել տենդերներին, հաղթել և մեծացնել վաճառքի ծավալները։</p>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div id="accordion_2" class="info-block-cards">
                        <div class="card card-custom" :class="showInfo_2 ? 'active' : ''">
                            <div class="card-header p-3 w-100 card-header-custom" id="heading_2" :class="showInfo_2 ? 'active' : ''">
                                <div @click="showInfo(2)" class="d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                                    <div class="d-flex align-items-center">
                                        <img src="~/assets/landing/images/Icon2.svg" alt="info icon" class="icon-distance">
                                        <p v-resize-text="{ratio:1.3, maxFontSize: '20px', minFontSize: '10px'}" class="regular-gray-header mb-0 h6">Տենդերների մասին տեղեկատվություն</p>
                                    </div>
                                    <img src="~/assets/landing/images/Open_Close.svg" alt="open icon" class="rotate-arrow">
                                </div>
                            </div>
                            <div id="collapse_2" class="collapse" aria-labelledby="heading_2" data-parent="#accordion_2">
                                <div class="card-body">
                                    <p class="regular-gray-text">Համակարգը հնարավորություն է տալիս տեղեկանալ պետական և մասնավոր տենդերների մասին, ստանալ տենդերների վերաբերյալ անհրաժեշտ տեղեկատվություն՝ նախահաշվային գներ, մրցակից ընկերություններ և ներկայացված գներ, հաղթողներ, ինչը մեծացնում է տենդերներում հաղթելու հնարավորությունները։</p>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div id="accordion_3" class="info-block-cards">
                        <div class="card mb-0 card-custom" :class="showInfo_3 ? 'active' : ''">
                            <div class="card-header p-3 w-100 card-header-custom" id="heading_3" :class="showInfo_3 ? 'active' : ''">
                                <div @click="showInfo(3)" class="d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                                    <div class="d-flex align-items-center">
                                        <img src="~/assets/landing/images/Icon3.svg" alt="hammer icon" class="icon-distance">
                                        <p v-resize-text="{ratio:1.3, maxFontSize: '20px', minFontSize: '10px'}" class="regular-gray-header mb-0 h6">Տենդերների փաստաթղթերի ավտոմատացում</p>
                                    </div>
                                    <img src="~/assets/landing/images/Open_Close.svg" alt="open icon" class="rotate-arrow">
                                </div>
                            </div>
                            <div id="collapse_3" class="collapse" aria-labelledby="heading_3" data-parent="#accordion_3">
                                <div class="card-body">
                                    <p class="regular-gray-text">Ծրագրի միջոցով արագ պատրաստել պետական տենդերների մասնակցության հայտերը և ուղեցույցների օգնությամբ ապահովել մասնակցությունը։ Ձևավորել հաղթած տենդերների պայմանագրերի պահեստ, կառավարել այն և ավտոմատ կերպով պատրաստել ընդունման-հանձնման արձանագրություններ։</p>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-second-block">
                <div class="block-container new-block-container">
                    <h2 class="info-title text-center h1"> 
                        <span class="d-block">Պետական պատվիրատուներին</span>  
                        տալիս է հետևյալ հնարավորությունները
                    </h2>
                    <div class="home_desktop">
                        <div class="d-flex justify-content-between top-distance">
                            <div class="block">
                                <div class="d-flex align-items-center info-block-distance">
                                    <img src="~/assets/landing/images/Icon4.svg" alt="menu icon" class="icon-distance">
                                    <h4 class="regular-gray-header m-0 h6">Կազմել գնումների պլաններ և կառավարել</h4>
                                </div>
                                <p class="regular-gray-text">Համակարգը հնարավորություն է տալիս կազմել գնումների մասին ՀՀ օրենսդրությանը համապատասխան գնումների պլաններ, կատարել անսահմանափակ փոփոխություններ և օգտվել տեխնիկական բնութագրերի կատալոգից, որտեղ առկա են նաև շուկայի վերլուծության արդյունքում ձևավորված նախահաշվային գները։</p>
                            </div>
                            <div class="block">
                                <div class="d-flex align-items-center info-block-distance">
                                    <img src="~/assets/landing/images/Icon5.svg" alt="settings icon" class="icon-distance">
                                    <h4 class="regular-gray-header m-0 h6">Ավտոմատացնել գնման գործընթացները</h4>
                                </div>
                                <p class="regular-gray-text">Համակարգը հնարավորություն է տալիս կազմակերպել գնումների մասին ՀՀ օրենսդրությամբ սահմանված մեկ անձից գնում կատարելու ընթացակարգեր, ծրագրի միջոցով արագ և ճշգրիտ պատրաստել մեկ անձից և մրցակցային գնման գործընթացների ամբողջ թղթաբանությունը՝ հաստատված օրինակելի ձևերով։</p>
                            </div>
                            <div class="block">
                                <div class="d-flex align-items-center info-block-distance">
                                    <img src="~/assets/landing/images/Icon6.svg" alt="docs icon" class="icon-distance">
                                    <h4 class="regular-gray-header m-0 h6">Կառավարել կնքված պայմանագրերը</h4>
                                </div>
                                <p class="regular-gray-text">Գործընթացների արդյունքում ձևավորում է կնքված պայմանագրերի պահեստ, որը կառավարելի է պատվիրատուի և պայմանագրի կողմի համար։ Պատվիրատուն համակարգի միջոցով կարող է պատվերներ տալ, հետևել պահեստի շարժին և պատրաստել ընդունման-հանձնման ակտեր և եզրակացություն փաստաթղթերը։</p>
                            </div>
                        </div>
                    </div>
                    <div class="home_mobile top-distance">
                        <div id="accordion_4" class="info-block-cards">
                            <div class="card card-custom" :class="showInfo_4 ? 'active' : ''">
                                <div class="card-header p-3 w-100 card-header-custom" id="heading_4" :class="showInfo_4 ? 'active' : ''">
                                    <div @click="showInfo(4)" class="d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                                        <div class="d-flex align-items-center">
                                            <img src="~/assets/landing/images/Icon4.svg" alt="menu icon" class="icon-distance">
                                            <p v-resize-text="{ratio:1.3, maxFontSize: '20px', minFontSize: '10px'}" class="regular-gray-header m-0 h6">Կազմել գնումների պլաններ և կառավարել</p>
                                        </div>
                                        <img src="~/assets/landing/images/Open_Close.svg" alt="open icon" class="rotate-arrow">
                                    </div>
                                </div>
                                <div id="collapse_4" class="collapse" aria-labelledby="heading_4" data-parent="#accordion_4">
                                    <div class="card-body">
                                        <p class="regular-gray-text">Համակարգը հնարավորություն է տալիս կազմել գնումների մասին ՀՀ օրենսդրությանը համապատասխան գնումների պլաններ, կատարել անսահմանափակ փոփոխություններ և օգտվել տեխնիկական բնութագրերի կատալոգից, որտեղ առկա են նաև շուկայի վերլուծության արդյունքում ձևավորված նախահաշվային գները։</p>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div id="accordion_5" class="info-block-cards">
                            <div class="card card-custom" :class="showInfo_5 ? 'active' : ''">
                                <div class="card-header p-3 w-100 card-header-custom" id="heading_5" :class="showInfo_5 ? 'active' : ''">
                                    <div @click="showInfo(5)" class="d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                                        <div class="d-flex align-items-center">
                                            <img src="~/assets/landing/images/Icon5.svg" alt="settings icon" class="icon-distance">
                                            <p v-resize-text="{ratio:1.3, maxFontSize: '20px', minFontSize: '10px'}" class="regular-gray-header m-0 h6">Ավտոմատացնել գնման գործընթացները</p>
                                        </div>
                                        <img src="~/assets/landing/images/Open_Close.svg" alt="open icon" class="rotate-arrow">
                                    </div>
                                </div>
                                <div id="collapse_5" class="collapse" aria-labelledby="heading_5" data-parent="#accordion_5">
                                    <div class="card-body">
                                        <p class="regular-gray-text">Համակարգը հնարավորություն է տալիս կազմակերպել գնումների մասին ՀՀ օրենսդրությամբ սահմանված մեկ անձից գնում կատարելու ընթացակարգեր, ծրագրի միջոցով արագ և ճշգրիտ պատրաստել մեկ անձից և մրցակցային գնման գործընթացների ամբողջ թղթաբանությունը՝ հաստատված օրինակելի ձևերով։</p>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div id="accordion_6" class="info-block-cards">
                            <div class="card card-custom" :class="showInfo_6 ? 'active' : ''">
                                <div class="card-header p-3 w-100 card-header-custom" id="heading_6" :class="showInfo_6 ? 'active' : ''">
                                    <div @click="showInfo(6)" class="d-flex align-items-center justify-content-between" data-toggle="collapse" data-target="#collapse_6" aria-expanded="false" aria-controls="collapse_6">
                                        <div class="d-flex align-items-center">
                                            <img src="~/assets/landing/images/Icon6.svg" alt="docs icon" class="icon-distance">
                                            <p v-resize-text="{ratio:1.3, maxFontSize: '20px', minFontSize: '10px'}" class="regular-gray-header m-0 h6">Կառավարել կնքված պայմանագրերը</p>
                                        </div>
                                        <img src="~/assets/landing/images/Open_Close.svg" alt="open icon" class="rotate-arrow">
                                    </div>
                                </div>
                                <div id="collapse_6" class="collapse" aria-labelledby="heading_6" data-parent="#accordion_6">
                                    <div class="card-body">
                                        <p class="regular-gray-text">Գործընթացների արդյունքում ձևավորում է կնքված պայմանագրերի պահեստ, որը կառավարելի է պատվիրատուի և պայմանագրի կողմի համար։ Պատվիրատուն համակարգի միջոցով կարող է պատվերներ տալ, հետևել պահեստի շարժին և պատրաստել ընդունման-հանձնման ակտեր և եզրակացություն փաստաթղթերը։</p>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="analytic-points" ref="analyticPoints">
            <div class="position-relative analytics-block">
                <img src="~/assets/landing/images/analytics.jpg" alt="analytics screen" class="analytics-main-image">
                <div class="blur"></div>
                <img src="~/assets/landing/images/sliderLayout.png" alt="layout" class="w-100 layout">
                <div class="wave-container position-relative">
                    <img src="~/assets/landing/images/line_1.svg" alt="line" class="w-100">
                    <img src="~/assets/landing/images/line_2.svg" alt="line" class="w-100">
                </div>
                <div class="counter-block counter w-100">
                    <client-only>
                    <Progress :transitionDuration="3000" :radius="innerWidth ? 51 : 62" :strokeWidth="innerWidth ?  8 : 10" :value="value">
                        <template v-slot:footer>
                            <div class="progress-content">Տենդերներ այսօր</div>
                        </template>
                        <template v-slot:default>
                            <div class="circle-background">
                                <div class="content">
                                    <ICountUp :delay="4000" :endVal="todayTenders" :options="options" />
                                </div>
                            </div>
                        </template>
                    </Progress>
                    <Progress :transitionDuration="3000" :radius="innerWidth ? 51 : 62" :strokeWidth="innerWidth ?  8 : 10" :value="value">
                        <div class="content">
                            <ICountUp :delay="4000" :endVal="activeTenders" :options="options" />
                        </div>
                        <template v-slot:footer>
                            <div class="progress-content">Ակտիվ տենդերներ</div>
                        </template>
                    </Progress>
                    <Progress :transitionDuration="3000" :radius="innerWidth ? 51 : 62" :strokeWidth="innerWidth ?  8 : 10" :value="value">
                        <template v-slot:default>
                            <div class="circle-background">
                                <div class="content long-progress">
                                    <ICountUp :delay="4000" :endVal="allTenders" :options="options" />
                                </div>
                            </div>
                        </template>
                        <template v-slot:footer>
                            <div class="progress-content">Բոլոր տենդերները</div>
                        </template>
                    </Progress>
                    <Progress :transitionDuration="3000" :radius="innerWidth ? 51 : 62" :strokeWidth="innerWidth ?  8 : 10" :value="value">
                        <template v-slot:default>
                            <div class="circle-background">
                                <div class="content">
                                    <ICountUp :delay="4000" :endVal="users" :options="options" />
                                </div>
                            </div>
                        </template>
                        <template v-slot:footer>
                            <div class="progress-content d-flex flex-column align-items-center"><span>Մասնավոր</span> <span>ընկերություններ</span> </div>
                        </template>
                    </Progress>
                    <Progress :transitionDuration="3000" :radius="innerWidth ? 51 : 62" :strokeWidth="innerWidth ?  8 : 10" :value="value">
                        <template v-slot:default>
                            <div class="circle-background">
                                <div class="content">
                                    <ICountUp :delay="4000" :endVal="usersState" :options="options" />
                                </div>
                            </div>
                        </template>
                        <template v-slot:footer>
                            <div class="progress-content d-flex flex-column align-items-center"><span>Պետական</span> <span>պատվիրատուներ</span></div>
                        </template>
                    </Progress>
                    </client-only>
                </div>
            </div>
        </section>
        <section id="advantages" class="home_desktop">
            <div class="advantages-block d-flex justify-content-between block-container">
                <div class="advantages-item">
                    <div class="advantages-background-icon">
                        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M90.0808 44.1133L102.82 70.0492L104.831 74.7044L110.195 75.3694L139.025 79.3596L118.241 99.3103L114.218 103.3L114.888 108.621L119.582 137.217L94.1037 123.916L89.4104 121.256L84.7171 123.916L59.2391 137.217L63.9324 108.621L64.6029 103.3L60.5801 99.3103L39.7954 79.3596L69.2962 75.3694L74.66 74.7044L76.6714 70.0492L90.0808 44.1133ZM90.0808 32.1428C86.7285 32.1428 84.0466 33.4729 82.0352 36.798L67.9553 65.3941L36.443 70.0492C29.0678 70.7143 26.3859 79.3596 31.7497 84.6798L54.5458 106.626L49.182 137.882C48.5115 143.202 52.5344 147.857 57.8982 147.857C59.2391 147.857 60.5801 147.857 61.921 147.192L90.0808 131.897L118.241 146.527C119.582 147.192 120.923 147.192 122.264 147.192C126.957 147.192 131.65 142.537 130.98 137.217L125.616 105.961L148.412 84.0148C153.776 79.3596 150.423 70.7143 143.719 69.3842L112.206 65.3941L98.1265 36.798C96.1151 33.4729 92.7627 32.1428 90.0808 32.1428Z" fill="#F7F7F7"/>
                        </svg>
                    </div>
                    <img src="~/assets/landing/images/Icon9.svg" alt="star icon">
                    <h6 v-resize-text="{ratio:1.3, maxFontSize: '23px', minFontSize: '10px'}" class="advantages-title h2">Հնարավորությունները</h6>
                    <ul class="advantages-content"> 
                        <li><span>Կազմակերպել տենդերներ</span></li>
                        <li><span>Կատարել գնումներ շուկայականից ցածր գներով</span></li>
                        <li><span>Ավտոմատացնել պետական գնումները</span></li>
                        <li><span>Տեղեկանալ տենդերների մասին</span></li>
                        <li><span>Պատրաստել տենդերների հայտեր</span></li>
                    </ul>
                </div>
                <div class="advantages-item">
                    <div class="advantages-background-icon">
                        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4203 28.9285H138.579C144.825 28.9285 150.377 34.4804 151.071 41.4203V138.579C151.071 145.519 145.519 151.071 138.579 151.071H41.4203C34.4804 151.071 28.9285 145.519 28.9285 138.579V41.4203C28.9285 34.4804 34.4804 28.9285 41.4203 28.9285ZM39.3384 139.967H139.967V39.3384H39.3384V139.967ZM56.6879 77.5079H67.7918V122.617H56.6879V77.5079ZM123.312 98.3279H112.208V122.618H123.312V98.3279ZM84.4473 56.6883H95.5512V122.618H84.4473V56.6883Z" fill="#F7F7F7"/>
                        </svg>
                    </div>
                    <img src="~/assets/landing/images/Icon8.svg" alt="chart icon">
                    <h6 v-resize-text="{ratio:1.3, maxFontSize: '23px', minFontSize: '10px'}" class="advantages-title h2">Առավելությունները</h6>
                    <ul class="advantages-content">
                        <li><span>Ապահովում է մրցակցություն</span></li>
                        <li><span>Ունի բարձր արդյունավետություն</span></li>
                        <li><span>Մատչելի է կառավարման համար</span></li>
                        <li><span>Թափանցիկության բարձր աստիճան</span></li>
                        <li><span>Ապահովում է անվտանգության բարձր աստիճան</span></li>
                    </ul>
                </div>
                <div class="advantages-item">
                    <div class="advantages-background-icon">
                        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M90.0001 25.7144C54.6783 25.7144 25.7144 54.6783 25.7144 90.0001C25.7144 125.322 54.6783 154.286 90.0001 154.286C125.322 154.286 154.286 125.322 154.286 90.0001C154.286 54.6783 125.322 25.7144 90.0001 25.7144ZM90.0001 143.689C60.3297 143.689 36.3109 119.67 36.3109 90.0001C36.3109 60.3297 60.3297 36.3109 90.0001 36.3109C119.67 36.3109 143.689 60.3297 143.689 90.0001C143.689 119.67 119.67 143.689 90.0001 143.689ZM90.0001 51.146C68.807 51.146 51.1461 68.8069 51.1461 90C51.1461 111.193 68.807 128.854 90.0001 128.854C111.193 128.854 128.854 111.193 128.854 90C128.854 68.8069 111.193 51.146 90.0001 51.146ZM90.0001 118.257C74.4585 118.257 61.7427 105.542 61.7427 90C61.7427 74.4584 74.4585 61.7425 90.0001 61.7425C105.542 61.7425 118.258 74.4584 118.258 90C118.258 105.542 105.542 118.257 90.0001 118.257ZM80.8155 90.0003C80.8155 85.0552 85.0541 80.8166 89.9992 80.8166C94.9442 80.8166 99.1828 85.0552 99.1828 90.0003C99.1828 94.9453 94.9442 99.1839 89.9992 99.1839C85.0541 99.1839 80.8155 94.9453 80.8155 90.0003Z" fill="#F7F7F7"/>
                        </svg>
                    </div>
                    <img src="~/assets/landing/images/Icon7.svg" alt="target icon">
                    <h6 v-resize-text="{ratio:1.3, maxFontSize: '23px', minFontSize: '10px'}" class="advantages-title h2">Լուծվող Խնդիրները</h6>
                    <ul class="advantages-content">
                        <li><span>Ծախսերի օպտիմալացում</span></li>
                        <li><span>Վաճառքների ավելացում</span></li>
                        <li><span>Շահավետ առաջարկ գտնելու ժամանակի կրճատում</span></li>
                        <li><span>Նոր գնորդների բացահայտում</span></li>
                        <li><span>Մրցակիցների բացահայտում</span></li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="advantages" class="home_mobile">
            <client-only placeholder="Loading...">
            <carousel :perPage="1" 
                      :paginationEnabled="false"
                      :navigationEnabled="false"
                      :loop="false"
                      :scrollPerPage="true" class="block-container w-100">
                <slide class="w-100">
                    <div class="mob-advantages-blocks">
                        <div class="advantages-background-icon">
                            <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M90.0808 44.1133L102.82 70.0492L104.831 74.7044L110.195 75.3694L139.025 79.3596L118.241 99.3103L114.218 103.3L114.888 108.621L119.582 137.217L94.1037 123.916L89.4104 121.256L84.7171 123.916L59.2391 137.217L63.9324 108.621L64.6029 103.3L60.5801 99.3103L39.7954 79.3596L69.2962 75.3694L74.66 74.7044L76.6714 70.0492L90.0808 44.1133ZM90.0808 32.1428C86.7285 32.1428 84.0466 33.4729 82.0352 36.798L67.9553 65.3941L36.443 70.0492C29.0678 70.7143 26.3859 79.3596 31.7497 84.6798L54.5458 106.626L49.182 137.882C48.5115 143.202 52.5344 147.857 57.8982 147.857C59.2391 147.857 60.5801 147.857 61.921 147.192L90.0808 131.897L118.241 146.527C119.582 147.192 120.923 147.192 122.264 147.192C126.957 147.192 131.65 142.537 130.98 137.217L125.616 105.961L148.412 84.0148C153.776 79.3596 150.423 70.7143 143.719 69.3842L112.206 65.3941L98.1265 36.798C96.1151 33.4729 92.7627 32.1428 90.0808 32.1428Z" fill="#F7F7F7"/>
                            </svg>
                        </div>
                        <img src="~/assets/landing/images/Icon9.svg" alt="star icon">
                        <h2 v-resize-text="{ratio:1.3, maxFontSize: '23px', minFontSize: '10px'}" class="advantages-title">Հնարավորությունները</h2>
                        <ul class="advantages-content"> 
                            <li><span>Կազմակերպել տենդերներ</span></li>
                            <li><span>Կատարել գնումներ շուկայականից ցածր գներով</span></li>
                            <li><span>Ավտոմատացնել պետական գնումները</span></li>
                            <li><span>Տեղեկանալ տենդերների մասին</span></li>
                            <li><span>Պատրաստել տենդերների հայտեր</span></li>
                        </ul>
                    </div>
                </slide>  
                <slide class="w-100">
                    <div class="mob-advantages-blocks">
                        <div class="advantages-background-icon">
                            <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4203 28.9285H138.579C144.825 28.9285 150.377 34.4804 151.071 41.4203V138.579C151.071 145.519 145.519 151.071 138.579 151.071H41.4203C34.4804 151.071 28.9285 145.519 28.9285 138.579V41.4203C28.9285 34.4804 34.4804 28.9285 41.4203 28.9285ZM39.3384 139.967H139.967V39.3384H39.3384V139.967ZM56.6879 77.5079H67.7918V122.617H56.6879V77.5079ZM123.312 98.3279H112.208V122.618H123.312V98.3279ZM84.4473 56.6883H95.5512V122.618H84.4473V56.6883Z" fill="#F7F7F7"/>
                            </svg>
                        </div>
                        <img src="~/assets/landing/images/Icon8.svg" alt="chart icon">
                        <h2 v-resize-text="{ratio:1.3, maxFontSize: '23px', minFontSize: '10px'}" class="advantages-title">Առավելությունները</h2>
                        <ul class="advantages-content">
                            <li><span>Ապահովում է մրցակցություն</span></li>
                            <li><span>Ունի բարձր արդյունավետություն</span></li>
                            <li><span>Մատչելի է կառավարման համար</span></li>
                            <li><span>Թափանցիկության բարձր աստիճան</span></li>
                            <li><span>Ապահովում է անվտանգության բարձր աստիճան</span></li>
                        </ul>
                    </div>
                </slide>   
                <slide class="w-100">
                    <div class="mob-advantages-blocks">
                        <div class="advantages-background-icon">
                            <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M90.0001 25.7144C54.6783 25.7144 25.7144 54.6783 25.7144 90.0001C25.7144 125.322 54.6783 154.286 90.0001 154.286C125.322 154.286 154.286 125.322 154.286 90.0001C154.286 54.6783 125.322 25.7144 90.0001 25.7144ZM90.0001 143.689C60.3297 143.689 36.3109 119.67 36.3109 90.0001C36.3109 60.3297 60.3297 36.3109 90.0001 36.3109C119.67 36.3109 143.689 60.3297 143.689 90.0001C143.689 119.67 119.67 143.689 90.0001 143.689ZM90.0001 51.146C68.807 51.146 51.1461 68.8069 51.1461 90C51.1461 111.193 68.807 128.854 90.0001 128.854C111.193 128.854 128.854 111.193 128.854 90C128.854 68.8069 111.193 51.146 90.0001 51.146ZM90.0001 118.257C74.4585 118.257 61.7427 105.542 61.7427 90C61.7427 74.4584 74.4585 61.7425 90.0001 61.7425C105.542 61.7425 118.258 74.4584 118.258 90C118.258 105.542 105.542 118.257 90.0001 118.257ZM80.8155 90.0003C80.8155 85.0552 85.0541 80.8166 89.9992 80.8166C94.9442 80.8166 99.1828 85.0552 99.1828 90.0003C99.1828 94.9453 94.9442 99.1839 89.9992 99.1839C85.0541 99.1839 80.8155 94.9453 80.8155 90.0003Z" fill="#F7F7F7"/>
                            </svg>
                        </div>
                        <img src="~/assets/landing/images/Icon7.svg" alt="target icon">
                        <h2 v-resize-text="{ratio:1.3, maxFontSize: '23px', minFontSize: '10px'}" class="advantages-title">Լուծվող Խնդիրները</h2>
                        <ul class="advantages-content">
                            <li><span>Ծախսերի օպտիմալացում</span></li>
                            <li><span>Վաճառքների ավելացում</span></li>
                            <li><span>Շահավետ առաջարկ գտնելու ժամանակի կրճատում</span></li>
                            <li><span>Նոր գնորդների բացահայտում</span></li>
                            <li><span>Մրցակիցների բացահայտում</span></li>
                        </ul>
                    </div>
                </slide>  
            </carousel>
            </client-only>
        </section>
        <News></News>
        <div class="subscribe block-container">
            <h5 class="subscribe-title">Բաժանորդագրվել նոր հրապարակումներին</h5>
            <div class="input-distance">
                <div class="d-flex justify-content-center">
                    <input v-model="email" type="text" class="w-50 subscribe-input" placeholder="Մուտքագրեք Ձեր էլ. փոստի հասցեն">
                    <label @click="submitEmail" class="subscribe-label">Բաժանորդագրվել</label>
                </div>
                <p v-if="!$v.email.email" class="text-danger mt-2">Մուտքագրված էլ. փոստի հասցեն սխալ է</p>
            </div>
        </div>
        <client-only placeholder="Loading...">
        <section id="packages">
            <div class="packages-bg">
                <div class="packages-container">
                    <h1 class="main-title">Փաթեթներ</h1>
                    <p class="text-distance text-center mb-0 main-content-styles px-4">
                        <template v-if="!isAuthenticated">
                            {{selectedTab === 0 ? 'Կազմակերպիր պետական գնման գործընթացները արագ և ճշգրիտ' : 'Ստացիր բիզնեսի զարգացման նոր հնարավորություններ'}}
                        </template>
                        <template v-else>
                            {{userType === 'STATE' ? 'Կազմակերպիր պետական գնման գործընթացները արագ և ճշգրիտ' : 'Ստացիր բիզնեսի զարգացման նոր հնարավորություններ'}}
                        </template>
                    </p>
                    <div v-if="!isAuthenticated">
                        <b-card no-body>
                            <b-tabs v-model="selectedTab" pills card>
                            <b-tab ref="bTabState" title="Պետականի համար" class="state" active>
                                <div class="block-container packages-block-container">
                                    <div class="packages-state-block package_desktop">
                                        <div class="packages-card">
                                            <div class="packages-card-header">
                                                <h6 class="package-header">Էկոնոմ</h6>
                                                <h1 class="package-content"><span>{{statePackages.econom.price}}</span> դր./տարի</h1>
                                            </div>
                                            <div class="packages-card-content d-flex flex-column justify-content-between">
                                                <div class="overflow-auto little-scroll">
                                                    <ul class="packages-card-content-item">
                                                        <li><span>Գնումների պլանների ավտոմատացում</span></li>
                                                        <li><span>Մեկ անձից գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <button class="button_H48" @click="notAuthenticatedPackages">Գնել</button>
                                                    <button class="details-btn">
                                                        <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                        <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="packages-card">
                                            <div class="packages-card-header">
                                                <h6 class="package-header">Պրեմիում</h6>
                                                <h1 class="package-content"><span>{{this.statePackages.premium.price}}</span> դր./տարի</h1>
                                            </div>
                                            <div class="packages-card-content d-flex flex-column justify-content-between">
                                                <div class="overflow-auto little-scroll">
                                                    <ul class="packages-card-content-item">
                                                        <li><span>Գնումների պլանների ավտոմատացում</span></li>
                                                        <li><span>Մեկ անձից գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                        <li><span>Մրցակցային գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>  
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <button class="button_H48" @click="notAuthenticatedPackages">Գնել</button>
                                                    <button class="details-btn">
                                                        <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                        <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="packages-card">
                                            <div class="packages-card-header">
                                                <h6 class="package-header">Գոլդ</h6>
                                                <h1 class="package-content"><span>{{this.statePackages.gold.price}}</span> դր./տարի</h1>
                                            </div>
                                            <div class="packages-card-content d-flex flex-column justify-content-between">
                                                <div class="overflow-auto little-scroll">
                                                    <ul class="packages-card-content-item">
                                                        <li><span>Գնումների պլանների ավտոմատացում</span></li>
                                                        <li><span>Մեկ անձից գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                        <li><span>Մրցակցային գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                        <li><span>Պայմանագրերի կառավարում և անհրաժեշտ փաստաթղթերի ավտոմատացում</span></li>
                                                        <li><span>Պետական գնումների բողոքների վերլուծության հասանելիություն</span></li>
                                                        <li><span>Պետական գնումների վիճակագրության և վերլուծության հասանելիություն</span></li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <button v-if="isAuthenticated" class="btn-outline-primary">Գնել</button>
                                                    <button v-if="!me.probation" class="button_H48 mt-3" @click="activateStateFreePeriod">10 օր անվճար</button>
                                                    <button class="details-btn">
                                                        <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                        <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="package_mobile">
                                        <carousel :perPageCustom="[[320, 1], [1200, 2]]"
                                                :paginationEnabled="false"
                                                :navigationEnabled="false"
                                                :loop="true"
                                                :scrollPerPage="true">
                                            <slide>
                                                <div class="mob-packages-card">
                                                    <div class="packages-card-header">
                                                        <h6 class="package-header">Էկոնոմ</h6>
                                                        <h1 class="package-content"><span>{{statePackages.econom.price}}</span> դր./տարի</h1>
                                                    </div>
                                                    <div class="packages-card-content d-flex flex-column justify-content-between">
                                                        <div class="overflow-auto little-scroll">
                                                            <ul class="packages-card-content-item">
                                                                <li><span>Գնումների պլանների ավտոմատացում</span></li>
                                                                <li><span>Մեկ անձից գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                            </ul>
                                                        </div>
                                                        <div class="d-flex flex-column">
                                                            <button class="button_H48" @click="notAuthenticatedPackages">Գնել</button>
                                                            <button class="details-btn">
                                                                <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                                <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </slide>  
                                            <slide>
                                                <div class="mob-packages-card">
                                                    <div class="packages-card-header">
                                                        <h6 class="package-header">Պրեմիում</h6>
                                                        <h1 class="package-content"><span>{{this.statePackages.premium.price}}</span> դր./տարի</h1>
                                                    </div>
                                                    <div class="packages-card-content d-flex flex-column justify-content-between">
                                                        <div class="overflow-auto little-scroll">
                                                            <ul class="packages-card-content-item">
                                                                <li><span>Գնումների պլանների ավտոմատացում</span></li>
                                                                <li><span>Մեկ անձից գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                                <li><span>Մրցակցային գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>  
                                                            </ul>
                                                        </div>
                                                        <div class="d-flex flex-column">
                                                            <button class="button_H48" @click="notAuthenticatedPackages">Գնել</button>
                                                            <button class="details-btn">
                                                                <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                                <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </slide>   
                                            <slide>
                                                <div class="mob-packages-card">
                                                    <div class="packages-card-header">
                                                        <h6 class="package-header">Գոլդ</h6>
                                                        <h1 class="package-content"><span>{{this.statePackages.gold.price}}</span> դր./տարի</h1>
                                                    </div>
                                                    <div class="packages-card-content d-flex flex-column justify-content-between">
                                                        <div class="overflow-auto little-scroll">
                                                            <ul class="packages-card-content-item">
                                                                <li><span>Գնումների պլանների ավտոմատացում</span></li>
                                                                <li><span>Մեկ անձից գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                                <li><span>Մրցակցային գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                                <li><span>Պայմանագրերի կառավարում և անհրաժեշտ փաստաթղթերի ավտոմատացում</span></li>
                                                                <li><span>Պետական գնումների բողոքների վերլուծության հասանելիություն</span></li>
                                                                <li><span>Պետական գնումների վիճակագրության և վերլուծության հասանելիություն</span></li>
                                                            </ul>
                                                        </div>
                                                        <div class="d-flex flex-column">
                                                            <button v-if="isAuthenticated" class="button_H48" @click="notAuthenticatedPackages">Գնել</button>
                                                            <button v-if="!me.probation" class="button_H48 mt-3" @click="activateStateFreePeriod">10 օր անվճար</button>
                                                            <button class="details-btn">
                                                                <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                                <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </slide>  
                                        </carousel>    
                                    </div>  
                                </div>
                            </b-tab>
                            <b-tab ref="bTabPrivate" title="Բիզնեսի համար" class="private" lazy>
                                <div class="block-container packages-block-container">
                                    <div class="packages-block package_desktop">
                                        <div class="packages-card">
                                            <div class="free-package-card-header">
                                                <h6 class="free-package-header">Անվճար փաթեթ</h6>
                                            </div>
                                            <div class="packages-card-content d-flex flex-column justify-content-between">
                                                <div class="overflow-auto little-scroll">
                                                    <ul class="packages-card-content-item">
                                                        <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                        <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <button class="button_H48 px-0 w-100" @click="notAuthenticatedPackages">Ակտիվացնել</button>
                                                    <button class="details-btn">
                                                        <nuxt-link to="/packages/private"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                        <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="packages-card">
                                            <div class="packages-card-header">
                                                <h6 class="package-header">Էկոնոմ</h6>
                                                <h1 class="package-content"><span>{{packages.econom}}</span> դր./տարի</h1>
                                            </div>
                                            <div class="packages-card-content d-flex flex-column justify-content-between">
                                                <div class="overflow-auto little-scroll">
                                                    <ul class="packages-card-content-item">
                                                        <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                        <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                        <li><span>Ստանալ տենդերների մասին տեղեկատվություն</span></li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <button class="button_H48 px-0 w-100" @click="notAuthenticatedPackages">Գնել</button>
                                                    <button class="details-btn">
                                                        <nuxt-link to="/packages/private"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                        <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="packages-card">
                                            <div class="packages-card-header">
                                                <h6 class="package-header">Պրեմիում</h6>
                                                <h1 class="package-content"><span>{{packages.premium}}</span> դր./տարի</h1>
                                            </div>
                                            <div class="packages-card-content d-flex flex-column justify-content-between">
                                                <div class="overflow-auto little-scroll">
                                                    <ul class="packages-card-content-item">
                                                        <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                        <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                        <li><span>Ստանալ տենդերների մասին տեղեկատվություն</span></li>
                                                        <li><span>Ավտոմատ պատրաստել տենդերների թղթերը</span></li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <button class="button_H48 px-0 w-100" @click="notAuthenticatedPackages">Գնել</button>
                                                    <button class="details-btn">
                                                        <nuxt-link to="/packages/private"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                        <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="packages-card">
                                            <div class="packages-card-header">
                                                <h6 class="package-header">Գոլդ</h6>
                                                    <h1 class="package-content"><span>{{packages.gold}}</span> դր./տարի</h1>
                                            </div>
                                            <div class="packages-card-content d-flex flex-column justify-content-between">
                                                <div class="overflow-auto little-scroll">
                                                    <ul class="packages-card-content-item">
                                                        <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                        <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                        <li><span>Ստանալ տենդերների մասին տեղեկատվություն</span></li>
                                                        <li><span>Ավտոմատ պատրաստել տենդերների թղթերը</span></li>
                                                        <li><span>Կառավարել պայմանագրերը</span></li>
                                                        <li><span>Տեսնել նախահաշվային գները</span></li>
                                                        <li><span>Վիճակագրություն</span></li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <button v-if="isAuthenticated" class="button_H48 px-0 w-100" @click="notAuthenticatedPackages">Գնել</button>
                                                    <button v-if="!me.probation" class="button_H48 px-0 w-100 mt-3" @click="activateFreePeriod">10 օր անվճար</button>
                                                    <button class="details-btn">
                                                        <nuxt-link to="/packages/private"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                        <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="package_mobile">
                                        <carousel :perPageCustom="[[320, 1],[500, 2], [1200, 3]]"
                                                :paginationEnabled="false"
                                                :navigationEnabled="false"
                                                :loop="true"
                                                :scrollPerPage="true">
                                            <slide>
                                                <div class="mob-packages-card">
                                                    <div class="free-package-card-header">
                                                        <h6 class="free-package-header">Անվճար փաթեթ</h6>
                                                    </div>
                                                    <div class="packages-card-content d-flex flex-column justify-content-between">
                                                        <div class="overflow-auto little-scroll">
                                                            <ul class="packages-card-content-item">
                                                                <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                                <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                            </ul>
                                                        </div>
                                                        <div class="d-flex flex-column">
                                                            <button class="button_H48 px-0 w-100" @click="notAuthenticatedPackages">Ակտիվացնել</button>
                                                            <button class="details-btn">
                                                                <nuxt-link to="/packages/private"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                                <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </slide>  
                                            <slide>
                                                <div class="mob-packages-card">
                                                    <div class="packages-card-header">
                                                        <h6 class="package-header">Էկոնոմ</h6>
                                                        <h1 class="package-content"><span>{{packages.econom}}</span> դր./տարի</h1>
                                                    </div>
                                                    <div class="packages-card-content d-flex flex-column justify-content-between">
                                                        <div class="overflow-auto little-scroll">
                                                            <ul class="packages-card-content-item">
                                                                <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                                <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                                <li><span>Ստանալ տենդերների մասին տեղեկատվություն</span></li>
                                                            </ul>
                                                        </div>
                                                        <div class="d-flex flex-column">
                                                            <button class="button_H48 px-0 w-100" @click="notAuthenticatedPackages">Գնել</button>
                                                            <button class="details-btn">
                                                                <nuxt-link to="/packages/private"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                                <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </slide>   
                                            <slide>
                                                <div class="mob-packages-card">
                                                    <div class="packages-card-header">
                                                        <h6 class="package-header">Պրեմիում</h6>
                                                        <h1 class="package-content"><span>{{packages.premium}}</span> դր./տարի</h1>
                                                    </div>
                                                    <div class="packages-card-content d-flex flex-column justify-content-between">
                                                        <div class="overflow-auto little-scroll">
                                                            <ul class="packages-card-content-item">
                                                                <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                                <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                                <li><span>Ստանալ տենդերների մասին տեղեկատվություն</span></li>
                                                                <li><span>Ավտոմատ պատրաստել տենդերների թղթերը</span></li>
                                                            </ul>
                                                        </div>
                                                        <div class="d-flex flex-column">
                                                            <button class="button_H48 px-0 w-100" @click="notAuthenticatedPackages">Գնել</button>
                                                            <button class="details-btn">
                                                                <nuxt-link to="/packages/private"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                                <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </slide>  
                                            <slide>
                                                <div class="mob-packages-card">
                                                    <div class="packages-card-header">
                                                            <h6 class="package-header">Գոլդ</h6>
                                                            <h1 class="package-content"><span>{{packages.gold}}</span> դր./տարի</h1>
                                                        </div>
                                                        <div class="packages-card-content d-flex flex-column justify-content-between">
                                                            <div class="overflow-auto little-scroll">
                                                                <ul class="packages-card-content-item">
                                                                    <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                                    <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                                    <li><span>Ստանալ տենդերների մասին տեղեկատվություն</span></li>
                                                                    <li><span>Ավտոմատ պատրաստել տենդերների թղթերը</span></li>
                                                                    <li><span>Կառավարել պայմանագրերը</span></li>
                                                                    <li><span>Տեսնել նախահաշվային գները</span></li>
                                                                    <li><span>Վիճակագրություն</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="d-flex flex-column">
                                                                <button v-if="isAuthenticated" class="button_H48 px-0 w-100" @click="notAuthenticatedPackages">Գնել</button>
                                                                <button v-if="!me.probation" class="button_H48 px-0 w-100 mt-3" @click="activateFreePeriod">10 օր անվճար</button>
                                                                <button class="details-btn">
                                                                    <nuxt-link to="/packages/private"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                                    <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                                </button>
                                                            </div>
                                                        </div>
                                                </div>
                                            </slide>  
                                        </carousel>    
                                    </div>
                                </div>
                            </b-tab>
                            </b-tabs>
                        </b-card>
                    </div>
                    <div v-else class="mt-5">
                        <div v-if="userType === 'STATE'" class="block-container packages-block-container">
                            <div class="packages-state-block package_desktop">
                                <div class="packages-card">
                                    <div class="packages-card-header">
                                        <h6 class="package-header">Էկոնոմ</h6>
                                        <h1 class="package-content"><span>{{statePackages.econom.price}}</span> դր./տարի</h1>
                                    </div>
                                    <div class="packages-card-content d-flex flex-column justify-content-between">
                                        <div class="overflow-auto little-scroll">
                                            <ul class="packages-card-content-item">
                                                <li><span>Գնումների պլանների ավտոմատացում</span></li>
                                                <li><span>Մեկ անձից գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                            </ul>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <button class="button_H48" @click="buyPackage('state', 'econom')">Գնել</button>
                                            <button class="details-btn">
                                                <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="packages-card">
                                    <div class="packages-card-header">
                                        <h6 class="package-header">Պրեմիում</h6>
                                        <h1 class="package-content"><span>{{this.statePackages.premium.price}}</span> դր./տարի</h1>
                                    </div>
                                    <div class="packages-card-content d-flex flex-column justify-content-between">
                                        <div class="overflow-auto little-scroll">
                                            <ul class="packages-card-content-item">
                                                <li><span>Գնումների պլանների ավտոմատացում</span></li>
                                                <li><span>Մեկ անձից գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                <li><span>Մրցակցային գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>  
                                            </ul>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <button class="button_H48" @click="buyPackage('state', 'premium')">Գնել</button>
                                            <button class="details-btn">
                                                <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="packages-card">
                                    <div class="packages-card-header">
                                        <h6 class="package-header">Գոլդ</h6>
                                        <h1 class="package-content"><span>{{this.statePackages.gold.price}}</span> դր./տարի</h1>
                                    </div>
                                    <div class="packages-card-content d-flex flex-column justify-content-between">
                                        <div class="overflow-auto little-scroll">
                                            <ul class="packages-card-content-item">
                                                <li><span>Գնումների պլանների ավտոմատացում</span></li>
                                                <li><span>Մեկ անձից գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                <li><span>Մրցակցային գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                <li><span>Պայմանագրերի կառավարում և անհրաժեշտ փաստաթղթերի ավտոմատացում</span></li>
                                                <li><span>Պետական գնումների բողոքների վերլուծության հասանելիություն</span></li>
                                                <li><span>Պետական գնումների վիճակագրության և վերլուծության հասանելիություն</span></li>
                                            </ul>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <button class="button_H48" @click="buyPackage('state', 'gold')">Գնել</button>
                                            <button v-if="!me.probation" class="button_H48 mt-3" @click="activateStateFreePeriod">10 օր անվճար</button>
                                            <button class="details-btn">
                                                <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="package_mobile">
                                <carousel :perPageCustom="[[320, 1], [1200, 2]]"
                                        :paginationEnabled="false"
                                        :navigationEnabled="false"
                                        :loop="true"
                                        :scrollPerPage="false">
                                    <slide>
                                        <div class="mob-packages-card">
                                            <div class="packages-card-header">
                                                <h6 class="package-header">Էկոնոմ</h6>
                                                <h1 class="package-content"><span>{{statePackages.econom.price}}</span> դր./տարի</h1>
                                            </div>
                                            <div class="packages-card-content d-flex flex-column justify-content-between">
                                                <div class="overflow-auto little-scroll">
                                                    <ul class="packages-card-content-item">
                                                        <li><span>Գնումների պլանների ավտոմատացում</span></li>
                                                        <li><span>Մեկ անձից գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <button class="button_H48" @click="buyPackage('state', 'econom')">Գնել</button>
                                                    <button class="details-btn">
                                                        <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                        <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </slide>  
                                    <slide>
                                        <div class="mob-packages-card">
                                            <div class="packages-card-header">
                                                <h6 class="package-header">Պրեմիում</h6>
                                                <h1 class="package-content"><span>{{this.statePackages.premium.price}}</span> դր./տարի</h1>
                                            </div>
                                            <div class="packages-card-content d-flex flex-column justify-content-between">
                                                <div class="overflow-auto little-scroll">
                                                    <ul class="packages-card-content-item">
                                                        <li><span>Գնումների պլանների ավտոմատացում</span></li>
                                                        <li><span>Մեկ անձից գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                        <li><span>Մրցակցային գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>  
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <button class="button_H48" @click="buyPackage('state', 'premium')">Գնել</button>
                                                    <button class="details-btn">
                                                        <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                        <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </slide>   
                                    <slide>
                                        <div class="mob-packages-card">
                                            <div class="packages-card-header">
                                                <h6 class="package-header">Գոլդ</h6>
                                                <h1 class="package-content"><span>{{this.statePackages.gold.price}}</span> դր./տարի</h1>
                                            </div>
                                            <div class="packages-card-content d-flex flex-column justify-content-between">
                                                <div class="overflow-auto little-scroll">
                                                    <ul class="packages-card-content-item">
                                                        <li><span>Գնումների պլանների ավտոմատացում</span></li>
                                                        <li><span>Մեկ անձից գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                        <li><span>Մրցակցային գնումների բոլոր փաստաթղթերի ավտոմատացում</span></li>
                                                        <li><span>Պայմանագրերի կառավարում և անհրաժեշտ փաստաթղթերի ավտոմատացում</span></li>
                                                        <li><span>Պետական գնումների բողոքների վերլուծության հասանելիություն</span></li>
                                                        <li><span>Պետական գնումների վիճակագրության և վերլուծության հասանելիություն</span></li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <button class="button_H48" @click="buyPackage('state', 'gold')">Գնել</button>
                                                    <button v-if="!me.probation" class="button_H48 mt-3" @click="activateStateFreePeriod">10 օր անվճար</button>
                                                    <button class="details-btn">
                                                        <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                        <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </slide>  
                                </carousel>    
                            </div>  
                        </div>
                        <div v-else class="block-container packages-block-container">
                            <div class="packages-block package_desktop">
                                    <div class="packages-card">
                                        <div class="free-package-card-header">
                                            <h6 class="free-package-header">Անվճար փաթեթ</h6>
                                        </div>
                                        <div class="packages-card-content d-flex flex-column justify-content-between">
                                            <div class="overflow-auto little-scroll">
                                                <ul class="packages-card-content-item">
                                                    <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                    <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                </ul>
                                            </div>
                                            <div class="d-flex flex-column">
                                                <button class="details-btn">
                                                    <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                    <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="packages-card">
                                        <div class="packages-card-header">
                                            <h6 class="package-header">Էկոնոմ</h6>
                                            <h1 class="package-content"><span>{{packages.econom}}</span> դր./տարի</h1>
                                        </div>
                                        <div class="packages-card-content d-flex flex-column justify-content-between">
                                            <div class="overflow-auto little-scroll">
                                                <ul class="packages-card-content-item">
                                                    <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                    <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                    <li><span>Ստանալ տենդերների մասին տեղեկատվություն</span></li>
                                                </ul>
                                            </div>
                                            <div class="d-flex flex-column">
                                                <button class="button_H48 px-0 w-100" @click="buyPackage('private', 'econom')">Գնել</button>
                                                <button class="details-btn">
                                                    <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                    <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="packages-card">
                                        <div class="packages-card-header">
                                            <h6 class="package-header">Պրեմիում</h6>
                                            <h1 class="package-content"><span>{{packages.premium}}</span> դր./տարի</h1>
                                        </div>
                                        <div class="packages-card-content d-flex flex-column justify-content-between">
                                            <div class="overflow-auto little-scroll">
                                                <ul class="packages-card-content-item">
                                                    <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                    <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                    <li><span>Ստանալ տենդերների մասին տեղեկատվություն</span></li>
                                                    <li><span>Ավտոմատ պատրաստել տենդերների թղթերը</span></li>
                                                </ul>
                                            </div>
                                            <div class="d-flex flex-column">
                                                <button class="button_H48 px-0 w-100" @click="buyPackage('private', 'premium')">Գնել</button>
                                                <button class="details-btn">
                                                    <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                    <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="packages-card">
                                        <div class="packages-card-header">
                                            <h6 class="package-header">Գոլդ</h6>
                                            <h1 class="package-content"><span>{{packages.gold}}</span> դր./տարի</h1>
                                        </div>
                                        <div class="packages-card-content d-flex flex-column justify-content-between">
                                            <div class="overflow-auto little-scroll">
                                                <ul class="packages-card-content-item">
                                                    <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                    <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                    <li><span>Ստանալ տենդերների մասին տեղեկատվություն</span></li>
                                                    <li><span>Ավտոմատ պատրաստել տենդերների թղթերը</span></li>
                                                    <li><span>Կառավարել պայմանագրերը</span></li>
                                                    <li><span>Տեսնել նախահաշվային գները</span></li>
                                                    <li><span>Վիճակագրություն</span></li>
                                                </ul>
                                            </div>
                                            <div class="d-flex flex-column">
                                                <button v-if="isAuthenticated" class="button_H48 px-0 w-100" @click="buyPackage('private', 'gold')">Գնել</button>
                                                <button v-if="!me.probation" class="button_H48 px-0 w-100 mt-3" @click="activateFreePeriod">10 օր անվճար</button>
                                                <button class="details-btn">
                                                    <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                    <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div class="package_mobile">
                                <carousel :perPageCustom="[[320, 1],[500, 2], [1200, 3]]"
                                        :paginationEnabled="false"
                                        :navigationEnabled="false"
                                        :loop="true"
                                        :scrollPerPage="true">
                                    <slide>
                                        <div class="mob-packages-card">
                                            <div class="free-package-card-header">
                                                <h6 class="free-package-header">Անվճար փաթեթ</h6>
                                            </div>
                                            <div class="packages-card-content d-flex flex-column justify-content-between">
                                                <div class="overflow-auto little-scroll">
                                                    <ul class="packages-card-content-item">
                                                        <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                        <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <button class="details-btn">
                                                        <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                        <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </slide>  
                                    <slide>
                                        <div class="mob-packages-card">
                                            <div class="packages-card-header">
                                                <h6 class="package-header">Էկոնոմ</h6>
                                                <h1 class="package-content"><span>{{packages.econom}}</span> դր./տարի</h1>
                                            </div>
                                            <div class="packages-card-content d-flex flex-column justify-content-between">
                                                <div class="overflow-auto little-scroll">
                                                    <ul class="packages-card-content-item">
                                                        <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                        <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                        <li><span>Ստանալ տենդերների մասին տեղեկատվություն</span></li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <button class="button_H48 px-0 w-100" @click="buyPackage('private', 'econom')">Գնել</button>
                                                    <button class="details-btn">
                                                        <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                        <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </slide>   
                                    <slide>
                                        <div class="mob-packages-card">
                                            <div class="packages-card-header">
                                                <h6 class="package-header">Պրեմիում</h6>
                                                <h1 class="package-content"><span>{{packages.premium}}</span> դր./տարի</h1>
                                            </div>
                                            <div class="packages-card-content d-flex flex-column justify-content-between">
                                                <div class="overflow-auto little-scroll">
                                                    <ul class="packages-card-content-item">
                                                        <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                        <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                        <li><span>Ստանալ տենդերների մասին տեղեկատվություն</span></li>
                                                        <li><span>Ավտոմատ պատրաստել տենդերների թղթերը</span></li>
                                                    </ul>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <button class="button_H48 px-0 w-100" @click="buyPackage('private', 'premium')">Գնել</button>
                                                    <button class="details-btn">
                                                        <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                        <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </slide>  
                                    <slide>
                                        <div class="mob-packages-card">
                                            <div class="packages-card-header">
                                                    <h6 class="package-header">Գոլդ</h6>
                                                    <h1 class="package-content"><span>{{packages.gold}}</span> դր./տարի</h1>
                                                </div>
                                                <div class="packages-card-content d-flex flex-column justify-content-between">
                                                    <div class="overflow-auto little-scroll">
                                                        <ul class="packages-card-content-item">
                                                            <li><span>Կազմակերպել տենդերներ և մասնակցել</span></li>
                                                            <li><span>Պետական մեկ անձից գնումներին ներկայացնել առաջարկներ</span></li>
                                                            <li><span>Ստանալ տենդերների մասին տեղեկատվություն</span></li>
                                                            <li><span>Ավտոմատ պատրաստել տենդերների թղթերը</span></li>
                                                            <li><span>Կառավարել պայմանագրերը</span></li>
                                                            <li><span>Տեսնել նախահաշվային գները</span></li>
                                                            <li><span>Վիճակագրություն</span></li>
                                                        </ul>
                                                    </div>
                                                    <div class="d-flex flex-column">
                                                        <button v-if="isAuthenticated" class="button_H48 px-0 w-100" @click="buyPackage('private', 'gold')">Գնել</button>
                                                        <button v-if="!me.probation" class="button_H48 px-0 w-100 mt-3" @click="activateFreePeriod">10 օր անվճար</button>
                                                        <button class="details-btn">
                                                            <nuxt-link to="/packages"><span class="mr-2">Մանրամասն</span></nuxt-link>
                                                            <img src="~/assets/landing/images/More arrow.svg" alt="arrow icon">
                                                        </button>
                                                    </div>
                                                </div>
                                        </div>
                                    </slide>  
                                </carousel>    
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center py-4 mt-4">
                        <VtbBanner />
                    </div>
                    <!-- <a class="d-flex justify-content-center vtb-state" target="_blank" href="https://www.vtb.am/am/business/financial-tool/bank-guarantee">
                        <img src="~/assets/landing/images/Frame.svg" href="https://www.vtb.am/"  alt="vtb europe banner" class="vtb_desktop">
                        <img src="~/assets/landing/images/Frame 17.png" href="https://www.vtb.am/"  alt="vtb" class="vtb_mobile">
                    </a> -->
                </div>
            </div>
        </section>
        </client-only>
        <section id="videos">
            <p class="main-title h1">Տեսանյութեր</p>
            <p class="text-distance text-center mb-5 main-content-styles">Դիտեք տենդերներին վերաբերվող օգտակար տեսանյութեր</p>
            <div class="d-flex justify-content-between videos-block block-container">
                <div>
                    <iframe class="w-100 h-100 radius8 main-video-frame" src="https://www.youtube.com/embed/aPzkjbPCFLg"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                </div>
                <div class="d-flex flex-column justify-content-between">
                    <iframe class="w-100 radius8" src="https://www.youtube.com/embed/EO-zBCmk6hg"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                    <iframe class="w-100 radius8" src="https://www.youtube.com/embed/iyvxJZouJF8"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>    
                </div>
            </div>
            <div class="d-flex justify-content-center block-container mt-5">
                <div class="loadMore col-12 col-md-3 p-0">
                    <button class="button_H48_more  w-100" id="loadMore">
                        <a href="https://www.youtube.com/channel/UCD3gwb1H1NE9qujwPzCd3pg" target="_blank">Տեսնել ավելին</a>
                    </button>
                </div>
            </div>
        </section>
        <hr class="block-container"/>
        <client-only placeholder="Loading...">
        <section id="partners" class="mb-5">
                <h1 class="main-title">Մեր գործընկերները</h1>
                <p class="text-distance text-center mb-0 main-content-styles px-4">Ծանոթացեք մեր գործընկերների և նրանց գործունեության հետ</p>
                <carousel 
                    class="partners block-container footer-carousel" 
                    :perPageCustom="[[360, 2],[500, 4], [1200, 5]]"
                    :autoplayTimeout="3000"
                    :autoplayHoverPause="true"
                    :centerMode="true"
                    :navigationEnabled="false"
                    :paginationEnabled="true"
                    :loop="true"
                >
                    <slide 
                        v-for="(partner, index) in partners" :key="index + Math.random()" 
                        class="h-100 px-3 align-content-center"
                    >
                        <img class="col filter" :alt="`${partner.user.name.hy.toLowerCase()} logo`" :src="`${imageUrl}/uploads/coWorkers/${partner.image}`">
                    </slide>
                </carousel> 
        </section>
        </client-only>
    </div>
</template>

<script>
// import PaymentModal from '../../private/participant/tenders/modals/PaymentModal'
import News from '~/components/landing/News.vue'
// import { Carousel, Slide } from 'vue-carousel';
// import Progress from "easy-circular-progress";
import { required, email } from 'vuelidate/lib/validators'
import EmailConfirm from '~/components/EmailConfirm'
import ResetPassword from '~/components/ResetPassword'
import Unsubscribe from '~/components/Unsubscribe'
import isMobile from '~/mixins/isMobileView'
import VtbBanner from '~/components/dashboard/banner'

export default {
    name: 'Home',
    mixins: [isMobile],
    components: {News, EmailConfirm, ResetPassword, VtbBanner, Unsubscribe},
    data(){
        return{
            statePrices: null,
            showEmailConfirm: false,
            showUnsubscribeModal: false,
            showResetPassword: false,
            selectedTab: 0,
            partners: [],
            info: {},
            innerWidth: false,
            showInfo_1: false,
            showInfo_2: false,
            showInfo_3: false,
            showInfo_4: false,
            showInfo_5: false,
            showInfo_6: false,
            email: '',  
            imageUrl: process.env.VUE_APP_URL,
            value: 0,
            windowTop: null,
            usersState: 0,
            users: 0,
            todayTenders: 0,  
            allTenders: 0,
            activeTenders: 0,
            options: {
                useEasing: false,
                useGrouping: true,
                separator: '',
                decimal: '.',
                prefix: '',
                suffix: '',
            },
            statePackages: {
                econom: {price: 0},
                premium: {price: 0},
                gold: {price: 0},
            },
            packages: {
                econom: {price: 0},
                premium: {price: 0},
                gold: {price: 0},
            },
        }
    },
    validations: {
        email: {required, email}
    },
    methods:{
        buyPackage(userType, packageName){
            // if(this.me.package === 'Անվճար'){
                if(userType === 'private'){
                    const packageIndex = packageName === 'econom' ? 1 : (packageName === 'premium' ? 2 : (packageName === 'gold' ? 3 : 0))
                    const selectedPackage = this.pricings[packageIndex]
                    const selectedMonth = selectedPackage.price.price_12
                    if(selectedPackage && selectedMonth){
                        const data = {selectedPackage, selectedMonth}
                        this.$modal.show('payment-modal', data );
                    } else {
                        this.$notify({
                            group: 'foo',
                            type: 'error',
                            text: 'Ընտրեք փաթեթը'
                        })
                    }
                } else {
                    const packageIndex = packageName === 'econom' ? 0 : (packageName === 'premium' ? 1 : (packageName === 'gold' ? 2 : 0))
                    const selectedPackage = this.statePrices[packageIndex]
                    const data = {selectedPackage}
                    this.$modal.show('payment-modal', data );
                }
            // } else {
            //     this.$notify({
            //         group: 'foo',
            //         type: 'error',
            //         title: 'Դուք ունեք ակտիվ փաթեթ',
            //         text: 'Հավելյալ հարցերի համար զանգահարել +37491244970'
            //     })
            // }
        },
        consoleLog(data){
            console.log(data)
        },
        closeEmailConfirmMethod(){
            this.showEmailConfirm = false
            document.body.style.overflowY = "scroll";
        },
        closeUnsubscribeMethod(){
            this.showUnsubscribeModal = false
            document.body.style.overflowY = "scroll";
        },
        closeResetPasswordMethod(){
            this.showResetPassword = false
            document.body.style.overflowY = "scroll";
        },
        showInfo(id){
            if(id === 1){
                this.showInfo_1 = !this.showInfo_1
            }else if(id === 2){
                this.showInfo_2 = !this.showInfo_2
            }else if(id === 3){
                this.showInfo_3 = !this.showInfo_3
            }else if(id === 4){
                this.showInfo_4 = !this.showInfo_4
            }else if(id === 5){
                this.showInfo_5 = !this.showInfo_5
            }else if(id === 6){
                this.showInfo_6 = !this.showInfo_6
            }
        },
        async onScroll() {
            this.windowTop = window.top.scrollY
            if(this.windowTop >= window.scrollY + this.$refs.analyticPoints.getBoundingClientRect().top - 700){
                this.value = 100
                this.usersState = this.info.data.users_state
                this.users = this.info.data.users
                this.todayTenders = this.info.data.today_tenders  
                this.allTenders = this.info.data.all_tenders
                this.activeTenders = this.info.data.active_tenders
            }
        },
        submitEmail(){
            this.$v.$touch()
            if(this.$v.$invalid) {
                return
            }
            const email = {
                email : this.email,
            }
            this.$client.post(`news/subscription`, email).then((value) => {
                if(value.data.error === false) {
                    this.$notify({
                        group: 'foo',
                        type: 'success',
                        title: '',
                        text: 'Դուք հաջողությամբ բաժանորդագրվեցիք նոր հրապարակումներին'
                    })
                } else if(value.data.message.email.Unique){
                    this.$notify({
                        group: 'foo',
                        type: 'error',
                        title: '',
                        text: 'Դուք արդեն բաժանորդագրվել եք նոր հրապարակումներին'
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
        },
        notAuthenticatedPackages(){
            this.$fire({
                text: "Խնդրում ենք մուտք գործել համակարգ փաթեթը ակտիվացնելու համար",
                type: "info",
                confirmButtonText: 'Մուտք գործել',
            }).then((result) => {
                if (result.value) {
                    this.$router.push(`/login`);
                }
            })
        },
        activateFreePeriod(){
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
                        customClass: {
                            confirmButton: 'btn btn-primary',
                        },
                    }
                ).then((result) => {
                    if(result){
                        this.$client.post('gold/package/probation/activate').then((value) => {
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
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll)
    },
    mounted() {
        if(this.$route.params.token){
            this.showEmailConfirm = true
            // document.getElementsByTagName('body').style.overflow = "hidden";
            document.body.style.overflowY = "hidden";
        }
        if(this.$route.params.passwordToken){
            this.showResetPassword = true
            // document.getElementsByTagName('body').style.overflow = "hidden";
            document.body.style.overflowY = "hidden";
        }
        if(this.$route.params.useremail){
            this.showUnsubscribeModal = true
            // document.getElementsByTagName('body').style.overflow = "hidden";
            document.body.style.overflowY = "hidden";
        }
        if(window.innerWidth <= 1200){
            this.innerWidth = !this.innerWidth
        }
        this.$client.get('co-workers').then(({data}) => {
            this.partners = data
        })
        this.$client.get('site/info').then(response => {
            this.info = response
        })
        window.addEventListener("scroll", this.onScroll)
        this.$client.get('package/state').then(response => {
            this.statePrices = response.data
        })
        this.$store.dispatch('pricing/get').then(data => {
            this.statePackages.econom = this.pricings[1].price.price_12
            this.statePackages.premium = this.pricings[2].price.price_12
            this.statePackages.gold = this.pricings[3].price.price_12

            this.packages.econom = this.pricings[1].price.price_12.price
            this.packages.premium = this.pricings[2].price.price_12.price
            this.packages.gold = this.pricings[3].price.price_12.price
        })
    },
    computed: {
        me() {
            return this.$store.getters['user/me']
        },
        pricings() {
            return this.$store.getters['pricing/pricing']
        },
        userType(){
            return this.$store.getters.userType
        },
        isAuthenticated() {
            return this.$store.getters['auth/isAuthenticated']
        },   
    },
    head: {
        title: 'Տենդերների կայք',
        link: [
            {rel: 'canonical', href: 'https://www.itender.am/'}
        ],
        meta: [
            { hid: 'description', name: 'description', content: 'Տենդերների տեղեկատվություն, փաստաթղթերի ավտոմատացում, պայմանագրերի կառավարում' }
        ]
    },
    jsonld: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://www.itender.am/",
        "contactPoint": [
        { "@type" : "ContactPoint",
            "telephone" : "+37491244970",
            "contactType" : "customer service"
        }],
    },
}
</script>

<style scoped>
    .header-slide-content{
        width: 505px;
        border-left: 6px solid #006BE6;
        background-color: white;
        position: absolute;
        bottom: 30%;
        left: 12.5%;
        padding: 35px;
        height: 312px;
    }
    .blue-btn{
        padding: 15px;
        color: white;
        font-size: 18px;
    }
    .text-distance{
        margin-top: 12px;
        margin-bottom: 36px;
    }
    .info-title{
        font-size: 29px;
        color: #0E0F12;
        line-height: 38px;
        font-weight: 700;
    }
    .info-title span{
        color: #006BE6;
    }
    .block{
        width: calc(100% / 3 - 60px);
    }
    .info-block{
        margin-top: 80px;
        margin-bottom: 60px;
    }
    .top-distance{
        margin-top: 60px;
    }
    .icon-distance{
        margin-right: 20px;
    }
    .info-block-distance{
        margin-bottom: 25px;
    }
    .info-second-block{
        background-color: #F7F7F7;
        padding: 60px 0;
    }
    .blur{
        position: absolute;
        background: rgba(14, 15, 18, 0.4);
        backdrop-filter: blur(6px);
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    .wave-container img { 
        position:absolute;
        bottom:30px;
        left:0;
    }
    .counter{
        position: absolute;
        top: 20%;
        left: 0;
        padding: 0 12.5%;
    }
    .progress-content{
        color: #F7F7F7;
        font-size: 18px;
        line-height: 26px;
        margin-top: 25px;
    }
    .content span{
        color: #FFFFFF;
        font-weight: 700;
        font-size: 36px;
    }
    #advantages{
        position: relative;
        background-color: #F7F7F7;
        height: 390px;
    }
    .advantages-block div{
        width: calc(100% / 3 - 15px);
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.03);
        border-radius: 24px;
        background-color: #FFFFFF;
        padding: 25px;
    }
    .advantages-block{
        position: absolute;
        top: -45px;
    }
    .advantages-content{
        margin-left: 18px;
        z-index: 999999;
        position: inherit;
    }
    .advantages-content li span{
        color: #595E6B;
        font-size: 16px;
        line-height: 24px;
    }
    .advantages-content li{
        color: #006BE6;
        list-style: disc;
        margin-bottom: 10px;
    }
    .advantages-title{
        color: #2D3036;
        font-weight: 700;
        font-size: 23px;
        line-height: 32px;
        margin: 25px 0 20px 0;
        padding: 0;
    }
    .packages-bg{
        background-image: url('~/assets/landing/images/Bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: auto;
    }
    .packages-container{
        padding-top: 60px;
        
    }
    .packages-state-block .packages-card{
        background: #FFFFFF;
        border: 1px solid #F7F7F7;
        box-sizing: border-box;
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.03);
        border-radius: 24px;
        height: 570px;
        width: calc(100% / 3 - 15px);
    }
    .packages-state-block{
        display: flex;
        justify-content: space-between;
    }
    .packages-card-header{
        height: 100px;
        padding: 15px;
        position: relative;
        overflow: hidden;
        background-color: #006BE6;
        /* margin-left:-0.4%; */
        /* margin-top:-0.4%; */
        border-radius: 24px 24px 0px 0px;
        background-image: linear-gradient(to right bottom, #006BE6 0%, #006BE6 49.8%, #0065D9 50%, #0065D9 50.2%, #0065D9 100%);
    }
    .packages-card-content{
        padding: 24px 35px;
        height: 87%;
        background-color: white;
        border-radius: 24px;
    }
    .details-btn{
        background-color: transparent;
        outline: none;
        border: 0;
        color: #40444D;
        font-size: 14px;
        line-height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
    }
    .packages-card-content-item{
        margin-left: 18px;
    }

    .packages-card-content-item li:last-child{
        margin-bottom: 0;
    }
    .packages-card-content-item li{
        color: #006BE6;
        list-style: disc;
        margin-bottom: 15px
    }
    .packages-card-content-item li span{
        font-size: 16px;
        line-height: 24px;
        color: #595E6B;
    }
    .videos-block{
        margin: 0 19%;
    }
    .videos-block div:first-child{
        width: calc(100% / 1.5 - 15px);
        height: 345px;
    }
    .videos-block div:last-child iframe{
        height: calc(100% / 2 - 15px);
    }
    .videos-block div:last-child{
        width: calc(100% - (100% / 1.5 - 15px) - 30px);
    }
    #videos{
        padding: 0 0 40px;
    }
    #partners{
        padding: 30px 0 0;
    }
    .filter{
        filter: grayscale(1);
        opacity: 0.8;
    }
    .subscribe-title{
        color: #2D3036;
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        margin-bottom: 0;
    }
    .subscribe{
        padding: 60px 0;
    }
    .subscribe-input{
        border: 1px solid #DADDE6;
        box-sizing: border-box;
        border-radius: 8px;
        background-color: white;
        padding: 15px 20px;
        height: 56px;
    }
    .subscribe-input::placeholder{
        color: #6E7485;
        font-size: 16px;
        line-height: 24px;
    }
    .subscribe-label{
        color: #FFFFFF;
        font-size: 18px;
        line-height: 26px;
        box-shadow: 0px 4px 8px rgba(0, 107, 230, 0.15);
        border-radius: 8px;
        background: #006BE6;
        padding: 15px 22px;
        margin-left: -20px;
        cursor: pointer;
        margin-bottom: 0;
    }
    .input-distance{
        margin-top: 30px;
    } 
    .home_mobile{
        display: none;
    }
    .mob-carousel{
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .analytics-main-image{
        width: 100%;
    }

    .counter-block{
        display: flex;
        justify-content: space-around;
    }
    .package_mobile{
        display: none;
    }
    .counter-block div{
        margin-left: 10px !important;
        margin-right: 10px !important;
    }
    .counter-block div:last-child{
        margin-right: 0;
    }
    /* .counter-block .percent{
        height: 85% !important;
        background: #ff000052 !important;
    }
    .counter-block div.circle-background{
        height: 93%;
        background: #00ff134f;
        margin-left: 16px !important;
        margin-right: 16px !important;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 5px;
        border-radius: 50%;
    } */
    @media only screen and (max-width: 760px) {
        .package_mobile{
            display: block;
        }
        .package_desktop{
            display: none;
        }
        .packages-card-content{
            height: 550px;
        }
        .mob-packages-card{
            background-color: white;
            margin: 0 8px;
            border-radius: 24px;
        }
    }
    @media only screen and (max-width: 1380px) {
        #advantages{
            height: 500px;
        }
    }
    @media only screen and (max-width: 1200px) {
        .home_desktop{
            display: none;
        }
        .home_mobile{
            display: block;
        }
        .header-slide-content_mobile{
            border-left: 6px solid #006BE6;
            background-color: white;
            padding: 30px 20px;
            filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.05));
        }
        .info-title{
            font-size: 26px;
            line-height: 36px;
        }
        .info-block{
            margin-top: 50px;
            margin-bottom: 50px;
        }
        .title{
            font-size: 23px;
            line-height: 32px;
        }
        .regular-text{
            font-size: 18px;
            line-height: 26px;
        }
        .text-distance{
            margin-bottom: 30px;
        }
        .mob-block{
            background: #F7F7F7;
            border-radius: 28px;
            padding: 20px;
            margin-bottom: 12px;
            cursor: pointer;
            transition: all 1s ease-out;
        }
        .mob-block.active{
            background-color: white;
            border: 1px solid #EDEFF2;
        }
        .mob-block:last-child{
            margin-bottom: 0;
        }
        .open_close_arrow{
            position: absolute;
            right: 0;
        }
        .top-distance{
            margin-top: 40px;
        }
        .mob-second-block{
            background-color: #FFFFFF;
            border-radius: 28px;
            padding: 20px;
            margin-bottom: 12px;
            cursor: pointer;
            transition: all 1s ease-out;
        }
        .mob-second-block.active{
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
        }
        .info-second-block{
            padding: 50px 0;
        }
        .mob-advantages-blocks{
            position: relative;
            box-shadow: 0px 8px 20px rgb(0 0 0 / 3%);
            border-radius: 24px;
            background-color: #FFFFFF;
            padding: 30px 26px 36px 16px;
            height: 500px;
            margin-right: 15px;
        }
        #advantages > .VueCarousel{
            position: absolute;
            top: -55px;
            width: 95% !important;
        }
        #advantages{
            height: 485px;
        }
        .videos-block{
            flex-direction: column;
        }
        .videos-block div{
            width: 100%;
        }
        .videos-block div:first-child{
            width: 100%;
            height: 449px;
            margin-bottom: 15px;
        }
        .videos-block div:last-child{
            width: 100%;
            height: 889px;
        }
        .videos-block div:last-child iframe{
            height: 100%;
            margin-bottom: 15px;
        }
        .videos-block div:last-child iframe:last-child{
            margin-bottom: 0;
        }



        .info-block-cards .card-custom{
            border: 0 !important;
            box-shadow: none !important;
            cursor: pointer;
            box-sizing: border-box;
        }
        .info-block-cards .card-header-custom{
            background: #F7F7F7;
            border-radius: 28px;
            border: 0 !important;
        }
        .info-block-cards .card-header-custom.active{
            background: white;
        }
        .info-block-cards .card-custom.active{
            border: 1px solid #EDEFF2 !important;
            border-radius: 28px !important;
        }
        [aria-expanded="true"] .rotate-arrow{
            transform: rotate(-180deg);
            transition: all 0.4s linear;
        }

        [aria-expanded="false"] .rotate-arrow{
            transform: rotate(0deg);
            transition: all 0.4s linear;
        }

        .distance-top{
            margin-top: 40px;
        }


        .info-second-block .info-block-cards .card-custom{
            border: 0 !important;
            box-shadow: none !important;
            cursor: pointer;
            box-sizing: border-box;
            background: transparent !important;
        }
        .info-second-block .info-block-cards .card-header-custom{
            background: #FFFFFF;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
            border-radius: 28px;
        }
        .info-second-block .info-block-cards .card-header-custom.active{
            background: white;
            box-shadow: none;
        }
        .info-second-block .info-block-cards .card-custom.active{
            border-radius: 28px !important;
            background: #FFFFFF !important;
        }



        .counter{
            top: 10%;
            justify-content: center !important;
        }
        .counter-block > div{
            margin-top: 20px;
        }
        .analytics-main-image{
            width: inherit;
        }
        .analytics-block{
            overflow: hidden;
        }
        .counter-block{
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }
    @media only screen and (max-width: 1200px) {
        .analytics-main-image{
            height: 620px;
        }
    }

    @media only screen and (max-width: 820px) {
        .subscribe div:last-child div{
            flex-direction: column;
            align-items: center;
        }
        .subscribe-label{
            margin-top: 20px;
        }
        .subscribe{
            padding: 50px 0 120px;
        }
        .videos-block{
            margin: 0 25px;
        }
        .counter{
            padding: 0 30px;
        }
        .subscribe-label{
            margin-left: 0;
        }
    }

    @media only screen and (max-width: 770px) {
        .packages-card-header, .free-package-card-header{
            height: 120px;
        }
        .packages-card-content{
            height: 650px;
        }
    }

    @media only screen and (max-width: 650px) {
        .videos-block div:first-child{
            height: 320px;
        }
        .videos-block div:last-child{
            width: 100%;
            height: 640px;
        }
        .subscribe-input{
            width: 100% !important;
        }
        #advantages > .VueCarousel{
            width: 92% !important;
        }
    }
    @media only screen and (max-width: 632px) {
        .analytics-main-image{
            height: 800px !important;
        }
    }

    @media only screen and (max-width: 500px) {
        .analytics-main-image{
            /* height: 850px !important; */
        }
        .image-height{
            height: 300px;
            object-fit: cover;
        }
        .new-block-container{
            margin-left:  8px !important;
            margin-right:  8px !important;
        }
        .mob-advantages-blocks{
            height: 525px;
        }
        #advantages{
            height: 525px;
        }
    }

    @media only screen and (max-width: 353px) {
        .analytics-main-image{
            height: 1100px !important;
        }
    }

    @media only screen and (max-width: 341px) {
        .analytics-main-image{
            height: 1300px !important;
        }
    }

</style>

<style>
    #slider, #slider .VueCarousel{
        max-height: 590px;
    }
    #homePage #slider .VueCarousel-dot{
        width: 8px !important;
        height: 8px !important;
        background-color: white !important;
        padding: 0 8px !important;
    }
    #homePage #slider .VueCarousel-dot--active{
        background-color: #006BE6 !important;
    }
    #homePage #slider .VueCarousel-pagination{
        position: absolute;
        bottom: 35px;
    }
    #homePage .circle__progress--fill{
        stroke: #006BE6 !important;
    }
    #homePage .circle__progress--path{
        background: #FFFFFF;
        stroke: #FFFFFF !important;
        opacity: 0.3;
    }
    #homePage .circle{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #homePage .percent::after{
        content: '';
        margin: 0;
    }
    #packages .card{
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
    }
    #packages .card-header{
        background: white !important;
        box-shadow: none !important;
        margin: 30px auto 50px;
        width: fit-content;
        border: 1px solid #DADDE6 !important;
        box-sizing: border-box;
        border-radius: 8px !important;
        padding: 0 !important;
    }
    #packages .nav.nav-pills{
        background: transparent !important;
        margin: 0 !important;
    }
    #packages .nav-pills .nav-link.active, .nav-pills .show > .nav-link{
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
    #packages .nav-pills .nav-link{
        color: #2D3036;
        justify-content: center;
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 24px;
        /* padding: 12px 20px; */
        transition: all 0.2s linear;
    }
    #packages .tab-content > .tab-pane{
        padding-bottom: 0 !important;
    }
    #homePage .VueCarousel-inner{
        align-items: center;
    }
    #homePage #partners .VueCarousel-dot{
        width: 8px !important;
        height: 8px !important;
        background: #DADDE6 !important;
        margin-right: 30px !important;
        padding: 0 !important;
    }
    #homePage #partners .VueCarousel-dot--active{
        background: #006BE6 !important;
    }
    #homePage #partners .VueCarousel-wrapper{
        margin: 60px 0 40px !important;
    }

    @media only screen and (max-width: 1200px) {
        #homePage #slider .VueCarousel-pagination {
            bottom: 260px;
        }
    }
    @media only screen and (max-width: 565px) {
        #homePage #slider .VueCarousel-pagination {
            bottom: 300px;
        }
    }
    @media only screen and (max-width: 413px) {
        #homePage #slider .VueCarousel-pagination {
            bottom: 350px;
        }
        #slider, #slider .VueCarousel{
            max-height: fit-content;
        }
    }
</style>
<style>
  @font-face{ 
    font-family: GHEA grapalat;
    src: url('/fonts/gheagrpalatreg-webfont.woff') format('woff'),
  }
  .table-responsive table{
    overflow-x: scroll !important;
  }
  .tox-tinymce{
    border: 0 !important;
  }
  .tox .tox-statusbar{
    display: none !important;
  }
  .header-carousel .VueCarousel-navigation-next{
    font-size: 32px !important;
    transform: none !important;
    color: white !important;
    width: 50px !important;
    height: 50px !important;
    right: 20px !important;
    top: 50% !important;
    padding: 0 !important;
    background: linear-gradient( 
    180deg, #006BE6 0%, #43B4B2 100%) !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding-bottom: 6px !important;
  }
  .header-carousel .VueCarousel-navigation-prev{
      font-size: 32px !important;
      transform: none !important;
      color: white !important;
      width: 50px !important;
      height: 50px !important;
      left: 20px !important;
      top: 50% !important;
      padding: 0 !important;
      background: linear-gradient( 
      180deg, #006BE6 0%, #43B4B2 100%) !important;
      border-radius: 50% !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding-bottom: 6px !important;
  }
  .header-carousel .VueCarousel-pagination{
    margin-top: -90px;
    z-index: 100;
  }
  .header-carousel .VueCarousel-dot--active{
    background-color: #006BE6 !important;
  }
  .header-carousel .VueCarousel-dot{
    width: 15px !important;
    height: 15px !important;
  }
  .footer-carousel .VueCarousel-inner{
    height: 250px !important;
  }
  .footer-carousel .VueCarousel-inner .VueCarousel-slide .filter:hover{
    filter: grayscale(0);
    transition: .3s;
    cursor: pointer;
  }
  .footer-carousel .VueCarousel-navigation-next{
    font-size: 32px !important;
    transform: none !important;
    color: white !important;
    width: 50px !important;
    height: 50px !important;
    right: -45px !important;
    top: 40% !important;
    padding: 0 !important;
    background: linear-gradient( 
    180deg, #006BE6 0%, #43B4B2 100%) !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding-bottom: 6px !important;
  }
  .footer-carousel .VueCarousel-navigation-prev{
      font-size: 32px !important;
      transform: none !important;
      color: white !important;
      width: 50px !important;
      height: 50px !important;
      left: -45px !important;
      top: 40% !important;
      padding: 0 !important;
      background: linear-gradient( 
      180deg, #006BE6 0%, #43B4B2 100%) !important;
      border-radius: 50% !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding-bottom: 6px !important;
  }
  .footer-carousel .VueCarousel-navigation-next:hover{
    color: #006BE6 !important;
    border: 3px solid #43B4B2 !important;
    background: none !important;
    font-size: 29px !important;
    font-weight: 500 !important;
  }
  .footer-carousel .VueCarousel-navigation-prev:hover{
    color: #006BE6 !important;
    border: 3px solid #43B4B2 !important;
    background: none !important;
    font-size: 29px !important;
    font-weight: 500 !important;
  }
  .footer-carousel .VueCarousel-slide{
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: 100% !important;
  }
  .footer-carousel .VueCarousel-slide img {
    width: auto !important;
    /* max-width: 238px; */
    /* max-height: 80px; */
    max-height: 100%;
  }
  .menu-item.nuxt-link-active:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #006be6;
    bottom: 2px;
    left: 0;
}
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background: #FFF;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 6px; 
    background-color: #006BE6;
    outline: 1px solid #006BE6;
  }


  @media only screen and (max-width: 1100px) {
    .header-carousel .VueCarousel-dot{
      width: 10px !important;
      height: 10px !important;
    }
  }
  @media only screen and (max-width: 700px) {
    .header-carousel .VueCarousel-navigation-next{
      display: none !important;
    }
    .header-carousel .VueCarousel-navigation-prev{
      display: none !important;
    }
  }
  @media only screen and (max-width: 650px) {
    .footer-carousel .VueCarousel-inner{
      height: 150px !important;
    }
    .footer-carousel .VueCarousel-navigation-prev{
      color: #000000cc !important;
      background: none !important;
      font-size: 40px !important;
      top: 30% !important;
      font-weight: 900 !important;
      left: -25px !important;
      padding-bottom: 0 !important;
    }
    .footer-carousel .VueCarousel-navigation-next{
      color: #000000cc !important;
      background: none !important;
      font-size: 40px !important;
      top: 30% !important;
      font-weight: 900 !important;
      right: -25px !important;
      padding-bottom: 0 !important;
    }
    .footer-carousel .VueCarousel-navigation-next:hover{
      color: #000000cc !important;
      background: none !important;
      font-size: 40px !important;
      top: 30% !important;
      font-weight: 900 !important;
      right: -25px !important;
      padding-bottom: 0 !important;
      border: 0 !important;
    }
    .footer-carousel .VueCarousel-navigation-prev:hover{
      color: #000000cc !important;
      background: none !important;
      font-size: 40px !important;
      top: 30% !important;
      font-weight: 900 !important;
      left: -25px !important;
      padding-bottom: 0 !important;
      border: 0 !important;
    }
  }
  @media only screen and (max-width: 600px) {
    .header-carousel .VueCarousel-dot{
      width: 8px !important;
      height: 8px !important;
    }
  }
  @media only screen and (max-width: 430px) {
    .footer-carousel .VueCarousel-navigation-prev{
      font-size: 35px !important;
      top: 22% !important;
      font-weight: 900 !important;
    }
    .footer-carousel .VueCarousel-navigation-next{
      font-size: 35px !important;
      top: 22% !important;
      font-weight: 900 !important;
    }
    .header-carousel .VueCarousel-pagination{
      margin-top: -75px !important;
    }
  }
</style>
