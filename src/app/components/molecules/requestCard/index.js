import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from 'components/atoms/button';
import ProfileImage from 'components/molecules/profileImage';
import Text from 'components/atoms/text';
import TextWithIcon from 'components/atoms/textWithIcon';
import BloodIcon from 'components/atoms/icons/blood';
import Location from 'components/atoms/icons/location';
import {screensNames} from 'constants/navigation';
import {Colors} from 'theme';
import s from './requestCard.styles';

const tabIcon2Size = 14;

const RequestCard = ({item}) => {
  const {navigate} = useNavigation();
  return (
    <View style={s.wrapper}>
      <View style={s.container}>
        <ProfileImage style={s.profileImage} source={item.userProfileImage} />
        <View style={s.content}>
          <Text type="smallTextBold" color={Colors.black}>
            {item._data.requestInfo.userRequestName}
          </Text>
          <TextWithIcon
            label={item._data.requestInfo.requestLocation.label}
            Icon={() => (
              <Location
                size={tabIcon2Size}
                width={tabIcon2Size}
                height={tabIcon2Size}
                fill={Colors.silver}
              />
            )}
          />
          <Button
            text={'تواصل الأن'}
            size={'small'}
            theme={'ghost'}
            style={{
              marginTop: 10,
            }}
            onPress={() => {
              navigate(screensNames.profile, {
                title: item.userFullName,
                userId: item.userId,
              });
            }}
          />
          {/* <TextWithIcon
            label={item.userBloodGroup}
            Icon={() => (
              <BloodIcon
                size={tabIcon2Size}
                width={tabIcon2Size}
                height={tabIcon2Size}
                fill={Colors.primaryColor100}
              />
            )}
            color={Colors.primaryColor100}
          /> */}
        </View>
        {/* <View style={s.helpButtonContainer}>
          <Button
            text={'تواصل الأن'}
            size={'small'}
            theme={'ghost'}
            onPress={() => {
              navigate(screensNames.profile, {
                title: item.userFullName,
                userId: item.userId,
              });
            }}
          />
        </View> */}
        <View
          style={{
            position: 'absolute',
            right: 0,
            top: 10,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              padding: 5,
              paddingHorizontal: 25,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              backgroundColor: Colors.primaryColor100,
            }}>
            <Text type="tinyTextBold" color={Colors.white}>
              مطلوب
            </Text>
          </View>
          <View
            style={{
              width: 40,
              height: 40,
              margin: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 45 / 2,
              borderColor: Colors.primaryColor100,
              borderWidth: 2,
              marginTop: 20,
            }}>
            <Text type="tinyTextBold" color={Colors.primaryColor100}>
              {item._data.requestInfo.requestBloodGroup}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default RequestCard;
