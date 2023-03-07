import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DashboardItem from 'components/molecules/dashboardItem';
import {screensNames} from 'constants/navigation';
import {Colors} from 'theme';

const Dashboard = ({label1,label2}) => {
  const {navigate} = useNavigation();
  return (
    <View
      style={{
        paddingVertical: 10,
        backgroundColor: Colors.primaryColor100,
      }}>
      <DashboardItem
        buttonText={'البحث عن متبرع'}
        number={label1}
        label={'متبرع'}
        onPress={() => {
          navigate(screensNames.donators);
        }}
      />
      <DashboardItem
        buttonText={'تصفح الطلبات'}
        number={label2}
        label={'طلب'}
        onPress={() => {
          navigate(screensNames.requests);
        }}
      />
    </View>
  );
};

export default Dashboard;
