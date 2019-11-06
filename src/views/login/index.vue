<template>
    <div class="container" id="login_bg">
                <div class="row">
                    <div class="col-12"></div>
                    <div class="col-12" >
                        <h1>Sign In</h1>
                    </div>

                    <div class="col-2"></div>
                    <div class="col-2" stype="">
                        <label for="user" stype="display:inline;">账户：</label>
                    </div>
                    <div class="col-6">
                        <input type="text" class="form-control" id="user" style="display:inline;width:100%;" autocomplete="off"/>
                    </div>
                    <div class="col-2"></div>

                    <div class="col-12">
                    </div>

                    <div class="col-2"></div>
                    <div class="col-2" style="margin-right: 0px; ">
                        <label for="password" style="display:inline;">密码：</label>
                    </div>
                    <div class="col-6" style="margin-right: 0px">
                        <input type="text" class="form-control" id="password" style="display:inline;width:100%;"
                               autocomplete="off"/>
                    </div>
                    <div class="col-2"></div>

                    <div class="col-6" style="margin-left: auto">
                        <button type="submit" class="btn btn-primary" style="width: 50%;"  v-on:click="login('login')" id="login">登录</button>
                    </div>
                    <div class="col-6" style="margin-right: auto">
                        <button type="submit" class="btn btn-primary" style="width: 50%;" v-on:click="register('register')" id="register">注册</button>
                    </div>
                    <div class="col-12"></div>
                </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            login(obj) {
                // alert(document.getElementById(obj).innerHTML.valueOf());
                // document.getElementById(obj).innerHTML = "tset";
                this.$router.push({ path:'/index'})

            },
            register(obj){
                alert(document.getElementById(obj).innerHTML.valueOf())
            }
        }
    }


</script>

<style>
    #login_bg {
        width: 40%;
        background-color: antiquewhite;
        border: black solid 1px;
        border-radius: 20px;
    }

    .row div {
        height: auto;
        text-align: center;
        margin-top: 10px;
        border: black solid 1px;

    }
</style>