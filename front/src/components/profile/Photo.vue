<template>
  <div class="column items-center">
    <div class="relative-position">
      <q-icon
        v-if="!meResult.me.photo"
        name="face"
        color="grey"
        style="font-size: 25vh;"
      />
      <q-avatar v-else size="25vh">
        <img :src="meResult.me.photo" />
      </q-avatar>

      <q-btn
        icon="edit"
        color="secondary"
        flat
        round
        size="lg"
        class="absolute-bottom-left"
      />
    </div>
    <p class="text-h5">{{ meResult.me.username }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useMe } from 'src/services/user/me';

export default defineComponent({
  name: 'Photo',

  setup() {
    const { result: meResult } = useMe();

    return {
      meResult
    };
  }
});
</script>

<style></style>
