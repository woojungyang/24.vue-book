<template>
  <div class="pager-wrap">
    <router-link
      :
      to="`/list/${firstPage}`"
      class="pager fa fa-step-backward"
    ></router-link>
    <router-link
      :
      to="`/list/${prevPager}`"
      class="pager fa fa-backward"
    ></router-link>
    <router-link
      :
      to="`/list/${prevPage}`"
      class="pager fa fa-caret-left"
    ></router-link>
    <router-link
      :
      to="v-for"
      ="v in pageArr"
      :href="`/list/${v}`"
      :key="v"
      :class="`pager ${page === v ? 'active' : ''}`"
      >{{ v }}</router-link
    >
    <router-link : to="`/list/1`" class="pager">2</router-link>
    <router-link
      :
      to="`/list/${nextPage}`"
      class="pager fa fa-caret-right"
    ></router-link>
    <router-link
      :
      to="`/list/${nextPager}`"
      class="pager fa fa-forward"
    ></router-link>
    <router-link
      :
      to="`/list/${totalPage}`"
      class="pager fa fa-step-forward"
    ></router-link>
  </div>
</template>

<script>
export default {
  name: "PagerCp",
  props: ["pager"],
  data() {
    return {
      prevPager: 1,
      prevPage: 1,
      nextPager: 1,
      nextPage: 1,
      lastPage: 1,
      firstPage: 1,
      pageArr: [],
      page: 1,
    };
  },
  watch: {
    pager: function (v) {
      if (v) {
        (this.prevPager = v.prevPager),
          (this.prevPage = v.prevPage),
          (this.nextPager = v.nextPager),
          (this.nextPage = v.nextPage),
          (this.lastPage = v.lastPage);
        this.pageArr = [];
        this.page = v.page;
        for (let i = v.startPage; i <= v.endPage; i++) {
          this.pageArr.push(i);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pager-wrap {
  margin: 2em auto;
  @include flex($h: center);
  .pager {
    padding: 0.625em 0.875em;
    border: 1px solid $success-color;
    margin-right: -1px;
    color: $accent-color;
    &.active {
      background-color: $grey-color;
      color: $light-color;
    }
  }
}
</style>
