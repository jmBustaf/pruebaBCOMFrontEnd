import axios from 'axios';

export default class ServicioEvento
{
    url = "http://localhost:8080/eventos/";

    getAll() 
    {
        return axios.get(this.url + "listar");
    }

    buscar(id)
    {
        return axios.get(this.url + "buscar/" + id);
    }

    guarda(persona)
    {
        return axios.post(this.url + "guardar", persona)
    }

    editar()
    {
        return axios.put(this.url + "editar")
    }
}