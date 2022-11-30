import {usuario} from '../models/usuario';

export interface Session{
    active:boolean;
    user?:usuario
}