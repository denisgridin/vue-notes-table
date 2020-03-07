<template>
  <div id="app">
    <AppContent></AppContent>
  </div>
</template>

<script>
import AppContent from '@/components/AppContent'
export default {
	name: 'App',
	components: {
		AppContent
	}
}
</script>
<style lang="scss">
@import "@/assets/style/common.scss";
@import "material-icons/iconfont/material-icons.scss";
#app {
  padding: 3rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
body {
  overflow-x: hidden;
  min-height: 100vh;
  width: 100vw;
  background: url("../src/assets/img/background_1.svg") top left no-repeat,
    url("../src/assets/img/background_2.svg") bottom right no-repeat;
  background-size: 100%, 100%;
}
</style>
