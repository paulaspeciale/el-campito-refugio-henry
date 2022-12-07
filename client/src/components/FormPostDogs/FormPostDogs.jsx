import React from "react";
import { useForm } from "react-hook-form"
import useDispatch from "react-redux"
import { postDogs } from "../../redux/actions/index"

//para que funcione el hook hacer npm intall react-hook-form

const FormPostDogs = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState:{ errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        dispatch(postDogs(data))
    }

    return(
        <div>
            <h2>Agregar perro</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register('name', {required: true})}/>
                    {errors.name?.type === 'required' && <p>El nombre es requerido</p>}
                </div>
                
                <div>
                    <label>Genero</label>
                    <select {...register('gender', {required: true})}>
                        <option value="macho">Macho</option>
                        <option value="hembra">Hembra</option>
                    </select>
                    {errors.gender?.type === 'required' && <p>El genero es requerido</p>}
                </div>
                
                <div>
                    <label>Edad</label>
                    <select {...register('age', {required: true})}>
                        <option value="cachorro">Cachorro</option>
                        <option value="adulto">Adulto</option>
                        <option value="viejito">Viejito</option>
                        {errors.age?.type === 'required' && <p>Seleccionar la edad</p>}
                    </select>
                </div>
                
                <div>
                    <label>Tamaño</label>
                    <select {...register('size', {required: true})}>
                        <option value="chico">Chico</option>
                        <option value="mediano">Mediano</option>
                        <option value="grande">Grande</option>
                    </select>
                    {errors.size?.type === 'required' && <p>El tamaño es requerido</p>}
                </div>
                
                <div>
                    <label>Raza</label>
                    <input type="text" {...register('race', {required: true})}/>
                    {errors.race?.type === 'required' && <p>La raza es requerida</p>}
                </div>
                
                <div>
                    <label>Video</label>
                    <input type="text" {...register('video')}/>
                </div>
                
                <div>
                    <label>Imagen</label>
                    <input type="text" {...register('imagen')}/>
                </div>

                <div>
                    <label>Referencias</label>
                    <input type="text" {...register('references')}/>
                </div>

                <input type="submit" value="send"/>
            </form>
        </div> 
    )
}

export default FormPostDogs