<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()

onMounted(()=>{
  store.dispatch('marketing/listMarketing')
})

const listMarketing = computed(()=>{
  return store.getters['marketing/listMarketing']
})
</script>
<template>
  <div class="container-fluid mt-5">
    <table class="table table-striped">
      <thead>
        <tr>

          <th class="bg-dark text-white">No.</th>
          <th class="bg-dark text-white">Marketing</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(marketing,index) in listMarketing" :key="index">

          <td>{{ index+1 }}.</td>
          <td>{{ marketing.name }}</td>
        </tr>
      </tbody>
</table>
  </div>
</template>
