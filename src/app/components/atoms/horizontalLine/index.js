import React from 'react';
import {View} from 'react-native';
import s from './horizontalLine';
const Hr = ({color, style}) => {
  return <View style={[s.hr, color && {backgroundColor: color}, style]} />;
};

export default Hr;
