import {StyleSheet} from 'react-native';

import {Colors} from 'theme';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin:10,
    borderRadius:5,
    elevation:10
  },
  title: {
    marginTop: 25,
    marginBottom: 16,
  },
  emailInput: {
    marginTop: 24,
  },
});

export default styles;
