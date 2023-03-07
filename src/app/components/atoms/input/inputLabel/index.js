import React from 'react';
import {View} from 'react-native';
import {bool} from 'prop-types';
import TextComponent from 'components/atoms/text';
import {fontNames} from 'theme/fonts';
import {Colors} from 'theme';
import s from './inputLabel.styles';

const InputLabel = ({children, small}) => {
  return (
    <View style={!small && s.labelWrapper}>
      <TextComponent
        type={small ? fontNames.labelBold : fontNames.header5}
        color={Colors.black}>
        {children}
      </TextComponent>
    </View>
  );
};

InputLabel.propTypes = {
  small: bool,
};

export default InputLabel;
