<template>
  <div>
    <p class="text-h6">Discuter avec ...</p>
    <q-scroll-area
      :visible="false"
      horizontal
      style="height: 100px;"
      class="bg-transparent rounded-borders full-width"
    >
      <div class="row no-wrap">
        <div
          v-for="(item, i) in new Array(15)"
          :key="i"
          class="text-center"
          style="width: 100px;"
        >
          <MyAvatar />
          <p>John Doe</p>
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import MyAvatar from '../../components/public/MyAvatar.vue';

export default defineComponent({
  name: 'DiscSuggestion',
  components: {
    MyAvatar
  }
});
</script>

<style></style>
