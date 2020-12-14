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
export default {
  name: "HomeComponente",
  props: ["home"],
  data() {
    return {};
  },
  methods: {
      getUserDetails(){
        let user = localStorage.getItem('user');
        let token = localStorage.getItem('jwt');
        if(token){
          this.user = JSON.parse(user);
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
