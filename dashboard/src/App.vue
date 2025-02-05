<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(async ()=>{
  let res = await fetch(import.meta.env.VITE_APP_API_URL,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',      
    }
  });
  console.log(res);
})
  //
</script>
