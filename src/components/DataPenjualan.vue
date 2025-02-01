<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
const store = useStore()

onMounted(()=>{
  store.dispatch('penjualan/listPenjualan')
})

const listPenjualan = computed(()=>{
  return store.getters['penjualan/listPenjualan']
})
</script>
<template>
  <div class="container-fluid mt-5">
    <div class="card mb-3">
      <div class="card-body">
        <RouterLink class="btn btn-success" :to="{name: 'penjualan.add'}">+ Tambah Data Penjualan</RouterLink>
      </div>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>

          <th class="bg-dark text-white">No.</th>
          <th class="bg-dark text-white">Transaction Number</th>
          <th class="bg-dark text-white">Marketing Name</th>
          <th class="bg-dark text-white">Marketing ID</th>
          <th class="bg-dark text-white">Date</th>
          <th class="bg-dark text-white">Cargo Fee</th>
          <th class="bg-dark text-white">Total Balance</th>
          <th class="bg-dark text-white">Grand Total</th>
          <th class="bg-dark text-white">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(penjualan,index) in listPenjualan" :key="index">

          <td>{{ index+1 }}</td>
          <td>{{ penjualan.transaction_number }}</td>
          <td>{{ penjualan.marketing.name }}</td>
          <td>{{ penjualan.marketing.id }}</td>
          <td>{{ penjualan.date }}</td>
          <td>{{ moneyFormat(penjualan.cargo_fee) }}</td>
          <td>{{ moneyFormat(penjualan.total_balance) }}</td>
          <td>{{ moneyFormat(penjualan.grand_total) }}</td>
          <td>
            <button class="btn btn-primary btn-sm">Edit</button>
            <button class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
</table>
  </div>
</template>
