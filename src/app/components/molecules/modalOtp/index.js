import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import OtpInputs from 'react-native-otp-inputs';
import Modal from 'components/atoms/modal';
import Text from 'components/atoms/text';
import Button from 'components/atoms/button';
import Colors from 'theme/colors';
import s from './modalOtp.styles';

const ModalOtp = ({close, visible, onLoginPress, confirm}) => {
  const otpCodeVerification = async otpCode => {
    await confirm
      .confirm(otpCode)
      .then(data => {
        console.log('Done');
      })
      .catch(e => {
        console.log(e);
        console.log('Invalid code.');
      });
  };
  const onPressSubmitButton = (values, actions) => {
    const otpCode = values.otpCode;
    otpCodeVerification(otpCode);
  };
  return (
    <Modal
      close={close}
      isVisible={visible}
      onBackdropPress={close}
      style={s.modal}
      avoidKeyboard>
      <Formik
        initialValues={{otpCode: ''}}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={onPressSubmitButton}
        //validationSchema={FormValidationSchema}
      >
        {({handleChange, handleSubmit, values, isSubmitting, errors}) => (
          <View style={s.content}>
            <Text type="largeTextBold" textStyle={s.title}>
              تأكيد رمز التحقق
            </Text>
            <OtpInputs
              handleChange={handleChange('otpCode')}
              numberOfInputs={6}
              autofillFromClipboard={false}
              isRTL={true}
              inputStyles={{
                borderWidth: 1,
                borderColor: Colors.shadow,
                backgroundColor: Colors.white,
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderRadius: 5,
                textAlign: 'center',
              }}
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Text type="smallTextBold" color={Colors.primaryColor100}>
                اعادة ارسال الرمز
              </Text>
              <Button onPress={handleSubmit} text="تم" size={'small'} center />
            </View>
          </View>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalOtp;
