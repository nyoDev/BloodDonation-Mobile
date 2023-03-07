import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

const s = StyleSheet.create({
  headerWrapper: {
    borderBottomWidth: 1,
    borderColor: Colors.light,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
  },
  headerItemsWrapper: {
    overflow: 'hidden',
  },
  contentWrapper: {
    marginBottom: 25,
  },
});

export default s;
