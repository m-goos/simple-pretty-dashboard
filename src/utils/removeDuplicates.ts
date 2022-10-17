export const removeDuplicates = (array: string[]) =>
  array.filter((item, pos, self) => self.indexOf(item) === pos);
