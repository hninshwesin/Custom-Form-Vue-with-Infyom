<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h2>Please Answer Survey Form!</h2>
          </div>
          <br>
          <div class="card-body">
            <form v-on:submit.prevent>
              <div v-for="(field, index) of database" :key="index">
                <div v-if="field.inForm === true">
                  <label>{{ field.name }}: </label><br>
                  <input type="text" v-model="child_model[field.name]" :placeholder="'Enter ' + [ field.name ]">
                </div>
                <br>
              </div>
              <button class="btn btn-success" @click="replyCreate">Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildCreate",
  props: [
    'model',
    'database',
  ],
  data() {
    return {
      child_model: {}
    }
  },
  mounted() {
    this.child_model = this.model
  },
  methods: {
    replyCreate: function () {
      // console.log(this.child_model)
      this.$emit('listenerChild', this.child_model)
    }
  },
  // beforeMount() {
  //     this.child_model = this.model
  // }
}
</script>

<style scoped>

</style>