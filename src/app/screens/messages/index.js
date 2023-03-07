import React, {useEffect, useState} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import 'moment/locale/ar';
import 'moment-timezone';
import Container from 'components/templates/container';
import Text from 'components/atoms/text';
import Button from 'components/atoms/button';
import TextWithIcon from 'components/atoms/textWithIcon';
import CircleSuccess from 'components/atoms/icons/circleSuccess';
import CircleWarningIcon from 'components/atoms/icons/circleWarning';
import CircleCancelIcon from 'components/atoms/icons/circleCancel';
import ModalTwoOptions from 'components/molecules/modalTwoOptions';
import ModalConfirm from 'components/molecules/modalConfirm';
import {
  getContactUsMessages,
  getContactUsLoadMoreMessages,
  deleteContactUsLoadMoreMessage,
} from 'services/firebase/firestore';
import {Colors} from 'theme';

moment.locale('ar');

const tabIcon2Size = 18;

const Messages = () => {
  const {userInfo} = useSelector(state => state.reducer);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingLoadMore, setIsLoadingLoadMore] = useState(false);
  const [lastItem, setLastItem] = useState('');
  const [data, setData] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [messageInfo, setMessageInfo] = useState('');
  const [modalTitleForConfirmMessage, setModalTitleForConfirmMessage] =
    useState('');
  const [modalVisibleForConfirmMessage, setModalVisibleForConfirmMessage] =
    useState(false);

  useEffect(() => {
    getContactUsMessages(userInfo.userId)
      .then(returnedData => {
        setData(returnedData._docs);
        setLastItem(returnedData.docs[returnedData.docs.length - 1]);
        setIsLoading(false);
      })
      .catch(e => console.log(e));
  }, []);

  const transform = date => {
    var ll = new Date(date.seconds * 1000).toUTCString();
    return moment(ll).tz('Asia/Baghdad', true).fromNow();
  };
  const MessageItem = ({item, index}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: Colors.white,
        borderTopWidth: 1,
        borderColor: Colors.light,
        paddingVertical: 20,
      }}>
      <View
        style={{
          alignItems: 'flex-start',
        }}>
        <Text type="smallTextBold" color={Colors.black}>
          {item._data.requestInfo.messageSubject}
        </Text>
        <Text
          type="tinyTextBold"
          color={Colors.silver}
          textStyle={{
            marginRight: 1,
          }}>
          {transform(item._data.requestInfo.messageDate)}
        </Text>
        <TextWithIcon
          type="tinyTextBold"
          label={
            item._data.requestInfo.messageStatus === 'replied'
              ? 'تم الرد'
              : item._data.requestInfo.messageStatus === 'unReplied'
              ? 'لم يتم الرد'
              : 'غير معروف'
          }
          color={
            item._data.requestInfo.messageStatus === 'replied'
              ? Colors.success100
              : item.messageStatus === 'unReplied'
              ? Colors.warning100
              : Colors.alert100
          }
          style={{
            marginTop: 2,
          }}
          Icon={() => {
            return item._data.requestInfo.messageStatus === 'replied' ? (
              <CircleSuccess
                size={tabIcon2Size}
                width={tabIcon2Size}
                height={tabIcon2Size}
                fill={
                  item._data.requestInfo.messageStatus === 'replied'
                    ? Colors.success100
                    : item.messageStatus === 'unReplied'
                    ? Colors.warning100
                    : Colors.alert100
                }
              />
            ) : item._data.requestInfo.messageStatus === 'unReplied' ? (
              <CircleWarningIcon
                size={tabIcon2Size}
                width={tabIcon2Size}
                height={tabIcon2Size}
                fill={
                  item._data.requestInfo.messageStatus === 'replied'
                    ? Colors.success100
                    : item.messageStatus === 'unReplied'
                    ? Colors.warning100
                    : Colors.alert100
                }
              />
            ) : (
              <CircleCancelIcon
                size={tabIcon2Size}
                width={tabIcon2Size}
                height={tabIcon2Size}
                fill={
                  item._data.requestInfo.messageStatus === 'replied'
                    ? Colors.success100
                    : item.messageStatus === 'unReplied'
                    ? Colors.warning100
                    : Colors.alert100
                }
              />
            );
          }}
        />
      </View>
      <View>
        <Button
          onPress={() => {
            setMessageInfo(item._data.requestInfo);
            setModalTitle('هل انت متأكد من حذف الرسالة ؟');
            setModalVisible(true);
          }}
          theme={'ghost'}
          size="small"
          text={'حذف'}
        />
      </View>
    </View>
  );
  return (
    <Container
      withPadding={false}
      scrollable={false}
      isLoading={isLoading}
      style={{
        backgroundColor: Colors.white,
      }}>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              setIsRefreshing(true);
              getContactUsMessages(userInfo.userId)
                .then(returnedData => {
                  setData(returnedData._docs);
                  setIsRefreshing(false);
                })
                .catch(e => {
                  setIsRefreshing(false);
                  console.log(e);
                });
            }}
          />
        }
        renderItem={({item, index}) => (
          <MessageItem item={item} index={index} />
        )}
        ListFooterComponent={() => (
          <View
            style={{
              paddingVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              onPress={() => {
                setIsLoadingLoadMore(true);
                getContactUsLoadMoreMessages(userInfo.userId, 1, lastItem)
                  .then(returnedData => {
                    setData(data => [...data, ...returnedData._docs]);
                    setLastItem(
                      returnedData.docs[returnedData.docs.length - 1],
                    );
                    setIsLoadingLoadMore(false);
                  })
                  .catch(e => {
                    console.log(e);
                    setIsLoadingLoadMore(false);
                  });
              }}
              size="small"
              loading={isLoadingLoadMore}
              disabled={isLoadingLoadMore}
              text={'تحميل المزيد'}
            />
          </View>
        )}
      />
      <ModalTwoOptions
        colse={modalVisible}
        visible={modalVisible}
        title={modalTitle}
        onPressNoButton={() => {
          setModalVisible(false);
        }}
        onPressYesButton={() => {
          setModalVisible(false);
          deleteContactUsLoadMoreMessage(userInfo.userId, messageInfo.messageId)
            .then(() => {
              setModalTitleForConfirmMessage('تم حذف الرسالة بنجاح');
              setModalVisibleForConfirmMessage(true);
            })
            .catch(e => {
              setModalTitleForConfirmMessage(
                'حدث خطأ ما لم يتم حذف الرسالة بنجاح',
              );
              setModalVisibleForConfirmMessage(true);
              console.log(e);
            });
        }}
      />
      <ModalConfirm
        colse={modalVisibleForConfirmMessage}
        visible={modalVisibleForConfirmMessage}
        title={modalTitleForConfirmMessage}
        onPressButton={() => {
          setModalVisibleForConfirmMessage(false);
        }}
      />
    </Container>
  );
};

export default Messages;
