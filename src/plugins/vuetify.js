import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VueI18n from 'vue-i18n'

import zhHans from 'vuetify/lib/locale/zh-Hans'
import pt from 'vuetify/lib/locale/pt'

Vue.use(Vuetify);
Vue.use(VueI18n)

  export default new Vuetify({
    lang: {
      locales: { pt },
      current: 'pt',
    },
  })
