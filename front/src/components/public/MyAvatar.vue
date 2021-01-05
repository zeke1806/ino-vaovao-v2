<template>
  <q-avatar color="primary" style="color: white;" v-if="!photo">
    {{ uNameFirstLetter }}
    <q-badge class="bg-transparent" floating>
      <q-icon name="lens" color="green" size="xs" />
    </q-badge>
  </q-avatar>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MyAvatar',

  props: {
    username: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: false
    }
  },

  setup(props) {
    const uNameFirstLetter = computed(() => props.username[0].toUpperCase());
    return {
      uNameFirstLetter
    };
  }
});
</script>

<style></style>
