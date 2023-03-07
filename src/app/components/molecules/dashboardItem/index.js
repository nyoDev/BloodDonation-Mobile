import React from 'react';
import {View} from 'react-native';
import Button from 'components/atoms/button';
import {Colors} from 'theme';
import Text from 'components/atoms/text';

const DashboardItem = ({buttonText, number, label, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '90%',
        padding: 15,
        borderRadius: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.primaryColor5,
      }}>
      <View
        style={{
          width: '60%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          onPress={onPress}
          text={buttonText}
          size="medium"
          theme={'secondary'}
        />
      </View>
      <View
        style={{
          width: '40%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          type="header3"
          color={'#FFFFFF'}
          textStyle={{
            textAlign: 'center',
            lineHeight: 25,
          }}>
          {number}
        </Text>
        <Text
          textStyle={{
            textAlign: 'center',
            lineHeight: 20,
          }}
          type="smallTextRegular"
          color={Colors.white}>
          {label}
        </Text>
      </View>
    </View>
  );
};

export default DashboardItem;
