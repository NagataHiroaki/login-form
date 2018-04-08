export default class ControllerEvent {
  //protectedはどういうときに便利？
  public static readonly CHANGE_LOGIN: string = 'changeLogin';
  public static readonly CHANGE_ID: string = 'changeID';
  public static readonly CHANGE_PW: string = 'changePW';

  public type: string;

  public index: number;

  public value: string;

  constructor(type: string) {
    this.type = type;
  }
}
