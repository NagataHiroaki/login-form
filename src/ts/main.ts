// import Button = loginForm.Button;
import AppModel from './loginForm/model/AppModel';
import AppController from './loginForm/controller/AppController';
import ControllerEvent from './loginForm/event/ControllerEvent';

class Main {
  constructor() {
    AppModel.instance.controller = new AppController();
    let evt: ControllerEvent = new ControllerEvent(
      ControllerEvent.CHANGE_LOGIN
    );
    evt.index = 0;
    AppModel.instance.controller.dispath(evt);
    this.onLoad();
  }

  onLoad() {}
}

const init = () => {
  window.removeEventListener('load', init);
  new Main();
};

window.addEventListener('load', init);
