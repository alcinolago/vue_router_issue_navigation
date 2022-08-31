<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card-title>
          Avaliação de Perfil
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Pesquisar"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="patients" :search="search">
          <template v-slot:[`item.status`]="{ item }">
            <v-chip :color="getColor(item.status)" dark x-small>
              {{ item.status }}
            </v-chip>
          </template>
          <template v-slot:[`item.id`]="{ item }">
            <v-btn class="ma-2" x-small outlined color="indigo" :to="{ name: 'analiseDetalhes', params: { id: item.id } }">
              Analisar
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import router from '@/router';
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Paciente",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Idade", value: "age" },
        { text: "Altura (Cm)", value: "height" },
        { text: "Peso (Kg)", value: "weight" },
        { text: "Alimentação", value: "food" },
        { text: "Status", value: "status" },
        { text: "Ação", value: "id" },
      ],
      patients: [
        {
          id: "1",
          name: "Ben Elsen",
          age: "42",
          height: "186",
          weight: "98",
          food: "Especial",
          status: "Pendente",
        },
        {
          id: "2",
          name: "Pedro Silva",
          age: "22",
          height: "192",
          weight: "75",
          food: "Vegano",
          status: "Pendente",
        },
        {
          id: "3",
          name: "Julia Oliveira",
          age: "32",
          height: "167",
          weight: "62",
          food: "Vegetariana",
          status: "Atrasado"
        },
        {
          id: "4",
          name: "Fabiana Santos",
          age: "28",
          height: "172",
          weight: "55",
          food: "Normal",
          status: "Concluído"
        },
        {
          id: "5",
          name: "Anna Pelzer",
          age: "28",
          height: "172",
          weight: "55",
          food: "Normal",
          status: "Concluído"
        },
        {
          id: "6",
          name: "Julia Oliveira",
          age: "32",
          height: "167",
          weight: "62",
          food: "Vegetariana",
          status: "Atrasado"
        },
        {
          id: "7",
          name: "Ben Elsen",
          age: "42",
          height: "186",
          weight: "98",
          food: "Especial",
          status: "Pendente",
        },
        {
          id: "8",
          name: "Pedro Silva",
          age: "22",
          height: "192",
          weight: "75",
          food: "Vegano",
          status: "Pendente",
        },
        {
          id: "9",
          name: "Julia Oliveira",
          age: "32",
          height: "167",
          weight: "62",
          food: "Vegetariana",
          status: "Atrasado"
        },
        {
          id: "10",
          name: "Fabiana Santos",
          age: "28",
          height: "172",
          weight: "55",
          food: "Normal",
          status: "Concluído"
        },
        {
          id: "11",
          name: "Anna Pelzer",
          age: "28",
          height: "172",
          weight: "55",
          food: "Normal",
          status: "Concluído"
        },
        {
          id: "12",
          name: "Julia Oliveira",
          age: "32",
          height: "167",
          weight: "62",
          food: "Vegetariana",
          status: "Atrasado"
        },
        {
          id: "13",
          name: "Ben Elsen",
          age: "42",
          height: "186",
          weight: "98",
          food: "Especial",
          status: "Pendente",
        },
        {
          id: "14",
          name: "Pedro Silva",
          age: "22",
          height: "192",
          weight: "75",
          food: "Vegano",
          status: "Pendente",
        },
        {
          id: "15",
          name: "Julia Oliveira",
          age: "32",
          height: "167",
          weight: "62",
          food: "Vegetariana",
          status: "Atrasado"
        },
        {
          id: "16",
          name: "Fabiana Santos",
          age: "28",
          height: "172",
          weight: "55",
          food: "Normal",
          status: "Concluído"
        },
        {
          id: "17",
          name: "Anna Pelzer",
          age: "28",
          height: "172",
          weight: "55",
          food: "Normal",
          status: "Concluído"
        },
        {
          id: "18",
          name: "Julia Oliveira",
          age: "32",
          height: "167",
          weight: "62",
          food: "Vegetariana",
          status: "Atrasado"
        },
        {
          id: "19",
          name: "Ben Elsen",
          age: "42",
          height: "186",
          weight: "98",
          food: "Especial",
          status: "Pendente",
        },
        {
          id: "20",
          name: "Pedro Silva",
          age: "22",
          height: "192",
          weight: "75",
          food: "Vegano",
          status: "Pendente",
        },
        {
          id: "21",
          name: "Julia Oliveira",
          age: "32",
          height: "167",
          weight: "62",
          food: "Vegetariana",
          status: "Atrasado"
        },
        {
          id: "22",
          name: "Fabiana Santos",
          age: "28",
          height: "172",
          weight: "55",
          food: "Normal",
          status: "Concluído"
        },
        {
          id: "23",
          name: "Anna Pelzer",
          age: "28",
          height: "172",
          weight: "55",
          food: "Normal",
          status: "Concluído"
        },
        {
          id: "24",
          name: "Julia Oliveira",
          age: "32",
          height: "167",
          weight: "62",
          food: "Vegetariana",
          status: "Atrasado"
        },
        {
          id: "25",
          name: "Ben Elsen",
          age: "42",
          height: "186",
          weight: "98",
          food: "Especial",
          status: "Pendente",
        },
        {
          id: "26",
          name: "Pedro Silva",
          age: "22",
          height: "192",
          weight: "75",
          food: "Vegano",
          status: "Pendente",
        },
        {
          id: "27",
          name: "Julia Oliveira",
          age: "32",
          height: "167",
          weight: "62",
          food: "Vegetariana",
          status: "Atrasado"
        },
        {
          id: "28",
          name: "Fabiana Santos",
          age: "28",
          height: "172",
          weight: "55",
          food: "Normal",
          status: "Concluído"
        },
        {
          id: "29",
          name: "Anna Pelzer",
          age: "28",
          height: "172",
          weight: "55",
          food: "Normal",
          status: "Concluído"
        },
        {
          id: "30",
          name: "Julia Oliveira",
          age: "32",
          height: "167",
          weight: "62",
          food: "Vegetariana",
          status: "Atrasado"
        },
        {
          id: "31",
          name: "Ben Elsen",
          age: "42",
          height: "186",
          weight: "98",
          food: "Especial",
          status: "Pendente",
        },
        {
          id: "32",
          name: "Pedro Silva",
          age: "22",
          height: "192",
          weight: "75",
          food: "Vegano",
          status: "Pendente",
        },
        {
          id: "33",
          name: "Julia Oliveira",
          age: "32",
          height: "167",
          weight: "62",
          food: "Vegetariana",
          status: "Atrasado"
        },
        {
          id: "34",
          name: "Fabiana Santos",
          age: "28",
          height: "172",
          weight: "55",
          food: "Normal",
          status: "Concluído"
        },
        {
          id: "35",
          name: "Anna Pelzer",
          age: "28",
          height: "172",
          weight: "55",
          food: "Normal",
          status: "Concluído"
        },
        {
          id: "36",
          name: "Julia Oliveira",
          age: "32",
          height: "167",
          weight: "62",
          food: "Vegetariana",
          status: "Atrasado"
        },
      ],
      
    };
  },
  methods: {
    getColor(status) {
      if (status == "Atrasado") return "red";
      else if (status == "Pendente") return "orange";
      else return "green";
    },
    navigateTo: function (analiseId) {
      console.log(analiseId)
     this.$router.push({ name: 'analiseDetalhes', params: { id: analiseId } })
    }
  },
};
</script>