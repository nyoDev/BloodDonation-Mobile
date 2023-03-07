import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';
import Container from 'components/templates/container';
import Button from 'components/atoms/button';
import Input from 'components/atoms/input';
import {Colors} from 'theme';
import s from './profileEdit.styles';

const locationsData = [
  {
    value: 'Al-Anbar',
    label: 'الأنبار',
  },
  {
    value: 'Babylon',
    label: 'بابل',
  },
  {
    value: 'Baghdad',
    label: 'بغداد',
  },
  {
    value: 'Basra',
    label: 'البصرة',
  },
  {
    value: 'DhiQar',
    label: 'ذي قار',
  },
  {
    value: 'Al-Qadisiyyah',
    label: 'القادسية',
  },
  {
    value: 'Diyala',
    label: 'ديالي',
  },
  {
    value: 'Duhok',
    label: 'دهوك',
  },
  {
    value: 'Erbil',
    label: 'اربيل',
  },
  {
    value: 'Karbala',
    label: 'كربلاء',
  },
  {
    value: 'Kirkuk',
    label: 'كركوك',
  },
  {
    value: 'Maysan',
    label: 'ميسان',
  },
  {
    value: 'Muthanna',
    label: 'المثنى',
  },
  {
    value: 'Najaf',
    label: 'النجف',
  },
  {
    value: 'Nineveh',
    label: 'نينوى',
  },
  {
    value: 'Saladin',
    label: 'صلاح الدين',
  },
  {
    value: 'Sulaymaniyah',
    label: 'السليمانية',
  },
  {
    value: 'Wasit',
    label: 'واسط',
  },
];

const ProfileEdit = () => {
  const {userInfo} = useSelector(state => state.reducer);
  return (
    <Formik
      initialValues={{
        userImage: '',
        userImageName: userInfo.userFullName,
        userFullName:  userInfo.userFullName,
        userEmail: userInfo.userEmail,
        userPhoneNumber: userInfo.userPhoneNumber,
        userPassword: userInfo.userPassword,
        userGender: userInfo.userGender,
        userBloodGroup:userInfo.userBloodGroup,
        userLocation: userInfo.userLocation,
      }}
      validateOnBlur={true}
      validateOnChange={true}
      //onSubmit={onPressSubmitButton}
      //validationSchema={FormValidationSchema}
      >
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
                  //   loading={isSubmitting}
                  //   disabled={isSubmitting}
                  size={'big'}
                  // onPress={handleSubmit}
                  text={'حفظ'}
                />
              </View>
            );
          }}>
          <View style={s.formContainer}>
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
          </View>
        </Container>
      )}
    </Formik>
  );
};
export default ProfileEdit;
