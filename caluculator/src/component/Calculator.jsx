import React, { useReducer } from 'react';
import './Calculator.css';

const initialState = {
  firstOperand: '',
  secondOperand: '',
  operator: null,
  result: null,
};

function calculatorReducer(state, action) {
  switch (action.type) {
    case 'SET_NUMBER':
      if (state.operator === null) {
        return { ...state, firstOperand: state.firstOperand + action.payload };
      } else {
        return { ...state, secondOperand: state.secondOperand + action.payload };
      }
    case 'SET_OPERATOR':
      return { ...state, operator: action.payload };
    case 'CALCULATE':
      let result;
      const first =parseFloat(state.firstOperand);
      const second = parseFloat(state.secondOperand);
      switch (state.operator) {
        case '+':
          result = first + second;
          break;
        case '-':
          result = first - second;
          break;
        case '*':
          result = first * second;
          break;
        case '/':
          result = first / second;
          break;
        default:
          return state;
      }
      return { ...state, result };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleNumberClick = (number) => {
    dispatch({ type: 'SET_NUMBER', payload: number });
  };

  const handleOperatorClick = (operator) => {
    dispatch({ type: 'SET_OPERATOR', payload: operator });
  };

  const handleCalculateClick = () => {
    dispatch({ type: 'CALCULATE' });
  };

  const handleClearClick = () => {
    dispatch({ type: 'CLEAR' });
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div className="display">
        <input
          type="text"
          readOnly
          value={state.result !== null ? state.result : state.secondOperand || state.firstOperand}
        />
      </div>
      <div className="buttons">
        <div className="row">
          <button className="btn" onClick={() => handleNumberClick('1')}>1</button>
          <button className="btn" onClick={() => handleNumberClick('2')}>2</button>
          <button className="btn" onClick={() => handleNumberClick('3')}>3</button>
          <button className="btn operator" onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleNumberClick('4')}>4</button>
          <button className="btn" onClick={() => handleNumberClick('5')}>5</button>
          <button className="btn" onClick={() => handleNumberClick('6')}>6</button>
          <button className="btn operator" onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleNumberClick('7')}>7</button>
          <button className="btn" onClick={() => handleNumberClick('8')}>8</button>
          <button className="btn" onClick={() => handleNumberClick('9')}>9</button>
          <button className="btn operator" onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleNumberClick('0')}>0</button>
          <button className="btn clear" onClick={handleClearClick}>C</button>
          <button className="btn equal" onClick={handleCalculateClick}>=</button>
          <button className="btn operator" onClick={() => handleOperatorClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
