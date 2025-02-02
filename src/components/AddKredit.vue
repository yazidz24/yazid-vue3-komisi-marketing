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
  penjualan_id: '',
  total_amount:'',
  transaction_number:'',
})

watch(detailPenjualan, (newVal) => {
  if (newVal) {
    forms.penjualan_id = newVal.id
    forms.transaction_number = newVal.transaction_number
  }
})

const validation = ref([])

function add(){
  let penjualan_id = forms.penjualan_id
  let total_amount = forms.total_amount

  // send to action register in store
  store.dispatch('kredit/addKredit', {
      penjualan_id,
      total_amount
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
        <form class="row g-3 mt-4" @submit.prevent="add()">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="" class="form-label">Transaction Number</label>
              <input type="text" disabled class="form-control" v-model="forms.transaction_number">
            </div>
            <div class="col-md-6 mb-3">
              <label for="" class="form-label">Amount</label>
              <input type="number" class="form-control" v-model="forms.total_amount">
              <span class="text-danger" v-if="validation.total_amount">{{ validation.total_amount[0] }}</span>
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
