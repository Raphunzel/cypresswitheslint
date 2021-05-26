import { CreateCustomFieldsUtilities } from '../utilities/create-custom-fields-utilities';
import { DefiOperationTemplate } from '../defi-operation-template';
import { CreateOperationHandler } from '../create-operation-handler'

export class CustomFieldsCreator extends DefiOperationTemplate {
    public factoryMethod(): CreateOperationHandler {
        return new CreateCustomFieldsUtilities();
    }
}
