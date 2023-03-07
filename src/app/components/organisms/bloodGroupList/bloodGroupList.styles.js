import {StyleSheet} from 'react-native';
import {Colors} from 'theme/index';

const s = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bloodGroupItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
  },
  bloodGroupItem: {
    width: 45,
    height: 45,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default s;
