<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="border rounded mt-4">
                    <h5 class="mt-4 text-center">Editar Usuario</h5>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ServicioUsuario from '../servicios/ServicioUsuario'

export default {
    name: 'compUsuarioEditar',
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

    },
    methods:
    {
        buscar(id)
        {
            this.servicioUsuario.buscar(id).then(data =>{
            this.usuario = data.data})
            this.usuarioSelect = this.usuario
        },
        editar(id)
        {          
            this.$router.push("/usuarios/editar");  
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
    }
}
</script>

<style>

</style>