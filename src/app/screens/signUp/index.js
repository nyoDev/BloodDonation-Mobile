import React, {useState} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {setUserInfo, changeToAuthenticated} from 'services/redux/actions';
import Container from 'components/templates/container';
import Input from 'components/atoms/input';
import Button from 'components/atoms/button';
import ProfileImagePicker from 'components/molecules/profileImagePicker';
import ModalConfirm from 'components/molecules/modalConfirm';
import GenderList from 'components/organisms/genderList';
import BloodGroupList from 'components/organisms/bloodGroupList';
import Select from 'components/atoms/select';
import {signUpFunction} from 'services/firebase/auth';
import {exFileNameFunction} from 'services/exFileName';
import {exFileExtentionFunction} from 'services/exFileExtention';
import {provinces, genders, bloodGroups} from 'fixtures';
import HorizontalLine from 'components/atoms/horizontalLine';
import Checkbox from 'components/atoms/checkbox';
import {Colors} from 'theme';
import {images} from 'images';
import s from './signUp.styles';

const SingIn = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const dispatch = useDispatch();
  const changeToAuthenticatedFunction = () => dispatch(changeToAuthenticated());
  const setUserInfoFunction = returnedData =>
    dispatch(setUserInfo(returnedData));
  const FormValidationSchema = yup.object().shape(
    {
      userFullName: yup
        .string()
        .required('الأسم الكامل مطلوب')
        .min(5, 'على الاقل 5 احرف')
        .max(25, 'على الأكثر 25 احرف'),
      userEmail: yup
        .string()
        .required('البريد الألكتروني مطلوب')
        .email('البريد الألكتروني غير صالح'),
      userPhoneNumber: yup
        .string()
        .matches('07[0-9]{9}$', 'رقم الهاتف غير صالح'),
      userPassword: yup
        .string()
        .required('كلمة المرور مطلوبة')
        .min(6, 'على الاقل 6 احرف'),
      userGender: yup.object().required('الجنس مطلوب'),
      userBloodGroup: yup.object().required('فصيلة الدم مطلوبة'),
      userAge: yup.number().required('العمر مطلوب'),
      //  .max(18, 'العمر غير صالح !')
      // .max(80, 'العمر غير صالح !'),
      userWeight: yup.number().required('الوزن مطلوب'),
      // .min(2, 'الوزن غير صالح')
      //.max(3, 'الوزن غير صالح'),
    },
    {strict: true},
  );

  const onPressSubmitButton = (values, actions) => {
    signUpFunction(values)
      .then(returnedData => {
        setUserInfoFunction(returnedData._data.userInfo);
        changeToAuthenticatedFunction();
        actions.setSubmitting(false);
      })
      .catch(e => {
        e.code === 'auth/email-already-in-use'
          ? setModalTitle('البريد الألكتروني موجود مسبقا !')
          : setModalTitle('حدث خطأ ما !');
        setModalVisible(true);
        actions.setSubmitting(false);
        console.log(e);
      });
  };
  const onPressImagePicker = ({}) => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
        maxHeight: 200,
        maxWidth: 200,
      },
      returnedData => {
        const imagePath = returnedData.assets[0].uri;
        setFieldValue('userImage', imagePath);
        setFieldValue('userImageName', exFileNameFunction(imagePath));
      },
    );
  };
  return (
    <Formik
      initialValues={{
        userImage: images.logo,
        userFullName: '',
        userEmail: '',
        userPhoneNumber: '',
        userPassword: '',
        userGender: genders[0],
        userBloodGroup: bloodGroups[0],
        userLocation: provinces[0],
       // userIsDonator: true,
        userAge: '',
        userWeight: '',
      }}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={onPressSubmitButton}
      validationSchema={FormValidationSchema}>
      {({
        handleChange,
        handleSubmit,
        setFieldValue,
        values,
        isSubmitting,
        errors,
      }) => (
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
                  text={'انشاء الحساب'}
                  style={{
                    marginVertical: 10,
                  }}
                />
              </View>
            );
          }}>
          <View style={s.formContainer}>
            <ProfileImagePicker
              label={'الصورة'}
              source={values.userImage}
              onPress={() => {
                launchImageLibrary(
                  {
                    mediaType: 'photo',
                    selectionLimit: 1,
                    maxHeight: 200,
                    maxWidth: 200,
                  },
                  returnedData => {
                    const imagePath = returnedData.assets[0].uri;
                    setFieldValue('userImage', imagePath);
                  },
                );
              }}
            />
            <Input
              label="الأسم الكامل"
              autoFocus={true}
              keyboardType="default"
              placeholder={'الأسم الكامل'}
              onChangeText={handleChange('userFullName')}
              error={errors.userFullName ? true : false}
              value={values.userFullName}
              errorMessage={errors.userFullName}
            />
            <Input
              label="البريد الألكتروني"
              keyboardType="default"
              placeholder={'البريد الألكتروني'}
              onChangeText={handleChange('userEmail')}
              error={errors.userEmail ? true : false}
              value={values.userEmail}
              errorMessage={errors.userEmail}
            />
            <Input
              label="رقم الهاتف (اختياري)"
              keyboardType="default"
              keyboardType="numeric"
              placeholder={'رقم الهاتف'}
              onChangeText={handleChange('userPhoneNumber')}
              error={errors.userPhoneNumber ? true : false}
              value={values.userPhoneNumber}
              errorMessage={errors.userPhoneNumber}
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
            <Select
              placeholder="المحافظة"
              label="المحافظة"
              value={values.userLocation}
              options={provinces}
              onSelect={value => {
                setFieldValue('userLocation', value);
              }}
            />
            <GenderList
              data={genders}
              label={'الجنس'}
              defaultValue={values.userGender}
              onPressGenderItem={value => {
                setFieldValue('userGender', value);
              }}
              errorMessage={errors.userGender}
            />
            <HorizontalLine />
            <BloodGroupList
              data={bloodGroups}
              label={'فصيلة الدم'}
              defaultValue={values.userBloodGroup}
              onPressBloodGroupItem={value => {
                setFieldValue('userBloodGroup', value);
              }}
              errorMessage={errors.userBloodGroup}
            />
            <Input
              label={'العمر'}
              autoFocus={true}
              keyboardType="numeric"
              placeholder={'العمر'}
              maxLength={2}
              onChangeText={handleChange('userAge')}
              error={errors.userAge ? true : false}
              value={values.userAge}
              errorMessage={errors.userAge}
            />
            <Input
              label="الوزن (كيلوغرام)"
              autoFocus={true}
              keyboardType="numeric"
              placeholder={'الوزن'}
              maxLength={3}
              onChangeText={handleChange('userWeight')}
              error={errors.userWeight ? true : false}
              value={values.userWeight}
              errorMessage={errors.userWeight}
            />
            {/* <HorizontalLine />
            <Checkbox
              label="التسجيل كمتبرع"
              value={values.userIsDonator}
              onChange={value => {
                setFieldValue('userIsDonator', value);
              }}
            /> */}
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
