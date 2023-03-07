import React from 'react';
import {View, FlatList} from 'react-native';
import DonatorCard from 'components/molecules/donatorCard';
import Text from 'components/atoms/text';
import {Colors} from 'theme';

const DonatorList = ({data}) => {
  return (
    <View>
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal:10,
        }}>
        <Text type="labelBold" color={Colors.black}>
          قائمة الأكثر تبرعا
        </Text>
      </View>
      <FlatList
        renderItem={({item}) => <DonatorCard item={item} />}
        data={data}
      />
    </View>
  );
};
export default DonatorList;
