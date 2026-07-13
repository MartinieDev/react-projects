import { useSelector } from 'react-redux';

function formatCurrency(balance) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(balance);
}

function BalanceDisplay() {
  const { balance } = useSelector((state) => state.account);

  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
