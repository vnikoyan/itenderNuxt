<template>
    <section id="news" class="block-container">
        <div class="news-block"> 
            <div>
                <p class="main-title h1">Վերջին {{isArticlePage ? 'հոդվածները' : 'նորությունները'}}</p>
                <div v-if="!isArticlePage" class="text-distance">
                    <p class="text-center mb-0 main-content-styles">Հետևեք համակարգի նորություններին</p>
                </div>
            </div>
            <div class="news-distance">
                <template v-for="(item, index) in news">      
                    <template>
                        <div :key="index + Math.random()" class="news-block-item content">
                            <div class="text-center">
                                <nuxt-link :to="`new/${item.id}`" >
                                    <img class="news-images" :src="`${item.image}`" :alt="`${item.title[$i18n.locale]}`">
                                </nuxt-link>
                            </div>
                            <nuxt-link :to="`new/${item.id}`">
                                <div class="d-flex align-items-center justify-content-between">
                                    <h2 class="news-title h5">{{item.newsTitle}}</h2>
                                    <img src="~/assets/landing/images/more.svg" alt="arrow icon" class="mr-3">
                                </div>
                                <p v-html="item.newsContent" class="news-content"></p>
                            </nuxt-link>
                        </div>
                    </template>        
                </template>
            </div>
            <!-- <div class="loadMore">
                <button class="button_H48_more" id="loadMore" @click="showMore">Տեսնել ավելին</button>
            </div> -->
        </div>
    </section>
</template>

<script>
import $ from 'jquery';
export default {
    computed: {
        news() {
            const news = this.$store.getters['news/event']
            news.forEach((item,index) => {
                item.newsContent = item.description.hy
                if(item.newsContent.length >= 85){
                    item.newsContent = item.newsContent.substring(0,85)
                    item.newsContent = item.newsContent.concat(' ...')
                }

                item.newsTitle = item.title.hy
                if(item.newsTitle.length >= 50){
                    item.newsTitle = item.newsTitle.substring(0,50)
                    item.newsTitle = item.newsTitle.concat(' ...')
                }
            })
            return news;
        }
    },
    async mounted(){
        this.isArticlePage = this.$route.fullPath === '/' ? 0 : 1;
        $(".content").slice(0, 3).show()
        if($(".content:hidden").length === 0){
            $("#loadMore").prop('disabled', true).addClass("noContent")
        }else{
            $("#loadMore").prop('disabled', false)
        }
        console.log(this.$route.fullPath)
        await this.$store.dispatch('news/get', {is_article: this.isArticlePage})
    },
    data() {
      return {
        isArticlePage: false,
        newsContent: null,
        newsTitle: null,
      }
    },
    methods: {
        showMore(e){
            e.preventDefault()
            $(".content:hidden").slice(0, 3).slideDown()
            if($(".content:hidden").length === 0){
                $("#loadMore").prop('disabled', true).addClass("noContent")
            }else{
                $("#loadMore").prop('disabled', false)
            }
        }
    },
    name: 'News',
  }
</script>

<style scoped>

    /* .block-container {
        margin: 0 6.5%;
    } */
    .news-block{
        padding: 60px 0;
    }
    .text-distance{
        margin-top: 15px;
    }
    .news-images{
        width: 350px;
        height: 300px;
    }
    .news-block-item{
        width: 320px;
    }
    .news-content{
        color: #595E6B;
        font-size: 16px;
        line-height: 24px;
    }
    .news-title{
        color: #2D3036;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        margin-top: 16px;
        margin-bottom: 8px;
        margin-right: 10px;
    }
    .loadMore{
        margin-top: 55px;
        display: flex;
        justify-content: center;
    }
    .news-distance{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: stretch !important;
    }
    .news-distance > div{
        margin-top: 40px;
        width: calc(100% / 3 - 20px);
    }
    .show-more__item{
        display: none;
    }
    @media only screen and (max-width: 950px) {
        .news-distance > div{
            width: calc(100% / 2 - 20px);
        }
        .news-images{
            width: 340px;
            height: 320px;
        }
    }

    @media only screen and (max-width: 600px) {
        .news-images{
            width: 260px;
            height: 250px;
        }
    }
    @media only screen and (max-width: 500px) {
        .news-distance{
            display: flex;
            justify-content: center;
        }
        .news-distance > div{
            width: 100%;
        }
        .news-images{
            height: auto;
        }
    }


</style>
