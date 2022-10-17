<template>
  <div>
    <div class="form-check form-switch">
      <input
        class="form-check-input input-danger"
        type="checkbox"
        id="flexSwitchCheckDefault"
        :checked="checkbox"
        @click="toggleCheckbox"
      />
      <label class="form-check-label" for="flexSwitchCheckDefault">
        Check user ban[{{ checkbox }}] (Please keep it checked to filter user
        bans.)</label
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false,
    }
  },
  mounted() {
    this.getCheckBoxStatus()
  },
  methods: {
    toggleCheckbox() {
      this.$axios
        .get('admin/user-ban-toggle')
        .then((res) => {
          this.checkbox = !this.checkbox
          this.$emit('setCheckboxVal', this.checkbox)
        })
        .catch(function (err) {
          console.log(err.response)
        })
    },

    getCheckBoxStatus() {
      let vm = this
      this.$axios
        .get('get-value?key=user-ban-check')
        .then((res) => {
          const checked = parseInt(res.data.data.value) ? true : false
          vm.checkbox = checked
          vm.$emit('setCheckboxVal', checked)

          console.log(parseInt(res.data.data.value) ? true : false)
        })
        .catch(function (err) {
          console.log(err.response)
        })
    },
  },
}
</script>

<style scoped>
.form-check-input:checked,
input:checked + .slider {
  background-color: red;
  border-color: red;
}
</style>
