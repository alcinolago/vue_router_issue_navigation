<template>
  <v-card id="analisysTableContainer">
    <AnalysisTableComponent />
  </v-card>
</template>
  <script>
import AnalysisTableComponent from '@/components/analysis/AnalysisTableComponent.vue';
export default {
    components: { AnalysisTableComponent }
};
</script>
<style scoped>
#analisysTableContainer {
  margin: 16px;
}
</style>