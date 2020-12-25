<template>
  <div class="all" style="  background-color: #e1f3d8;">
    <div class="login_content">
      <el-form ref="loginForm" :model="loginForm" label-width="80px" :rules="rules">
        <el-form-item  prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user" autocomplete="off" placeholder="邮箱/手机/用户名"></el-input>
        </el-form-item>
        <p></p>
        <el-form-item  prop="userpassword">
          <el-input v-model="loginForm.userpassword" prefix-icon="el-icon-lock" type="password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm('loginForm')" type="primary">登录</el-button>
          <el-button @click="$router.push('/register')" type="info">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
      callback()
    }
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      }
      callback()
    }
    return {
      loginForm: {
        username: '',
        userpassword: ''
      },
      rules: {
        userpassword: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: validateName, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({
            method: 'post',
            url: '/login/user'
          })
            .then((res) => {
              if (this.getUser(res.data)) {
                this.$message({
                  message: '登陆成功',
                  type: 'success'
                })
                sessionStorage.setItem('username', this.loginForm.username)
                console.log(sessionStorage.getItem('username'))
                this.$router.push('/')
              } else {
                this.$refs['loginForm'].resetFields()
                this.$message({
                  message: '请输入正确的账号、密码',
                  type: 'error'
                })
              }
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          return false
        }
      })
    },
    getUser (users) {
      for (let index in users) {
        if (users[index].userName === this.loginForm.username && users[index].userPassword === this.loginForm.userpassword) {
          return true
        }
      }
      return false
    }
  }
}
</script>

<style scoped>
.login_content{
  padding: 20px;
  width: 50%;
  position: relative;
  left: 20%;
}
</style>
