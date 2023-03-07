import React, {useCallback, useMemo} from 'react';
import {View, Pressable} from 'react-native';
import {Picker} from '@react-native-hero/picker';
import Modal from 'components/atoms/modal';
import Text from 'components/atoms/text';
import {fontNames} from 'theme/fonts';
import {colorNames} from 'theme/colors';

import s from './modalSelectPicker.styles';
import { Colors } from 'theme';

const hitSlopValue = {top: 20, bottom: 20, left: 20, right: 20};

const ModalSelectPicker = ({
  close,
  visible,
  onSelect,
  options = [],
  value,
  title,
  OpenerComponent,
}) => {
  const optionsMap = useMemo(
    () =>
      options.map(({label, value}) => ({
        text: label,
        value,
      })),
    [options],
  );

  const currentIndex = useMemo(
    () => options.map(({value}) => value).indexOf(value),
    [options, value],
  );

  const onChange = useCallback(
    ({index, option}) => {
      onSelect && onSelect({value: option.value, label: option.text});
    },
    [onSelect],
  );

  return (
    <>
      {OpenerComponent}
      <Modal close={close} isVisible={visible} style={s.modal}>
        <View style={s.content}>
          <View style={s.headerWrapper}>
            <Text
              color={Colors.iron}
              textStyle={s.heading}
              type={fontNames.largeTextBold}>
              {title}
            </Text>
            <Pressable
              style={s.closeIcon}
              hitSlop={hitSlopValue}
              onPress={close}>
              <Text type={fontNames.smallTextBold}>حفظ</Text>
            </Pressable>
          </View>
          <Picker
            options={optionsMap}
            onChange={onChange}
            style={{flex: 1}}
            selectedIndex={currentIndex}
            color="#000"
            fontSize={16}
            rowHeight={44}
          />
        </View>
      </Modal>
    </>
  );
};

export default ModalSelectPicker;
