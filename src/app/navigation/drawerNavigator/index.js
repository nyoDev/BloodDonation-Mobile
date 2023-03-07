import React, {useState} from 'react';
import {View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import {defaultHeaderConfig} from 'navigation/headers';
import Home from 'screens/home';
import Campaigns from 'screens/campaigns';
import Donators from 'screens/donators';
import Requests from 'screens/requests';
import ContactUs from 'screens/contactUs';
import About from 'screens/about';
import HorizontalLine from 'components/atoms/horizontalLine';
import DrawerPoweredBy from 'components/molecules/drawerPoweredBy';
import DrawerUserInfo from 'components/molecules/drawerUserInfo';
import ModalTwoOptions from 'components/molecules/modalTwoOptions';
import HomeIcon from 'components/atoms/icons/home';
import DocumentIcon from 'components/atoms/icons/document';
import InstagramIcon from 'components/atoms/icons/instagram';
import FacebookIcon from 'components/atoms/icons/facebook';
import GithubIcon from 'components/atoms/icons/github';
import WebIcon from 'components/atoms/icons/web';
import GridIcon from 'components/atoms/icons/account2';
import TagIcon from 'components/atoms/icons/tag';
import SettingsIcon from 'components/atoms/icons/settings';
import InfoICon from 'components/atoms/icons/mail';
import AboutIcon from 'components/atoms/icons/circleInfo';
import LogoutIcon from 'components/atoms/icons/send';
import {signOut} from 'services/redux/actions';
import {Colors, Fonts} from 'theme';
import {screensNames} from 'constants/navigation';
import s from './drawerNavigator.styles';
import Accordion from 'components/atoms/accordion';

const Drawer = createDrawerNavigator();

const iconSize = 28;

poweredByData = [
  {
    id: '1',
    Icon: (
      <InstagramIcon
        size={iconSize}
        width={iconSize}
        height={iconSize}
        fill={Colors.white}
      />
    ),
    url: 'https://www.instagram.com/nyo_dev/',
  },
  {
    id: '2',
    Icon: (
      <FacebookIcon
        size={iconSize}
        width={iconSize}
        height={iconSize}
        fill={Colors.white}
      />
    ),
    url: 'https://www.facebook.com/nyo.dev/',
  },
  {
    id: '3',
    Icon: (
      <GithubIcon
        size={iconSize}
        width={iconSize}
        height={iconSize}
        fill={Colors.white}
      />
    ),
    url: 'https://github.com/Nyotrino-Dev/',
  },
  {
    id: '4',
    Icon: (
      <WebIcon
        size={iconSize}
        width={iconSize}
        height={iconSize}
        fill={Colors.white}
      />
    ),
    url: 'https://nyotrino.dev/',
  },
];

const DrawerCustomContent = ({...props}) => {
  const {userInfo} = useSelector(state => state.reducer);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle] = useState('هل انت متاكد من تسجيل الخروج ؟');
  const signOutFunction = () => dispatch(signOut());
  return (
    <DrawerContentScrollView
      contentContainerStyle={s.drawerWrapperForCustomDrawer}
      scrollEnabled={true}>
      <View style={s.drawerContainerForCustomDrawer}>
        <View>
          <DrawerUserInfo userInfo={userInfo} />
        </View>
        <HorizontalLine style={s.hr} />
        <DrawerItemList {...props} />
        <DrawerItem
          onPress={() => setModalVisible(true)}
          activeBackgroundColor={Colors.white}
          activeTintColor={Colors.primaryColor100}
          inactiveTintColor={Colors.primaryColor100}
          labelStyle={{...Fonts.smallTextBold}}
          style={{
            margin: 0,
            padding: 0,
          }}
          icon={({focused, color}) => (
            <LogoutIcon width={iconSize} height={iconSize} fill={color} />
          )}
          label={'تسجيل الخروج'}
        />
      </View>
      <View style={s.poweredBy}>
        <DrawerPoweredBy data={poweredByData} label={'محمد حازم'} />
      </View>
      <ModalTwoOptions
        colse={modalVisible}
        visible={modalVisible}
        title={modalTitle}
        onPressNoButton={() => {
          setModalVisible(false);
        }}
        onPressYesButton={() => {
          signOutFunction();
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = props => {
  return (
    <View style={s.drawerWrapper}>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: Colors.primaryColor100,
          drawerActiveTintColor: Colors.white,
          drawerInactiveTintColor: Colors.primaryColor100,
          drawerLabelStyle: {...Fonts.smallTextBold},
          drawerStyle: s.drawerContainer,
        }}
        drawerContent={drawerContentProps => {
          return (
            <DrawerCustomContent {...drawerContentProps} userInfo={props} />
          );
        }}
        initialRouteName={screensNames.homeScreen}>
        <Drawer.Screen
          name={screensNames.homeScreen}
          component={Home}
          options={({navigation}) => ({
            ...defaultHeaderConfig({navigation}),
            drawerLabel: 'الرئسية',
            drawerIcon: ({focused, color}) => (
              <HomeIcon width={iconSize} height={iconSize} fill={color} />
            ),
          })}
        />
        <Drawer.Screen
          name={screensNames.campaignsScreen}
          component={Campaigns}
          options={({navigation}) => ({
            ...defaultHeaderConfig({navigation}),
            drawerLabel: 'الحملات',
            drawerIcon: ({focused, color}) => (
              <DocumentIcon width={iconSize} height={iconSize} fill={color} />
            ),
          })}
        />
        <Drawer.Screen
          name={screensNames.donatorsScreen}
          component={Donators}
          options={({navigation}) => ({
            ...defaultHeaderConfig({navigation}),
            drawerLabel: 'المتبرعين',
            drawerIcon: ({focused, color}) => (
              <GridIcon width={iconSize} height={iconSize} fill={color} />
            ),
          })}
        />
        <Drawer.Screen
          name={screensNames.requestsScreen}
          component={Requests}
          options={({navigation}) => ({
            ...defaultHeaderConfig({navigation}),
            drawerLabel: 'الطلبات',
            drawerIcon: ({focused, color}) => (
              <TagIcon width={iconSize} height={iconSize} fill={color} />
            ),
          })}
        />
        <Drawer.Screen
          name={'00'}
          component={Requests}
          options={({navigation}) => ({
            ...defaultHeaderConfig({navigation}),
            drawerLabel: 'الأعدادات',
            drawerIcon: ({focused, color}) => (
              <SettingsIcon width={iconSize} height={iconSize} fill={color} />
            ),
          })}
        />
        <Drawer.Screen
          name={screensNames.contactUsScreen}
          component={ContactUs}
          options={({navigation}) => ({
            ...defaultHeaderConfig({navigation}),
            drawerLabel: 'تواصل معنا',
            drawerIcon: ({focused, color}) => (
              <InfoICon width={iconSize} height={iconSize} fill={color} />
            ),
          })}
        />
        {/* <Drawer.Screen
          name={screensNames.aboutScreen}
          component={About}
          options={({navigation}) => ({
            ...defaultHeaderConfig({navigation}),
            drawerLabel: 'حول',
            drawerIcon: ({focused, color}) => (
              <AboutIcon width={iconSize} height={iconSize} fill={color} />
            ),
          })}
        /> */}
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;
