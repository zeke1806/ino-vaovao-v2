<template>
  <q-expansion-item
    expand-separator
    icon="description"
    label="Information de compte"
  >
    <q-form>
      <q-input label="Anniversaire" :value="'semedi 9 janvier'">
        <template v-slot:prepend>
          <q-icon size="lg" name="event" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-date mask="YYYY-MM-DD HH:mm">
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
          :value="'true'"
          keep-color
          color="secondary"
          val="true"
          label="Homme"
        />
        <q-radio
          :value="'true'"
          keep-color
          color="secondary"
          val="false"
          label="Femme"
        />
      </div>

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
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'UpdateInfo'
});
</script>

<style></style>
