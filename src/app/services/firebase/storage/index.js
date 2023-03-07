import storage from '@react-native-firebase/storage';

export const uploadPostImage = async (imageName, image) => {
  return await storage().ref(imageName).putFile(image);
};
export const getDownloadURL = async (ref) => {
  return await storage().ref(ref).getDownloadURL();
};
