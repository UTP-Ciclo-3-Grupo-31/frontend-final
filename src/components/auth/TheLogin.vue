<template>
<div class="container">
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Correo</label>
      <input
        v-model="login.email"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Clave</label>
      <input v-model="login.password" type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <button 
    @click.prevent="loginUser"
    type="submit" class="btn btn-primary">Submit</button>
  </form>
  <pre>
    {{login}}
  </pre>
  </div>
</template>

<script>
import swal from 'sweetalert';
export default {
    name: 'TheLogin',
    data() {
        return {
            login:{
              email:'ejemplo@gmail.com',
              password:'micontraseña'
            }
        }
    },
    methods: {
      async loginUser(){
        try {
          let response = await this.$http.post('/api/auth/signin', this.login)
          console.log(response)

          let token = response.data.accessToken;
          let user = response.data.user;

          localStorage.setItem('jwt',token);
          localStorage.setItem('user', JSON.stringify(user));

          console.log("Usuario loggeado OK"+token)
          if(token){
            console.log("Token OK")
            swal('Exito!','Login Correcto!!!', 'success');
            this.$router.push('/home');
          }

        } catch (error) {
            swal('Oops!',"Error al iniciar!!!"+error, 'error');
            console.log(error.response);
        }
      }
    },
};
</script>