import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AddMessage from 'screens/addMessage';
import Messages from 'screens/messages';
import {Colors, Fonts} from 'theme';
import {screensNames} from 'constants/navigation';

const Tab = createMaterialTopTabNavigator();

const Help = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {...Fonts.labelBold},
        tabBarActiveTintColor: Colors.white,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.white,
        },
        tabBarStyle: {backgroundColor: Colors.primaryColor100},
      }}>
      <Tab.Screen
        name={screensNames.topTabsNavigator.addMessage}
        options={{tabBarLabel: 'ارسال رسالة'}}
        component={AddMessage}
      />
      <Tab.Screen
        name={screensNames.topTabsNavigator.messages}
        options={{tabBarLabel: 'الرسائل السابقة'}}
        component={Messages}
      />
    </Tab.Navigator>
  );
};

export default Help;
