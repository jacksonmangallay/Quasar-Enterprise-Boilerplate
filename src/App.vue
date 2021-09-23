<template>
  <q-layout view="lHh lpR fFf" class="app-layout">
    <q-header class="app-header">
      <app-toolbar @click="drawer = !drawer"></app-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="left" class="fixed">
      <app-navigation></app-navigation>
    </q-drawer>

    <q-page-container>
      <app-content></app-content>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue'
import AppToolbar from 'components/app/AppToolbar.vue'
import AppNavigation from 'components/app/AppNavigation.vue'
import AppContent from 'components/app/AppContent.vue'

export default {
  components: {
    AppToolbar,
    AppNavigation,
    AppContent
  },
  setup() {
    const drawer = ref(false)

    return {
      drawer
    }
  }
}
</script>
