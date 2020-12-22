<template>
  <div>
    <div v-if="estado">
      <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <a class="navbar-brand" href="#home">
          <img
            src="../public/img/logo1.jpeg"
            width="200"
            height="80"
            class="d-inline-block align-center"
            alt=" "
            loading="lazy "
          />
          "Los datos al servicio de su empresa"
        </a>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav "
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" v-on:click="ingresar" href="# "
                >Backend <span class="sr-only">(current)</span></a
              >
            </li>
          </ul>
        </div>
      </nav>
      <div class="container" >
        <div class="row">
          <div
            id="carouselExampleCaptions"
            class="carousel slide col-12"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner">
              <div class="carousel-item active bg-light">
                <img
                  class="rounded mx-auto d-block"
                  src="../public\img\servicios\srv_auditoria_Grande.jpg"
                  alt="Responsive image"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="text-white">Auditoría de la producción</h5>
                  <p class="text-white">
                    servicios de auditoría de producción enfocado a todo tipo de
                    negocios
                  </p>
                </div>
              </div>

              <div class="carousel-item bg-light">
                <img
                  class="rounded mx-auto d-block"
                  src="../public\img\servicios\srv_trabajos.jpg"
                  alt="Responsive image"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="text-white">
                    Asesoramiento en reclutamiento de personal
                  </h5>
                  <p class="text-white">
                    servicio de asesoramiento en reclutamiento de personal
                  </p>
                </div>
              </div>

              <div class="carousel-item bg-light">
                <img
                  class="rounded mx-auto d-block"
                  src="../public\img\servicios\srv_inventario.jpg"
                  alt="Responsive image"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="text-white">Servicio de control de inventarios</h5>
                  <p class="text-white">
                    servicio de control de inventario totalmente automatizado
                  </p>
                </div>
              </div>

              <a
                class="carousel-control-prev bg-dark"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next bg-dark"
                href=" #carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <home />
      </div>
      <footer-component></footer-component>
    </div>
    <div v-else>
      <v-app id="app">
        <v-navigation-drawer
          v-model="drawer"
          :clipped="$vuetify.breakpoint.lgAndUp"
          app
        >
          <v-list dense>
            <template>
              <v-list-item @click="home">
                <v-list-item-action>
                  <v-icon>home</v-icon>
                </v-list-item-action>
                <v-list-item-title> Inicio </v-list-item-title>
              </v-list-item>
            </template>
            <template v-if="logueado">
              <v-list-group>
                <v-list-item slot="activator">
                  <v-list-item-content>
                    <v-list-item-title> Modificar Elementos </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'categoria' }">
                  <v-list-item-action>
                    <v-icon>table_chart</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title> Categorías </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'articulo' }">
                  <v-list-item-action>
                    <v-icon>table_chart</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title> Artículos </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </template>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar
          :clipped-left="$vuetify.breakpoint.lgAndUp"
          app
          color="silver darken-3"
          dark
        >
          <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <span class="hidden-sm-and-down">Sistema</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="salir()" icon v-if="logueado">
            <v-icon>logout</v-icon> Salir
          </v-btn>
          <v-btn :to="{ name: 'login' }" icon v-else>
            <v-icon>apps</v-icon> Login
          </v-btn>
        </v-app-bar>
        <div style="margin-top:10%;margin-left:20%;margin-bottom:-20%;" class="row">
         <h3>Puedes seleccionar articulos o categorias a editar del menu izquierdo</h3>
        </div>
        <v-content>
          <v-container fluid fill-height>
            <v-slide-y-transition mode="out-in">
              <router-view />
            </v-slide-y-transition>
          </v-container>
        </v-content>
        <v-footer height="auto">
          <v-layout justify-center>
            <v-flex text-xs-center>
              <v-card flat tile color="primary" class="white--text">
                <v-card-text class="white--text pt-0">
                  Proyecto final &copy;2020
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-app>
    </div>
  </div>
</template>
<style >
  .container{
    max-width :100% !important;
    background-color:azure;
  }
  .carousel-caption{
    background-color:rgba(192, 192, 192, 0.677);
    margin-left: 15%;
    width: 40%;
  }

</style>
<script>
import home from "./components/home.vue";
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components: { home,
    FooterComponent },
  name: "App",

  data() {
    return {
      drawer: false,
      estado: 1,
    };
  },

  computed: {
    logueado() {
      return this.$store.state.usuario;
    },
  },
  created() {
    this.$store.dispatch("autoLogin");
  },
  methods: {
    salir() {
      this.$store.dispatch("salir");
      this.estado = 1;
    },

    ingresar() {
      this.estado = 0;
    },

    home() {
      this.estado = 1;
    },
  },
};
</script>
