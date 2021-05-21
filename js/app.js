

const app = new Vue({

  el: '#app',
  data: {
    tweet: "",
    tweets: [],
    max_length: 200
  },
  computed: {
    maxCharText: function () {
      return `Nombre de caractères ${this.tweet.length} sur ${this.max_length}`
    },
    errorMessage: function () {
      return `Non non, impossible d'aller plus loin. Retire ${this.max_length - this.tweet.length}`
    }
  },
  methods: {
    submitTweet() {
      let tweet = this.tweet;
      if(tweet.length <= this.max_length && tweet != "") {
        this.tweets.unshift(tweet);
        this.tweet = "";
        }
      },
  }

})
