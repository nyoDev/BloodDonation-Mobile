import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {setUserInfo, changeToAuthenticated} from 'services/redux/actions';
import {signInFunction} from 'services/firebase/auth';
import Container from 'components/templates/container';
import Input from 'components/atoms/input';
import Button from 'components/atoms/button';
import Text from 'components/atoms/text';
import ModalConfirm from 'components/molecules/modalConfirm';
import {screensNames} from 'constants/navigation';
import {Colors} from 'theme';
import s from './signIn.styles';

const SingIn = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
 
  const changeToAuthenticatedFunction = () => dispatch(changeToAuthenticated());
  const setUserInfoFunction = returnedData =>
    dispatch(setUserInfo(returnedData));
  const onPressSubmitButton = (values, actions) => {
    signInFunction(values)
      .then(returnedData => {
        setUserInfoFunction(returnedData._data.userInfo);
        changeToAuthenticatedFunction();
        actions.setSubmitting(false);
      })
      .catch(e => {
        e.code === 'auth/user-not-found'
          ? setModalTitle('المستخدم غير موجود !')
          : e.code === 'auth/wrong-password'
          ? setModalTitle('كلمة المرور غير صحيحة !')
          : setModalTitle('حدث خطأ ما !');
        setModalVisible(true);
        console.log(e.code);
        actions.setSubmitting(false);
      });
  };
  const onPressSignUpButton = () => {
    navigate(screensNames.singUp);
  };
  const FormValidationSchema = yup.object().shape({
    userEmail: yup
      .string()
      .required('البريد الألكتروني مطلوب')
      .email('البريد الألكتروني غير صالح'),
    userPassword: yup
      .string()
      .required('كلمة المرور مطلوبة')
      .min(6, 'على الاقل 6 احرف'),
  });
  return (
    <Formik
      initialValues={{userEmail: '', userPassword: ''}}
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
                  center
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  size={'big'}
                  onPress={handleSubmit}
                  text={'تسجيل الدخول'}
                />
                <View style={s.signUpTextContainer}>
                  <Text type="smallTextRegular" color={Colors.black}>
                    لا تملك حساب ؟
                  </Text>
                  <TouchableOpacity onPress={onPressSignUpButton}>
                    <Text
                      type="smallTextBold"
                      color={Colors.primaryColor100}
                      textStyle={{
                        marginLeft: 5,
                      }}>
                      انشأ الأن
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}>
          <View style={s.formContainer}>
            <Input
              label="البريد الألكتروني"
              autoFocus={true}
              keyboardType="default"
              placeholder={'البريد الألكتروني'}
              onChangeText={handleChange('userEmail')}
              error={errors.userEmail ? true : false}
              value={values.userEmail}
              errorMessage={errors.userEmail}
            />
            <Input
              label="كلمة المرور"
              secureTextEntry
              keyboardType="default"
              placeholder={'كلمة المرور'}
              onChangeText={handleChange('userPassword')}
              error={errors.userPassword ? true : false}
              value={values.userPassword}
              errorMessage={errors.userPassword}
            />
          </View>
          <ModalConfirm
            colse={modalVisible}
            visible={modalVisible}
            title={modalTitle}
            onPressButton={() => {
              setModalVisible(false);
            }}
          />
        </Container>
      )}
    </Formik>
  );
};

export default SingIn;
