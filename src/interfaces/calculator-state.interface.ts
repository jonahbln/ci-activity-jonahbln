
export interface ICalculatorState {

  display(): void;
}

export class EnteringFirstOperand implements ICalculatorState {
  public display(): void {
    return;
  }
}

export class EnteringSecondOperand implements ICalculatorState {
  public display(): void {
    return;
  }
}

export class EnteringThirdOperand implements ICalculatorState {
  public display(): void {
    return;
  }
}
