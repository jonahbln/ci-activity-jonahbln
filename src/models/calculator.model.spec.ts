
import { CalculatorModel } from './calculator.model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ActionKeys } from '../enums/action-keys.enum';

describe('CalculatorModel', (): void => {

  let calculator: ICalculatorModel;

  beforeEach((): void => {
    calculator = new CalculatorModel();
  });

  // test
  it('should contain a CalculatorModel class that implements ICalculatorModel', (): void => {


    expect(calculator).toBeDefined();

  });

  it('should have an empty display on init', (): void => {

    // Act
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('');
  });

  it('should display `1` when the `1` key is pressed', (): void => {

    // Act
    calculator.pressNumericKey(NumericKeys.ONE);
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('1');

  });

  it('should display `2` when the `2` key is pressed', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('2');

  });

  it('should display `98` when the `9` key is pressed followed by the `8` key', (): void => {

    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressNumericKey(NumericKeys.EIGHT);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('98');

  });

  it('should display `` when the `+` key is pressed', (): void => {

    calculator.pressOperatorKey(OperatorKeys.PLUS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('');

  });

  it('should display `` when the `-` key is pressed', (): void => {

    calculator.pressOperatorKey(OperatorKeys.MINUS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('');

  });

  it('should display `3` when the `2` key is pressed followed by the `+` key followed by the `3`` key', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.THREE);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('3');

  });

  it('should display `4` when the `2` key is pressed followed by `+` followed by `3`` followed by `-` followed by `4`', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.FOUR);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('4');

  });

  it('should display `3` when the `3` key is pressed followed by `=`', (): void => {

    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('3');

  });

  it('should display `5` when the `2` key is pressed followed by `+` followed by `3`` and then `=`', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('5');

  });

  it('should display `-1` when the `2` key is pressed followed by `-` followed by `3`` and then `=`', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-1');

  });

  it('should display `3` when the `2` key is pressed followed by `-` followed by `3` and then `=` then `+` then `4` then `=`', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.FOUR);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('3');

  });

  it('should display `4` when the `2` key is pressed followed by `+` followed by `3`` and then `-` then `1` then `=`', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('4');

  });

  it('should display `` when the `2` key is pressed followed by `+` followed by the clear action', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressActionKey(ActionKeys.CLEAR);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('');

  });

  it('should display `5.2` when the `5` key is pressed followed by the dot action and then the `2`', (): void => {

    calculator.pressNumericKey(NumericKeys.FIVE);
    calculator.pressActionKey(ActionKeys.DOT);
    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('5.2');

  });

  it('should display `6.2` when the `5` key is pressed followed by the dot action and then the `2` then PLUS and EQUALS', (): void => {

    calculator.pressNumericKey(NumericKeys.FIVE);
    calculator.pressActionKey(ActionKeys.DOT);
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('6.2');

  });

  it('should display `6.23` when the `5` key is followed by dot and then the `2` then `3` then PLUS then `1` and EQUALS', (): void => {

    calculator.pressNumericKey(NumericKeys.FIVE);
    calculator.pressActionKey(ActionKeys.DOT);
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('6.23');

  });

  it('should display `14` when equals is clicked on `2 + 3 * 4`', (): void => {
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressOperatorKey(OperatorKeys.MULT);
    calculator.pressNumericKey(NumericKeys.FOUR);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();
    expect(displayValue).toEqual('14');
  });
});
