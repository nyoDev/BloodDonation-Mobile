import React from 'react';
import {View} from 'react-native';
import Modal from 'components/atoms/modal';
import Text from 'components/atoms/text';
import Button from 'components/atoms/button';
import Colors from 'theme/colors';
import s from './modalTwoOptions.styles';

const ModalTwoOptions = ({
  close,
  visible,
  title,
  onPressYesButton,
  onPressNoButton,
}) => {
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
        <View style={s.buttonsContainer}>
          <Button
            onPress={onPressYesButton}
            text="نعم"
            size={'medium'}
            style={s.button}
          />
          <Button
            onPress={onPressNoButton}
            text="لا"
            size={'medium'}
            theme={'ghost'}
            style={s.button}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalTwoOptions;
