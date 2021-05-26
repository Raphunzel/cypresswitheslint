export class CustomFieldsPage {
    public configItemLink:string;
    public createCustomFieldLink:string;
    public groupDropDown:string;
    public searchTxt:string;
    public resultsTable:string;
    public newBtn:string;
    public newDialogBox:string;
    public closeBtn:string;
    public backBtn:string;
    public nameTxt: string;
    public activeCheckBox: string;
    public mandatoryCheckBox: string;
    public sensitiveCheckBox: string;
    public coApplicantCheckBox: string;
    public orderTxt: string;
    constructor () {
        this.configItemLink = 'a[href="/Home/ConfigurationNormal"]';
        this.createCustomFieldLink = 'a[href="/Admin/DataElement"]';
        this.groupDropDown = 'select[id="groupId"]';
        this.searchTxt = 'input[id="txtSearch"]';
        this.resultsTable = 'table#grid.ui-jqgrid-btable';
        this.newBtn = '#btnNew';
        this.newDialogBox = 'div[id="editDiv"]';
        this.closeBtn = 'input[id="btnClose"]';
        this.backBtn = 'a[id="back"]';
        this.nameTxt = '#name';
        this.activeCheckBox = '#isActive';
        this.mandatoryCheckBox = '#isRequired';
        this.sensitiveCheckBox = '#isSensitive';
        this.coApplicantCheckBox = '#isCoApplicantField';
        this.orderTxt = '#sortOrder';
    }

}
