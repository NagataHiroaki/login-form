import ControllerEvent from '../event/ControllerEvent';
import AppModel from '../model/AppModel';

export default class LoginForm {
  private _loginID: HTMLInputElement;
  private _loginPW: HTMLInputElement;
  private _buttonLogin: HTMLInputElement;
  private _radioAdmin: HTMLInputElement;

  constructor() {
    this._loginID = <HTMLInputElement>document.getElementById('id');
    this._loginPW = <HTMLInputElement>document.getElementById('password');
    this._buttonLogin = <HTMLInputElement>document.getElementById(
      'loginButton'
    );
    this._radioAdmin = <HTMLInputElement>document.getElementById('radioAdmin');

    this._loginID.addEventListener('keyup', e => {
      this.onKeyUpID(e);
    });
    this._loginPW.addEventListener('keyup', e => {
      this.onKeyUpPW(e);
    });
    this._radioAdmin.addEventListener('change', e => {
      this.onChangeLoginMode(e);
    });
  }

  update() {
    this._loginID.value = AppModel.instance.inputID;
    this._loginPW.value = AppModel.instance.inputPW;

    const _radioAdmin: HTMLInputElement = <HTMLInputElement>document.getElementById(
      'currentLoginRadio' + AppModel.instance.currentLogin
    );

    _radioAdmin.checked = true;

    //0…ゲスト,1…管理者
    if (AppModel.instance.currentLogin === 0) {
      this._loginID.disabled = true;
      this._loginPW.disabled = true;
    }

    if (AppModel.instance.currentLogin === 1) {
      this._loginID.disabled = false;
      this._loginPW.disabled = AppModel.instance.inputID ? false : true;

      this._buttonLogin.disabled =
        AppModel.instance.inputID && AppModel.instance.inputPW ? false : true;
    }
  }

  onChangeLoginMode(e) {
    let evt: ControllerEvent = new ControllerEvent(
      ControllerEvent.CHANGE_LOGIN
    );
    evt.index = Number(e.target.id.replace('currentLoginRadio', ''));
    AppModel.instance.controller.dispath(evt);
  }

  onKeyUpID(e) {
    let evt: ControllerEvent = new ControllerEvent(ControllerEvent.CHANGE_ID);
    evt.value = e.target.value;
    AppModel.instance.controller.dispath(evt);
  }

  onKeyUpPW(e) {
    let evt: ControllerEvent = new ControllerEvent(ControllerEvent.CHANGE_PW);
    evt.value = e.target.value;
    AppModel.instance.controller.dispath(evt);
  }
}
