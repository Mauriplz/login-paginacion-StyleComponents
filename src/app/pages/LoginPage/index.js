import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../../utils/schemas-form';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailPassword, startLoginGoogleProvider } from '../../actions/auth';

//COMPONENTS
import LoginContainer from '../../components/LoginStyleComponent/LoginContainer';
import { ColumnGrid, Row } from '../../components/Responsive/ResponsiveStylesComponents';
import FormRH from '../../components/Forms/Form';
import ImgLoginLiga from '../../components/LoginStyleComponent/ImgLoginLiga';
import ErrorForm from '../../components/Forms/ErrorForm';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import FabGoogle from '../../components/LoginStyleComponent/FabGoogle';
import FormControl from '../../components/Forms/FormControl';

const LoginPage = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);
    //Inicializacion de react-hook-from
    const { register, handleSubmit, formState: { errors },reset } = useForm({
        resolver: yupResolver(schemaLogin),
        defaultValues: {
            email: '',
            password: ''
        }
    });
    //Login Email y Password
    const handleLogin = (data) => {
        dispatch(startLoginEmailPassword(data));
    }
    //Login con Google Provider
    const handleLoginGoogle = () => {
        //Resetamos los datos del formulario
        reset({
            email:'',
            password:''
        })
        dispatch(startLoginGoogleProvider());
    }

    return (
        <LoginContainer >
            <Row>
                <ColumnGrid xs={12} sm={7} md={5} lg={4}>

                    <FormRH onSubmit={handleSubmit(handleLogin)}>
                        <ImgLoginLiga />
                        <FormControl
                            label="Usuario"
                            disabled={loading}
                            type="text"
                            {...register('email')}
                            error={(errors.email?.message) ? true : false}
                        />
                        {(errors.email?.message) && <ErrorForm>{`${errors.email.message}`}</ErrorForm>}
                        <FormControl
                            label="Contraseña"
                            type="password"
                            disabled={loading}
                            {...register('password')}
                            error={(errors.password?.message) ? true : false}
                        />
                        {(errors.password?.message) && <ErrorForm>{`${errors.password.message}`}</ErrorForm>}
                        <ButtonPrimary primary>INICIAR SESIÓN</ButtonPrimary>
                        <FabGoogle onClick={handleLoginGoogle} />
                    </FormRH>
                </ColumnGrid>
            </Row>
        </LoginContainer>
    )
}

export default LoginPage;
