import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import {
  UnAuthenticatedStackContainer,
  AuthenticatedStackContainer,
} from 'navigation';
import ActivityIndicator from 'components/atoms/activityIndicator';
import {Colors} from 'theme';
import {signOut} from 'services/redux/actions';

const App = () => {
  const {authenticationState, userInfo} = useSelector(state => state.reducer);
  const dispatch = useDispatch();
  const signOutFunction = () => dispatch(signOut());
  // React.useEffect(() => {
  //   signOutFunction()
  // }, [])
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {authenticationState == 'unAuthenticated' ? (
          <UnAuthenticatedStackContainer />
        ) : authenticationState == 'authenticated' ? (
          <AuthenticatedStackContainer />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <ActivityIndicator color={Colors.primaryColor100} />
          </View>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;


// <Button title="تيست" onPress={()=>{
//   console.log(authenticationState)
// }} />