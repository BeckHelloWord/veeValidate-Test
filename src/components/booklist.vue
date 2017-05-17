<!--组件-->
<template>
  <div class="booklist">
    <h2>{{bookListName}}</h2>
    <ul class="soldOut">
      <li v-for="item in soldOutBook" v-if="item.isDel" v-on:click='childClick'>
        {{item.name | formatName}}<span class="tips-soldout">售罄</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'booklist',
    props: ['soldOutBook'], //父组件数据，传递给子组件
    data() {
      return {
        bookListName: '已售罄书籍',
        msg:'儿子叫爹'
      }
    },
    methods: {
      childClick: function () {
        //触发父组件上的自定义事件
        this.$emit('child-tell-something',this.msg);
      }
    },
    created(){
      this.$parent.show=true;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>