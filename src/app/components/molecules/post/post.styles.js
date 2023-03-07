import {StyleSheet} from 'react-native';
import {Width} from 'services/getScreenDimentions';
import {Colors} from 'theme/index';

const s = StyleSheet.create({
  postContainer: {
    backgroundColor: Colors.white,
    paddingBottom: 15,
  },
  postHeaderContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  postImageContainer: {
    width: Width('100%'),
    height: Width('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.shadow,
  },
  postImage:{
    width: Width('100%'),
    height: Width('100%'),
  }
});

export default s;
