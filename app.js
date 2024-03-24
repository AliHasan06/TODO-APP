const todoInput = document.querySelector('#todo');
const ul = document.querySelector('ul');
const arr = [];




function render(){
  ul.innerHTML = '';
 

  for (let i =0 ;i<arr.length;i++){
      ul.innerHTML += `<li>${arr[i]} 
      <button onclick ="deleteTodo(${[i]})"  class="delete">Delete</button>
      <button onclick ="editTodo(${[i]})"  class="edit">Edit</button>
      </li>`
    }

}



function addTodo(){
  if(todoInput.value===''){
    alert('Enter your task to add')
  }else{
    
  arr.push(todoInput.value);
  console.log();(arr);
ul.innerHTML = '';
 

for (let i =0 ;i<arr.length;i++){
    ul.innerHTML += `<li>${arr[i]} 
    <button onclick ="deleteTodo(${[i]})" class="delete">Delete</button>
    <button onclick ="editTodo(${[i]})" class="edit">Edit</button>
    </li>`
  }
  todoInput.value = '';
}

}

function deleteTodo(index){

console.log();('delete todo is ',index);
arr.splice(index,1);
render()

}

function editTodo(index){
 const updatedVal= prompt('Enter updated value');
    console.log();('edit todo is ',index);
  arr.splice(index,1,updatedVal);
render()

}
