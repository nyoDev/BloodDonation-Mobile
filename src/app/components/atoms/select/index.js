import React, {useState, useCallback, useMemo} from 'react';
import {string, arrayOf, shape, func, oneOf, bool} from 'prop-types';
import {TouchableWithoutFeedback, View} from 'react-native';
import {format} from 'date-fns';
import ModalDatePicker from 'components/atoms/modalDatePicker';
import ModalSelectPicker from 'components/atoms/modalSelectPicker';
import InputLabel from 'components/atoms/input/inputLabel';
import ChevronDown from 'components/atoms/icons/chevronArrowDown';
import DatePickerIcon from 'components/atoms/icons/calendar';
import Text from 'components/atoms/text';
import {fontNames} from 'theme/fonts';
import Colors, {colorNames} from 'theme/colors';
import s from './select.styles';

const containerThemes = {
  third: s.containerThird,
};

const wrapperThemes = {
  primary: s.selectWrapperPrimary,
  secondary: s.selectWrapperSecondary,
  third: s.selectWrapperThird,
};

const textThemes = {
  primary: s.textStyle,
  secondary: s.textStyle,
  third: s.thirdTextStyle,
};

const iconFillTheme = {
  primary: Colors.silver,
  secondary: Colors.silver,
  third: Colors.black,
};

const iconStyle = {
  primary: s.icon,
  secondary: s.icon,
  third: s.thirdIcon,
};

const iconSize = {
  primary: {
    width: 24,
    height: 24,
  },
  secondary: {
    width: 24,
    height: 24,
  },
  third: {
    width: 16,
    height: 16,
  },
};

const Select = ({
  options,
  value,
  onSelect,
  placeholder,
  theme,
  isDatePicker,
  label,
  style,
}) => {
  const [selectVisible, setSelectVisibility] = useState(false);
  const [valueState, setValueState] = useState(value);

  const closeSortModal = useCallback(() => {
    setSelectVisibility(false);
  }, []);

  const openSortModal = useCallback(() => {
    setSelectVisibility(true);
  }, []);

  const OpenerComponent = useMemo(
    () => (
      <View style={[s.container, containerThemes[theme], style]}>
        {label && <InputLabel small={theme === 'third'}>{label}</InputLabel>}
        <TouchableWithoutFeedback onPress={openSortModal}>
          <View
            style={[
              s.selectWrapper,
              wrapperThemes[theme],
              selectVisible && s.selected,
            ]}>
            {valueState ? (
              <Text
                type={
                  theme === 'third'
                    ? fontNames.labelRegular
                    : fontNames.labelRegular
                }
                textStyle={textThemes[theme]}>
                {valueState instanceof Date
                  ? format(new Date(valueState), 'dd/MMM/yyyy')
                  : valueState?.label}
              </Text>
            ) : (
              <Text
                type={
                  theme === 'third'
                    ? fontNames.labelRegular
                    : fontNames.labelRegular
                }
                textStyle={textThemes[theme]}
                color={colorNames.silver}>
                {placeholder}
              </Text>
            )}
            {isDatePicker ? (
              <DatePickerIcon
                fill={iconFillTheme[theme]}
                {...iconSize[theme]}
                style={iconStyle[theme]}
              />
            ) : (
              <ChevronDown
                {...iconSize[theme]}
                fill={iconFillTheme[theme]}
                style={iconStyle[theme]}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    ),
    [
      theme,
      placeholder,
      value,
      openSortModal,
      label,
      isDatePicker,
      selectVisible,
    ],
  );

  const Component = useMemo(
    () => (isDatePicker ? ModalDatePicker : ModalSelectPicker),
    [isDatePicker],
  );

  const handleSelect = useCallback(
    value => {
      onSelect?.(value);
      setValueState(value);
    },
    [setValueState, onSelect],
  );

  return (
    <Component
      close={closeSortModal}
      visible={selectVisible}
      title={placeholder}
      value={valueState?.value}
      onSelect={handleSelect}
      onChange={handleSelect}
      options={options}
      date={value}
      OpenerComponent={OpenerComponent}
    />
  );
};

const selectShape = shape({
  label: string,
  value: string,
});

Select.propTypes = {
  options: arrayOf(selectShape).isRequired,
  value: selectShape,
  placeholder: string.isRequired,
  onSelect: func,
  theme: oneOf(['primary', 'secondary', 'third']),
  isDatePicker: bool,
  label: string,
};

Select.defaultProps = {
  theme: 'primary',
};

export default Select;
