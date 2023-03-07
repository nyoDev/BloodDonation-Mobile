import React, {useState, useEffect} from 'react';
import Container from 'components/templates/container';
import RequestList from 'components/organisms/requestList';
import RequestsDashboard from 'components/organisms/requestsDashboard';
import {getRequests,getRequestsCount} from 'services/firebase/firestore';
import {images} from 'images';

const Requests = () => {
  const [data, setData] = useState([
    {
      userId: '0000',
      userProfileImage: images.avatar,
      userFullName: 'محمد حازم صكبان',
      userLocation: 'الديوانية',
      userBloodGroup: 'AB+',
    },
    {
      userId: '0000',
      userProfileImage: images.avatar,
      userFullName: 'محمد حازم صكبان',
      userLocation: 'الديوانية',
      userBloodGroup: 'AB+',
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [requestsCount, setRequestsCount] = useState(0);

  useEffect(() => {
    getRequests()
      .then(returnedData => {
        const data = returnedData._docs;
        setData(data);
        getRequestsCount()
        .then(returnedData => {
          setRequestsCount(returnedData.size);
          setIsLoading(false);
        })
        .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }, []);
  return (
    <Container withPadding={false} scrollable={false} isLoading={isLoading}>
      <RequestsDashboard label={requestsCount} />
      <RequestList data={data} />
    </Container>
  );
};
export default Requests;
