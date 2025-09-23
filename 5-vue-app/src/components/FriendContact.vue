<template>
    <li>
        <h2>{{ name}}  {{ isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="deleteFriend">Delete</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone : </strong>{{ phoneNumber }}</li>
            <li><strong>Email : </strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>


<script>


export default{
    // Props cant be mutated
    props:{
        id:{
            type: String,
            required: true
        },
        name: {
            type : String,
            required: true
        },
        phoneNumber : String,
        emailAddress: String,
        isFavorite: {
            type: Boolean,
            default: false,
            required: false,
            // validator: function(value){
            //     return value === false || value === true;
            // }
        }
    },
    // emits:[
    //     'toggle-favorite'
    // ],
    emits:{
        'toggle-favorite' : function(id){
            if (id) {
                return true;
            }else{
                console.warn('Id is missing');
                return false;
            } 
        }, 
        
        'delete-friend' : function(id){
            if (id) {
                return true;
            }else{
                console.warn('Id is missing');
                return false;
            } 
        }
        
    },
    data(){
        return{
            detailsAreVisible : false,
            // friendIsFavorite : this.isFavorite
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible=!this.detailsAreVisible;
        },
        // toggleFavorite() {
        //     this.friendIsFavorite=!this.friendIsFavorite;
        // },
        toggleFavorite() {  
            this.$emit('toggle-favorite',this.id);
        },
        deleteFriend(){
            this.$emit('delete-friend',this.id);
        }
    }
};
</script>