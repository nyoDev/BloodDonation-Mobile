import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProfileImage from 'components/molecules/profileImage';
import Text from 'components/atoms/text';
import TextWithIcon from 'components/atoms/textWithIcon';
import Button from 'components/atoms/button';
import Location from 'components/atoms/icons/location';
import BloodIcon from 'components/atoms/icons/blood';
import {screensNames} from 'constants/navigation';
import {images} from 'images';
import {Colors} from 'theme';

const tabIcon2Size = 14;

const DrawerUserInfo = ({userInfo}) => {
  const {navigate} = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <ProfileImage
      bordered
        style={{
          width: 60,
          height: 60,
        }}
        source={userInfo.userImage}
      />
      <View
        style={{
          marginLeft: 10,
        }}>
        <Text type="smallTextBold" color={Colors.black}>
          {userInfo.userFullName}
        </Text>
        <View>
          <TextWithIcon
            label={userInfo.userLocation ? userInfo.userLocation.label : 'غير معروف'}
            Icon={() => (
              <Location
                size={tabIcon2Size}
                fill={Colors.silver}
                width={tabIcon2Size}
                height={tabIcon2Size}
              />
            )}
          />
          <TextWithIcon
            label={
              userInfo.userBloodGroup ? userInfo.userBloodGroup.label : 'غير معروف'
            }
            Icon={() => (
              <BloodIcon
                size={tabIcon2Size}
                fill={Colors.primaryColor100}
                width={tabIcon2Size}
                height={tabIcon2Size}
              />
            )}
            color={Colors.primaryColor100}
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}>
        <Button
          onPress={() => {
            navigate(screensNames.profile,{
              userInfo:userInfo
            });
          }}
          theme={'ghost'}
          size="small"
          text={'حسابي'}
        />
      </View>
    </View>
  );
};
export default DrawerUserInfo;
