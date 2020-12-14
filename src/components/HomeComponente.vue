<template>
  <div>
    <!-- Image and text -->
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="/docs/4.0/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        Grupo31
      </a>
      <form class="form-inline">
          <div class="form-group">
              <label for="">Cerrar Sesion</label>
              <input @click="logOut" type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
              <small id="helpId" class="text-muted">Help text</small>
          </div>
      </form>
    </nav>
    <div class="container">
      <p>nombre Usuario</p>
        {{user.nombre}}
      <p>email</p>
        {{user.email}}
    </div>
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
      getuserDetails(){
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
