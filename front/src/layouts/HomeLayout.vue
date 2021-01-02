<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="q-pa-xs bg-transparent row">
      <div class="col-2">
        <q-avatar>
          <q-icon name="face" color="grey" size="xl" />
          <q-badge class="bg-transparent" floating>
            <q-icon name="lens" color="green" size="xs" />
          </q-badge>
        </q-avatar>
      </div>

      <div class="col-7">
        <q-input filled type="search" label="Discussion">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>

      <div class="col row justify-around items-center">
        <q-btn
          flat
          round
          icon="group_add"
          size="lg"
          color="grey"
          padding="none"
          :ripple="false"
        >
          <q-badge floating color="secondary">1</q-badge>
        </q-btn>
        <q-btn
          flat
          round
          icon="create"
          size="lg"
          color="grey"
          padding="none"
          :ripple="false"
        />
      </div>
    </q-header>

    <q-footer class="q-pa-xs">
      <q-tabs v-model="tab" class="text-white" align="center" inline-label>
        <q-tab name="mails" icon="question_answer" label="Discussion">
          <q-badge color="secondary" floating>
            0
          </q-badge>
        </q-tab>
        <q-tab name="alarms" icon="fiber_new" label="Decouverte" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
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
