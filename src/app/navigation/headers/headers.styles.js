import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from 'theme';

const styles = {
  headerStyle: {
    height: 56,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 0,
    backgroundColor: Colors.primaryColor100,
  },
  headerTitleStyle: {
    ...Fonts.header4,
    alignSelf: 'center',
    alignContent: 'center',
    color: Colors.steel,
  },
  rightElement: {
    flexDirection: 'row',
    marginRight: Metrics.largeMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftElement: {
    marginLeft: Metrics.largeMargin,
  },
};

const s = StyleSheet.create(styles);

export default s;
