<template>
  <section class="container">
    <div class="testcard start-bg">
      <div class="questions-wrapper">
        <div class="questions-header">
          <h2 class="subtitle">
            {{ db.subtitle }}
          </h2>
        </div>

        <div class="questions-main ">
          <div class="description" v-html="db.introText">
          </div>
        </div>
      <div class="home-footer">
        <a @click="Start">Empezar</a>
      </div>
      <div class="after-text">
        {{ db.afterText }}
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import HeaderBar from "~/components/HeaderBar.vue";
const db = require("~/assets/data");

export default {
  data: function() {
    return {
      db: db
    };
  },
  components: {
    HeaderBar
  },
  methods: {
    Start() {
      this.$store.commit('start', this.db.dataQuestions.length);
      this.$store.$router.push('/questions');
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "~rupture/rupture/index.styl";
@import "~assets/css/config.styl";

.start-bg
  background url("~assets/img/back.jpg") no-repeat center
  background-size cover
  .questions-header
    min-height 40px

.subtitle
  font-weight: 700;
  font-size: 22px;
  color: myyellow;
  word-spacing: 5px;
  padding-bottom: 25px;
  +below(100px)
    font-size: 12px;
.links
  padding-top: 15px;
.start-bg
  color: white
.description
  background-color rgba(0,0,0,0.35)
  vertical-align middle
  padding 5px 10px
  margin 5px 10px
  border-radius 6px
  font-weight 300
  color txt-color
.after-text
  font-size 0.8em
  padding 5px
  color txt-color
.home-footer
  display inline-block

</style>

