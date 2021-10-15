<template>
  <PaginationCp :page="page || 1" />
</template>

<script>
import PaginationCp from "../components/List/PaginationCp.vue";

export default {
  name: "List",
  data() {
    return {
      page: this.$route.params.page,
    };
  },
  components: { PaginationCp },
  created() {
    this.page = this.$route.params.page;
  },
};
</script>
