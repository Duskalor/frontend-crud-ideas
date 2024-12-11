export const reverseDate = (data: any[]) => {
  return [...data].sort((a, b) => {
    const c = new Date(a.created_at).getTime();
    const d = new Date(b.created_at).getTime();
    return d - c;
  });
};
