export class LoginPage {
    public userNameTxt: string;
    public passwordTxt: string;
    public loginBtn: string;
    public errorMsg: string;

    constructor () {
        this.userNameTxt = '[id=username]';
        this.passwordTxt = '[id=password]';
        this.loginBtn = '[id=submit-button]';
        this.errorMsg = '[data-test=error]';
    }
}
