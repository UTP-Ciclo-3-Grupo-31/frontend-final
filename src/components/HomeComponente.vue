<template>
  <div class="container">
    <div >
      <h3>Datos del usuario:</h3>
      <p>
        nombre Usuario: {{user.nombre}} <br> 
        email: {{user.email}} 
      </p>
               
    </div>
    
    <a class="btn btn-primary" @click="logOut">logOut</a>
  </div>
</template>


<script>
import VueJwtDecode from 'vue-jwt-decode'
export default {
  name: "HomeComponente",
  props: ["home"],
  data() {
    return {};
  },
  methods: {
      getUserDetails(){
        //let token = localStorage.getItem('jwt');
        let token = localStorage.getItem('jwt');
        let user = VueJwtDecode.decode(token);
        console.log(user)
        if(token){
          this.user = this.user;
        }
      },
      logOut(){
          localStorage.removeItem('jwt');
          this.$router.push('/');
      }
  },
  created() {
    this.getUserDetails();
  },
};
</script>
