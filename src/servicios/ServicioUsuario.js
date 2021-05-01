import axios from 'axios';

export default class ServicioUsuario
{
    url = "http://localhost:8080/usuarios/";

    getAll() 
    {
        return axios.get(this.url + "listar");
    }

    buscar(id)
    {
        return axios.get(this.url + "buscar/" + id);
    }

    guardar(persona)
    {
        return axios.post(this.url + "guardar", persona)
    }

    editar()
    {
        return axios.put(this.url + "editar")
    }
}