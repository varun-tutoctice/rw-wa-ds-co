export function diffDate(date1: Date, date2: Date): number {
  let diffDays = 0;
  if (date1 && date2) {
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  }
  return diffDays;
};
