import { useMutation } from '@vue/apollo-composable';
import { computed, reactive, ref } from '@vue/composition-api'
import { date } from 'quasar';
import { MutationRegisterArgs } from 'src/api/types'
import { REGISTER, RegisterData } from 'src/api/user';

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

  const { mutate, onDone } = useMutation<RegisterData, MutationRegisterArgs>(REGISTER);

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
    void mutate(form);
  }

  onDone(({ data }) => {
    console.log('register done => ', data);
  })

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
