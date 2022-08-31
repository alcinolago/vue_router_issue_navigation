<template>
  <div>
    <v-system-bar></v-system-bar>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Nutricionista </v-list-item-title>
          <v-list-item-subtitle>nutri@smarthabitus.com.br</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.action">
            <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
</div>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { text: "Avaliação de Perfil", icon: "mdi-folder" , action: "analise"},
      { text: "Tabela Nutricional", icon: "mdi-account-multiple", action: "home" },
      { text: "Avaliações", icon: "mdi-star" },
      { text: "Modelos de Avaliação", icon: "mdi-history" },
      { text: "Faturamento", icon: "mdi-check-circle" },
      { text: "Receitas", icon: "mdi-upload" },
      { text: "Consultas", icon: "mdi-cloud-upload" },
    ],
  }),
  methods: {
    
    menuActionClick(action) {
      if (action === "solicitacao") {

      } else if (action === "logout") {
        alert('LOGOUT!!')
      }
    }
  }
};
</script>