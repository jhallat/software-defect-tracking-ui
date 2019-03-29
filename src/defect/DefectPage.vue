<template>
  <div class="container">
    <div class='data-section'>
      <h5 class="data-section-header">New Defect</h5>
      <div class="col-12 data-section-contents">
        <div class="form-group">
          <label>Description</label>
          <input v-model="currentDefect.description" class="form-control">
        </div>
        <div class="row">
          <div class="col-5">
            <div class="form-group">
              <label>Type</label>
              <select class="form-control" v-model="currentDefect.defectType">
                <option
                  v-for="(defectType, index) in defectTypes"
                  :value="defectType"
                  :key="index"
                >{{ defectType }}</option>
              </select>
            </div>
          </div>
          <div class="col-5">
            <div class="form-group">
              <label>Process</label>
              <select class="form-control" v-model="currentDefect.processType">
                <option
                  v-for="(processType, index) in processTypes"
                  :value="processType"
                  :key="index"
                >{{ processType }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Trigger</label>
          <textarea v-model="currentDefect.trigger" class="form-control"/>
        </div>
        <div class="form-group">
          <label>Action</label>
          <textarea v-model="currentDefect.description" class="form-control"/>
        </div>
        <div class="form-group">
          <label>Components Affected</label>
          <textarea v-model="currentDefect.description" class="form-control"/>
        </div>
      </div>
      <div class="entry-form-footer">
        <button class="btn btn-highlight" @click="addDefect">Add</button>
        <button class="btn btn-highlight" @click="addDefect">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import defectTypes from "../data/defectTypes";
import processTypes from "../data/processTypes";

export default {
  name: "DefectPage",
  data() {
    return {
      defectTypes,
      processTypes,
      defects: [],
      currentDefect: { description: "",
                       processType: "",
                       defectType: "",
                       trigger: "" }
    };
  },
  methods: {
    addDefect() {
      const newDefect = Object.assign({}, this.currentDefect);
      this.$store.commit('addDefect', newDefect);
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>

.entry-form-footer {
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  width: 100%;

}

.btn-highlight {
  background-color: #c7c7db;
  margin: 5px;
  min-width: 100px;
}
</style>
