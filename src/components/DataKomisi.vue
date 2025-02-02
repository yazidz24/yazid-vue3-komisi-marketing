<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()

onMounted(()=>{
  store.dispatch('komisi/listKomisi')
})

const listKomisi = computed(()=>{
  return store.getters['komisi/listKomisi']
})
</script>
<template>
  <div class="container-fluid mt-5">
    <table class="table table-striped">
      <thead>
        <tr>

          <th class="bg-dark text-white">No.</th>
          <th class="bg-dark text-white">Marketing</th>
          <th class="bg-dark text-white">Bulan</th>
          <th class="bg-dark text-white">Omzet</th>
          <th class="bg-dark text-white">Komisi (%)</th>
          <th class="bg-dark text-white">Komisi Nasional</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(komisi,index) in listKomisi" :key="index">

          <td>{{ index+1 }}.</td>
          <td>{{ komisi.marketing }}</td>
          <td>{{ komisi.bulan }}</td>
          <td>{{ moneyFormat(komisi.omset) }}</td>
          <td>{{ komisi.komisi }}</td>
          <td>{{ moneyFormat(komisi.komisi_nasional) }}</td>
        </tr>
      </tbody>
</table>
  </div>
</template>
