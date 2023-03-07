import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {array, func, string, object} from 'prop-types';
import Text from 'components/atoms/text';
import InputLabel from 'components/atoms/input/inputLabel';
import InputError from 'components/atoms/input/inputError';
import {Colors} from 'theme';
import s from './bloodGroupList.styles';

const BloodGroupList = ({
  data,
  label,
  onPressBloodGroupItem,
  defaultValue,
  errorMessage,
}) => {
  return (
    <View>
      <InputLabel>{label}</InputLabel>
      <View style={s.listContainer}>
        {data.slice(0, 2).map((item, index) => (
          <View key={index} style={s.bloodGroupItemContainer}>
            <TouchableOpacity
              style={[
                s.bloodGroupItem,
                {
                  borderColor:
                    defaultValue == item
                      ? Colors.primaryColor100
                      : Colors.shadow,
                  borderWidth: defaultValue == item ? 2 : 1,
                },
              ]}
              onPress={() => {
                onPressBloodGroupItem(item);
              }}>
              <Text
                type="smallTextRegular"
                center
                color={
                  defaultValue == item ? Colors.primaryColor100 : Colors.shadow
                }>
                {item.label}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
        {data.slice(2, 4).map((item, index) => (
          <View key={index} style={s.bloodGroupItemContainer}>
            <TouchableOpacity
              style={[
                s.bloodGroupItem,
                {
                  borderColor:
                    defaultValue == item
                      ? Colors.primaryColor100
                      : Colors.shadow,
                  borderWidth: defaultValue == item ? 2 : 1,
                },
              ]}
              onPress={() => {
                onPressBloodGroupItem(item);
              }}>
              <Text
                type="smallTextRegular"
                center
                color={
                  defaultValue == item ? Colors.primaryColor100 : Colors.shadow
                }>
                {item.label}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
        {data.slice(4, 6).map((item, index) => (
          <View key={index} style={s.bloodGroupItemContainer}>
            <TouchableOpacity
              style={[
                s.bloodGroupItem,
                {
                  borderColor:
                    defaultValue == item
                      ? Colors.primaryColor100
                      : Colors.shadow,
                  borderWidth: defaultValue == item ? 2 : 1,
                },
              ]}
              onPress={() => {
                onPressBloodGroupItem(item);
              }}>
              <Text
                type="smallTextRegular"
                center
                color={
                  defaultValue == item ? Colors.primaryColor100 : Colors.shadow
                }>
                {item.label}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={s.listContainer}>
        {data.slice(6, 8).map((item, index) => (
          <View key={index} style={s.bloodGroupItemContainer}>
            <TouchableOpacity
              style={[
                s.bloodGroupItem,
                {
                  borderColor:
                    defaultValue == item
                      ? Colors.primaryColor100
                      : Colors.shadow,
                  borderWidth: defaultValue == item ? 2 : 1,
                },
              ]}
              onPress={() => {
                onPressBloodGroupItem(item);
              }}>
              <Text
                type="smallTextRegular"
                center
                color={
                  defaultValue == item ? Colors.primaryColor100 : Colors.shadow
                }>
                {item.label}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {!!errorMessage && <InputError>{errorMessage}</InputError>}
    </View>
  );
};

BloodGroupList.propTypes = {
  data: array,
  label: string,
  onPressBloodGroupItem: func,
  defaultValue: object,
};
BloodGroupList.defaultProps = {
  data: [],
  label: 'فصيلة الدم',
  onPressBloodGroupItem: () => {},
  defaultValue: {
    value: 'A+',
    label: 'A+',
  },
};

export default BloodGroupList;
