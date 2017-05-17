<template>
  <div id="app">
    <p v-text="title"></p>
    <!--使用组件，并自定义事件子组件通信父组件-->
    <sold-out :soldOutBook="items" v-on:child-tell-something="childCall"></sold-out>
    <input type="text" v-model="bookName" @keyup.enter="addBook" />
    <p v-text="childSay"></p>
    <ul class="bookList">
      <li v-for="item in items" v-bind:class="{isDel:item.isDel}" v-on:click="delBook(item)">{{item.name | formatName}}</li>
    </ul>
  </div>
</template>

<script>
  //导入组件
  import booklist from './booklist.vue'

  export default {
    data() {
      return {
        title: '书籍管理',
        items: [
          { name: '活着', isDel: false },
          { name: '鲁兵逊漂流记', isDel: true },
          { name: '小时代', isDel: false }
        ],
        bookName: '',
        childSay: ''
      }
    },
    components: {
      //注册组件
      'sold-out': booklist
    },
    watch: {
      items: function (val, oldval) {
        /*当items中数据有改变时触发F
        *val:改变后的值
        *oldval:改变之前的值
        */
        console.log('数据有变化');
      }
    },
    methods: {
      delBook: function (item) {
        item.isDel = !item.isDel;
      },
      addBook: function () {
        this.items.push({ name: this.bookName, isDel: false });
        this.bookName = '';
      },
      childCall: function (msg) {
        //子组件通信父组件，触发事件后传递的参数
        this.childSay = msg;
      }
    },
    created(){
      this.$parent.show=false;
    }
  }

</script>

<style lang='sass'>
  @import 'src/assets/common';
</style>