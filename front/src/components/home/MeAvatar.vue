<template>
  <router-link to="/app/profile">
    <MyAvatar username="John Doe" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import MyAvatar from '../public/MyAvatar.vue';

export default defineComponent({
  name: 'MeAvatar',
  components: {
    MyAvatar
  }
});
</script>

<style></style>
