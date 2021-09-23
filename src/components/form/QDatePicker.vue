<template>
  <Field v-slot="{ errorMessage, value }">
    <q-field
      class="datepicker"
      :model-value="value"
      :error-message="errorMessage"
      :error="!!errorMessage"
      :rules="[$attrs.rules]"
      :dense="$attrs.dense"
    >
      <datepicker
        v-bind="{ ...$attrs }"
        @click="addHighlight"
        :model-value="value"
        v-model="date"
      />
    </q-field>
  </Field>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { Field } from 'vee-validate'
import Datepicker from 'vue3-datepicker'

export default defineComponent({
  name: 'QDatePicker',
  inheritAttrs: true,
  components: {
    Field,
    Datepicker
  },
  setup(props, context) {
    const date = ref(context.attrs.modelValue)

    const addHighlight = () => {
      document
        ?.querySelector('.q-field.datepicker')
        ?.classList.add('q-field--highlighted')
    }

    watch(date, () => {
      document
        ?.querySelector('.q-field.datepicker')
        ?.classList.remove('q-field--highlighted')
    })

    return { date, addHighlight }
  }
})
</script>

<style lang="scss" scoped>
.v3dp__datepicker {
  width: 100%;

  :deep(.v3dp__input_wrapper) {
    height: 100%;
  }
}

:deep(input) {
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  background-color: transparent;
}

:deep(.v3dp__popout) {
  right: 0;
}

:deep(.q-field--highlighted) {
  border: 0;
}
</style>
