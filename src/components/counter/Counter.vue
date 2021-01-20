<template>
  <div>
      <button class="increase" @click="increase"> get value  </button> 
      <button class="decrease" @click="decrease"> decrease value  </button>

      <span class="result"> {{ value }} </span>
  </div>
</template>

<script>
export default {
    data: () => ({
        value: 1
    }),
    methods: {
        increase(){
            this.value++;
        },
         decrease(){
            this.value--;
        }
    }
}
</script>

<style>
    .body{
        color: red;
    }
    .component{
        margin: 1cm;
    }

    .component button {
        margin-right: 1em;
    }
</style>