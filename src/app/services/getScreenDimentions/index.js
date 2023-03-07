import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Width = percent => {
  const totalWidth = windowWidth / 100;
  const percentWidth = parseInt(percent);
  const widthAfterPercent = totalWidth * percentWidth;
  return widthAfterPercent;
};
export const Height = percent => {
  const totalHeight = windowHeight / 100;
  const percentHeight = parseInt(percent);
  const HeightAfterPercent = totalHeight * percentHeight;
  return HeightAfterPercent;
};
