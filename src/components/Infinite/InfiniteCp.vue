<template>
  <section class="wrapper list-wrapper">
    <TableCp :isPager="false" :books="books" />
    <div v-observe="changeVisible" />
    <BtTop />
  </section>
</template>

<script>
import TableCp from "@/components/common/TableCp";
import BtTop from "@/components/common/BtTop.vue";
import { mapGetters } from "vuex";

export default {
  name: "InfiniteCp",
  components: { TableCp, BtTop },
  data() {
    return {
      page: 1,
      books: [],
      listCnt: 10,
    };
  },
  computed: {
    ...mapGetters(["GET_BOOKS", "GET_SCTOP"]),
    lastPage() {
      return this.GET_BOOKS.pager ? this.GET_BOOKS.pager.totalPage : 10000;
    },
  },
  watch: {
    GET_BOOKS: function (v) {
      this.books.push(...v.books);
    },
  },
  created() {
    this.$store.dispatch("ACT_LOADING", true);
    this.$store.dispatch("ACT_BOOKS", {
      page: this.page++,
      listCnt: this.listCnt,
    });
  },
  updated() {
    this.$store.dispatch("ACT_LOADING", false);
    window.scrollTo(0, this.GET_SCTOP);
  },
  methods: {
    changeVisible(isVisible) {
      if (isVisible && this.page <= this.lastPage) {
        this.$store.dispatch("ACT_LOADING", true);
        this.$store.dispatch("ACT_BOOKS", {
          page: this.page++,
          listCnt: this.listCnt,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
