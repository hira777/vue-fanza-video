import Vue from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlayCircle,
  faPauseCircle
} from '@fortawesome/free-regular-svg-icons';
import { faUndoAlt, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlayCircle, faPauseCircle, faUndoAlt, faRedoAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  el: '#app',
  render: h => h(App)
});
