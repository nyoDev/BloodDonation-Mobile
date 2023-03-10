import {StyleSheet} from 'react-native';
import Colors from 'theme/colors';

const icon = {
  justifyContent: 'center',
  alignItems: 'center',
  width: 28,
  height: 28,
};

const s = StyleSheet.create({
  button: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  smallSize: {
    height: 36,
    // width: 80,
    paddingHorizontal: 10,
  },
  mediumSize: {
    height: 40,
    width: 180,
  },
  bigSize: {
    height: 56,
    width: '100%',
  },
  leftIcon: {
    ...icon,
    marginRight: 12,
  },
  rightIcon: {
    ...icon,
    marginLeft: 12,
  },
  primary: {
    backgroundColor: Colors.primaryColor100,
  },
  primaryClicked: {
    backgroundColor: Colors.primaryColor85,
  },
  primaryDisabled: {
    backgroundColor: Colors.highlight,
  },
  secondary: {
    backgroundColor: Colors.white,
    borderColor: Colors.primaryColor100,
    elevation: 3,
  },
  secondaryClicked: {
    backgroundColor: Colors.primaryColor10,
  },
  secondaryDisabled: {
    backgroundColor: Colors.white,
    borderColor: Colors.light,
  },
  ghost: {
    backgroundColor: Colors.white,
    borderColor: Colors.shadow,
    borderWidth: 1,
  },
  ghostClicked: {
    borderColor: Colors.black,
  },
  ghostDisabled: {
    backgroundColor: Colors.white,
    borderColor: Colors.light,
  },
  destructive: {
    backgroundColor: Colors.alert100,
  },
  destructiveClicked: {
    backgroundColor: Colors.alert85,
  },
  destructiveDisabled: {
    backgroundColor: Colors.highlight,
  },
});

export default s;
