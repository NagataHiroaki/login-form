import IController from '../controller/IController';
import ControllerEvent from '../event/ControllerEvent'; //読み込まないとエラーになる

export default class AppModel {
  private static _instance: AppModel;
  //現在のログイン情報
  public currentLogin: number;

  //Controllerのinstance
  public controller: IController;

  constructor(singleton: AppModelSingleton) {}

  public static get instance() {
    if (this._instance == null) {
      this._instance = new AppModel(new AppModelSingleton());
    }

    return this._instance;
  }
}

class AppModelSingleton {}
