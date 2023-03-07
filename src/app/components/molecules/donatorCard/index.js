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
import s from './donatorCard.styles';

const tabIcon2Size = 14;

const DonatorCard = ({item, ...props}) => {
  const {navigate} = useNavigation();
  return (
    <View style={s.wrapper}>
      <View style={s.container}>
        <ProfileImage style={s.profileImage} source={item.userProfileImage} />
        <View style={s.content}>
          <Text type="smallTextBold" color={Colors.black} {...props}>
            {item.userFullName}
          </Text>
          <Text type="tinyTextBold" color={Colors.black} {...props}>
            عدد التبرعات المسجلة : {item.donatesCount}
          </Text>
          <TextWithIcon
            label={item.userLocation}
            Icon={() => (
              <Location
                size={tabIcon2Size}
                width={tabIcon2Size}
                height={tabIcon2Size}
                fill={Colors.silver}
              />
            )}
          />
          <TextWithIcon
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
          />
          <Text type="tinyTextBold" color={Colors.silver} {...props}>
            اخر تبرع : {item.userLastDateDonate}
          </Text>
        </View>
        <View style={s.helpButtonContainer}>
          <Button
            text={'السؤال عن مساعدة'}
            size={'small'}
            theme={'ghost'}
            onPress={() => {
              navigate(screensNames.profile, {
                title: item.userFullName,
                userId: item.userId,
              });
            }}
          />
        </View>
      </View>
      {/* <View style={s.lastDonateDateContainer}>
        <Text type="labelRegular" color={Colors.white}>
          اخر موعد تبرع : {item.userLastDateDonate}
        </Text>
      </View> */}
    </View>
  );
};
export default DonatorCard;
