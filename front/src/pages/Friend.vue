<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="arrow_back"
          class="q-mr-sm"
          to="/app/home"
        />
        <q-toolbar-title>Gerer votre liste d'amis</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding>
        <div class="row justify-center q-gutter-md">
          <q-btn color="primary" label="Amis">
            <q-badge floating color="secondary">12</q-badge>
          </q-btn>
          <q-btn flat color="primary" label="Demandes">
            <q-badge floating color="secondary">12</q-badge>
          </q-btn>
          <q-btn flat color="primary" label="Suggestions">
            <q-badge floating color="secondary">12</q-badge>
          </q-btn>
        </div>

        <q-list bordered class="q-mt-md">
          <q-item
            v-for="contact in contacts"
            :key="contact.id"
            class="q-my-sm"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white">
                {{ contact.letter }}
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ contact.name }}</q-item-label>
              <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-icon name="chat_bubble" color="green" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Friend',
  setup() {
    const contacts = [
      {
        id: 1,
        name: 'Ruddy Jedrzej',
        email: 'rjedrzej0@discuz.net',
        letter: 'R'
      },
      {
        id: 2,
        name: 'Mallorie Alessandrini',
        email: 'malessandrini1@marketwatch.com',
        letter: 'M'
      },
      {
        id: 3,
        name: 'Elisabetta Wicklen',
        email: 'ewicklen2@microsoft.com',
        letter: 'E'
      },
      {
        id: 4,
        name: 'Seka Fawdrey',
        email: 'sfawdrey3@wired.com',
        letter: 'S'
      }
    ];

    return {
      contacts
    };
  }
});
</script>
