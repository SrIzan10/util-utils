export function percentage(partial: number, total: number, allowNumNot100 = false) {
  if (total === 0) {
    throw new Error('Total cannot be 0');
  }
  if (partial < 0 || total < 0) {
    throw new Error('Partial and total must be non-negative');
  }
  if (!allowNumNot100 && partial > total) {
    return 100;
  }
  return (partial / total) * 100;
}