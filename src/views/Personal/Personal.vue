<template>
  <div>
    <all-nav />
    <router-view/>
  </div>
</template>

<script>
import AllNav from "@/components/AllNav.vue";
export default {
  components: {
    AllNav,
  },
};
</script>

<style>

</style>