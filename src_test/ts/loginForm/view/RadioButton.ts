export default class RadioButton {
  public distHTML: string;

  public label: string;

  public name: string;

  public ID: string;

  public inputRadio: HTMLInputElement;

  public selectorID: string;

  private _parentID: string;

  private _inputParent: Element;

  private _callNumber: Number;

  constructor(vo: any) {
    this.label = vo.label;
    this.ID = vo.ID;
    this.name = vo.name;
    this.selectorID = vo.selectorID;
    this._parentID = 'parentOf' + this.selectorID;
  }

  public set(): string {
    const wrapper: string = `
    <div id="${this._parentID}"></div>
    `;

    return wrapper;
  }

  public render(): void {
    this.distHTML = `
    <label for="${this.selectorID}">${this.label}</label>
    <input type='radio' id="${this.selectorID}" name="${this.name}"></input>
    `;
    this._inputParent = document.getElementById(this._parentID);

    this._inputParent.innerHTML = this.distHTML;

    this.inputRadio = <HTMLInputElement>document.getElementById(
      this.selectorID
    );

    if (!this._callNumber) {
      this.addEventListener();
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
