import {StyleSheet} from 'react-native';
import {Colors} from 'theme/index';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    flex: 1,
  },
  containerThird: {
    flexDirection: 'row',
    marginVertical: 4,
    flex: 0,
  },
  selectWrapper: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectWrapperPrimary: {
    borderColor: Colors.shadow,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
  selectWrapperSecondary: {
    backgroundColor: Colors.highlight,
    borderRadius: 5,
  },
  selectWrapperThird: {
    height: 16,
    flex: 0,
  },
  selected: {
    borderColor: Colors.primaryColor100,
  },
  textStyle: {
    marginLeft: 20,
  },
  thirdTextStyle: {
    marginLeft: 8,
  },
  icon: {
    marginRight: 14,
  },
  thirdIcon: {
    marginLeft: 2,
  },
});

export default styles;
