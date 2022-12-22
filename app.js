const app = Vue.createApp({
    data(){
        return {
            name: "Ukkasha Ali",
            age: 22,
            url: 'https://images.freeimages.com/images/large-previews/d28/dog-fight-1313740.jpg'
        };
    },
    methods:{
        ageAfterFiveYears(){
            return this.age + 5;
        },
        favouriteRandomNumber(){
            return Math.random();
        }
    },
}).mount("#assignment");