<template>
  <q-expansion-item
    expand-separator
    icon="perm_identity"
    label="Parametre de connexion"
    default-opened
  >
    <q-form>
      <q-input
        label="Identifiant"
        :rules="[val => (val && val.length > 0) || 'Le champ est requis']"
      >
        <template v-slot:prepend>
          <q-icon name="account_circle" />
        </template>
      </q-input>

      <q-input
        label="Ancien mot de passe"
        :type="isPwd ? 'password' : 'text'"
        :rules="[val => (val && val.length > 0) || 'Le champ est requis']"
      >
        <template v-slot:prepend>
          <q-icon name="lock" />
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
        label="Nouveau mot de passe"
        :type="isPwd ? 'password' : 'text'"
        :rules="[val => (val && val.length > 0) || 'Le champ est requis']"
      >
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div class="row justify-end q-pa-sm">
        <q-btn
          outline
          rounded
          color="primary"
          label="Enregistrer"
          type="submit"
        />
      </div>
    </q-form>
  </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'UpdateAccount',
  setup() {
    const isPwd = ref();
    return {
      isPwd
    };
  }
});
</script>

<style></style>
