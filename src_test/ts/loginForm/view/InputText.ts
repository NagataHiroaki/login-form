import AppModel from '../model/AppModel';

export default class InputText {
  public distHTML: string;

  public label: string;

  public inputText: HTMLInputElement;

  public selectorID: string;

  public isDisabled: boolean;

  private _parentID: string;

  private _inputParent: Element;

  private _callNumber: Number;

  constructor(vo: any) {
    this.label = vo.label;
    this.selectorID = vo.selectorID;
    this._parentID = 'parentOf' + this.selectorID;
  }

  public set(): string {
    const wrapper: string = `
    <div id="${this._parentID}"></div>
    `;

    return wrapper;
  }

  public changeDisabled(res: boolean): void {
    this.isDisabled = res;
  }

  public render(): void {
    let disabled = '';
    if (this.isDisabled) {
      disabled = 'disabled';
    }

    this.distHTML = `
      ${this.label}
      <input type='text' id="${this.selectorID}" ${disabled}></input>
      `;
    this._inputParent = document.getElementById(this._parentID);

    this._inputParent.innerHTML = this.distHTML;

    this.inputText = <HTMLInputElement>document.getElementById(this.selectorID);

    if (!this._callNumber) {
      this.addEventListener();
      this._callNumber = 1;
    }
  }

  public getText(): any {
    return this.inputText.value;
  }

  public addEventListener(): void {
    this.inputText.addEventListener('keyup', () => {});
  }
}
