<template>
  <section class="testcard" :style="cardStyles">

    <div class="questions-wrapper">

      <div class="questions-header">
        <div class="questions-header-inner" :class="{ 'in-transition': inTransition  }">
          <h3>{{ title }}</h3>
          <div class="status">({{ $store.state.page + 1 }} de {{ $store.state.total }})</div>
        </div>
        <hr>
      </div>
      <div class="questions-main">
        <div class="answers" >
        <ul>
            <li
                v-for="option in dataQuestion.options"
                v-bind:class="{highlight: sel == option.id, 'in-transition-answers': inTransition }"
                v-on:click="UserRespond(option.id)"
                v-bind:key=option.id
                >
                <div >
                    {{ option.answer }}
                </div>
            </li>
        </ul>
        </div>
      </div>

      <div class="questions-footer">
        <nuxt-link to="/" v-if="($store.state.page==0)">Volver</nuxt-link>
        <a v-else @click="Back">Anterior</a>
        <a @click="Next" v-if="($store.state.page>=$store.state.total-1)" :class="{'deactivated': !answered}">Fin</a>
        <a v-else @click="Next" :class="{'deactivated': !answered}">Siguiente</a>
      </div>

    </div>

    <div class="gradient-overlay"></div>
    <div class="color-overlay"></div>

  </section>
</template>

<script>
import HeaderBar from "~/components/HeaderBar.vue";
const db = require("~/assets/data");

export default {
  data: function() {
    return {
      db: db,
      dataQuestion: undefined,
      sel: '',
      title: '',
      background: '',
      inTransition: false
    };
  },
  components: {
    HeaderBar
  },
  created(){
      this.DisplayQuestion(),
      this.HasStarted();
  },
  computed: {
    cardStyles: function() {
      return {
        'background-image': `url(${this.background})`,
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size' : 'cover'
      };
    },
    answered: function() {
      return (this.$store.state.page in this.$store.state.answers);
    }
  },

  methods: {
    Next() {
      if (this.answered) {
        this.$store.commit('next');
        this.LoadQuestion();
      }
    },
    Back() {
      this.$store.commit('back');
      this.LoadQuestion();
    },
    LoadQuestion() {
      this.inTransition = true;
      setTimeout(() => {
        this.DisplayQuestion();
        this.inTransition = false;
      },550);
    },
    UserRespond(option) {
      this.sel = option;
      this.$store.commit('answer', option);
      console.log('Answer:', this.$store.state.answers);
      if (this.$store.state.page  < this.$store.state.total)
        this.LoadQuestion();

    },
    DisplayQuestion() {
      this.dataQuestion = db.dataQuestions[this.$store.state.page];
      this.sel = (this.dataQuestion) ? this.dataQuestion : undefined;
      this.title = this.dataQuestion.q;
      this.background = require('~/assets/img/questions/' + this.dataQuestion.img);
      this.sel = this.$store.state.answers[this.$store.state.page];
    },
    HasStarted(){
      if (!this.$store.state.running)
        this.$store.$router.push('/');
    }
  }
};
</script>

<style lang="stylus" scoped>

.deactivated
  background-color #777777
.deactivated:hover
  background-color #777777
  color #000
  cursor not-allowed

</style>

