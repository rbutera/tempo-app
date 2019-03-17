import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import './styles/quasar.styl';
import 'quasar/dist/quasar.ie.polyfills';
import iconSet from 'quasar/icon-set/fontawesome-v5.js';
import lang from 'quasar/lang/en-gb.js';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import '@quasar/extras/mdi-v3/mdi-v3.css';
import '@quasar/extras/eva-icons/eva-icons.css';
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
} from 'quasar';

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
  },
  directives: {
  },
  plugins: {
  },
  lang,
  iconSet,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
