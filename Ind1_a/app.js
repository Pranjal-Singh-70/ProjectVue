const app = Vue.createApp({
    // template: '<h1>Template In Vue {{title}}</h2>',
    data(){
        return{
            title:'T_Vue_JS'
        }
    },
    methods:{
        changed(){
            this.title = 'Changed via method'
        },
        changed2(name){
            this.title = name
        }
    }
})

app.mount('#app')