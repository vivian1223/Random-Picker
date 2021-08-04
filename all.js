const app = Vue.createApp({
  data() {
    return {
      nameString: "",
      nameList: [],
      nameNum: 1,
      randomList: [],
    };
  },
  methods: {
    getRandomName() {
    this.randomList = [];
      this.nameList = this.nameString.split(",");
      let counter = this.nameNum;

      for (let i = 1; i <= counter; i++) {
        let randomNum = Math.floor(Math.random() * this.nameList.length);
        this.randomList.push(randomNum);
      }
      this.nameNum = 0;
      this.nameString ="";
    },
  },
});
app.mount("#app");
