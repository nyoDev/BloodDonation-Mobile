import React from 'react';
import {View, TouchableOpacity, Linking} from 'react-native';
import Text from 'components/atoms/text';
import {Colors, Fonts} from 'theme';
import s from './drawerPoweredBy.styles';
const iconSize = 28;

const DrawerPoweredBy = ({label, data}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.primaryColor100,
      }}
      >
      <View>
        <Text color={Colors.light} type={'labelRegular'}>
          تم التنفيذ بواسطة
        </Text>
        <Text color={Colors.white} type={'smallTextBold'}>
          {label}
        </Text>
      </View>
      <View style={s.socailLinksContainer}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => Linking.openURL(item.url)}>
              {item.Icon}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default DrawerPoweredBy;
