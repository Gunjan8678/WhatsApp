import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
import ChatListItem from '../components/ChatListItem';
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Footer';
// import Contacts from 'react-native-contacts';

const users = [
  {
    id: '1',
    user: {
      userId: 'u1',
      name: 'Gia',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
    },
    lastMessage: {
      id: 'm1',
      text: 'last Message sdlkfjlsjlfksjlkfjs',
      createdAt: '2020-09-27T15:40:00.000Z',
    },
  },
  // {
  //   id: '2',
  //   user: {
  //     userId: 'u2',
  //     name: 'Sia',
  //     image:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
  //   },
  //   lastMessage: {
  //     id: 'm2',
  //     text: 'last Message sdlkfjlsjlfksjlkfjs',
  //     createdAt: '2020-09-27T15:40:00.000Z',
  //   },
  // },
  // {
  //   id: '3',
  //   user: {
  //     userId: 'u3',
  //     name: 'Ria',
  //     image:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
  //   },
  //   lastMessage: {
  //     id: 'm3',
  //     text: 'last Message sdlkfjlsjlfksjlkfjs',
  //     createdAt: '2020-09-27T15:40:00.000Z',
  //   },
  // },
];

// const onPress = () => {
//   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
//     title: 'Contacts',
//     message: 'This app would like to view your contacts.',
//     buttonPositive: 'Please accept bare mortal',
//   }).then(
//     Contacts.getAll()
//       .then(contacts => {
//         // work with contacts
//         console.log(contacts);
//       })
//       .catch(e => {
//         console.log(e);
//       }),
//   );
// };

const ChatsScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Pressable onPress={() => navigation.navigate('Chat')}>
        <View>
          {/* {users.map(item => {
        return <ChatListItem chat={item} />;
      })} */}
          {/* <Text>Hello</Text> */}

          <FlatList
            data={users}
            renderItem={({item}) => <ChatListItem chat={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </Pressable>
      <Footer onPress={onPress} />
    </>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({});
