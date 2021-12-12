import numbro from 'numbro';

const numberWithCommas = (
  value: number | string,
  decimalCount: number = 2
): string => {
  if (value === 0) return '0';
  if (!value) return '-';

  return numbro(value).format({
    thousandSeparated: true,
    mantissa: decimalCount,
  });
};

export { numberWithCommas };
