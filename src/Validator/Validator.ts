import { IInfo, IValidator } from './ValidatorTypes';

class Validator implements IValidator {
  protected info: IInfo;

  constructor() {
    this.info = { isValid: true, errorMessages: [], type: null };
  }
  protected addError(message: string): this {
    this.info.isValid = false;
    this.info.errorMessages.push(message);
    return this;
  }

  getErrors(): string[] | undefined {
    if (this.info.errorMessages.length === 0) {
      return undefined;
    }
    return this.info.errorMessages;
  }
  getInfo(): IInfo {
    return this.info;
  }
}

export default Validator;
