<template>
  <div>
    <v-card style="padding: 10px;">
    <a text v-on:click="goToHome()" style="marginRight:15px" class="text-overline mb-4">Home /</a>
    <a text v-on:click="backLevel()" style="marginRight:15px" class="text-overline mb-4">Avaliação de Perfil /</a>
    <a text disabled class="text-overline mb-4 disabled">Detalhes - Avaliação</a>
  </v-card>
  </div>
</template>
<script>
  import router from '@/router';
  
export default {
  data: () => ({
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "/",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "/analise",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "",
      },
    ],
  }),
  methods:{
    goToHome(){
      router.push({ name: 'home'})
    },
    backLevel(){
      router.go(-1)
    }
  }
};
</script>
<style scoped>
.disabled {
  cursor: not-allowed;
  color: gray
}
</style>