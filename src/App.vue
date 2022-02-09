<!--
 * @Author: 
 * @Date: 2022-02-09 16:40:57
 * @LastEditors: 
 * @LastEditTime: 2022-02-09 16:45:15
 * @Description: 
-->
<template>
    <div>
        <router-view/>
        <div id="container"></div>
    </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
