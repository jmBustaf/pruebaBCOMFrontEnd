<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-10 border rounded my-3">
                <h5 class="mt-3 text-center">Nuevo Evento</h5>
                <form class="mt-2 m-2">
                    <div class="form-group row">                            
                        <label for="inputCreador" class="text-center col-sm-2 col-form-label my-2">Id Creador</label>
                        <div class="col mr-3 my-2">
                            <select  class="w-100 mt-2" v-model="selected">
                                <option v-for="usu in usuarios" :key="usu" v-bind:value="evento.usuario">
                                    {{ usu.id }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">                            
                        <label for="inputNombre" class="text-center col-sm-2 col-form-label my-2">Nombre</label>
                        <div class="col mr-3 my-2">
                            <input type="text" class="form-control" id="inputNombre" v-model="evento.nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputFecha" class="text-center col-sm-2 col-form-label my-2">Fecha</label>
                        <div class="col mr-3 my-2">
                            <input type="date" class="form-control" id="inputFecha" v-model="evento.fecha">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputDescripcion" class="text-center col-sm-2 col-form-label my-2">Descripcion</label>
                        <div class="col mr-3 my-2">
                            <input type="text" class="form-control" id="inputDescripcion" v-model="evento.descripcion">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputFechaC" class="text-center col-sm-2 col-form-label my-2">Fecha Creacion</label>
                        <div class="col mr-3 my-2">
                            <input type="date" class="form-control" id="inputFechaC" v-model="evento.fecha_creacion">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputFechaE" class="text-center col-sm-2 col-form-label my-2">Fecha Edicion</label>
                        <div class="col mr-3 my-2">
                            <input type="date" class="form-control" id="inputFechaE" v-model="evento.fecha_edicion">
                        </div>
                    </div>
                    <button @click="guardar" class="btn btn-outline-secondary w-100 mb-3" type="button">guardar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import ServicioEvento from '../servicios/ServicioEvento'
import ServicioUsuario from '../servicios/ServicioUsuario'

export default {
    name: 'compEventoNuevo',
    data() {
        return {
            selected: '',
            eventos: [],
            evento: {
                id: null,
                usuario: null,
                nombre: null,
                fecha: null,
                descripcion: null,
                fecha_creacion: null,
                fecha_edicion: null
            },
            usuarios: [],
        }
    },
    servicioEvento : null,
    servicioUsuario : null,
    created() 
    {
        this.servicioEvento = new ServicioEvento()
        this.servicioUsuario = new ServicioUsuario()
    },
    mounted()
    {
        this.getAllUsuarios();
    },
    methods:
    {
        guardar()
        {
            let eventoRegistrado = this.evento;
            console.log(this.evento.usuario)
            let url = 'http://localhost:8080/eventos/guardar'
            fetch(url, {method: 'POST', body: JSON.stringify(this.evento), headers: {'Content-Type': 'application/json'},})
            /* .then(res => res.json()) */
            .then(data => {
                this.eventos = data;
                this.evento = {
                    
                };
                alert("El evento ''" + eventoRegistrado.nombre + "'' ha sido registrado con exito")
                /* this.redirigir() */
            })
            .catch(error => console.log(error))
        },
        redirigir()
        {
           this.$router.push("/eventos");
        },
        getAllUsuarios()
        {
            this.servicioUsuario.getAll().then(data => {
            this.usuarios = data.data;
            console.log(this.usuarios)            
        })
        },
    }
}
</script>

<style>

</style>