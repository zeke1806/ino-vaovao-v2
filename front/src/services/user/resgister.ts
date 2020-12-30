import { useMutation } from '@vue/apollo-composable';
import { computed, reactive, ref } from '@vue/composition-api'
import { date } from 'quasar';
import { MutationRegisterArgs } from 'src/api/types'
import { REGISTER, RegisterData } from 'src/api/user';
import { Notify } from 'quasar';
import { logErrorMessages } from '@vue/apollo-util';

export const useRegister = () => {
  const validatePassword = ref('');
  const isPwd = ref(true);
  const form = reactive<MutationRegisterArgs>({
    input: {
      username: '',
      password: '',
      birthday: new Date().toISOString(),
      sex: true
    }
  });

  const { mutate, onDone, onError } = useMutation<RegisterData, MutationRegisterArgs>(REGISTER);

  const formatedDate = computed(() => date.formatDate(form.input.birthday, 'YYYY-MM-DD'));

  const isPasswordOk = computed(() =>
    form.input.password !== '' &&
    validatePassword.value !== '' &&
    form.input.password === validatePassword.value);

  const stringSex = computed({
    get() {
      return form.input.sex ? 'true' : 'false';
    },
    set(value: string) {
      if (value === 'true') form.input.sex = true;
      else form.input.sex = false;
    }
  });

  const submit = () => {
    const { username, password } = form.input;
    if(username && password && password === validatePassword.value) {
      void mutate(form);
    }
  };

  onDone(({ data }) => {
    if(data) {
      Notify.create({
        message: `Votre compte ${data.register.username} a ete creer avec succes`,
        type: 'positive',
        actions: [
          { label: 'Se connecter', color: 'white', handler: () => { /* ... */ } }
        ]
      });
    }
  });

  onError((error) => {
    logErrorMessages(error);
    Notify.create({
      message: `L'indentifiant ${form.input.username} n'est plus disponible`,
      type: 'negative'
    })
  });

  return {
    form,
    validatePassword,
    stringSex,
    formatedDate,
    isPasswordOk,
    isPwd,
    submit
  }
}
