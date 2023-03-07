import React, {useState} from 'react';
import {View, Image, useWindowDimensions, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector, useDispatch} from 'react-redux';
import * as yup from 'yup';
import {Formik} from 'formik';
import Container from 'components/templates/container';
import Button from 'components/atoms/button';
import Input from 'components/atoms/input';
import InputLabel from 'components/atoms/input/inputLabel';
import InputError from 'components/atoms/input/inputError';
import ImageIcon from 'components/atoms/icons/image';
import CircleCancelIcon from 'components/atoms/icons/circleCancel';
import {images} from 'images';
import {addPostFunction} from 'services/firebase/firestore';
import {Colors} from 'theme';
import s from './addPost.styles';
import Fonts from 'theme/fonts';
import {provinces, genders, bloodGroups} from 'fixtures';

const tabIconSize = 15;
const tabIconSize2 = 30;

const AddPost = () => {
  const {width} = useWindowDimensions();
  const [imageData, setImageData] = useState({
    assets: [{uri: 'photo'}],
  });
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'الديوانية', value: 'الديوانية'},
    {label: 'بغداد', value: 'بغداد'},
  ]);
  const {userInfo} = useSelector(state => state.reducer);
  const FormValidationSchema = yup.object().shape({
    postImage: yup.string().required('الصورة مطلوبة'),
    postCaption: yup.string().max(2200, 'لقد وصلت لحد الاقصى من الاحرف .'),
  });

  const onPressSubmitButton = (values, actions) => {
    addPostFunction(userInfo.userId, values, userInfo)
      .then(() => {
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
        postImage: '',
        postCaption: '',
        postUserLocation: userInfo.userLocation,
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
                  text={'نشر الأن'}
                  size={'big'}
                  onPress={handleSubmit}
                  loading={isSubmitting}
                  disabled={isSubmitting}
                />
              </View>
            );
          }}>
          <View style={s.formContainer}>
            <InputLabel>الصورة</InputLabel>
            <View
              style={{
                width: '100%',
                height: width - 10,
                borderRadius: 5,
                borderColor: Colors.light,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {imageData.assets[0].uri == 'photo' ? (
                <View
                  style={{
                    flex: 1,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: Colors.light,
                    borderRadius: 5,
                  }}>
                  <Button
                    //loading={isSubmitting}
                    //  disabled={isSubmitting}
                    size={'small'}
                    style={{
                      width: 120,
                    }}
                    onPress={() => {
                      launchImageLibrary(
                        {mediaType: 'photo', selectionLimit: 1},
                        data => {
                          const imagePath = data.assets[0].uri;
                          setImageData(data);
                          setFieldValue('postImage', imagePath);
                        },
                      );
                    }}
                    text={'اختيار صورة'}
                    RightIcon={() => (
                      <ImageIcon
                        size={tabIconSize}
                        fill={Colors.white}
                        width={tabIconSize}
                        height={tabIconSize}
                      />
                    )}
                  />
                </View>
              ) : (
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 5,
                  }}>
                  <Image
                    style={{
                      flex: 1,
                      borderRadius: 5,
                    }}
                    source={
                      typeof imageData.assets[0].uri === 'string'
                        ? {uri: imageData.assets[0].uri}
                        : imageData.assets[0].uri
                    }
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      position: 'absolute',
                      padding: 10,
                      paddingHorizontal: 15,
                      justifyContent: 'flex-end',
                      width: '100%',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setImageData({
                          assets: [{uri: 'photo'}],
                        });
                      }}
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <CircleCancelIcon
                        size={tabIconSize2}
                        fill={Colors.primaryColor100}
                        width={tabIconSize2}
                        height={tabIconSize2}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
            {!!errors.postImage && <InputError>{errors.postImage}</InputError>}
            <Input
              label="الوصف"
              keyboardType="default"
              placeholder={'الوصف'}
              textArea={true}
              onChangeText={handleChange('postCaption')}
              error={errors.postCaption ? true : false}
              value={values.postCaption}
              errorMessage={errors.postCaption}
            />
          </View>
        </Container>
      )}
    </Formik>
  );
};
export default AddPost;
