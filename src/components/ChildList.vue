<template>
  <div>
    <h1>Total Products ( {{ numberOfProducts }} )</h1><br>

    <table class="table table-bordered table-hover">
      <thead>
      <tr>
        <br>
        <th>Name</th>
        <br>
        <th>Price</th>
        <br>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="product of products" :key="product.id">
        <br>
        <th> {{ product.name }}</th>
        <br>
        <th>{{ product.price }}</th>
        <br>
        <th>{{ product.description }}</th>
        <br>
        <br><br>
        <td>
          <router-link :to="{name: 'edit', params: { id: product.id,name: product.name,price: product.price,description: product.description }}"
                       class="btn btn-primary">
            Edit
          </router-link>
        </td>
        <br><br><br>

        <DeleteChildList :id="product.id" @listenerChildList="listenerChildList"></DeleteChildList>

      </tr>
      </tbody>
    </table>
    <div>
    </div>
  </div>
</template>

<script>
import DeleteChildList from "./DeleteChildList";
import axios from "axios";

export default {
  name: "ChildList",
  components: {
    DeleteChildList
  },
  props: [
    'products',
    'numberOfProducts'
  ]
  ,
  data() {
    return {}
  },
  // mounted() {
  //     this.child_products = this.products
  //     console.log(this.child_products)
  //     this.child_numberOfProducts = this.numberOfProducts
  //     console.log(this.child_numberOfProducts)
  // },
  methods: {
    listenerChildList(event) {
      const self = this
      const API_URL = 'http://127.0.0.1:8000';
      const URL = `${API_URL}/api/shwe__infyoms/${event}`
      axios.delete(URL).then((response) => {
        console.log(response)
        if (response.status) {
          self.$swal.fire(
              'Deleted!',
              'Your product has been deleted!',
              'success',
              30000
          ).then(function () {
            location.reload();
          })
        }
        console.log(response.status);
      }).catch(error => {
        console.log(error.response)
      });

    }
  }


}
</script>

<style scoped>

</style>