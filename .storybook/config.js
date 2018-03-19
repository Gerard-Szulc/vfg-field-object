import { configure } from '@storybook/vue';
import Vue from 'vue';

import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";

// Import your custom components.
import ModuleLibrary from '@/index';


// Install this library
Vue.use(ModuleLibrary);

Vue.use(VueFormGenerator);
// Install Vue plugins
// ex: Vue.use(vuex)

// Load stories
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
