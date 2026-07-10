import { combineReducers, createStore } from 'redux';

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case 'account/withdraw':
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case 'customer/updateName':
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

// Action Creators
function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}

function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}

function requestLoan(amount, reason) {
  return {
    type: 'account/requestLoan',
    payload: {
      amount: amount,
      purpose: reason,
    },
  };
}

function payLoan() {
  return {
    type: 'account/payLoan',
  };
}

// deposit or withdraw
store.dispatch(deposit(500));
store.dispatch(withdraw(200));

// action of requesting a loan
store.dispatch(requestLoan(1000, 'Buy a car'));
store.dispatch(payLoan());


// initial State Customer
function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/createCustomer',
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateName(fullName) {
  return {
    type: 'customer/updateName',
    payload: fullName,
  };
}

store.dispatch(createCustomer('Nnaukwu Martins', 2008617714))

console.log(
  `File Executed After Running ---> import './store.js'`,
  store.getState(),
);
