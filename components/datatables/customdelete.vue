<template>
  <a class="delete" @click="erase">delete</a>
</template>
<script>
export default {
  props: ['data', 'index'],
  methods: {
    erase() {
      let id = this.data.id // delete the item
      console.log(data, index)
    },
  },
}
</script>
