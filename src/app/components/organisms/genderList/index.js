import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {array, func, string, object} from 'prop-types';
import Text from 'components/atoms/text';
import InputLabel from 'components/atoms/input/inputLabel';
import InputError from 'components/atoms/input/inputError';
import {Colors} from 'theme';
import s from './genderList.styles';

const GenderList = ({
  data,
  label,
  onPressGenderItem,
  defaultValue,
  errorMessage,
}) => {
  return (
    <View>
      <InputLabel>{label}</InputLabel>
      <View style={s.listContainer}>
        {data.map((item, index) => (
          <View key={index} style={s.genderItemContainer}>
            <TouchableOpacity
              style={[
                s.genderItem,
                {
                  borderWidth: defaultValue == item ? 2 : 0,
                  borderColor: Colors.primaryColor100,
                },
              ]}
              onPress={() => {
                onPressGenderItem(item);
              }}>
              <item.Icon
                fill={
                  defaultValue == item ? Colors.primaryColor100 : Colors.shadow
                }
              />
            </TouchableOpacity>
            <Text
              center
              type="smallTextRegular"
              textStyle={s.genderItemLabel}
              color={
                defaultValue == item ? Colors.primaryColor100 : Colors.shadow
              }>
              {item.label}
            </Text>
          </View>
        ))}
      </View>
      {!!errorMessage && <InputError>{errorMessage}</InputError>}
    </View>
  );
};

GenderList.propTypes = {
  data: array,
  label: string,
  onPressGenderItem: func,
  defaultValue: object,
};
GenderList.defaultProps = {
  data: [],
  label: 'الجنس',
  onPressGenderItem: () => {},
  defaultValue: {value: 'male', label: 'رجل'},
};

export default GenderList;
