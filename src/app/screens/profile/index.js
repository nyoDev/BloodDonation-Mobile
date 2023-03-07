import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Container from 'components/templates/container';
import Text from 'components/atoms/text';
import TextWithIcon from 'components/atoms/textWithIcon';
import {Colors} from 'theme';
import Button from 'components/atoms/button';
import {fontNames} from 'theme/fonts';
import {images} from 'images';
import {getUserData, createUserData} from 'services/firebase/firestore';
import LoveFilled from 'components/atoms/icons/love';
import {useSelector, useDispatch} from 'react-redux';
import ProfileImage from 'components/molecules/profileImage';
import Location from 'components/atoms/icons/location';
import {screensNames} from 'constants/navigation';

const tabIcon2Size = 18;

const Profile = () => {
  const route = useRoute();
  const {navigate} = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState(true);
  const {userInfo} = useSelector(state => state.reducer);
  useEffect(() => {
    getUserData(route.params.userInfo.userId)
      .then(returnedData => {
        setIsLoading(false);
        setProfileInfo(returnedData._data.userInfo);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  return (
    <Container
      scrollable={false}
      withPadding={false}
      isLoading={isLoading}
      style={{
        backgroundColor: Colors.white,
      }}
      fullDimensions>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingTop: 30,
        }}>
        <View
          style={{
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ProfileImage
            bordered
            style={{
              width: 80,
              height: 80,
            }}
            source={userInfo.userImage}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '70%',
            height: '100%',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 40,
            }}>
            <Text color={Colors.primaryColor100} type={fontNames.largeTextBold}>
              4
            </Text>
            <Text color={Colors.black} type={fontNames.tinyTextRegular}>
              تبرعات
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 40,
            }}>
            <Text color={Colors.primaryColor100} type={fontNames.largeTextBold}>
              124
            </Text>
            <Text color={Colors.black} type={fontNames.tinyTextRegular}>
              طلبات
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 40,
            }}>
            <Text color={Colors.primaryColor100} type={fontNames.largeTextBold}>
              124
            </Text>
            <Text color={Colors.black} type={fontNames.tinyTextRegular}>
              منشور
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        <TextWithIcon
          label={
            userInfo.userLocation ? userInfo.userLocation.label : 'غير معروف'
          }
          color={Colors.iron}
          Icon={() => (
            <Location
              size={tabIcon2Size}
              fill={Colors.silver}
              width={tabIcon2Size}
              height={tabIcon2Size}
            />
          )}
        />

        <View
          style={{
            flexDirection: 'row',
            //justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Text
            type="labelRegular"
            color={Colors.silver}
            textStyle={{
              lineHeight: 20,
            }}>
            لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
            الشكل وليس المحتوى)
          </Text>
        </View>
        {userInfo.userId === profileInfo.userId ? (
          <Button
            onPress={() => {
              navigate(screensNames.profileEdit);
            }}
            theme={'ghost'}
            size="small"
            text={'تعديل حسابي'}
            style={{
              marginTop: 10,
            }}
          />
        ) : (
          <Button
            // onPress={() => {
            //   navigate(screensNames.profile,{
            //     title:userInfo.userFullName
            //   });
            // }}
            theme={'primary'}
            size="small"
            text={'بدء دردشة'}
            style={{
              marginTop: 10,
            }}
          />
        )}
      </View>
    </Container>
  );
};

export default Profile;
