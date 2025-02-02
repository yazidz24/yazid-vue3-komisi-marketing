<script setup>
import { useRoute, RouterLink } from 'vue-router'
const route = useRoute()
</script>
<template>
  <div class="container-fluid">

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Penjualan &amp; Komisi Marketing</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" :class="[route.name == 'komisi' ? 'active fw-bold' : '']" aria-current="page" :to="{name: 'komisi'}">Komisi</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-dark" :class="[route.name == 'penjualan' ? 'active fw-bold' : '']" :to="{name: 'penjualan'}">Penjualan</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-dark" :class="[route.name == 'marketing' ? 'active fw-bold' : '']" :to="{name: 'marketing'}">Marketing</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-dark" :class="[route.name == 'kredit' ? 'active fw-bold' : '']" :to="{name: 'kredit'}">Kredit</RouterLink>
            </li>
          </ul>
        </div>
        <div class="d-flex">
          <h4>Coding Test by Muhammad Yazid Zidan</h4>
        </div>
      </div>
    </nav>
  </div>
</template>
