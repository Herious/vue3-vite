<template>
    <div> 123 </div>
</template>

<script>
export default {
 created() {
  console.log(this.$store.state.count);
  this.$store.commit('increment');
  console.log(this.$store.state.count);
 }
}
</script>

<style>

</style>
