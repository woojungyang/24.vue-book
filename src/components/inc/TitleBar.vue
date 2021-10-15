<template>
  <div class="title-bar">
    <b-jumbotron class="jumbotron">
      <template #header>Vue Library Management System</template>

      <template #lead>
        Vue.js / Vuex / Vue-router를 활용한 도서 관리 시스템</template
      >

      <hr class="my-4" />
      <p>
        Node.js / Express / MySQL을활용한 도서 관리 시스템을 확인하시려면 아래의
        링크를 클릭하세요
      </p>

      <b-button variant="primary" :href="expressLink" target="_blank">
        Express 도서 관리 시스템 바로 가기
      </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
const { VUE_APP_EXPRESS } = process.env;
export default {
  name: "TitleBar",
  data() {
    return {
      expressLink: VUE_APP_EXPRESS,
    };
  },
};
</script>

<style lang="scss" scoped>
.title-bar {
  background-color: $grey-color;
  color: $white-color;
  padding: 2em 0;
  .jumbotron {
    width: 90%;
    margin: auto;
    .btn-primary {
      color: $dark-color;
      background-color: $accent-color;
      border-color: $accent-color;
    }
    .display-3 {
      font-size: 2.5rem;
      margin-bottom: 0.325em;
    }
  }
}
</style>
