// import Button = loginForm.Button;
import Button from './loginForm/view/Button';
import InputText from './loginForm/view/InputText';
import RadioGroup from './loginForm/view/RadioGroup';
import AppModel from './loginForm/model/AppModel';
import AppController from './loginForm/controller/AppController';
import ControllerEvent from './loginForm/event/ControllerEvent';
import InputID from './loginForm/view/InputID';
import InputPassword from './loginForm/view/InputPassword';

export default class Main {
  public distHTML: string;
  public loginButton: Button;
  public inputID: InputID;
  public inputPassword: InputPassword;
  public currentLoginRadio: RadioGroup;

  constructor() {
    this.onLoad();
  }

  onLoad() {
    const loginButton = {
      label: 'ログイン',
      selectorID: 'loginButton'
    };

    const inputID = {
      label: 'id',
      selectorID: 'id'
    };

    const inputPassword = {
      label: 'password',
      selectorID: 'password'
    };

    const currentLoginRadio = [
      {
        label: 'ゲスト',
        selectorID: 'currentLoginRadio1',
        ID: 'guest',
        name: 'currentLoginRadio'
      },
      {
        label: '管理者',
        selectorID: 'currentLoginRadio2',
        ID: 'admin',
        name: 'currentLoginRadio'
      }
    ];

    this.loginButton = new Button(loginButton);
    this.inputID = new InputID(inputID);
    this.inputPassword = new InputPassword(inputPassword);
    this.currentLoginRadio = new RadioGroup(currentLoginRadio);

    this.distHTML = `
    <h1>ログインフォーム</h1>
    <div>
    ${this.currentLoginRadio.set()}
    </div>
    <div>
    ${this.inputID.set()}
    </div>
    <div>
    ${this.inputPassword.set()}
    </div>
    <div>
    ${this.loginButton.set()}
    </div>
    `;

    document.getElementById('app').innerHTML = this.distHTML;
    this.render();
  }

  render() {
    this.loginButton.render();
    this.inputID.render();
    this.inputPassword.render();
    this.currentLoginRadio.render();
    AppModel.instance.controller = new AppController();
    let evt: ControllerEvent = new ControllerEvent(
      ControllerEvent.CHANGE_LOGIN
    );
    evt.index = 0;
    AppModel.instance.controller.dispath(evt);
  }
}

const init = () => {
  window.removeEventListener('load', init);
  new Main();
};

window.addEventListener('load', init);
