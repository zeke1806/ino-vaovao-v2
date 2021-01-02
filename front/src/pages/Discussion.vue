<template>
  <q-page padding>
    <DiscSuggestion />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import DiscSuggestion from '../components/discussion/DiscSuggestion.vue';

export default defineComponent({
  name: 'Discussion',
  components: {
    DiscSuggestion
  }
});
</script>
