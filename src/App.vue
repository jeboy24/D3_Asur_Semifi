<template>
  <nav>
  <RouterLink :to="{name: 'Home'}">Home</RouterLink>|
  <RouterLink :to="{name: 'About'}">About</RouterLink>|
  <RouterLink :to="{name: 'Milestone'}">Milestone</RouterLink>
</nav>

  <br>
  <RouterView />
</template>