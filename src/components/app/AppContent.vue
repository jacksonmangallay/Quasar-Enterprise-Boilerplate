<template>
  <div class="row q-pa-md app-page-detail">
    <div class="col-md-12">
      <h5 class="text-h5 q-my-none">Quasar Boilerplate</h5>
    </div>
  </div>

  <main class="app-main">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppContent'
})
</script>
