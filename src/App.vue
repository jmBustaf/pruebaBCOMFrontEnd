<template>
  <div id="nav" class="border rounded bg-secondary d-flex justify-content-center">
    <router-link to="/usuarios" class="mx-3 text-white">Usuarios</router-link> |
    <router-link to="/eventos" class="mx-3 text-white">Eventos</router-link>
  </div>
  <router-view/>
</template>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}
</style>
