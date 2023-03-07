import React, {useState} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import Container from 'components/templates/container';
import Input from 'components/atoms/input';
import Select from 'components/atoms/select';
import Button from 'components/atoms/button';
import {provinces, genders, bloodGroups} from 'fixtures';
import {Colors} from 'theme';
import s from './addCampaign.styles';

export default function index() {
  const [date, setDate] = useState(new Date());
  onPressSubmitButtonFunction = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{
        campaignName: '',
        campaignLocation: provinces[0],
        campaignStartingDate: new Date(),
        campaignEndingDate: new Date(Date.now() + 3600 * 1000 * 24),
        campaignDonaters: '0',
        campaignNeededDonaters: '0',
        campaignDescription: '',
      }}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={onPressSubmitButtonFunction}
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
          style={{backgroundColor: Colors.white}}
          StickyBottomComponent={() => {
            return (
              <View style={s.bottomSection}>
                <Button
                  center
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  size={'big'}
                  onPress={handleSubmit}
                  text={'اضافة حملة'}
                  style={{
                    marginVertical: 10,
                  }}
                />
              </View>
            );
          }}>
          <Input
            label="اسم الحملة"
            placeholder={'اسم الحملة'}
            value={values.campaignName}
            onChangeText={handleChange('campaignName')}
          />
          <Select
            placeholder="المحافظة"
            label="المحافظة"
            value={values.campaignLocation}
            options={provinces}
            onSelect={value => {
              setFieldValue('campaignLocation', value);
            }}
          />
          <Select
            placeholder="تأريخ بداية الحملة"
            label="تأريخ بداية الحملة"
            isDatePicker
            value={values.campaignStartingDate}
            onSelect={value => {
              setFieldValue('campaignStartingDate', value);
            }}
          />
          <Select
            placeholder="تأريخ نهاية الحملة"
            label="تأريخ نهاية الحملة"
            isDatePicker
            value={values.campaignEndingDate}
            value={values.campaignEndingDate}
            onSelect={value => {
              setFieldValue('campaignEndingDate', value);
            }}
          />
          <Input
            label="عدد المتبرعين المسجلين"
            placeholder={'عدد المتبرعين المسجلين'}
            value={values.campaignDonaters}
            onChangeText={handleChange('campaignDonaters')}
            keyboardType="numeric"
          />
          <Input
            label="عدد المتبرعين المطلوبين"
            placeholder={'عدد المتبرعين المطلوبين'}
            value={values.campaignNeededDonaters}
            onChangeText={handleChange('campaignNeededDonaters')}
            keyboardType="numeric"
          />
          <Input
            label="وصف الحملة"
            placeholder={'وصف الحملة'}
            value={values.campaignDescription}
            onChangeText={handleChange('campaignDescription')}
            textArea
          />
        </Container>
      )}
    </Formik>
  );
}
