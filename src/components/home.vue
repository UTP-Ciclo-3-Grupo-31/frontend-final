<template>
  <div>
    <div class="container-fluid">
      <div class="row mt-md-5 mt-sm-5 mt-xs-5">
        <div
          v-for="(art, indice) of datos"
          :key="art.id"
          class="col-lg-6 col-xs-12 border"
        >
          <div v-if="indice <= 3">
            <div class="d-flex justify-content-center align-items-center">
              <div class="p-3">
                <svg
                  width="12em"
                  height="12em"
                  viewBox="0 0 16 16"
                  class="bi bi-alarm-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
                  />
                </svg>
              </div>

              <div class="p-2">
                <p>
                  {{ art.nombre }}
                </p>
              </div>
            </div>
            <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
              <button type="button" class="btn btn-outline-info">Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center mb-5">
        <div v-for="miembro in team" :key="miembro.codigo" class="col mt-5">
          <div class="card text-white bg-dark">
            <div class="d-flex justify-content-center p-2">
              <img :src="miembro.image" />
            </div>
            <div class="card-body">
                <h3 class="card-title">{{miembro.nombre}}</h3>
                <p class="card-text">{{miembro.descripcion}}</p>
                <p class="card-text"><span>Rol: </span>{{miembro.rol}}</p>
                <p class="card-text"><span>Codigo: </span>{{miembro.codigo}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      datos: null,
      team: [
        {
          codigo: 1,
          nombre: "Sergio Vargas",
          descripcion:
            "Programador,vive en Bogotá, le gusta Jugar con electrónica, volar drones y le apasionan las motos",
          rol: "Desarrollador backend",
          image: "./img/team/Avatar1.png",
        },
        {
          codigo: 2,
          nombre: "Diego Lipez",
          descripcion:
            "Ingeniero electricista de la Universidad Industrial de Santander, nacido en Bucaramanga actualmente vive en Bogotá, le gustan las caminatas por el campo y jugar minecraft con su hija.",
          rol: "Desarrollador backend",
          image: "./img/team/Avatar2.png",
        },
        {
          codigo: 5,
          nombre: "Engie Lorena Hernandez",
          descripcion:
            "Bogotana, tecnologa en gastronomia de la Universitaria Agustiniana, creativa, vive en busqueda constante de conocimiento, casada tiene una hija, apasionada por el arte, vive en la ciudad de Bogota y le gusta explorar rincones gastronomicos poco conocidos de esta ciudad.",
          rol: "Desarrollador frontend",
          image: "./img/team/Avatar5.png",
        },
        {
          codigo: 3,
          nombre: "Jose del Valle",
          descripcion:
            "Ingeniero de Control de la Universidad Nacional de Colombia, nacido en Itagüí vive actualmente en Medellín le gusta jugar vídeo juegos.",
          rol: "Desarrollador backend",
          image: "./img/team/Avatar4.png",
        },
        {
          codigo: 4,
          nombre: "Esteban Durán",
          descripcion:
            "Ingeniero Químico de la Universidad de Antioquia, vive en Medellín, le gusta hacer deporte, leer y el cine.",
          rol: "Desarrollador backend",
          image: "./img/team/Avatar3.png",
        },
      ],
    };
  },
  mounted() {
    axios.get("articulo/list").then((response) => (this.datos = response.data));
  },
};
</script>