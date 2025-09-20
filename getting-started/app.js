//VANILA JS

// const addbuttonEl = document.querySelector('.addB');
// const removebuttonEl = document.querySelector('.removeB');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }


// function removeGoal() {
//     if (listEl.children.length === 0) {
//         alert('No item to remove');
//     }
//     else{
//         listEl.removeChild(listEl.lastElementChild);
//     }
//     inputEl.value = '';
// }

// addbuttonEl.addEventListener('click', addGoal);
// removebuttonEl.addEventListener('click', removeGoal);

//VUE JS (CDN)


Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
    removeAllGoals() {
      this.goals = [];
    }
  }
}).mount('#app');


