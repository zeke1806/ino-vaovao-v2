<template>
  <q-avatar>
    <q-icon name="face" color="grey" size="xl" />
    <q-badge class="bg-transparent" floating>
      <q-icon name="lens" color="green" size="xs" />
    </q-badge>
  </q-avatar>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MyAvatar'
});
</script>

<style></style>
