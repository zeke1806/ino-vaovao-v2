import { boot } from 'quasar/wrappers';
import { Plugins } from '../../src-capacitor/node_modules/@capacitor/core';
import { TOKEN } from 'src/configs';

const { Storage } = Plugins;

export default boot(({ router }) => {
  router.beforeEach(async (to, from, next) => {
    const token = await Storage.get({
      key: TOKEN
    });

    if(!token && to.fullPath.includes('/app')) {
      next({
        path: '/login'
      });
    }
    else if(token && !to.fullPath.includes('/app')) {
      next({
        path: '/app/home'
      })
    }
    else next();
  });
});
