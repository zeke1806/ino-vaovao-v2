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
        @click="takePicture"
      />
    </div>
    <p class="text-h5">{{ meResult.me.username }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useMe } from 'src/services/user/me';
import { Plugins, CameraResultType } from '../../utils/capacitor';

const { Camera } = Plugins;

export default defineComponent({
  name: 'Photo',

  setup() {
    const { result: meResult } = useMe();

    const takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      var imageUrl = image.webPath;
      // Can be set to the src of an image now
      console.log(imageUrl);
    };

    return {
      meResult,
      takePicture
    };
  }
});
</script>

<style></style>
