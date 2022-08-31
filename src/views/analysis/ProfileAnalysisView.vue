<template>
  <v-container class="my-5">
    <v-card flat>
      <v-row wrap class="pa-3 borderStaus2">
        <v-col xs12 md6>
          <div class="caption grey--text">Project Name</div>
          <div>Habitus</div>
        </v-col>
        <v-col xs6 sm4 md2>
          <div class="caption grey--text">Owner</div>
          <div>Alcino</div>
        </v-col>
        <v-col xs6 sm4 md2>
          <div class="caption grey--text">Created at</div>
          <div>01/08/2022</div>
        </v-col>
        <v-col xs2 sm4 md2>
          <div class="caption grey--text">Status</div>
          <div>Em andamento</div>
        </v-col>
      </v-row>
      
    </v-card>
    
    <v-row>
      <v-col xs12 sm12 md12>
      <v-divider/>
    </v-col>
    </v-row>
    
    <v-card flat>
      <v-row wrap class="pa-3 borderStaus">
        <v-col xs12 md6>
          <div class="caption grey--text">Project Name</div>
          <div>Habitus</div>
        </v-col>
        <v-col xs6 sm4 md2>
          <div class="caption grey--text">Owner</div>
          <div>Alcino</div>
        </v-col>
        <v-col xs6 sm4 md2>
          <div class="caption grey--text">Created at</div>
          <div>01/08/2022</div>
        </v-col>
        <v-col xs2 sm4 md2>
          <div class="caption grey--text">Status</div>
          <div>Em andamento</div>
        </v-col>
      </v-row>
      
    </v-card>
    <v-row>
      <v-col xs12 sm12 md12>
      <v-divider/>
    </v-col>
    </v-row>
    <v-card flat>
      <v-row wrap class="pa-3 borderStaus2">
        <v-col xs12 md6>
          <div class="caption grey--text">Project Name</div>
          <div>Habitus</div>
        </v-col>
        <v-col xs6 sm4 md2>
          <div class="caption grey--text">Owner</div>
          <div>Alcino</div>
        </v-col>
        <v-col xs6 sm4 md2>
          <div class="caption grey--text">Created at</div>
          <div>01/08/2022</div>
        </v-col>
        <v-col xs2 sm4 md2>
          <div class="caption grey--text">Status</div>
          <div>Em andamento</div>
        </v-col>
      </v-row>
      <v-divider>sdfsd</v-divider>
    </v-card>
    <v-row>
      <v-col xs12 sm12 md12>
      <v-divider/>
    </v-col>
    </v-row>
    <v-card flat>
      <v-row wrap class="pa-3 borderStaus">
        <v-col xs12 md6>
          <div class="caption grey--text">Project Name</div>
          <div>Habitus</div>
        </v-col>
        <v-col xs6 sm4 md2>
          <div class="caption grey--text">Owner</div>
          <div>Alcino</div>
        </v-col>
        <v-col xs6 sm4 md2>
          <div class="caption grey--text">Created at</div>
          <div>01/08/2022</div>
        </v-col>
        <v-col xs2 sm4 md2>
          <div class="caption grey--text">Status</div>
          <div>Em andamento</div>
        </v-col>
      </v-row>
      
    </v-card>
    
    
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      recent: [
        {
          id: "1",
          title: "Idade",
          value: "36",
        },
        {
          id: "2",
          title: "Altura",
          value: "186 cm",
        },
        {
          id: "3",
          title: "Peso",
          value: "95 Kg",
        },
        {
          id: "4",
          title: "Genero",
          value: "Masculino",
        },
        {
          id: "5",
          title: "Prática de Atividade",
          value: "Baixo",
        },
      ],
    };
  },
};
</script>
<style scoped>
.card {
  height: 100%;
}
.borderStaus {
  border-left-style: solid;
  border-color: blueviolet;
  border-width: 8px;
}
.borderStaus2 {
  border-left-style: solid;
  border-color: pink;
  border-width: 8px;
}
</style>