import firestore from '@react-native-firebase/firestore';
import {uploadPostImage, getDownloadURL} from 'services/firebase/storage';
import {idGeneratorFunction} from 'services/randomIdGenerator';
import {exFileExtentionFunction} from 'services/exFileExtention';

export const createUserData = async (userId, data) => {
  const imageName =
    idGeneratorFunction(data.userImage) +
    '.' +
    exFileExtentionFunction(data.userImage);

  return await uploadPostImage(
    `/users/${userId}/images/profileImage/${imageName}`,
    data.userImage,
  )
    .then(async () => {
      return await getDownloadURL(
        `/users/${userId}/images/profileImage/${imageName}`,
      )
        .then(async returnedData => {
          return await firestore()
            .collection('users')
            .doc(userId)
            .set({
              userInfo: {
                userId: userId,
                userImage: returnedData,
                userFullName: data.userFullName,
                userEmail: data.userEmail,
                userPhoneNumber: data.userPhoneNumber,
                userPassword: data.userPassword,
                userGender: data.userGender,
                userBloodGroup: data.userBloodGroup,
                userLocation: data.userLocation,
                userDonationsCount: 0,
                userRequestsCount: 0,
               // userPostsCount: 0,
              //userBio: '',
              //  userIsDonator: data.userIsDonator,
                userIsBlocked: false,
                userAge:data.userAge,
                userWeight:data.userWeight
              },
            });
        })
        .catch(e => {
          console.log(e);
        });
    })
    .catch(e => {
      console.log(e);
    });
};
export const getUserData = async userId => {
  return await firestore().collection('users').doc(userId).get();
};
export const addPostFunction = async (userId, data, userInfo) => {
  return await uploadPostImage(
    `/PostsImages/Users/${userId}/image`,
    data.postImage,
  )
    .then(() => {
      getDownloadURL(`/PostsImages/Users/${userId}/image`)
        .then(returnedData => {
          firestore()
            .collection('users')
            .doc(userId)
            .collection('userPosts')
            .add({
              postInfo: {
                postImage: returnedData,
                postCaption: data.postCaption,
                postComments: [],
                postUserFullName: userInfo.userFullName,
                postUserId: userInfo.userId,
                //  postAddTime: data.postAddTime,
                postUserLocation: data.postUserLocation,
              },
            });
        })
        .catch(e => {
          console.log(e);
        });
    })
    .catch(e => {
      console.log(e);
    });
};
export const getPosts = async (userId, data) => {
  return await firestore().collectionGroup('userPosts').get();
};
export const addRequest = async (userId, data) => {
  firestore()
    .collection('users')
    .doc(userId)
    .collection('userRequests')
    .add({
      requestInfo: {
        requestBloodGroup: data.requestBloodGroup,
        requestLocation: data.requestLocation,
        userRequestName: data.userRequestName,
        userRequestId: data.userRequestId,
        userRequestImage: data.userRequestImage,
        userRequestLocation: data.userRequestLocation,
      },
    });
};
export const getRequests = async () => {
  return await firestore().collectionGroup('userRequests').get();
};
export const getRequestsCount = async () => {
  return await firestore().collectionGroup('userRequests').get();
};
export const getUsersCount = async userId => {
  return await firestore().collection('users').get();
};
export const addContactUsMessage = async (userId, data) => {
  const newDoc = firestore()
    .collection('users')
    .doc(userId)
    .collection('contactUsMessages')
    .doc();
  const newDocRef = await newDoc.get();
  return await firestore()
    .collection('users')
    .doc(userId)
    .collection('contactUsMessages')
    .doc(newDocRef.id)
    .set({
      messageInfo: {
        messageUserId: userId,
        messageUserFullName: data.messageUserFullName,
        messageUserPhoneNumber: data.messageUserPhoneNumber,
        messageUserEmail: data.messageUserEmail,
        messageId: newDocRef.id,
        messageSubject: data.messageSubject,
        messageContent: data.messageContent,
        messageDate: new firestore.Timestamp.now(),
        messageStatus: 'unReplied',
        messageReplay: '',
      },
    });
};
export const getContactUsMessages = async (userId, limit = 1) => {
  return await firestore()
    .collection('users')
    .doc(userId)
    .collection('contactUsMessages')
    .orderBy('requestInfo.messageDate', 'desc')
    .limit(limit)
    .get();
};
export const getContactUsLoadMoreMessages = async (
  userId,
  limit = 1,
  lastDoc,
) => {
  return await firestore()
    .collection('users')
    .doc(userId)
    .collection('contactUsMessages')
    .orderBy('requestInfo.messageDate', 'desc')
    .startAfter(lastDoc)
    .limit(limit)
    .get();
};
export const deleteContactUsLoadMoreMessage = async (userId, messageId) => {
  return await firestore()
    .collection('users')
    .doc(userId)
    .collection('contactUsMessages')
    .doc(messageId)
    .delete();
};
