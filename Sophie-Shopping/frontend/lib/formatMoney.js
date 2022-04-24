export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
  };

  const formatter = Intl.NumberFormat('zh-US', options);

  return formatter.format(amount);
}
