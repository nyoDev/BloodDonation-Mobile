import {StyleSheet} from 'react-native';

import {Colors} from 'theme';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    backgroundColor: Colors.white,
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
    elevation: 10,
  },
  title: {
    lineHeight: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 16,
    width: 90,
    marginHorizontal: 5,
  },
});

export default styles;
