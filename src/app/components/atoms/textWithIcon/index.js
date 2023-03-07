import React from 'react';
import {View} from 'react-native';
import Text from 'components/atoms/text';
import {Colors} from 'theme';
import s from './textWithIcon.styles';

const TextWithIcon = ({Icon, label, style, ...rest}) => {
  return (
    <View style={[s.container,style]}>
      {Icon()}
      <Text type="tinyTextBold" textStyle={{
        marginLeft:2
      }} color={Colors.silver} {...rest}>
        {label}
      </Text>
    </View>
  );
};
export default TextWithIcon;
