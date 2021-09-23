<template>
  <q-toolbar class="app-toolbar">
    <q-btn
      flat
      dense
      icon="menu"
      @click="$emit('click')"
      class="app-navigation-toggle"
    />
    <q-toolbar-title></q-toolbar-title>
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppToolbar',
  emits: ['click']
})
</script>
