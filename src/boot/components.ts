import { boot } from 'quasar/wrappers'
import QInputField from 'components/form/QInputField.vue'
import QSelectField from 'components/form/QSelectField.vue'
import QOptionGroup from 'src/components/form/QOptionGroup.vue'
import QDatePicker from 'src/components/form/QDatePicker.vue'

export default boot(({ app }) => {

  app.component('q-input-field', QInputField)
  app.component('q-select-field', QSelectField)
  app.component('q-option-group', QOptionGroup)
  app.component('q-date-picker', QDatePicker)

})
