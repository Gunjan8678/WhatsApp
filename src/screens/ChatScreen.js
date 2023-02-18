import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Message from '../components/Message';
import Input from '../components/Input';

const messages = [
  {
    id: '1',
    user: 'Gia',
    text: 'hi',
    createdAt: '2020-09-27T15:40:00.000Z',
  },
  {
    id: '2',
    user: 'Sia',
    text: 'hello hjgyghvkg uyfcuigkjhg ytuyfkfyfj shlhgoirtjdhkirhthhdglrhihdgkd',
    createdAt: '2020-09-27T15:40:00.000Z',
  },
  {
    id: '3',
    user: 'Ria',
    text: 'hello',
    createdAt: '2020-09-27T15:40:00.000Z',
  },
  {
    id: '4',
    user: 'Tia',
    text: 'hello',
    createdAt: '2020-09-27T15:40:00.000Z',
  },
  {
    id: '5',
    user: 'Mia',
    text: 'hello',
    createdAt: '2020-09-27T15:40:00.000Z',
  },
  {
    id: '6',
    user: 'Nia',
    text: 'hello',
    createdAt: '2020-09-27T15:40:00.000Z',
  },
];

const ChatScreen = () => {
  return (
    <>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg',
        }}
        style={{flex: 1}}>
        <FlatList
          data={messages}
          renderItem={({item}) => <Message message={item} />}
          keyExtractor={item => item.id}
        />

        <Input />
      </ImageBackground>
    </>
  );
};

export default ChatScreen;

// const styles = StyleSheet.create({});
