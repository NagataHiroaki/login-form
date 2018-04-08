import InputText from './InputText';

export default class InputPassword extends InputText {
  constructor(vo: any) {
    super(vo);
  }
  changeDisabled() {
    super.changeDisabled(true);
  }
}
