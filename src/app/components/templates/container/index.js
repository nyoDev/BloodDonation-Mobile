import React, {useMemo} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {bool, func, node, string} from 'prop-types';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'components/atoms/button';
import ActivityIndicator from 'components/atoms/activityIndicator';
import {Colors} from 'theme';
import {ApplicationStyles} from 'theme/index';
import s from './container.styles';

const Container = ({
  children,
  withPadding,
  scrollable,
  style,
  fullDimensions,
  isGradient,
  isLoading,
  gradientProps,
  withFloatingButton,
  onPressFloatingButton,
  floatingButtonText,
  StickyBottomComponent,
}) => {
  const Component = useMemo(
    () =>
      scrollable ? KeyboardAwareScrollView : isGradient ? LinearGradient : View,
    [scrollable],
  );
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      <SafeAreaView style={[ApplicationStyles.screen.layoutWrapper, style]}>
        <Component
          contentInsetAdjustmentBehavior="automatic"
          style={[
            !scrollable && !withPadding
              ? {}
              : ApplicationStyles.screen.container,
            fullDimensions && {height: '100%', width: '100%'},
            isLoading ? {flex: 1, justifyContent: 'center'} : null,
          ]}
          contentContainerStyle={
            scrollable && withPadding && ApplicationStyles.screen.container
          }
          {...(isGradient && gradientProps)}
          enableOnAndroid>
          {isLoading ? (
            <ActivityIndicator color={Colors.primaryColor100} />
          ) : (
            [children]
          )}
        </Component>

        {isLoading ? null : StickyBottomComponent && StickyBottomComponent()}
        {isLoading
          ? null
          : withFloatingButton && (
              <View style={s.floatingButton}>
                <Button
                  onPress={onPressFloatingButton}
                  text={floatingButtonText}
                />
              </View>
            )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

Container.propTypes = {
  children: node,
  withPadding: bool,
  scrollable: bool,
  isGradient: bool,
  withFloatingButton: bool,
  onPressFloatingButton: func,
  floatingButtonText: string,
  StickyBottomComponent: func,
};

Container.defaultProps = {
  scrollable: true,
  withPadding: true,
};

export default Container;
