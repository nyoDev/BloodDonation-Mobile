import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DashboardItem from 'components/molecules/dashboardItem';
import {screensNames} from 'constants/navigation';
import {Colors} from 'theme';

const RequestsDashboard = ({label}) => {
  const {navigate} = useNavigation();
  return (
    <View
      style={{
        paddingVertical: 10,
        backgroundColor: Colors.primaryColor100,
      }}>
      <DashboardItem
        buttonText={'اضافة طلب'}
        number={label}
        label={'طلب'}
        onPress={() => {
          navigate(screensNames.addRequest);
        }}
      />
    </View>
  );
};

export default RequestsDashboard;
