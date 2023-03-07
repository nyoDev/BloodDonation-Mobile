import React from 'react';
import {FlatList} from 'react-native';
import RequestCard from 'components/molecules/requestCard';

const RequestList = ({data}) => {
  return (
    <FlatList
      renderItem={({item}) => <RequestCard item={item} />}
      data={data}
    />
  );
};
export default RequestList;
