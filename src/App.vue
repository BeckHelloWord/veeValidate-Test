<!--主组件 所有组件都会有它-->
<template>
  <div class="abc">
    <router-view></router-view>
    <div class="footer" v-show="show">主组件</div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        show:true,
      }
    },
    components: {
    },
    methods: {
    }
  }

</script>
<style lang='sass'>
  @import 'src/assets/common';
</style>