<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()

onMounted(()=>{
  store.dispatch('marketing/listMarketing')
})

const listMarketing = computed(()=>{
  return store.getters['marketing/listMarketing']
})

const forms = reactive({
  marketing_id: '',
  date: '',
  cargo_fee : '',
  total_balance: ''
})

const validation = ref([])

function add(){

  let marketing_id = forms.marketing_id
  let date = forms.date
  let cargo_fee = forms.cargo_fee
  let total_balance = forms.total_balance

  // send to action register in store
  store.dispatch('penjualan/addPenjualan', {
      marketing_id,
      date,
      cargo_fee,
      total_balance
  }).then(() => {

      router.push({name: 'penjualan'})
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
        <form class="row g-3 mt-4" @submit.prevent="add()">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="" class="form-label">Marketing</label>
              <select class="form-control" v-model="forms.marketing_id">
                <option disabled selected>-- PILIH --</option>
                <option v-for="(marketing) in listMarketing" :value="marketing.id" :key="marketing.id">{{ marketing.name }}</option>
              </select>
              <span class="text-danger" v-if="validation.marketing_id">{{ validation.marketing_id[0] }}</span>
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
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
