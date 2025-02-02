<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router';

const store = useStore()
const router = useRouter()
const route = useRoute()

onMounted(()=>{
  store.dispatch('penjualan/detailPenjualan',route.params.id)
})

const detailPenjualan = computed(()=>{
  return store.getters['penjualan/detailPenjualan']
})

const forms = reactive({
  id: '',
  marketing_id: '',
  transaction_number: '',
  date: '',
  cargo_fee : '',
  total_balance: ''
})

watch(detailPenjualan, (newVal) => {
  if (newVal) {
    forms.id = newVal.id
    forms.marketing_id = newVal.marketing_id
    forms.transaction_number = newVal.transaction_number
    forms.date = newVal.date
    forms.cargo_fee = newVal.cargo_fee
    forms.total_balance = newVal.total_balance
  }
})

const validation = ref([])

function update(){
  let id = forms.id
  let marketing_id = forms.marketing_id
  let date = forms.date
  let cargo_fee = forms.cargo_fee
  let total_balance = forms.total_balance

  // send to action register in store
  store.dispatch('penjualan/updatePenjualan', {
      id,
      marketing_id,
      date,
      cargo_fee,
      total_balance
  }).then(() => {

      router.push({name: 'penjualan'})
      // console.log('success update')
  }).catch(errors => {
      //show validaation message
      validation.value = errors
  })
}

</script>
<template>
  <div class="container-fluid mt-5">
    <div class="card">
      <div class="card-body">
        <form class="row g-3 mt-4" @submit.prevent="update()">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="" class="form-label">Transaction Number</label>
              <input type="text" disabled class="form-control" v-model="forms.transaction_number">
            </div>
            <div class="col-md-6 mb-3">
              <label for="" class="form-label">Date</label>
              <input type="date" class="form-control" v-model="forms.date">
              <span class="text-danger" v-if="validation.date">{{ validation.date[0] }}</span>
            </div>
            <div class="col-md-6 mb-3">
              <label for="" class="form-label">Cargo Fee</label>
              <input type="number" class="form-control" v-model="forms.cargo_fee">
              <span class="text-danger" v-if="validation.cargo_fee">{{ validation.cargo_fee[0] }}</span>
            </div>
            <div class="col-md-6 mb-3">
              <label for="" class="form-label">Total Balance</label>
              <input type="number" class="form-control" v-model="forms.total_balance">
              <span class="text-danger" v-if="validation.total_balance">{{ validation.total_balance[0] }}</span>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
