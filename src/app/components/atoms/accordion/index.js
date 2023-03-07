import React, {useState, useCallback} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import Animated from 'react-native-reanimated';
import {mix, useTransition} from 'react-native-redash';

import Text from 'components/atoms/text';
import {fontNames} from 'theme/fonts';
import Chevron from './chevron';
import s from './accordion.styles';

const Accordion = ({title, onExpand, Content}) => {
  const [open, setOpen] = useState(false);
  const [heightIsSetUp, setUpHeightFlag] = useState(false);
  const [heightInterpolation, setHeightInterpolation] = useState();
  const transition = useTransition(open);

  const onLayout = useCallback(
    event => {
      const {height} = event.nativeEvent.layout;

      if (!heightIsSetUp) {
        setOpen(false);
        setUpHeightFlag(true);
        setHeightInterpolation(mix(transition, 0, height));
      }
    },
    [heightIsSetUp, transition],
  );

  const onPress = useCallback(() => {
    setOpen(openState => {
      !openState && onExpand && onExpand();

      return !openState;
    });
  }, [onExpand]);

  return (
    <View style={s.headerWrapper}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={s.headerContainer}>
          <Text type={fontNames.header3}>{title}</Text>
          <Chevron transition={transition} />
        </View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          s.headerItemsWrapper,
          heightIsSetUp && {
            height: heightInterpolation,
          },
        ]}
        onLayout={onLayout}>
        <Animated.View style={[s.contentWrapper]}>
          <Text>{Content}</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;
