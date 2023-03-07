import React from 'react';
import {Image, View} from 'react-native';
import {Colors} from 'theme';

const ProfileImage = ({source, bordered, style}) => {
  return (
    <View
      style={[
        {
          borderRadius: 100,
          borderColor: Colors.shadow,
        },
        bordered && {
          padding: 2,
          borderWidth: 1,
        },
      ]}>
      <Image
        source={typeof source === 'string' ? {uri: source} : source}
        style={[
          {
            width: 55,
            height: 55,
            borderRadius: 100,
          },
          style,
        ]}
      />
    </View>
  );
};

export default ProfileImage;
