<template>
  <router-link to="/app/profile">
    <MyAvatar :username="result.me.username" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import MyAvatar from '../public/MyAvatar.vue';
import { useMe } from '../../services/user/me';

export default defineComponent({
  name: 'MeAvatar',
  components: {
    MyAvatar
  },

  setup() {
    const { result, loading } = useMe();
    return {
      result
    };
  }
});
</script>

<style></style>
