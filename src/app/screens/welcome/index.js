import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  FlatList,
  Animated,
  Image,
  useWindowDimensions,
} from 'react-native';
import Container from 'components/templates/container';
import Text from 'components/atoms/text';
import Button from 'components/atoms/button';
import {screensNames} from 'constants/navigation';
import {images} from 'images';
import {Colors} from 'theme';

const Paginator = ({data, scrollX, style}) => {
  const {width} = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: 'row-reverse',
        ...style,
      }}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={{
              width: dotWidth,
              height: 7,
              margin: 4,
              borderRadius: 5,
              opacity: opacity,
              backgroundColor: Colors.primaryColor100,
            }}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
};
const Welcome = () => {
  const slidesArray = [
    {
      title: 'تبرع بالدم \n مع تطبيق قطرة',
      description:
        'مع تطبيق قطرة يمكنك الان انشاء حساب متبرع بالدم وتحديد فصيلة دمك ويمكن للمحتاجين التواصل معك من خلال التطبيق .',
      source: images.signIn,
      onPressButton: () =>
        slideRef.current.scrollToIndex({index: currentIndex + 1}),
      buttonTitle: 'التالي',
    },
    {
      title: 'البحث عن المتبرعين\n بالفصيلة المطابقة',
      description:
        'يمكنك من خلال التطبيق البحث عن المتبرعين بالدم الذين تتطابق فصال دمهم مع تلك المطلوبة من قبلك من خلال استخدام طرق الفرز المتواجدة بالتطبيق .',
      source: images.search,
      onPressButton: () =>
        slideRef.current.scrollToIndex({index: currentIndex + 1}),
      buttonTitle: 'التالي',
    },
    {
      title: 'جدار المنشورات في \n التطبيق',
      description:
        'في حالة عدم وجود متبرع مناسب لطلبك يمكنك انشاء مشنور لطلب متبرع وشرح الحالة التي تحتاج وسيظهر في لوحة المنشورات .',
      source: images.post2,
      onPressButton: () =>
        reset({
          index: 0,
          routes: [{name: screensNames.signIn}],
        }),
      buttonTitle: 'ابدأ',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides] = useState(slidesArray.length);
  const [isSkipped, setIsSkipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {reset} = useNavigation();
  const {width} = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef();
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  useEffect(() => {
    isSkipped
      ? () =>
          reset({
            index: 0,
            routes: [{name: screensNames.signIn}],
          })
      : setIsLoading(false);
  }, []);
  const onPressSwipeButton = () => {
    currentIndex != totalSlides - 1
      ? slideRef.current.scrollToIndex({
          index: currentIndex + 1,
        })
      : reset({
          index: 0,
          routes: [{name: screensNames.signIn}],
        });
  };
  const onPressSkippButton = () => {
    reset({
      index: 0,
      routes: [{name: screensNames.singIn}],
    });
  };
  return (
    <Container
      scrollable={false}
      withPadding={false}
      fullDimensions
      loading={isLoading}
      style={{
        backgroundColor: Colors.white,
      }}>
      <Button
        style={{elevation: 0, backgroundColor: Colors.white}}
        color={Colors.primaryColor100}
        onPress={onPressSkippButton}
        text={'تخطي'}
        size="small"
      />
      <FlatList
        horizontal
        pagingEnabled
        bounces={false}
        data={slidesArray}
        ref={slideRef}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={30}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item}) => (
          <View
            style={{
              width: width,
              paddingBottom: 50,
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: width / 1,
                height: width / 1,
              }}
              resizeMode="center"
              source={item.source}
            />
            <View
              style={{
                paddingLeft: 10,
              }}>
              <Text
                textStyle={{
                  lineHeight: 35,
                }}
                type="header3"
                color={Colors.primaryColor100}>
                {item.title}
              </Text>
              <Text
                textStyle={{
                  lineHeight: 25,
                  marginTop: 10,
                  width: width - 30,
                }}
                type="smallTextRegular"
                color={Colors.primaryColor55}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          bottom: 0,
        }}>
        <Paginator data={slidesArray} scrollX={scrollX} />
        <Button
          onPress={onPressSwipeButton}
          text={currentIndex < 2 ? 'التالي' : 'ابدأ'}
          size="small"
        />
      </View>
    </Container>
  );
};

export default Welcome;
