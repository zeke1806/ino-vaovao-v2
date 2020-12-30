import { DefaultApolloClient } from '@vue/apollo-composable';
import { provide } from '@vue/composition-api';
import { boot } from 'quasar/wrappers';
import { apollo } from '../api/apollo';

export default boot(({ app }) => {
  app.setup = () => {
    provide(DefaultApolloClient, apollo);
    return {};
  }
});
