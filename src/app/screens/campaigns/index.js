import React, {useState} from 'react';
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Text from 'components/atoms/text';
import TextWithIcon from 'components/atoms/textWithIcon';
import {Colors} from 'theme';
import Location from 'components/atoms/icons/location';
import BloodIcon from 'components/atoms/icons/blood';
import TimeIcon from 'components/atoms/icons/circleTime';
import Button from 'components/atoms/button';
import {screensNames} from 'constants/navigation';

const tabIcon2Size = 14;

const Campaigns = () => {
  const {width} = useWindowDimensions();
  const {navigate} = useNavigation();
  const [data, setData] = useState([
    {
      campaignName: 'جامعة الكفيل - حملة جمع التبرعات',
      campaignLocation: 'النجف',
      //campaignBloodGroup: 'B+',
      campaignStartingDate: '12/4/2021',
      campaignEndingDate: '1/4/2022',
      campaignDonaters: 5,
    },
  ]);
  const CampaignItem = ({item}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        width: width - 20,
        elevation: 2,
        borderRadius: 5,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.white,
      }}>
      <View>
        <Text type="smallTextBold">{item.campaignName}</Text>
        <TextWithIcon
          label={item.campaignLocation}
          Icon={() => (
            <Location
              size={tabIcon2Size}
              fill={Colors.silver}
              width={tabIcon2Size}
              height={tabIcon2Size}
            />
          )}
        />
        {/* <TextWithIcon
          label={item.campaignBloodGroup}
          Icon={() => (
            <BloodIcon
              size={tabIcon2Size}
              fill={Colors.primaryColor100}
              width={tabIcon2Size}
              height={tabIcon2Size}
            />
          )}
          color={Colors.primaryColor100}
        /> */}
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TextWithIcon
            label={item.campaignStartingDate}
            color={Colors.success100}
            style={{
              marginRight: 5,
            }}
            Icon={() => (
              <TimeIcon
                size={tabIcon2Size}
                fill={Colors.success100}
                width={tabIcon2Size}
                height={tabIcon2Size}
              />
            )}
          />
          <TextWithIcon
            label={item.campaignEndingDate}
            color={Colors.primaryColor100}
            Icon={() => (
              <TimeIcon
                size={tabIcon2Size}
                fill={Colors.primaryColor100}
                width={tabIcon2Size}
                height={tabIcon2Size}
              />
            )}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginRight: 10,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <BloodIcon
            size={40}
            fill={Colors.primaryColor100}
            width={40}
            height={40}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text type={'tinyTextBold'} color={Colors.primaryColor100}>
              {item.campaignDonaters}
            </Text>
            <Text
              type={'tinyTextBold'}
              textStyle={{marginLeft: 2}}
              color={Colors.primaryColor100}>
              - متبرع
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <View
        style={{
          width: width,
          height: 100,
          padding: 10,
          paddingHorizontal: 15,
          backgroundColor: Colors.primaryColor100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text type="header5" color={Colors.white}>
            الحملات الحالية
          </Text>
          <Button
            text="اضافة حملة"
            size={'small'}
            theme={'secondary'}
            onPress={() => {
              navigate(screensNames.addCampaign);
            }}
          />
        </View>
      </View>
      <FlatList
        contentContainerStyle={{
          height: '100%',
        }}
        style={{
          top: -30,
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              marginVertical: 5,
            }}
          />
        )}
        data={data}
        renderItem={({item}) => <CampaignItem item={item} />}
      />
    </View>
  );
};

export default Campaigns;
