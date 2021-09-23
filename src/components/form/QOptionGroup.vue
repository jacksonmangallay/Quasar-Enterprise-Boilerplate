<template>
  <Field v-slot="{ errorMessage, value }">
    <q-field
      :borderless="true"
      :model-value="value"
      :error-message="errorMessage"
      :error="!!errorMessage"
      :rules="[$attrs.rules]"
    >
      <q-option-group v-bind="{ ...$attrs }" />
    </q-field>
  </Field>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Field } from 'vee-validate'

export default defineComponent({
  name: 'QOptionGroup',
  components: {
    Field
  }
})
</script>
