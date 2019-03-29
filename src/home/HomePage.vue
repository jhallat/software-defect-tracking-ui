<template>
  <div class='container'>
    <div class='data-section'>
      <h5 class="data-section-header">Recent Defects</h5>
      <table  class='table'>
        <thead>
          <tr>
            <td>Description</td>
            <td>Defect Type</td>
            <td>Process Type</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(defect, index) in defects' :key='index'>
            <td>{{ defect.description }}</td>
            <td>{{ defect.defectType }}</td>
            <td>{{ defect.processType }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  computed: {
    defects() {
      return this.$store.state.defects;
    }
  },
  props: {
    msg: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
