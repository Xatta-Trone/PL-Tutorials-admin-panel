<template>
    <header class="mb-3">
        <a href="#" class="burger-btn d-block d-xl-none">
            <i class="bi bi-justify fs-3"></i>
        </a>
    </header>      
</template>

<script>
export default {
  mounted() {
    document.querySelector('.burger-btn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('active')
    })
  },
}
</script>

<style>

</style>
