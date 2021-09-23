<template>
  <q-list>
    <app-navigation-item
      v-for="(item, index) in menu"
      :key="index"
      v-bind="item"
    ></app-navigation-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppNavigationItem from 'components/app/AppNavigationItem.vue'

export default defineComponent({
  components: {
    AppNavigationItem
  },
  setup() {
    const menu = [
      {
        path: '/',
        text: 'Home',
        icon: 'dashboard'
      }
    ]

    return { menu }
  }
})
</script>
