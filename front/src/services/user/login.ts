import { useMutation } from '@vue/apollo-composable';
import { reactive } from '@vue/composition-api'
import { MutationLoginArgs } from 'src/api/types'
import { LOGIN, LoginData } from 'src/api/user';
import { Plugins } from '@capacitor/core';
import { TOKEN } from 'src/configs';
import { routerInstance } from 'src/boot/router';
import { logErrorMessages } from '@vue/apollo-util';
import { Notify } from 'quasar';

const { Storage } = Plugins;

export const useLogin = () => {
  const form = reactive<MutationLoginArgs>({
    username: '',
    password: ''
  });

  const { mutate, loading, onDone, onError } = useMutation<LoginData, MutationLoginArgs>(LOGIN);

  const submit = () => {
    if(form.username && form.password) {
      void mutate(form);
    }
  }

  onDone(({ data }) => {
    if(data) {
      void Storage.set({
        key: TOKEN,
        value: data.login.token
      });
      void routerInstance.replace('/home');
      form.username = '';
      form.password = '';
    }
  });

  onError((error) => {
    logErrorMessages(error);
    Notify.create({
      message: 'Information de connexion incorrecte',
      type: 'negative'
    })
  });

  return {
    form,
    loading,
    submit
  }
}
