import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import './register.scss';
import {schema} from './schema';
import { yupResolver } from "@hookform/resolvers/yup";
import { usePost } from './../../../customHook/useHTTP';
import Loading from './../../Loading/Loading';

const Register = () => {

  const [post, info, fetching] = usePost();

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
      });
    
      const submitRegister = (data) => {
        console.log(data);
        post('/', data);
      };
    
    return (
        <>
        <Form onSubmit={handleSubmit(submitRegister)}>
            <Form.Group className='m-5'>
                <Form.Label >Ingrese su nombre</Form.Label>
                <Form.Control name='user' placeholder='juanito' 
                 {...register("user", {
                    required: "Required",
                  })}/>
                 {errors.user && (
                <span className="text-danger">{errors.user.message}</span>
              )}
                <Form.Label>Ingrese su mail</Form.Label>
                <Form.Control name='mail' placeholder='name@example.com'
                 {...register("mail", {
                    required: "Required",
                  })}/>
                 {errors.mail && (
                <span className="text-danger">{errors.mail.message}</span>
              )}
                <Form.Label>Ingrese su contraseña</Form.Label>
                <Form.Control type='password' name='password' placeholder='*********' 
                 {...register("password", {
                    required: "Required",
                  })}/>
                 {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </Form.Group>
            <Button type="submit" variant='warning' className='boton m-5'>Registrarme</Button>  
            {fetching&&<Loading/>}
        </Form>
        <div className='register'>
            <p>¿Ya estas registrado?</p>
            <Link to='/login' className='m-3'>Iniciar sesion</Link>
            <Link to='/myExpense' className='m-3'> sesion</Link>
        </div>
        </>
     );
}
 
export default Register;