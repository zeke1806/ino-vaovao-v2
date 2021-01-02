<template>
  <q-layout view="hhh Lpr fFf">
    <q-header class="q-pa-xs bg-transparent row">
      <div class="col-2">
        <MyAvatar />
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
        <q-route-tab
          to="/app/home/discussion"
          icon="question_answer"
          label="Discussion"
        >
          <q-badge color="secondary" floating>
            0
          </q-badge>
        </q-route-tab>
        <q-route-tab
          to="/app/home/decouverte"
          icon="fiber_new"
          label="Decouverte"
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import MyAvatar from '../components/public/MyAvatar.vue';

export default defineComponent({
  name: 'HomeLayout',
  components: {
    MyAvatar
  },
  setup() {
    const tab = ref('mails');
    return {
      tab
    };
  }
});
</script>
