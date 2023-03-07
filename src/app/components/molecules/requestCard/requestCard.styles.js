import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: 1,
    borderColor: Colors.light,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    paddingVertical: 10,
    backgroundColor: Colors.white,
  },
  profileImage: {width: 70, height: 70},
  content: {
    marginLeft: 15,
    alignItems: 'flex-start',
  },
  helpButtonContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  lastDonateDateContainer: {
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor100,
  },
});

export default styles;
