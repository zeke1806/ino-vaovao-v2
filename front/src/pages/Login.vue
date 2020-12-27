<template>
  <q-page padding class="column">
    <q-space />

    <div class="text-h4 row justify-center">Connexion</div>

    <q-space />

    <form>
      <q-input label="Identifiant">
        <template v-slot:prepend>
          <q-icon name="account_circle" />
        </template>
      </q-input>

      <q-input label="Mot de passe">
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>

      <div class="row justify-end q-pa-sm">
        <q-btn outline rounded color="primary" label="Se connecter" />
      </div>
    </form>

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
import { defineComponent, reactive, toRefs } from '@vue/composition-api';

export default defineComponent({
  name: 'Login',
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.connectez-vous {
  color: $secondary;
}
</style>
