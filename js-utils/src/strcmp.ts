export const strcmp = (a: string, b: string) => {
  const [nameA, nameB] = [a, b].map((i) => i.toUpperCase());
  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
};
