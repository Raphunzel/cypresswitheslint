export interface ICustomFields {
    Group: string,
    Name: string,
    Active: boolean,
    Mandatory: boolean,
    Sensitive: boolean,
    CoApplicantOnly: boolean,
    Order: number,
    EntryType: string,
    ValidationType: string,
    Length: number,
    Dropdown: string,
    Formula: string,
    XPath: string,
    Prepopulate: boolean,
    PrepopulateData: IPrepopulateData
}

export interface IPrepopulateData {
    PrepoulateFromValue: boolean,
    Value: number,
    PrepoulateFromData: boolean,
    Group: string,
    Field: string
}
