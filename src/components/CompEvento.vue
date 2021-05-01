<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3 class="text-center my-4">Eventos</h3>
                <table id="tabla" class="ml- w-100 table table-striped">
                    <thead class="text-center">
                        <tr>
                            <th scope="col" class="m-0 p-2">Id</th>
                            <th scope="col" class="m-0 p-2">Id Creador</th>
                            <th scope="col" class="m-0 p-2">Nombre</th>
                            <th scope="col" class="m-0 p-2">Fecha</th>
                            <th scope="col" class="m-0 p-2">Descripcion</th>
                            <th scope="col" class="m-0 p-2">Fecha Creacion</th>
                            <th scope="col" class="m-0 p-2">fecha Edicion</th>
                            <th scope="col" class="m-0 p-2">-</th>
                            <th scope="col" class="m-0 p-2">-</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        <tr v-for="(eve, index) in eventos" :key="index">
                            <th class="px-2 my-2">{{eve.id}}</th>
                            <th class="px-2 my-2">{{}}</th>
                            <td class="my-2">{{eve.nombre}}</td>
                            <td class="my-2">{{eve.fecha.split('T')[0]}}</td>
                            <td class="my-2">{{eve.descripcion}}</td>
                            <td class="my-2">{{eve.fecha_creacion.split('T')[0]}}</td>
                            <td class="my-2">{{eve.fecha_edicion.split('T')[0]}}</td>
                            <td><button class="btn btn-outline-secondary my-1 py-0" v-on:click="editar(`${eve.id}`)">Editar</button></td>
                            <td><button class="btn btn-outline-secondary my-1 py-0" v-on:click="eliminar(`${eve.id}`)">Eliminar</button></td>
                        </tr>
                    </tbody>
                </table>
                <button v-on:click="redirigir" class="btn btn-outline-secondary mt-4 w-100">Agregar Evento</button>
                <!-- <div class="border rounded mt-4">
                    <h5 class="mt-4 text-center">Nueva Usuario</h5>
                    <form class="mt-4 m-2">
                        <div class="form-group row">                            
                            <label for="inputNombre" class="text-center col-sm-2 col-form-label">Nombre</label>
                            <div class="col mr-4">
                                <input type="text" class="form-control" id="inputNombre" v-model="usuario.nombre">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputFechaC" class="text-center col-sm-2 col-form-label">Fecha Creacion</label>
                            <div class="col mr-4">
                                <input type="date" class="form-control" id="inputFechaC" v-model="usuario.fecha_creacion">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputFechaE" class="text-center col-sm-2 col-form-label">Fecha Edicion</label>
                            <div class="col mr-4">
                                <input type="date" class="form-control" id="inputFechaE" v-model="usuario.fecha_edicion">
                            </div>
                        </div>
                        <button @click="guardar" class="btn btn-outline-secondary w-100" type="button">guardar</button>
                    </form>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>

import ServicioEvento from '../servicios/ServicioEvento'

export default {
    name: 'compEvento',
    data() {
        return {
            eventos: [],
            evento: {
                id: null,
                idCreador: null,
                nombre: null,
                fecha: null,
                descripcion: null,
                fecha_creacion: null,
                fecha_edicion: null
            },
            eventoSelect: {
                id: null,
                idCreador: null,
                nombre: null,
                fecha: null,
                descripcion: null,
                fecha_creacion: null,
                fecha_edicion: null
            },            
        }
    },
    ServicioEvento : null,
    created() 
    {
        this.servicioEvento = new ServicioEvento();
    },
    mounted()
    {
        this.getAll();
    },
    methods:
    {
        getAll()
        {
            this.servicioEvento.getAll().then(data => {
            this.eventos = data.data;
        })
        },
        buscar(id)
        {
            this.servicioEvento.buscar(id).then(data =>{
            this.evento = data.data})
            this.eventoSelect = this.evento
        },
        editar(id)
        {            
            this.buscar(id);
            console.log(this.eventoSelect)
            let url = 'http://localhost:8080/eventos/editar'
            fetch(url, {method: 'PUT', body: JSON.stringify(this.eventoSelect), headers: {'Content-Type': 'application/json'},})
            /* .then(res => res.json()) */
            .then(
                this.evento = {

                },
                this.getAll()
            )
            .catch(error => console.log(error)) 
        },
        eliminar(id)
        {
            let url = 'http://localhost:8080/eventos/eliminar/' + id;
            fetch(url, {method: 'DELETE', headers: {'Content-Type': 'application/json'},})
            .then(res => res.json())
            .then(
                alert("El evento ha sido eliminado con exito"),
                this.getAll()
            )
            .catch(error => console.log(error)) 
        },
        redirigir()
        {
           this.$router.push("/eventos/nuevo");
        }
    }
}
</script>

<style>

</style>