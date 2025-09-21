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
            fullname : '',


            currentUserInput:'',
            message:'Vue is great!'
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
        },



        // saveInput(event){
        //     this.currentUserInput=event.target.value;
        // },
        setText(){
            // this.message = this.currentUserInput;
            this.message = this.$refs.userText.value;
            this.$refs.userText.value='';
        }

    }
});
app2.mount('#events');



const app3 = Vue.createApp({
    data(){
        return{
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    computed:{
        boxAClasses() {
            return {active : this.boxASelected};
        },
        boxBClasses() {
            return {active : this.boxBSelected};
        },
        boxCClasses() {
            return {active : this.boxCSelected};
        }
    },
    methods:{
        boxSelected(box){
            if (box === 'A'){
                this.boxASelected=!this.boxASelected;
            } 
            else if(box === 'B'){
                this.boxBSelected=!this.boxBSelected
            } 
            else if(box === 'C'){
                this.boxCSelected=!this.boxCSelected
            }
        }
    }
});
app3.mount('#styling');

