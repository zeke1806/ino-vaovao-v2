<template>
  <q-page padding class="column">
    <q-space />

    <div class="text-h4 row justify-center">Connexion</div>

    <q-space />

    <q-form @submit="submit">
      <q-input
        label="Identifiant"
        v-model="form.username"
        :rules="[val => (val && val.length > 0) || 'Le champ est requis']"
      >
        <template v-slot:prepend>
          <q-icon name="account_circle" />
        </template>
      </q-input>

      <q-input
        label="Mot de passe"
        v-model="form.password"
        type="password"
        :rules="[val => (val && val.length > 0) || 'Le champ est requis']"
      >
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>

      <div class="row justify-end q-pa-sm">
        <q-btn
          outline
          rounded
          color="primary"
          label="Se connecter"
          type="submit"
        />
      </div>
    </q-form>

    <q-space />

    <div class="text-body1 text-center">
      Vous ne possedez pas encore un compte? <br />
      <q-btn
        to="/register"
        flat
        class="connectez-vous"
        label="Inscrivez vous"
      />
    </div>

    <q-space />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useLogin } from '../services/user/login';

export default defineComponent({
  name: 'Login',
  setup() {
    return useLogin();
  }
});
</script>

<style lang="scss">
.connectez-vous {
  color: $secondary;
}
</style>
