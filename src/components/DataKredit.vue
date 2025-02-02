<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()

onMounted(()=>{
  store.dispatch('kredit/listKredit')
})

const listKredit = computed(()=>{
  return store.getters['kredit/listKredit']
})
</script>
<template>
  <div class="container-fluid mt-5">
    <table class="table table-striped">
      <thead>
        <tr>

          <th class="bg-dark text-white">No.</th>
          <th class="bg-dark text-white">Transaction Number</th>
          <th class="bg-dark text-white">Grand Total</th>
          <th class="bg-dark text-white">Tagihan</th>
          <th class="bg-dark text-white">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(kredit,index) in listKredit" :key="index">

          <td>{{ index+1 }}.</td>
          <td>{{ kredit.penjualan.transaction_number }}</td>
          <td>{{ moneyFormat(kredit.grand_total) }}</td>
          <td>{{ moneyFormat(kredit.total_amount) }}</td>
          <td>{{ kredit.status }}</td>
        </tr>
      </tbody>
</table>
  </div>
</template>
