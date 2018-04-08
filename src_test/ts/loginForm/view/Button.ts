//namespaceを使うとMain.ts更新時にエラーが出る
//loginForm is not defined

// namespace loginForm.view {
//   export class Button {
//     public distHTML: string;

//     constructor() {}

//     public render(): void {
//       this.distHTML = `
//     <button>ログイン</button>
//     `;
//       document.write(this.distHTML);
//     }
//   }
// }

export default class Button {
  public distHTML: string;

  public label: string;

  public button: Element;

  public selectorID: string;

  private _callNumber: Number;

  constructor(vo: any) {
    this.label = vo.label;
    this.selectorID = vo.selectorID;
  }

  public set(): string {
    const wrapper: string = `
    <div id="${this.selectorID}"></div>
    `;

    return wrapper;
  }

  public render(): void {
    this.distHTML = `
    <button>${this.label}</button>
    `;
    this.button = document.getElementById(this.selectorID);

    this.button.innerHTML = this.distHTML;

    if (!this._callNumber) {
      this.addEventListener();
      this._callNumber = 1;
    }
  }

  public addEventListener(): void {
    this.button.addEventListener('click', () => {
      this.render();
    });
  }
}
