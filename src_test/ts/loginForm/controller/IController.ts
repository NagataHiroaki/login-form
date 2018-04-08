import ControllerEvent from '../event/ControllerEvent';

export default interface IController {
  dispath(evt: ControllerEvent): void;
};
