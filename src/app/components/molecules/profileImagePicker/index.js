import React from 'react';
import {View, Image,TouchableOpacity} from 'react-native';
import Text from 'components/atoms/text';
import AttachIcon from 'components/atoms/icons/edit';
import {images} from 'images';
import {Colors} from 'theme';
import s from './profileImagePicker.styles';

const iconSize = 18;

const ProfileImagePicker = ({label, source, onPress}) => {
  return (
    <View>
      <Text type="header5">{label}</Text>
      <View style={s.imageWrapper}>
        <View style={s.imageContainer}>
          <Image
            resizeMode="cover"
            source={source === images.logo ? images.logo : {uri: source}}
            style={s.image}
          />
          <TouchableOpacity onPress={onPress} style={s.editButton}>
            <AttachIcon
              size={iconSize}
              width={iconSize}
              height={iconSize}
              fill={Colors.primaryColor100}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ProfileImagePicker;
