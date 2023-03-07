import React, {useState, useCallback} from 'react';
import {View, Platform, TouchableOpacity} from 'react-native';
import ActivityIndicator from 'components/atoms/activityIndicator';
import TextComponent from 'components/atoms/text';
import {Colors} from 'theme';
import s from './button.styles';

const AndroidButton = ({style, ...props}) => <TouchableOpacity {...props} />;

const ButtonComponent =
  Platform.OS === 'ios' ? TouchableOpacity : AndroidButton;

const textColor = {
  primary: 'white',
  secondary: Colors.primaryColor100,
  ghost: 'black',
  destructive: 'white',
};

const disabledTextColor = {
  primary: 'silver',
  secondary: 'shadow',
  ghost: 'shadow',
  destructive: 'silver',
};
const size = {
  small: 'size',
  medium: 'medium',
  big: 'big',
};
const textSize = {
  small: 'tinyTextBold',
  medium: 'labelBold',
  big: 'textBold',
};
const Button = ({
  onPress,
  theme,
  LeftIcon,
  RightIcon,
  text,
  size,
  disabled,
  style,
  center,
  loading,
  backgroundColor,
  ...rest
}) => {
  const [clicked, setClick] = useState(false);

  const showUnderlay = useCallback(() => {
    setClick(true);
  }, []);

  const hideUnderlay = useCallback(() => {
    setClick(false);
  }, []);

  return (
    <ButtonComponent
      onPress={onPress}
      underlayColor={Colors.white}
      disabled={disabled}
      onShowUnderlay={showUnderlay}
      onHideUnderlay={hideUnderlay}
      //activeOpacity={1}
      style={[s.container, size && s[`${size}Size`], style]}>
      <View
        style={[
          s.button,
          s[theme],
          disabled && s[`${theme}Disabled`],
          clicked && s[`${theme}Clicked`],
          size && s[`${size}Size`],
          center && {alignSelf: 'center'},
          style,
          backgroundColor && {backgroundColor: backgroundColor},
        ]}>
        {loading ? (
          <ActivityIndicator
            color={disabled ? disabledTextColor[theme] : textColor[theme]}
            size={30}
          />
        ) : (
          <>
            {LeftIcon && (
              <View style={s.leftIcon}>
                <TextComponent
                  type="largeTextBold"
                  color={
                    disabled ? disabledTextColor[theme] : textColor[theme]
                  }>
                  {LeftIcon()}
                </TextComponent>
              </View>
            )}
            {text && (
              <TextComponent
                type={textSize[size]}
                color={disabled ? disabledTextColor[theme] : textColor[theme]}
                {...rest}>
                {text}
              </TextComponent>
            )}
            {RightIcon && (
              <View style={s.rightIcon}>
                <TextComponent
                  type="largeTextBold"
                  color={
                    disabled ? disabledTextColor[theme] : textColor[theme]
                  }>
                  {RightIcon()}
                </TextComponent>
              </View>
            )}
          </>
        )}
      </View>
    </ButtonComponent>
  );
};

Button.defaultProps = {
  theme: 'primary',
  text: 'Primary button',
  size: 'medium',
};

export default Button;
