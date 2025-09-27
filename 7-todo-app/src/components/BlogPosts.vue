<script>
export default{
    props : {
        title : String,
        id : Number,
        post : Object,
    },
    computed:{
        transform(){
            return this.title.toLowerCase().replaceAll(" ","-");
        },
    },
}
</script>

<template>
    <div>
    <h4>{{id}} {{ title }}</h4>
    <h4>{{ transform }}</h4>
    <h4>{{ post }}</h4>
    </div>
</template>

