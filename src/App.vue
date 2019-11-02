<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: white;
}
img {
  width: 100%;
  height: 100%;
}
input::placeholder {
  color: #888;
  font-size: 14px;
}
.baseBg {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 0 10px;
}
.stripe {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  box-shadow: 0 1px 1px #eee;
}
</style>
