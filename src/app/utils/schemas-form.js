import * as yup from 'yup'

export const schemaLogin = yup.object().shape({
    email: yup.string().email('* Usuario debe ser un mail valido').required('* El email es requerido'),
    password: yup.string().required('* La contraseña es requerida').min(5,'* Debe contener al menos 6 caracteres')
})