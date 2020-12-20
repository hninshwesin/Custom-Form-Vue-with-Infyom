<template>
  <ChildCreate :database="database" :model="model" @listenerChild="listenerChild"></ChildCreate>
</template>

<script>
// import database from 'jsonfile';
import ChildCreate from "./ChildCreate";
import axios from "axios";

export default {
  name: "Create",
  components: {ChildCreate},

  data() {
    return {
      model: {},
      database: [],
      data2 : '',
      newmodel : '',
    }
  },
  created() {
    this.database = this.$route.params.data1
    this.data2 = this.$route.params.data2
  },
  mounted() {
    for (const data of this.database) {
      // console.log(data.name);
      if (data.inForm === true) {
        this.model[data.name] = '';
      }
    }
  },
  methods: {
    listenerChild(event) {
      const self = this
      self.newmodel = self.data2.replace(/\.?([A-Z])/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "") + 's';

      // for (let key in event){
      //     const product = event[key]
      //   console.log(product)
      // }
      const API_URL = 'http://127.0.0.1:8000';

      const URL = `${API_URL}/api/${self.newmodel}`
      // console.log(URL, event)
      axios.post(URL, event).then(function (response) {
        const status = response.data.success;
        if (status) {
          self.$swal.fire({
            title: 'Submitted!',
            text: 'Your Product has been created!',
            icon: 'success',
            timer: 5000
          })
              .then(function () {
                self.$router.push({name: 'dropdown'})

              })
        }
        console.log(status);
      }).catch(error => {
        console.log(error)
      });

    }
  },

}
</script>

<style scoped>

</style>