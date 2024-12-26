<script>
export default{
  data(){
    return{
      name: "jonh doe",
      status: 'active',
      taskss: ['task 1', 'task 2', 'task 3'],
      link: 'https://www.google.com'
    }
  },
  methods:{
    toggleStatus() {
      if(this.status === 'active'){
        this.status = 'pending';
    } else if(this.status === 'pending'){
      this.status= 'inactive';
    }else{
      this.status = 'active';}
  }
}
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status ==='active'">user is active</p>
  <p v-else-if="status==='pending'">user is pending</p>
  <p v-else>user is inactive</p>

  <h3>Task:</h3>
  <ul>
    <li v-for="i in taskss" :key="i">{{ i }}</li>
  </ul>
  <a :href="link">click</a>
<br>
  <button v-on:click="toggleStatus">Change status</button>
</template>

