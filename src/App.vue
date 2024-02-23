<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  width: 1440px;
  margin: auto;
}
// @media all and(max-width:1440px) {
//   #app {
//     transform: scale(0.6) translateX(-50%);
//     // transform-origin: -50% top;
//     transform-origin: 0 0;
//     margin-left:  50%;
//   }
// }
// @media all and(max-width:992px) {
//   #app {
//     transform: scale(1);
//     transform-origin: none;
//     transform-origin: center;
//     margin: auto;
//   }
// }
</style>
