import IController from './IController';
import ControllerEvent from '../event/ControllerEvent';
import AppModel from '../model/AppModel';
import InputText from '../view/InputText';
import InputID from '../view/InputID';

export default class AppController implements IController {
  // public inputText: InputText;
  public inputID: InputID;

  constructor() {}

  public dispath(evt: ControllerEvent): void {
    //ここに分岐処理を書く
    switch (evt.type) {
      case ControllerEvent.CHANGE_LOGIN:
        this.changeLogin(evt.index);
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
    this.inputID.changeDisabled(true);
  }
}
