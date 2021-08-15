<template>
  <div>
    <span v-for="(error, i) in servererrors" :key="i">
      <div class="invalid-feedback" v-if="error[0] == chkkey">
        {{ error[1].join(',') }}
      </div>
    </span>
  </div>
</template>
<script>
export default {
  props: ['servererrors', 'chkkey'],
}
</script>

