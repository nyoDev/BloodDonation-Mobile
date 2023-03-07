import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  defaultBackWithTitleHeaderConfig,
  defaultBackWithTitleHeaderOtherColorConfig,
  defaultTitleHeaderConfig,
} from 'navigation/headers';
import Welcome from 'screens/welcome';
import SingIn from 'screens/singIn';
import SingUp from 'screens/signUp';
import DrawerNavigator from 'navigation/drawerNavigator';
import Profile from 'screens/profile';
import ProfileEdit from 'screens/profileEdit';
import Donators from 'screens/donators';
import Requests from 'screens/requests';
import AddRequest from 'screens/addRequest';
import AddPost from 'screens/addPost';
import AddCampaign from 'screens/addCampaign';
import {screensNames} from 'constants/navigation';

const AuthStack = createStackNavigator();
const UnAuthStack = createStackNavigator();

export const UnAuthenticatedStackContainer = ({}) => {
  return (
    <UnAuthStack.Navigator>
      <UnAuthStack.Screen
        name={screensNames.welcome}
        component={Welcome}
        options={{headerShown: false}}
      />
      <UnAuthStack.Screen
        name={screensNames.singIn}
        component={SingIn}
        options={({navigation}) => ({
          ...defaultTitleHeaderConfig({navigation}),
          title: 'تسجيل الدخول',
        })}
      />
      <UnAuthStack.Screen
        name={screensNames.singUp}
        component={SingUp}
        options={({navigation}) => ({
          ...defaultBackWithTitleHeaderConfig({navigation}),
          title: 'التسجيل',
        })}
      />
    </UnAuthStack.Navigator>
  );
};

export const AuthenticatedStackContainer = ({}) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={screensNames.drawerNavigator}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={screensNames.donators}
        component={Donators}
        options={({navigation}) => ({
          ...defaultBackWithTitleHeaderConfig({navigation}),
          title: 'تصفح المتبرعين',
        })}
      />
      <AuthStack.Screen
        name={screensNames.requests}
        component={Requests}
        options={({navigation}) => ({
          ...defaultBackWithTitleHeaderOtherColorConfig({navigation}),
          title: 'تصفح الطلبات',
        })}
      />
      <AuthStack.Screen
        name={screensNames.profile}
        component={Profile}
        options={({navigation, route}) => ({
          ...defaultBackWithTitleHeaderConfig({navigation}),
          title: route.params.userInfo.userFullName,
        })}
      />
      <AuthStack.Screen
        name={screensNames.profileEdit}
        component={ProfileEdit}
        options={({navigation, route}) => ({
          ...defaultBackWithTitleHeaderConfig({navigation}),
          title: 'تعديل حسابي',
        })}
      />
      <AuthStack.Screen
        name={screensNames.addPost}
        component={AddPost}
        options={({navigation}) => ({
          ...defaultBackWithTitleHeaderConfig({navigation}),
          title: 'اضافة منشور',
        })}
      />
      <AuthStack.Screen
        name={screensNames.addRequest}
        component={AddRequest}
        options={({navigation}) => ({
          ...defaultBackWithTitleHeaderConfig({navigation}),
          title: 'اضافة طلب',
        })}
      />
      <AuthStack.Screen
        name={screensNames.addCampaign}
        component={AddCampaign}
        options={({navigation}) => ({
          ...defaultBackWithTitleHeaderConfig({navigation}),
          title: 'اضافة حملة',
        })}
      />
    </AuthStack.Navigator>
  );
};
