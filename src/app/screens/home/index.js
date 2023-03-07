import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  getPosts,
  getRequestsCount,
  getUsersCount,
} from 'services/firebase/firestore';
import Container from 'components/templates/container';
import Dashboard from 'components/organisms/dashboard';
import Post from 'components/molecules/post';
import Button from 'components/atoms/button';
import Text from 'components/atoms/text';
import CirclePlus from 'components/atoms/icons/circlePlus';
import {screensNames} from 'constants/navigation';
import TextWithIcon from 'components/atoms/textWithIcon';
import Location from 'components/atoms/icons/location';
import BloodIcon from 'components/atoms/icons/blood';

import {Colors} from 'theme';
import {images} from 'images';

const tabIconSize = 15;
const tabIcon2Size = 14;

const Home = () => {
  const {navigate} = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [donatorsCount, setDonatorsCount] = useState(0);
  const [requestsCount, setRequestsCount] = useState(0);
  const [data, setData] = useState([
    {
      userId: '1',
      userProfileImage: images.avatar,
      postUserFullName: 'محمد حازم',
      userLocation: 'الديوانية',
      postDate: 'قبل 5 دقائق',
      postContent:
        'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكلوليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص',
      postImage: images.post,
      postLikesCount: '50',
      postComments: [
        {
          userProfileImage: images.avatar,
          userFullName: 'محمد حازم صكبان',
          comment: 'منور العزيز',
        },
      ],
    },
  ]);
  useEffect(() => {
    getPosts()
      .then(returnedData => {
        setData(returnedData._docs);
        getUsersCount()
          .then(returnedData => {
            setDonatorsCount(returnedData.size);
            getRequestsCount()
              .then(returnedData => {
                setRequestsCount(returnedData.size);
                setIsLoading(false);
              })
              .catch(e => console.log(e));
          })
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }, []);
  return (
    <Container withPadding={true} scrollable={false} isLoading={isLoading}>
      <View
        style={{
          paddingVertical: 10,
        }}>
        <Text type="smallTextBold" color={Colors.black}>
          المواعيد القريبة
        </Text>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
           // borderWidth: 2,
            borderRadius: 5,
            borderColor: Colors.primaryColor100,
            paddingVertical: 20,
            marginTop: 10,
            elevation:1
          }}>
          <Text type="smallTextBold" color={Colors.black}>
            لاتوجد اية مواعيد
          </Text>
        </View>
      </View>
      {/* <FlatList
        ListHeaderComponent={() => (
          <View>
            <Dashboard label1={donatorsCount} label2={requestsCount} />
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                backgroundColor: '#FFFFFF',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderColor: Colors.light,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                padding: 10,
                paddingHorizontal: 10,
                marginTop: 10,
              }}>
              <View>
                <Text type="smallTextBold" color={Colors.black}>
                  تصفح اخر الأخبار
                </Text>
              </View>
              <Button
                text="اضافة منشور"
                size={'small'}
                onPress={() => {
                  navigate(screensNames.addPost);
                }}
                RightIcon={() => (
                  <CirclePlus
                    size={tabIconSize}
                    fill={Colors.white}
                    width={tabIconSize}
                    height={tabIconSize}
                  />
                )}
              />
            </View>
          </View>
        )}
        scrollEventThrottle={16}
        bounces={true}
        renderItem={({item,index}) => <Post key={index} data={item} />}
        data={data}
      /> */}
    </Container>
  );
};
export default Home;
