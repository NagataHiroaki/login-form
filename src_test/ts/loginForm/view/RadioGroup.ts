import RadioButton from './RadioButton';

export default class RadioGroup {
  public distHTML: string;

  public buttonList: any;

  public inputRadio: HTMLInputElement;

  public selectorID: string;

  private _parentID: string;

  private _inputParent: Element;

  private _callNumber: Number;

  constructor(vo: any) {
    // this.label = vo.label;
    // this.selectorID = vo.selectorID;
    // this._parentID = 'parentOf' + this.selectorID;
    this.buttonList = [];
    for (let i = 0; i < vo.length; i++) {
      this.buttonList.push(new RadioButton(vo[i]));
    }
  }

  public set(): string {
    let res = '';
    for (let i = 0; i < this.buttonList.length; i++) {
      res += this.buttonList[i].set();
    }

    const wrapper: string = `
    <div class="radioGroup">
    ${res}
    </div>
    `;

    return wrapper;
  }

  public render(): void {
    for (let i = 0; i < this.buttonList.length; i++) {
      this.buttonList[i].render();
    }
    if (!this._callNumber) {
      // this.addEventListener();
      this._callNumber = 1;
    }
  }

  public getText(): any {
    return this.inputRadio.value;
  }

  public addEventListener(): void {
    this.inputRadio.addEventListener('keyup', () => {});
  }
}
