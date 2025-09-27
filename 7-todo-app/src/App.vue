<script >
// import BlogPosts from './components/BlogPosts.vue';
export default{
  data(){
    return{
      // posts:[
      //   {id:1, name:"MAK", authorName:"A1"},
      //   {id:2, name:"KHAN", authorName:'A2'},
      //   {id:3, name:"SAN", authorName:'A3'},
      //   {id:4, name:"DHAN", authorName:'A4  '},
        
      // ],
      todo: [
        {id:1, title:"Task Title", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, voluptatibus officiis. Inventore incidunt excepturi numquam laudantium, dolor sapiente harum enim tempora consequuntur quis unde, ullam id quo culpa voluptatum alias?"},
        {id:2, title:"Task Title2", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, voluptatibus officiis. Inventore incidunt excepturi numquam laudantium, dolor sapiente harum enim tempora consequuntur quis unde, ullam id quo culpa voluptatum alias?"},
        {id:3, title:"Task Title3", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, voluptatibus officiis. Inventore incidunt excepturi numquam laudantium, dolor sapiente harum enim tempora consequuntur quis unde, ullam id quo culpa voluptatum alias?"},
        {id:4, title:"Task Title4", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, voluptatibus officiis. Inventore incidunt excepturi numquam laudantium, dolor sapiente harum enim tempora consequuntur quis unde, ullam id quo culpa voluptatum alias?"},
        
      ],
      showModal:false,
    }
  },
  methods:{
    addPost(){
      this.posts.push(
        {id:5, name:"KKK", authorName:"A5"}
      )
    },
    addTask(task){
      console.log(task)
      const randomId =Math.floor(Math.random() * this.todo.length)
      console.log(randomId)
      this.todo.push(
        {
          id : randomId,
          title : task.title,
          description: task.description
        }
      )
      this.showModal=false
    },
    openModel(){
      // this.taskForm.id=null
      // this.taskForm.title=""
      // this.taskForm.description=""
      // this.taskForm={
      //   title: "",
      //   description: ""
      // }
      this.showModal=true
    },
    removeTask(taskId){
            this.todo=this.todo.filter((task)=>task.id!=taskId)
        }
    
  }
}
//PROPS - one way data flow
// Parent to Child
</script>
<template>
  <!-- <div>
    <blog-posts v-for="post in posts" :title="post.name" :id="post.id" :key="post.id" :post="post"></blog-posts>
    <button @click.prevent="addPost">Add POST</button>
  </div> -->
  <div>
    <nav class="navbar">
      <h3>TODO LIST</h3>
      <button @click="openModel">ADD</button>
    </nav>
    <main class="todo-card-wrapper">
      <TodoCard v-for="task in todo" :task="task" :key="task.id" @remove-one="(taskId)=>removeTask(taskId)"/>
    </main>
    <TasksModel v-if="showModal" @close-model="showModal=false"
    @submit-form="(task)=>addTask(task)" />
    
  </div>
  
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #4f46e5; /* Indigo */
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.navbar h3 {
  font-size: 1.4rem;
}

.navbar button {
  background: #22c55e; /* Green */
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s ease;
}
.navbar button:hover {
  background: #16a34a;
}

.todo-card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.2rem;
}


</style>
