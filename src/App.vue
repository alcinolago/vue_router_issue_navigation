<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <DrawerMenu />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Habitus</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import DrawerMenu from "./components/menu/DrawerMenuComponent.vue";
export default {
  name: "App",
  data: () => ({
    drawer: null,
  }),
  components: { DrawerMenu },
};
</script>