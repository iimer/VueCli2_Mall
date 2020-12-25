<template>
  <div class="all" style="  background-color: #e1f3d8;">
    <div class="register">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="email">
          <el-input prefix-icon="el-icon-message" placeholder="请输入邮箱账号" v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" prefix-icon="el-icon-lock" placeholder="设置密码"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" prefix-icon="el-icon-lock" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" prefix-icon="el-icon-mobile-phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button type="info" @click="$router.push('/login')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    var email = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var phone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else if (value.split('').length !== 11 || !this.allInt(value)) {
        callback(new Error('请输入正确的手机号码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        email: '',
        pass: '',
        checkPass: '',
        phone: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' },
          { min: 6, max: 12, message: '请输入6~12位的密码' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        email: [
          { validator: email, trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        phone: [
          { validator: phone, trigger: 'blur' }
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
              if (this.isNewName(res.data)) {
                this.$http({
                  method: 'post',
                  url: '/login/add_user',
                  data: this.ruleForm
                })
                  .then((res) => {
                    if (res.data === 'success') {
                      this.$message({
                        message: '注册成功',
                        type: 'success'
                      })
                      this.$router.push('/login')
                    }
                    console.log(res)
                  })
                  .catch((error) => {
                    console.log(error)
                  })
              } else {
                this.$message({
                  message: '邮箱已被注册',
                  type: 'error'
                })
                this.$refs['ruleForm'].resetFields()
              }
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    allInt (value) {
      let arr = value.split('')
      for (let index in arr) {
        if (arr[index] > '9' || arr[index] < '0') {
          return false
        }
      }
      return true
    },
    isNewName (data) {
      console.log(data)
      for (let index in data) {
        if (data[index].userName === this.ruleForm.email) {
          return false
        }
      }
      return true
    }
  }
}
</script>

<style scoped>
.register{
  padding: 20px;
  width: 50%;
  position: relative;
  left: 20%;
}
</style>
