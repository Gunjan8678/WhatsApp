import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import dayjs from 'dayjs';

const {width, height} = Dimensions.get('window');

const ChatListItem = ({chat}) => {
  return (
    <View style={styles.chatBox}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
        }}
        style={styles.image}
      />
      <View style={styles.chatInfo}>
        <View style={styles.userDetailBox}>
          <Text style={styles.user}>{chat.user.name} </Text>
          <Text style={styles.time}>
            {dayjs(chat.lastMessage.createdAt).format('HH:mm')}
          </Text>
        </View>
        <Text numberOfLines={1} style={styles.message}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </View>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  chatBox: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: width * 0.12,
    height: height * 0.06,
    borderRadius: 40,
  },
  chatInfo: {
    width: width * 0.75,
  },

  userDetailBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    fontSize: 16,
    fontWeight: '600',
    color: 'gray',
  },
  time: {fontSize: 12, fontWeight: '400', color: 'gray'},
  message: {
    fontSize: 14,
    fontWeight: '400',
    color: 'gray',
  },
});
