<template>
  <q-page padding class="myPage column">
    <q-space />

    <div class="text-h4 row justify-center">Inscription</div>

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

      <q-input label="Valider le mot de passe">
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>

      <q-input label="Anniversaire">
        <template v-slot:prepend>
          <q-icon size="lg" name="event" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <div class="q-gutter-sm">
        <q-radio keep-color color="secondary" :val="true" label="Homme" />
        <q-radio keep-color color="secondary" :val="false" label="Femme" />
      </div>

      <div class="row justify-end q-pa-sm">
        <q-btn outline rounded color="primary" label="S'inscrire" />
      </div>
    </form>

    <q-space />

    <div class="text-body1 text-center">
      Vous possedez deja un compte? <br />
      <q-btn flat class="connectez-vous" label="Connectez vous" />
    </div>

    <q-space />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api';

export default defineComponent({
  name: 'Register',
  setup() {
    const state = reactive({
      date: new Date().toISOString()
    });

    return {};
  }
});
</script>

<style lang="scss">
.connectez-vous {
  color: $secondary;
}
</style>
