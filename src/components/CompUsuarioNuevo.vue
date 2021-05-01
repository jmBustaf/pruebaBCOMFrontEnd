<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-10 border rounded my-5">
                <h5 class="mt-4 text-center">Nuevo Usuario</h5>
                <form class="mt-4 m-2">
                    <div class="form-group row">                            
                        <label for="inputNombre" class="text-center col-sm-2 col-form-label my-3">Nombre</label>
                        <div class="col mr-3 my-3">
                            <input type="text" class="form-control" id="inputNombre" v-model="usuario.nombre">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputFechaC" class="text-center col-sm-2 col-form-label my-3">Fecha Creacion</label>
                        <div class="col mr-3 my-3">
                            <input type="date" class="form-control" id="inputFechaC" v-model="usuario.fecha_creacion">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputFechaE" class="text-center col-sm-2 col-form-label my-3">Fecha Edicion</label>
                        <div class="col mr-3 my-3">
                            <input type="date" class="form-control" id="inputFechaE" v-model="usuario.fecha_edicion">
                        </div>
                    </div>
                    <button @click="guardar" class="btn btn-outline-secondary w-100 mb-3" type="button">guardar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import ServicioUsuario from '../servicios/ServicioUsuario'

export default {
    name: 'compUsuarioNuevo',
    data() {
        return {
            usuarios: [],
            usuario: {
                id: null,
                nombre: null,
                fecha_creacion: null,
                fecha_edicion: null
            },
        }
    },
    servicioPersona : null,
    created() 
    {
        this.servicioUsuario = new ServicioUsuario();
    },
    methods:
    {
        guardar()
        {
            let usuarioRegistrado = this.usuario;
            let url = 'http://localhost:8080/usuarios/guardar'
            fetch(url, {method: 'POST', body: JSON.stringify(this.usuario), headers: {'Content-Type': 'application/json'},})
            /* .then(res => res.json()) */
            .then(data => {
                this.usuarios = data;
                this.usuario = {
                    
                };
                alert("El usuario ''" + usuarioRegistrado.nombre + "'' ha sido registrado con exito"),
                this.redirigir()
            })
            .catch(error => console.log(error))
        },
        redirigir()
        {
           this.$router.push("/usuarios");
        }
    }
}
</script>

<style>

</style>