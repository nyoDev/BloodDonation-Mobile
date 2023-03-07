import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: Colors.light,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    paddingVertical: 15,
    backgroundColor: Colors.white,
    alignItems:'center'
  },
  profileImage: {width: 80, height: 80},
  content: {
    marginLeft: 15,
    alignItems: 'flex-start',
  },
  helpButtonContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  lastDonateDateContainer:{
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor100,
  }
});

export default styles;
