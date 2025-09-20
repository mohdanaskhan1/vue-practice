const app = Vue.createApp({
    data(){
        return {
            courseGoalA: 'Here',
            courseGoalB: 'There',
            // courseGoalB: '<h1>There</h1>',
            vueLink : 'https://vuejs.org/'
            
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        } 
    }
});
app.mount('#user-goal');


const app2 = Vue.createApp({
    resetInput(){
        this.name='';
        this.fullname='';
    },
    data(){
        return{
            counter : 10 ,
            name : '',
            confirmedName : '',
            fullname : ''
        }
    },
    watch:{
        counter(value){
            if (value>50){
                const that = this;
                setTimeout(function(){
                    that.counter=0;
                },2000);
            };
        },
        name(value){
            if (value===''){
                this.fullname='';
            }
            else{
                this.fullname = value + ' ' + 'Khan';
            }
        }
    },
    computed:{
        // fullname(){
        //     if (this.name === ''){
        //         return '';
        //     }
        //     return this.name + ' ' + 'Khan';
        // }
    },
    methods:{
        resetInput(){
            this.name='';
        },
        confirmInput(){
            this.confirmedName=this.name;
        },
        // submitForm(event){
        //     event.preventDefault();
        //     alert('Submitted!!')
        // },
        submitForm(){
            alert('Submitted!!')
        },
        // setName(event, prefix){
        //     this.name=prefix+' '+event.target.value;
        // },
        setName(event){
            this.name=event.target.value;
        },
        add(num){
            this.counter=this.counter+num;
        },
        sub(num){
            this.counter=this.counter-num;
        }

    }
});
app2.mount('#events');


