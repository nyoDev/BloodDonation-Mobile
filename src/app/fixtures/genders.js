import React from 'react';
import Male from 'components/atoms/icons/male';
import Female from 'components/atoms/icons/female';
import {Colors} from 'theme';

const iconSize = 25;

const genders = [
  {
    value: 'male',
    label: 'رجل',
    Icon: ({...props}) => (
      <Male
        size={iconSize}
        width={iconSize}
        height={iconSize}
        fill={Colors.primaryColor100}
        {...props}
      />
    ),
  },
  {
    value: 'female',
    label: 'انثى',
    Icon: ({...props}) => (
      <Female
        size={iconSize}
        width={iconSize}
        height={iconSize}
        fill={Colors.primaryColor100}
        {...props}
      />
    ),
  },
];

export default genders;
