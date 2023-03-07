import React, {useCallback, useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {string, bool} from 'prop-types';
import CheckboxOn from 'components/atoms/icons/checkboxOn';
import CheckboxOff from 'components/atoms/icons/checkboxOff';
import Text from 'components/atoms/text';
import {Colors} from 'theme/index';
import s from './checkbox.styles';
import {fontNames} from 'theme/fonts';

const iconSize = {
  height: 28,
  width: 28,
};

const Checkbox = ({label, value, onChange, style}) => {
  const [stateValue, setStateValue] = useState(value);
  const handleOnPress = useCallback(() => {
    setStateValue(!stateValue);
    onChange?.(!stateValue);
  }, [stateValue, setStateValue, onChange]);
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={[s.container, style]}>
        {stateValue ? (
          <CheckboxOn fill={Colors.primaryColor100} {...iconSize} />
        ) : (
          <CheckboxOff  fill={Colors.shadow} {...iconSize} />
        )}
        <Text textStyle={s.text} type={fontNames.smallTextRegular}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

Checkbox.propTypes = {
  label: string.isRequired,
  value: bool.isRequired,
};

export default Checkbox;
