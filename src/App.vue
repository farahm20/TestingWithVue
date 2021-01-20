<template>
  <main>
    <p> The Toggle Button</p>
    <OnOff></OnOff>
    <Counter></Counter>
    <Options></Options>
    <ShowHide></ShowHide>
  </main>
</template>

<script>
import OnOff from './components/OnOff/OnOff.vue'
import Counter from './components/counter/Counter.vue'
import Options from './components/Options/Options.vue'
import ShowHide from './components/ShowHide/showHide.vue'

export default {
  name: 'App',
  components: {
    OnOff,
    Counter, 
    Options,
    ShowHide
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
