import {useForm} from 'react-hook-form';
import {Form, Button} from 'react-bootstrap';
import {schema} from './schema';
import { yupResolver } from "@hookform/resolvers/yup";
import { usePost } from './../../../customHook/useHTTP';
import Loading from './../../Loading/Loading';
import './login.scss';

const Login = () => {

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const [post, info, fetching] = usePost();

    const submitLogin = (data) => {
        console.log(data);
        post('/', data);
    };


    return ( 
        <>
         <Form onSubmit={handleSubmit(submitLogin)}>
            <Form.Group  className='m-5'>
                <Form.Label >Ingrese su mail</Form.Label>
                <Form.Control  name='mail' placeholder='juanito@example' 
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
            <Button type="submit" variant='warning' className='m-5 boton'>Ingresar</Button>  
            {fetching&&<Loading/>}
        </Form>
        </>
     );
}
 
export default Login;