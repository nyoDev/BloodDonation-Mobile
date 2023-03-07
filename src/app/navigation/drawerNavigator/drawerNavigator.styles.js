import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

const s = StyleSheet.create({
  drawerWrapperForCustomDrawer: {
    flex: 1,
  },
  drawerContainerForCustomDrawer: {
    padding: 10,
  },
  hr:{
    width:'100%'
  },
  drawerWrapper: {
    flex: 1,
  },
  drawerContainer: {
    width: '90%',
    padding: 10,
    backgroundColor: Colors.background,
  },
  poweredBy: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

export default s;
