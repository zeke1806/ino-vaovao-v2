<template>
  <q-page padding class="column">
    <q-space />

    <div class="text-h4 row justify-center">Inscription</div>

    <q-space />

    <form @submit.prevent="submit">
      <q-input label="Identifiant" v-model="form.input.username">
        <template v-slot:prepend>
          <q-icon name="account_circle" />
        </template>
      </q-input>

      <q-input
        label="Mot de passe"
        v-model="form.input.password"
        :type="isPwd ? 'password' : 'text'"
      >
        <template v-slot:prepend>
          <q-icon name="lock" :color="isPasswordOk ? 'green' : ''" />
        </template>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-input
        label="Valider le mot de passe"
        v-model="validatePassword"
        type="password"
      >
        <template v-slot:prepend>
          <q-icon name="lock" :color="isPasswordOk ? 'green' : ''" />
        </template>
      </q-input>

      <q-input label="Anniversaire" :value="formatedDate">
        <template v-slot:prepend>
          <q-icon size="lg" name="event" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-date v-model="form.input.birthday" mask="YYYY-MM-DD HH:mm">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <div class="q-gutter-sm">
        <q-radio
          keep-color
          color="secondary"
          v-model="stringSex"
          val="true"
          label="Homme"
        />
        <q-radio
          keep-color
          color="secondary"
          v-model="stringSex"
          val="false"
          label="Femme"
        />
      </div>

      <div class="row justify-end q-pa-sm">
        <q-btn
          outline
          rounded
          color="primary"
          label="S'inscrire"
          type="submit"
        />
      </div>
    </form>

    <q-space />

    <div class="text-body1 text-center">
      Vous possedez deja un compte? <br />
      <q-btn to="/login" flat class="connectez-vous" label="Connectez vous" />
    </div>

    <q-space />
  </q-page>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  toRefs
} from '@vue/composition-api';
import { useRegister } from '../services/user/resgister';
import { date } from 'quasar';

export default defineComponent({
  name: 'Register',

  setup() {
    return useRegister();
  }
});
</script>

<style lang="scss">
.connectez-vous {
  color: $secondary;
}
</style>
