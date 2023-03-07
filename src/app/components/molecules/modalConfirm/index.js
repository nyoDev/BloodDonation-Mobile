import React from 'react';
import {View} from 'react-native';
import Modal from 'components/atoms/modal';
import Text from 'components/atoms/text';
import Button from 'components/atoms/button';
import Colors from 'theme/colors';
import s from './modalConfirm.styles';

const ModalConfirm = ({close, visible, title, onPressButton}) => {
  return (
    <Modal
      close={close}
      isVisible={visible}
      onBackdropPress={close}
      style={s.modal}
      avoidKeyboard>
      <View style={s.content}>
        <Text type="largeTextBold" textStyle={s.title} center>
          {title}
        </Text>
        <Button
          onPress={onPressButton}
          text="تم"
          size={'medium'}
          style={s.button}
        />
      </View>
    </Modal>
  );
};

export default ModalConfirm;
