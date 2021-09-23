import { boot } from 'quasar/wrappers'
import { defineRule } from 'vee-validate'
import rules from '@vee-validate/rules'

export default boot(() => {

  Object.keys(rules).forEach(rule => {
    defineRule(rule, rules[rule])
  })

})