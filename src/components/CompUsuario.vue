<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3 class="text-center my-4">Usuarios</h3>
                <table id="tabla" class="ml- w-100 table table-striped">
                    <thead class="text-center">
                        <tr>
                            <th scope="col" class="m-0 p-2">Id</th>
                            <th scope="col" class="m-0 p-2">Nombre</th>
                            <th scope="col" class="m-0 p-2">Fecha creacion</th>
                            <th scope="col" class="m-0 p-2">fecha edicion</th>
                            <th scope="col" class="m-0 p-2">-</th>
                            <th scope="col" class="m-0 p-2">-</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        <tr v-for="(usu, index) in usuarios" :key="index">
                            <th class="px-2 my-2">{{usu.id}}</th>
                            <td class="my-2">{{usu.nombre}}</td>
                            <td class="my-2">{{usu.fecha_creacion.split('T')[0]}}</td>
                            <td class="my-2">{{usu.fecha_edicion.split('T')[0]}}</td>
                            <td><button class="btn btn-outline-secondary my-1 py-0" v-on:click="editar(`${usu.id}`)">Editar</button></td>
                            <td><button class="btn btn-outline-secondary my-1 py-0" v-on:click="eliminar(`${usu.id}`)">Eliminar</button></td>
                        </tr>
                    </tbody>
                </table>
                <button v-on:click="guardar" class="btn btn-outline-secondary mt-4 w-100">Agregar Usuario</button>
            </div>
        </div>
    </div>
</template>

<script>

import ServicioUsuario from '../servicios/ServicioUsuario'

export default {
    name: 'compUsuario',
    data() {
        return {
            usuarios: [],
            usuario: {
                id: null,
                nombre: null,
                fecha_creacion: null,
                fecha_edicion: null
            },
            usuarioSelect: {
                id: null,
                nombre: null,
                fecha_creacion: null,
                fecha_edicion: null
            },            
        }
    },
    servicioUsuario : null,
    created() 
    {
        this.servicioUsuario = new ServicioUsuario();
    },
    mounted()
    {
        this.getAll();
    },
    methods:
    {
        getAll()
        {
            this.servicioUsuario.getAll().then(data => {
            this.usuarios = data.data;
        })
        },
        buscar(id)
        {
            this.servicioUsuario.buscar(id).then(data =>{
            this.usuario = data.data})
            this.usuarioSelect = this.usuario
        },
        editar(id)
        {          
            this.$router.push("/usuarios/editar", id);  
            /* this.buscar(id);
            console.log(this.usuarioSelect)
            let url = 'http://localhost:8080/usuarios/editar'
            fetch(url, {method: 'PUT', body: JSON.stringify(this.usuarioSelect), headers: {'Content-Type': 'application/json'},})
            /* .then(res => res.json()) 
            .then(
                this.usuario = {

                },
                this.getAll()
            )
            .catch(error => console.log(error))  */
        },
        eliminar(id)
        {
            let url = 'http://localhost:8080/usuarios/eliminar/' + id;
            fetch(url, {method: 'DELETE', headers: {'Content-Type': 'application/json'},})
            .then(res => res.json())
            .then(
                alert("El usuario ha sido eliminado con exito"),
                this.getAll()
            )
            .catch(error => console.log(error)) 
        },
        guardar()
        {
           this.$router.push("/usuarios/nuevo");
        }
    }
}
</script>

<style>

</style>