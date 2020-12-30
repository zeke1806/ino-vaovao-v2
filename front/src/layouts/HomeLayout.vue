<template>
  <q-layout view="hHh Lpr fFf">
    <q-page-container>
      home page
      <router-view />
    </q-page-container>

    <q-footer style="border: 0.01px solid transparent;">
      <q-tabs
        v-model="tab"
        class="text-white full-width"
        align="center"
        inline-label
      >
        <q-tab name="mails" icon="question_answer" label="Discussion" />
        <q-tab name="alarms" icon="fiber_new" label="Decouverte" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'HomeLayout',
  setup() {
    const tab = ref('mails');
    return {
      tab
    };
  }
});
</script>
