<template>
  <!--<h1>Hello</h1>-->
  <div>
      Count {{ count }}
  </div>
</template>

<script>
export default {
    props: {
        count: {
            type: Number
        }
    }
}
</script>

<style>

</style>