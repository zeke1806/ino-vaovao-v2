<template>
  <div class="column items-center">
    <div class="relative-position">
      <q-icon name="face" color="grey" style="font-size: 25vh;" />
      <q-btn
        icon="edit"
        color="secondary"
        flat
        round
        size="lg"
        class="absolute-bottom-left"
      />
    </div>
    <p class="text-h5">John Doe</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Photo'
});
</script>

<style></style>
