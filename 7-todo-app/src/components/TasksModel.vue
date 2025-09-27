<template>
    <div class="modal-wrapper">
      <div class="modal-bg"></div>
      <div class="modal">
        <header>
          <h3>ADD TASK</h3>
          <!-- <button @click="showModal=false">X</button> -->
          <button @click="$emit('closeModel')">X</button>
        </header>
        <main>
          <label>Title</label>
          <input type="text" v-model="taskForm.title">
          <label>Description</label>
          <textarea v-model="taskForm.description"></textarea>
        </main>
        <footer>
          <button @click="$emit('closeModel')">CANCEL</button>
          <button @click="submitForm">ADD</button>
        </footer>
      </div>
    </div>
</template>

<script>
export default{
    emits:['closeModel','submitForm'],
    data(){
        return{
            taskForm:{
                title: "",
                description: ""
            }
        }
    },
    methods:{
        submitForm(){
            this.$emit('submitForm',this.taskForm)
        }
    }
}
</script>

<style scoped>
    /* Modal */
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* visibility: hidden ; */
  /* toggle this with Vue */
}


.modal-bg {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
}

.modal {
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  width: 400px;
  max-width: 90%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: fadeIn 0.3s ease;
}

.modal header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal header h3 {
  font-size: 1.2rem;
  font-weight: bold;
}

.modal header button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.modal main {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.modal input,
.modal textarea {
  padding: 0.6rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  width: 95%;
}

.modal textarea {
  resize: vertical;
  min-height: 80px;
}

.modal footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
}

.modal footer button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s ease;
}

.modal footer button:first-child {
  background: #e5e7eb;
}
.modal footer button:first-child:hover {
  background: #d1d5db;
}

.modal footer button:last-child {
  background: #4f46e5;
  color: white;
}
.modal footer button:last-child:hover {
  background: #4338ca;
}

/* Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>