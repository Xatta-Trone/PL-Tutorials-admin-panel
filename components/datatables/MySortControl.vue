<template>
  <font-awesome-icon v-if="props.sortable" :icon="icon" class="fa-pull-right" />
</template>

<script>
export default {
  name: 'VtSortControl',
  props: ['props'],
  computed: {
    icon() {
      // sortStatus = { sorted: Boolean, asc: Boolean }

      // if not sorted return base icon
      if (!this.props.sortStatus.sorted) return 'sort'

      // return sort direction icon
      return this.props.sortStatus.asc
        ? ['fas', 'sort-up']
        : ['fas', 'sort-down']
    },
  },
}
</script>
