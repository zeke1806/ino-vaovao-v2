<template>
  <q-page>
    <q-carousel
      v-model="slide"
      swipeable
      animated
      control-type="flat"
      control-color="primary"
      navigation
      padding
      fullscreen
    >
      <q-carousel-slide :name="1">
        <q-img src="~/assets/splash4.png" />
        <div class="text-h5 text-center">
          Reste connecte <br />
          <span class="text-subtitle1 text-weight-light"
            >Echanger avec vos amis avec Ino Vaovao</span
          >
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2">
        <q-img src="~/assets/splash5.png" />
        <div class="text-h5 text-center">
          Consulter les news <br />
          <span class="text-subtitle1 text-weight-light"
            >Decouvrer les dernieres actualites et partager avec vos amis</span
          >
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3">
        <q-img src="~/assets/splash2.png" />
        <div class="text-h5 text-center">
          Discussion de groupe <br />
          <span class="text-subtitle1 text-weight-light"
            >Decouvrer les dernieres actualites et partagez avec vos amis</span
          >
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="4">
        <q-img src="~/assets/splash3.png" />
        <div class="text-h5 text-center">
          Discussion privee <br />
          <span class="text-subtitle1 text-weight-light"
            >Decouvrer les dernieres actualites et partagez avec vos amis</span
          >
        </div>

        <div class="row justify-center q-pa-sm">
          <q-btn
            outline
            rounded
            color="primary"
            label="S'inscrire"
            to="/register"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from '@vue/composition-api';

export default defineComponent({
  name: 'Presentation',
  setup() {
    const carousel = ref(null);
    const state = reactive({
      slide: 1
    });

    return {
      ...toRefs(state),
      carousel
    };
  }
});
</script>
