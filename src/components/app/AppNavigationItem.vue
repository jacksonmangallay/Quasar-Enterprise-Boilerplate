<template>
  <q-item
    clickable
    tag="a"
    :to="path"
    active-class="nav-active-item"
    class="nav-item"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ text }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppNavigationItem',
  props: {
    path: {
      type: String,
      required: true,
      default: () => '/'
    },
    text: {
      type: String,
      required: true,
      default: () => 'List Item'
    },
    icon: {
      type: String,
      default: () => 'circle'
    }
  }
})
</script>
