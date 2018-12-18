import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import LazyLoadDirective from "~/plugins/LazyLoadDirective.js"


Vue.use(VueLazyload, {
  lazyComponent: true
});
Vue.directive("lazyload", LazyLoadDirective);
