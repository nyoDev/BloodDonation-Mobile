import React, {useState} from 'react';
import Container from 'components/templates/container';
import DonatorList from 'components/organisms/donatorList';
import Text from 'components/atoms/text';
import {images} from 'images';
import {Colors} from 'theme';

const Donators = () => {
  const [data, setData] = useState([
    {
      userId: '0000',
      userProfileImage: images.avatar,
      userFullName: 'محمد حازم صكبان',
      userLocation: 'الديوانية',
      userBloodGroup: 'AB+',
      userLastDateDonate: '14/10/2021',
      donatesCount: 50,
    },
    {
      userId: '0000',
      userProfileImage: images.avatar,
      userFullName: 'محمد حازم صكبان',
      userLocation: 'الديوانية',
      userBloodGroup: 'AB+',
      donatesCount: 4,
    },
  ]);
  return (
    <Container
      style={{
        backgroundColor: Colors.white,
      }}
      withPadding={false}
      scrollable={false}>
      <DonatorList data={data} />
    </Container>
  );
};
export default Donators;
