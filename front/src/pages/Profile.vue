<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="arrow_back"
          class="q-mr-sm"
          to="/app/home"
        />
        <q-toolbar-title>Gerer votre compte</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding>
        <Photo />
        <UpdateAccount />
        <UpdateInfo />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Photo from '../components/profile/Photo.vue';
import UpdateAccount from '../components/profile/UpdateAccount.vue';
import UpdateInfo from '../components/profile/UpdateInfo.vue';

export default defineComponent({
  name: 'Profile',
  components: {
    Photo,
    UpdateAccount,
    UpdateInfo
  }
});
</script>
