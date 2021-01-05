<template>
  <div>
    <p class="text-h6">Vos discussions</p>
    <div class="q-gutter-md">
      <q-card class="my-card" v-for="(item, i) in new Array(15)" :key="i">
        <q-item>
          <q-item-section avatar>
            <MyAvatar username="John Doe" />
          </q-item-section>

          <q-item-section>
            <q-item-label overline>John Doe</q-item-label>
            <q-item-label lines="2"
              >Nulla amet magna deserunt voluptate est nulla reprehenderit
              dolore mollit officia magna. Non culpa tempor aliquip irure dolore
              culpa est labore quis qui culpa tempor. Id fugiat ullamco esse
              exercitation officia nostrud anim qui. Deserunt magna culpa est
              pariatur id aute irure anim minim laborum ipsum. Nisi cupidatat
              reprehenderit sit sint deserunt anim reprehenderit labore fugiat
              ex occaecat dolor. Esse ea cillum sunt enim proident cupidatat
              nostrud. Ad ad anim duis exercitation nulla exercitation cillum
              ipsum esse do nulla nostrud. Elit anim occaecat labore aute
              consectetur. Consectetur magna deserunt sit culpa exercitation
              culpa sit reprehenderit id velit elit consectetur. Nostrud commodo
              ex voluptate aliquip irure dolor labore veniam est laboris est
              aliquip. Sit exercitation commodo dolor deserunt ut voluptate quis
              voluptate exercitation eu anim velit enim pariatur. Pariatur amet
              eiusmod aute labore consequat enim sit. Et sunt velit exercitation
              aliqua adipisicing occaecat. Velit dolore pariatur ut Lorem
              ullamco irure eu. Enim esse deserunt laboris fugiat. Voluptate
              ipsum ea sunt mollit nulla.</q-item-label
            >
          </q-item-section>

          <q-item-section side top class="q-gutter-sm">
            <q-item-label caption>5 min ago</q-item-label>
            <q-icon name="lens" size="xs" />
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import MyAvatar from '../public/MyAvatar.vue';

export default defineComponent({
  name: 'ListDiscussion',
  components: {
    MyAvatar
  }
});
</script>

<style></style>
