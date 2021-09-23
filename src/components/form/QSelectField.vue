<template>
  <Field v-slot="{ errorMessage, value }">
    <q-select
      v-bind="{ ...$attrs }"
      :model-value="value"
      :error-message="errorMessage"
      :error="!!errorMessage"
      :rules="[$attrs.rules]"
    />
  </Field>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Field } from 'vee-validate'

export default defineComponent({
  name: 'QSelectField',
  components: {
    Field
  }
})
</script>
