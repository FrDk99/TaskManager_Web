import { Auth } from "../interfaces/Auth";

export const AuthValidate = (auth : Auth) : boolean => {

    if( !auth.email ) {

        return false;

    }

    if( !auth.password ){

        return false;

    }

    //Validar la longitud de los campos

    return true;


}