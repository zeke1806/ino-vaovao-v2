<template>
  <q-page padding>
    <q-infinite-scroll>
      <DiscSuggestion />
      <ListDiscussion />
    </q-infinite-scroll>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import DiscSuggestion from '../components/discussion/DiscSuggestion.vue';
import ListDiscussion from '../components/discussion/ListDiscussion.vue';

export default defineComponent({
  name: 'Discussion',
  components: {
    DiscSuggestion,
    ListDiscussion
  }
});
</script>
