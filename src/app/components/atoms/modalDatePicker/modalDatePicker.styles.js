import {StyleSheet} from 'react-native';

import {Colors, width} from 'theme';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: Colors.white,
    paddingBottom: 30,
    alignItems: 'center',
  },
  heading: {
    width: '100%',
    textAlign: 'center',
    marginVertical: 20,
  },
  headerWrapper: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
    width: '100%',
  },
  closeIcon: {
    position: 'absolute',
    right: 20,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
});

export default styles;
