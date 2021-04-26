<template>
  <div class="login">
    <h1>會員登入</h1>
     <Form class="form" ref="formInline" :model="formInline" :rules="ruleInline" coloumn>
        <p>電子郵件</p> 
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
       <p>密碼</p> 
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>

<style scoped>

.login{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login h1{
    font-size: 3rem;
    margin: 5rem 0rem;
    font-weight: normal;
}
Form{
    padding: 3rem 2rem;
    width:35vw;
    border: 1px solid rgb(209, 209, 209);
    border-radius:20px;
}
Form p{
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1.2rem;
}


@media screen and (max-width: 768px) {
    .form{
        width:65vw;
    }
}
</style>