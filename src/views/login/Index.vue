<template>
  <div class="login-page">
     <div class="login-main">
         <h3 class="title">Little sunshine</h3>
         <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="0">
             <el-form-item prop="username">
                <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
            </el-form-item>
            <el-button type="primary" style="width:100%" :loading="commitLoading" @click.prevent="commitLogin">登录</el-button>
         </el-form>
     </div>
  </div>
</template>

<script>
export default {
    data () {
        const validUserName = (rule, value, callback) => { 
            value == '' ? callback(new Error('用户名不能为空!')) :  callback()
        }
        const validPassword = (rule, value, callback) => {
            value.length < 6 ? callback(new Error('密码不能不小于6位数')) : callback()
        }
        return {
            loginForm:{
                username: '',
                password: ''
            },
            loginRules:{ // 登录表单验证
                username:[{validator: validUserName, trigger: 'blur'}],
                password:[{validator: validPassword, trigger: 'blur'}]
            },
            commitLoading: false
        }
    },
    methods: {
        // 登录
        commitLogin () {
            this.$refs['loginForm'].validate((valid) => {
                if (valid) {
                    this.commitLoading = true
                    setTimeout(()=>{
                        sessionStorage.setItem('isToken','666')
                        this.$Message.success('登录成功')
                        this.commitLoading = false
                        this.$router.push('/')
                    },2000)
                }
            })
        }
    }
}
</script>
<style lang="scss">
// $bg:#283443;
// $light_gray:#fff;
// $cursor: #fff;
// .login-page{
//     input {
//       background: transparent;
//       border: 0px;
//       -webkit-appearance: none;
//       border-radius: 0px;
//       padding: 12px 5px 12px 15px;
//       color: $light_gray;
//       height: 47px;
//       caret-color: $cursor;

//       &:-webkit-autofill {
//         box-shadow: 0 0 0px 1000px $bg inset !important;
//         -webkit-text-fill-color: $cursor !important;
//       }
//     }
//     .el-form-item {
//         border: 1px solid rgba(255, 255, 255, 0.1);
//         background: rgba(0, 0, 0, 0.1);
//         border-radius: 5px;
//         color: #454545;
//     }
// }
</style>
<style lang="scss" scoped>
$light_font: #fff;
.login-page{
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-main{
        width: 300px;
        padding: 0 20px 20px;
        .title{
            color: $light_font;
            text-align: center;
            padding:20px 0;
            font-size: 26px;
        }
    }
}
</style>>