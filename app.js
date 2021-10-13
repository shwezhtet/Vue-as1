const app = Vue.createApp({
    data(){
        return{
            name: 'Amy',
            age: 20,
            imgUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1780&q=80',
        };
    },
    methods:{
        calculateAge(){
            return this.age+5;
        },
        calculateRandom(){
            return Math.random();
        },
    }
});
app.mount('#assignment');