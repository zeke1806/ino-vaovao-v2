import { boot } from 'quasar/wrappers';
import VueRouter from 'vue-router';

export let routerInstance: VueRouter = {} as VueRouter;

export default boot(({ router }) => {
  routerInstance = router;
});
