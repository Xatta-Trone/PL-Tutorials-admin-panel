<template>
  <div
    class="form-group has-icon-left"
    :class="{ 'has-error': hasErrors, 'has-success': isValid }"
  >
    <slot name="label">
      <label :for="'label-' + label" v-if="label"
        >{{ label }} {{ errors ? '*' : '' }}</label
      >
    </slot>
    <slot
      :attributes="attributes"
      :errors="activeErrors"
      :events="events"
      :first-error-message="firstErrorMessage"
      :has-errors="hasErrors"
      :validator="preferredValidator"
    />
    <slot
      name="errors"
      :errors="activeErrors"
      :error-messages="activeErrorMessages"
      :has-errors="hasErrors"
      :first-error-message="firstErrorMessage"
    >
      <div
        :class="{ 'invalid-feedback': hasErrors, 'valid-feedback': !hasErrors }"
        v-if="hasErrors"
      >
        <template v-if="showSingleError">{{ firstErrorMessage }}</template>
        <template v-else>
          <div v-for="errorMessage in activeErrorMessages" :key="errorMessage">
            {{ errorMessage }}
          </div>
        </template>
      </div>
    </slot>
  </div>
</template>
<script>
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor'
export default {
  mixins: [singleErrorExtractorMixin],
  computed: {
    attributes() {
      return {
        class: {
          'form-control': true,
          'is-invalid': this.hasErrors,
          'is-valid': this.isValid,
        },
        name: this.name || undefined,
      }
    },
  },
}
</script>
