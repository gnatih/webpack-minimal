<template>
  <v-app id="inspire">
    <v-app-bar app color="blue-grey" dark>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon />
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
  }),
}
</script>

<style>
  h1 {
    color: orangered;
  }
</style>