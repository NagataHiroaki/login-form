export default class ControllerEvent {
  //protectedはどういうときに便利？
  public static readonly CHANGE_LOGIN: string = 'changeLogin';

  public type: string;

  public index: number;

  constructor(type: string) {
    this.type = type;
  }
}
