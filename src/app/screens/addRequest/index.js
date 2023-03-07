import React, {useState} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {addRequest} from 'services/firebase/firestore';
import Container from 'components/templates/container';
import Input from 'components/atoms/input';
import Button from 'components/atoms/button';
import BloodGroupList from 'components/organisms/bloodGroupList';
import Select from 'components/atoms/select';
import {Colors} from 'theme';
import s from './addRequest.styles';

const provinces = [
  {
    value: 'DW',
    label: 'الديوانية',
  },
];

const userInfo = auth().currentUser;

const AddRequest = () => {
  const [bloodGroupData] = useState([
    {
      value: 'A+',
      label: 'A+',
    },
    {
      value: 'A-',
      label: 'A-',
    },
    {
      value: 'B+',
      label: 'B+',
    },
    {
      value: 'B-',
      label: 'B-',
    },
    {
      value: 'AB+',
      label: 'AB+',
    },
    {
      value: 'AB-',
      label: 'AB-',
    },
    {
      value: 'O+',
      label: 'O+',
    },
    {
      value: 'O-',
      label: 'O-',
    },
  ]);
  const onPressSubmitButton = (values, actions) => {
    addRequest(userInfo.uid, values)
      .then(() => {
        console.log('done');
        actions.setSubmitting(false);
      })
      .catch(e => {
        console.log(e);
        actions.setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{
        requestBloodGroup: 'A+',
        requestLocation: provinces[0],
        userRequestName: 'محمد حازم صكبان',
        userRequestId: '00000',
        userRequestImage: '00000',
        userRequestLocation: 'الديوانية',
      }}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={onPressSubmitButton}
      // validationSchema={FormValidationSchema}
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
          StickyBottomComponent={() => {
            return (
              <View style={s.bottomSection}>
                <Button
                  center
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  size={'big'}
                  onPress={handleSubmit}
                  text={'ارسال الطلب'}
                />
              </View>
            );
          }}>
          <BloodGroupList
            data={bloodGroupData}
            label={'فصيلة الدم'}
            defaultValue={values.requestBloodGroup}
            onPressBloodGroupItem={value => {
              setFieldValue('requestBloodGroup', value.value);
            }}
          />
          <Select
            placeholder="المحافظة"
            options={provinces}
            theme={'primary'}
            value={values.requestLocation}
            label={'المحافظة :'}
            onSelect={returnedData => {
              setFieldValue('requestBloodGroup', returnedData);
            }}
          />
        </Container>
      )}
    </Formik>
  );
};
export default AddRequest;
