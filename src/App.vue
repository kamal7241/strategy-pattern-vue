<template>
  <div class="container mb-5">
    <h1 class="title-description">Strategy Pattern</h1>
    <ul class="nav nav-tabs mb-3">
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" :to="'/'"
          >home</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" :to="'strategy'"
          >strategy</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" :to="'normal'"
          >all in one</router-link
        >
      </li>
    </ul>
  </div>
  <div class="container mb-5">
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
import "./styles/main.scss";
export default {};
</script>
