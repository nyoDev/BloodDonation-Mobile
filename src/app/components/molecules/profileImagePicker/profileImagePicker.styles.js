import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

const styles = StyleSheet.create({
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: Colors.shadow,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  editButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 100,
    left: 15,
    bottom: 0,
    elevation: 5,
    backgroundColor: Colors.white,
  },
});

export default styles;
