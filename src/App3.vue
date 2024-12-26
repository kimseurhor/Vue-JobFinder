<script setup>

import{onMounted, ref} from 'vue';


    const name = ref('jonh doe');
    const status = ref('active');
    const taskss = ref(['task 1', 'task 2', 'task 3']);
    const newTask = ref('');


    const toggleStatus = () =>{
      if(status.value === 'active'){
        status.value = 'pending';
    } else if(status.value === 'pending'){
      status.value= 'inactive';
    }else{
      status.value = 'active';}
    }

    const addTask = ()=>{
      if (newTask.value.trim()!==''){
        taskss.value.push(newTask.value);
        newTask.value = '';
      }
    }

    const deleteTask = (index) =>{
      taskss.value.splice(index,1);
    }

    onMounted(async()=>{
     try {
      const respone = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await respone.json();
      taskss.value = data.map((task)=> task.title);

     } catch (error) {
      console.log("error")
     }
    });

  
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status ==='active'">user is active</p>
  <p v-else-if="status==='pending'">user is pending</p>
  <p v-else>user is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>

  <h3>Task:</h3>
  <ul>
    <li v-for="(task, index) in taskss" :key="task">
      <span>
        {{ task }}
      </span>      
      <button @click="deleteTask(index)">Del</button>
    </li>
  </ul>

<br>
  <button v-on:click="toggleStatus">Change status</button>
</template>

