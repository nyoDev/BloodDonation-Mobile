import React from 'react';
import {Pressable, View} from 'react-native';
import Picker from 'react-native-date-picker';
import Modal from 'components/atoms/modal';
import Text from 'components/atoms/text';
import {fontNames} from 'theme/fonts';
import {colorNames} from 'theme/colors';

import s from './modalDatePicker.styles';

const hitSlopValue = {top: 20, bottom: 20, left: 20, right: 20};

const ModalDatePicker = ({
  close,
  visible,
  date,
  title,
  OpenerComponent,
  onChange,
}) => (
  <>
    {OpenerComponent}
    <Modal close={close} isVisible={visible} style={s.modal}>
      <View style={s.content}>
        <View style={s.headerWrapper}>
          <Text
            color={colorNames.iron}
            textStyle={s.heading}
            type={fontNames.largeTextBold}>
            {title}
          </Text>

          <Pressable style={s.closeIcon} hitSlop={hitSlopValue} onPress={close}>
            <Text type={fontNames.smallTextBold}>حفظ</Text>
          </Pressable>
        </View>
        <Picker date={date} mode={'date'} onDateChange={onChange} />
      </View>
    </Modal>
  </>
);

export default ModalDatePicker;
