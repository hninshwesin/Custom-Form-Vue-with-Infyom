<template>
  <div>
    <h2 style="padding-top: 20px;">User Lists</h2>
    <div class="card" v-for="(user, index) in info" :key="index">
      <div class="card-section" style="padding-top: 20px;">
        <h3>{{ index }}</h3>
      </div>
      <form v-on:submit.prevent="submit">
        <div class="form-group" v-for="(form, index ) in user" :key="index" style="padding-bottom: 20px">
          <select v-model="search">
            <option v-for="(name, index) in form" :key="index">{{ name.model_name }}</option>
          </select>
<!--          <GetForm :databases="databases"></GetForm>-->
<!--          <button class="btn btn-success" @click="submit(search)" style="padding: 5px">Submit</button>-->
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import axios from "axios";
// import GetForm from "@/components/GetForm";

export default {
  name: "Dropdown",
  // components: {GetForm},
  data() {
    return {
      info: [],
      search : '',
      databases : [],
    }
  },
  methods: {
    submit(){
      const self = this
      const API_URL = 'http://127.0.0.1:8000';
      const URL = `${API_URL}/api/json_model?model_name=${self.search}`
      axios.post(URL).then(function (response) {
         self.databases = response.data;
         if (response.status === 200){

           self.$router.push({name: 'create', params: {data1 : self.databases, data2 : self.search}})

         }
      }).catch(error => {
        console.log(error)
      });
    }
  },
  mounted() {
    const API_URL = 'http://127.0.0.1:8000';
    const URL = `${API_URL}/api/user_form`
    axios.get(URL).then((response) => {
      this.info = response.data.data.users;
    }).catch(error => {
      console.log(error)
    });
  },
}
</script>

<style scoped>

</style>