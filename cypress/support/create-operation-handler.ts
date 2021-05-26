import {ICustomFields} from './interfaces/IcustomFields'
export interface CreateOperationHandler {
    operation(Obj:ICustomFields): void;
}
