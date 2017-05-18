<!--组件-->
<template>
  <div class="demo">
    <label>
      用户名：
      <input v-validate="'required|alpha_dash'"  type="text" name="username" />
      <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
    </label>
    <label>
      邮箱：
      <input v-validate="'required|abc'"  type="text" name="email">
      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
    </label>
    <label>
      性别：
      <input type="text" />
    </label>
    <label>
      银行卡：
      <input type="text"  v-validate="'required|verify_coupon'"  name="bankCode"/>
      <span v-show="errors.has('bankCode')" class="help is-danger">{{ errors.first('bankCode') }}</span>
    </label>
    <label>
      手机号：
      <input type="text" />
    </label>
    <label>
      身份证：
      <input type="text" />
    </label>
        <label>
      密码：
      <input type="password" name="password"/>
    </label>
        <label>
      确认密码：
      <input type="password" v-validate="'confirmed:password'" name="configPassword"/>
    </label>
    <span v-show="errors.has('configPassword')" class="help is-danger">{{ errors.first('configPassword') }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {

  },
  created() {
    this.$parent.show = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>