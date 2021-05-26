

const app = new Vue({

  el: '#app',
  data: {
    userData: {},
    name: "",
    email: "",
    password: "",
    max_text_length: 25,
    max_pass_length: 16,

    tweet: "",
    tweets: [],
    max_length: 200
  },
  computed: {
    maxCharText: function () {
      return `Nombre de caractères ${this.tweet.length} sur ${this.max_length}`
    },
    errorMessage: function () {
      return "Non non, impossible d'aller plus loin mec"
    }
  },
  methods: {
    registerAccount() {
      this.userData.name = this.name;
      this.userData.email = this.email;
      this.userData.password = this.password;

      this.name = "";
      this.email = "";
      this.password = "";
    },




    submitTweet() {
      let tweet = this.tweet;
      if(tweet.length <= this.max_length && tweet != "") {
        this.tweets.unshift(tweet);
        this.tweet = "";
        }
      },
  }

})
