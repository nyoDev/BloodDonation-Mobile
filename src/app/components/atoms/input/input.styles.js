import {StyleSheet} from 'react-native';
import Colors from 'theme/colors';
import Fonts from 'theme/fonts';

const s = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  wrapper: {
    height: 56,
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.shadow,
    backgroundColor: Colors.white,
  },
  gray: {
    backgroundColor: Colors.highlight,
    borderColor: Colors.transparent,
    borderRadius: 5,
  },
  input: {
    ...Fonts.labelRegular,
    flex: 1,
    height: 56,
    borderRadius: 5,
  },
  iconWrapper: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  leftIcon: {
    marginRight: 10,
  },
  leftPadding: {
    paddingLeft: 16,
  },
  rightPadding: {
    paddingRight: 16,
  },
  focused: {
    borderColor: Colors.black,
  },
  error: {
    borderColor: Colors.alert100,
  },
  success: {
    borderColor: Colors.success100,
  },
  disabled: {
    backgroundColor: Colors.light,
  },
  promoCodeWrapper: {
    backgroundColor: Colors.primaryColor10,
    borderWidth: 0,
  },
  noteMessage: {
    paddingTop: 6,
  },
  textAreaWrapper: {
    height: 120,
    justifyContent: 'flex-start',
  },
  textAreaInput: {
    height: 120,
    textAlignVertical: 'top',
  },
});

export default s;
