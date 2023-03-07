import {StyleSheet} from 'react-native';
import {Colors} from 'theme/index';

const s = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  genderItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  genderItem: {
    padding: 10,
    borderRadius: 100,
  },
  genderItemLabel: {
    marginTop: 10,
  },
});

export default s;
