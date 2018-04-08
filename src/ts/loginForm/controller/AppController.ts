import IController from './IController';
import ControllerEvent from '../event/ControllerEvent';
import AppModel from '../model/AppModel';
import LoginForm from '../view/LoginForm';

export default class AppController implements IController {
  // public inputText: InputText;
  public loginFormView: LoginForm;

  constructor() {
    this.loginFormView = new LoginForm();
  }

  public dispath(evt: ControllerEvent): void {
    //ここに分岐処理を書く
    switch (evt.type) {
      case ControllerEvent.CHANGE_LOGIN:
        this.changeLogin(evt.index);
        break;
      case ControllerEvent.CHANGE_ID:
        this.changeID(evt.value);
        break;
      case ControllerEvent.CHANGE_PW:
        this.changePW(evt.value);
        break;
      default:
        break;
    }
  }

  /*
   * ログイン情報を管理
   */
  private changeLogin(index: number) {
    AppModel.instance.currentLogin = index;
    this.loginFormView.update();
  }

  private changeID(value) {
    AppModel.instance.inputID = value;
    this.loginFormView.update();
  }

  private changePW(value) {
    AppModel.instance.inputPW = value;
    this.loginFormView.update();
  }
}
