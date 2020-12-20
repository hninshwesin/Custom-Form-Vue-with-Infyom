<template>
    <!--  <div id="app">-->
    <!--    <img alt="Vue logo" src="./assets/imgs/sport/">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--  </div>-->
    <div id="app">
      <h1>Frontend View</h1>
<!--        <font-awesome-icon icon="user-secret" />-->
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
<!--                <li class="nav-item">-->
<!--                    <router-link to="/" class="nav-link">Home</router-link>-->
<!--                </li>-->
              <li class="nav-item">
                <router-link to="/dropdown" class="nav-link" style="color: white">User Form List</router-link>
              </li>
                <li class="nav-item">
                    <router-link to="/create" class="nav-link" style="color: white">Create</router-link>
                </li>
<!--                <li class="nav-item">-->
<!--                    <router-link to="/infyom" class="nav-link">infyom</router-link>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <router-link to="/template" class="nav-link">template</router-link>-->
<!--                </li>-->
            </ul>
        </nav>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

    export default {
        name: 'App',
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 20px;
    }

</style>
