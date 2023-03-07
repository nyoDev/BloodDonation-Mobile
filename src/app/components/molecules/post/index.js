import React, {useState} from 'react';
import {
  View,
  Image,
  useWindowDimensions,
  FlatList,
  Animated,
} from 'react-native';
import CirclePlus from 'components/atoms/icons/circlePlus';
import CircleTime from 'components/atoms/icons/circleTime';
import Location from 'components/atoms/icons/location';
import LoveFilled from 'components/atoms/icons/loveFilled';
import Chat from 'components/atoms/icons/chat';
import Share from 'components/atoms/icons/share';
import Container from 'components/templates/container';
import Button from 'components/atoms/button';
import ProfileImage from 'components/molecules/profileImage';
import Text from 'components/atoms/text';
import {Colors} from 'theme';
import {images} from 'images';
import s from './post.styles';

const tabIcon2Size = 14;
const tabIcon4Size = 18;

const Post = ({data}) => {
  return (
    <View style={s.postContainer}>
      <View style={s.postHeaderContainer}>
        <ProfileImage bordered style={s.profileImage} source={data._data.postInfo.userImage} />
        <View
          style={{
            marginLeft: 10,
          }}>
          <Text type="smallTextBold" color={Colors.black}>
            {data._data.postInfo.postUserFullName}
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                type="tinyTextBold"
                color={Colors.silver}
                textStyle={{
                  marginRight: 1,
                }}>
                قبل 5 دقائق
              </Text>
              <CircleTime
                size={tabIcon2Size}
                fill={Colors.silver}
                width={tabIcon2Size}
                height={tabIcon2Size}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <Text
                type="tinyTextBold"
                color={Colors.silver}
                textStyle={{
                  marginRight: 1,
                }}>
                {data._data.postInfo.postUserLocation}
              </Text>
              <Location
                size={tabIcon2Size}
                fill={Colors.silver}
                width={tabIcon2Size}
                height={tabIcon2Size}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={s.postImageContainer}>
        <Image
          style={s.postImage}
          source={
            typeof data._data.postInfo.postImage === 'string'
              ? {uri: data._data.postInfo.postImage}
              : data._data.postInfo.postImage
          }
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          paddingHorizontal: 10,
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            borderWidth: 1,
            height: 35,
            width: 35,
            borderRadius: 200,
            borderColor: Colors.shadow,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LoveFilled
            size={tabIcon4Size}
            fill={Colors.primaryColor100}
            width={tabIcon4Size}
            height={tabIcon4Size}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            height: 35,
            width: 35,
            borderRadius: 200,
            borderColor: Colors.shadow,
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Chat
            size={tabIcon4Size}
            fill={Colors.shadow}
            width={tabIcon4Size}
            height={tabIcon4Size}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            height: 35,
            width: 35,
            borderRadius: 200,
            borderColor: Colors.shadow,
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Share
            size={tabIcon4Size}
            fill={Colors.shadow}
            width={tabIcon4Size}
            height={tabIcon4Size}
          />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent:'center',
            alignItems:'center'
          }}>
          <Text
            type="smallTextBold"
            color={Colors.primaryColor100}
            textStyle={{
              marginTop: 0,
              marginBottom: 7,
            }}>
            270
          </Text>
          <Text
            onPress={() => console.log(data)}
            type="tinyTextBold"
            color={Colors.black}
            textStyle={{
              marginTop: 7,
              marginBottom: 7,
              marginLeft: 5,
            }}>
            اعجاب
          </Text>
        </View>
        <Text
          type="tinyTextBold"
          color={Colors.silver}
          textStyle={{
            lineHeight: 16,
          }}>
          {data._data.postInfo.postCaption}
        </Text>
      </View>
    </View>
  );
};
export default Post;
