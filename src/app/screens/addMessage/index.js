import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';
import Container from 'components/templates/container';
import Input from 'components/atoms/input';
import Button from 'components/atoms/button';
import ModalConfirm from 'components/molecules/modalConfirm';
import {addContactUsMessage} from 'services/firebase/firestore';
import {Colors} from 'theme';
import s from './addMessage.styles';

const AddMessage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const {userInfo} = useSelector(state => state.reducer);
  const onPressSubmitButton = (values, actions) => {
    addContactUsMessage(userInfo.userId, values)
      .then(() => {
        actions.setSubmitting(false);
        actions.resetForm();
        setModalTitle('تم ارسال الرسالة بنجاح');
        setModalVisible(true);
      })
      .catch(e => {
        console.log(e);
        actions.setSubmitting(false);
        setModalTitle('حدث خطأ ما لم يتم ارسال الرسالة بنجاح');
        setModalVisible(true);
      });
  };
  const FormValidationSchema = yup.object().shape({
    messageUserFullName: yup.string().required('الأسم الكامل مطلوب'),
    messageUserPhoneNumber: yup.string().required('رقم الهاتف مطلوب'),
    messageUserEmail: yup.string().email('البريد الألكتروني غير صالح'),
    messageSubject: yup.string().required('موضوع الرسالة مطلوب'),
    messageContent: yup.string().required('محتوى الرسالة مطلوب'),
  });
  return (
    <Formik
      initialValues={{
        messageUserFullName: userInfo.userFullName,
        messageUserPhoneNumber: userInfo.userPhoneNumber,
        messageUserEmail: userInfo.userEmail,
        messageSubject: '',
        messageContent: '',
        userData: userInfo,
      }}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={onPressSubmitButton}
      validationSchema={FormValidationSchema}>
      {({handleChange, handleSubmit, values, isSubmitting, errors}) => (
        <Container
          style={{
            backgroundColor: Colors.white,
          }}
          withPadding={true}
          scrollable={true}
          StickyBottomComponent={() => {
            return (
              <View style={s.bottomSection}>
                <Button
                  text={'ارسال'}
                  size={'big'}
                  onPress={handleSubmit}
                  loading={isSubmitting}
                  disabled={isSubmitting}
                />
              </View>
            );
          }}>
          <View style={s.formContainer}>
            <Input
              label="الأسم الكامل"
              placeholder={'الأسم الكامل'}
              value={values.messageUserFullName}
              disabled
            />
            <Input
              label="رقم الهاتف"
              placeholder={'رقم الهاتف'}
              value={values.messageUserPhoneNumber}
              disabled
            />
            <Input
              label="البريد الألكتروني"
              placeholder={'البريد الألكتروني'}
              value={values.messageUserEmail}
              disabled
            />
            <Input
              label="الموضوع"
              placeholder={'الموضوع'}
              onChangeText={handleChange('messageSubject')}
              error={errors.messageSubject ? true : false}
              value={values.messageSubject}
              errorMessage={errors.messageSubject}
            />
            <Input
              label="الرسالة"
              placeholder={'الرسالة'}
              textArea
              autoFocus={true}
              onChangeText={handleChange('messageContent')}
              error={errors.messageContent ? true : false}
              value={values.messageContent}
              errorMessage={errors.messageContent}
            />
            <ModalConfirm
              colse={modalVisible}
              visible={modalVisible}
              title={modalTitle}
              onPressButton={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </Container>
      )}
    </Formik>
  );
};

export default AddMessage;
