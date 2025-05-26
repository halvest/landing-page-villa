export const formatRupiah = (num: number): string =>
  `Rp${num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
