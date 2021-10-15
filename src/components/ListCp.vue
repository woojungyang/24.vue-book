<template>
  <section class="wrapper list-wrapper">
    <TitleBar />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TitleBar from "./inc/TitleBar.vue";

export default {
  name: "ListCp",
  components: { TitleBar },
  computed: {
    ...mapGetters(["GET_BOOKS"]),
  },
  watch: {
    GET_BOOKS: function (v) {
      console.log(v);
    },
  },
  created() {
    console.log(this);
    this.$store.dispatch("ACT_BOOKS");
  },
};
</script>

<style lang="scss" scoped></style>
