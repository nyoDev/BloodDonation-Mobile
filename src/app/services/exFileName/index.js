export const exFileNameFunction = filePath => {
  return filePath.split('\\').pop().split('/').pop();
};
