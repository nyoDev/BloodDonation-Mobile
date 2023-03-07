import auth from '@react-native-firebase/auth';
import {getUserData, createUserData} from 'services/firebase/firestore';

export const signInFunction = async data => {
  return await auth()
    .signInWithEmailAndPassword(data.userEmail, data.userPassword)
    .then(returnedData => getUserData(returnedData.user.uid));
};
export const signUpFunction = async data => {
  return await auth()
    .createUserWithEmailAndPassword(data.userEmail, data.userPassword)
    .then(async returnedData => {
      const userId = returnedData.user.uid;
      return await createUserData(userId, data).then(async () => {
        return await getUserData(userId);
      });
    });
};
export const signOutFunction = async () => {
  auth().signOut();
};
