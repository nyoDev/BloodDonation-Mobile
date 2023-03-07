import React from 'react';
import {TouchableOpacity} from 'react-native';
import Menu from 'components/atoms/icons/hamburger';
import Search from 'components/atoms/icons/search';
import Arrow from 'components/atoms/icons/arrowBig';
import Text from 'components/atoms/text';
import {Colors, Fonts} from 'theme';
import {screensNames} from 'constants/navigation';
import s from './headers.styles';

const tabIconSize = 24;

export const iconSize = 32;

const hitSlopValue = {top: 20, bottom: 20, left: 20, right: 20};

const headerIconProps = {
  width: iconSize,
  height: iconSize,
};
export const defaultHeaderConfig = ({navigation}) => ({
  headerShown: true,
  headerTitleAlign: 'center',
  headerTitle: () => <Text>اللوغو</Text>,
  headerStyle: s.headerStyle,
  headerLeft: () => (
    <TouchableOpacity
      style={s.leftElement}
      onPress={() => navigation.openDrawer()}>
      <Menu
        fill={Colors.white}
        size={tabIconSize}
        width={tabIconSize}
        height={tabIconSize}
      />
    </TouchableOpacity>
  ),
  headerRight: () => null,
});
export const defaultBackWithTitleHeaderConfig = ({navigation}) => ({
  headerTitleAlign: 'left',
  headerStyle: [s.headerStyle, {backgroundColor: Colors.white}],
  headerTitleStyle: s.headerTitleStyle,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      hitSlop={hitSlopValue}
      style={s.leftElement}>
      <Arrow
        fill={Colors.steel}
        size={tabIconSize}
        width={tabIconSize}
        height={tabIconSize}
        direction={'right'}
      />
    </TouchableOpacity>
  ),
});
export const defaultBackWithTitleHeaderOtherColorConfig = ({navigation}) => ({
  headerTitleAlign: 'left',
  headerStyle: s.headerStyle,
  headerTitleStyle: [s.headerTitleStyle, {color: Colors.white}],
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      hitSlop={hitSlopValue}
      style={s.leftElement}>
      <Arrow
        fill={Colors.white}
        size={tabIconSize}
        width={tabIconSize}
        height={tabIconSize}
        direction={'right'}
      />
    </TouchableOpacity>
  ),
});
export const defaultTitleHeaderConfig = ({navigation}) => ({
  headerTitleAlign: 'left',
  headerStyle: [s.headerStyle, {backgroundColor: Colors.white}],
  headerTitleStyle: s.headerTitleStyle,
  headerLeft: null,
  headerRight: null,
});
