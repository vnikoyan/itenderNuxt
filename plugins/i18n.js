import Vue from 'vue';
import VueI18n from 'vue-i18n';
import hy from '~/locales/hy.js';
import ru from '~/locales/ru.js';
import en from '~/locales/en.js';

Vue.use(VueI18n);

export default new VueI18n({
  lazy: true,
  locale: 'hy',
  messages: {hy, ru, en},
})