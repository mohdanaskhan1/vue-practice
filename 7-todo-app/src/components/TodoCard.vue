<template>
    <div class="todo-card">
        <header>
            <h3>{{task.title}}</h3>
            <button @click="$emit('removeOne',task.id)">REMOVE</button>
        </header>
        <p>
            {{ task.description }}
        </p>
    </div>
</template>

<script>
export default{
    props:{
        task:Object
    },
    data(){
        return{

        }
    },
    methods:{
        
    }
}

</script>

<style>
    /* Todo Cards */

.todo-card {
  background: white;
  border-radius: 10px;
  padding: 1rem !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.26);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}


.todo-card header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo-card h3 {
  font-size: 1.2rem;
  color: #1f2937;
}

.todo-card button {
  background: #ef4444; /* Red */
  border: none;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s ease;
}
.todo-card button:hover {
  background: #b91c1c;
}

.todo-card p {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.4;
}

</style>