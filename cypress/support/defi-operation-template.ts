import {CreateOperationHandler} from './create-operation-handler'
import {ICustomFields} from './interfaces/IcustomFields'
export abstract class DefiOperationTemplate {
    public abstract factoryMethod(): CreateOperationHandler;

    public defiOperation (Obj: ICustomFields): void {
        const create = this.factoryMethod();
        create.operation(Obj);
    }

}
