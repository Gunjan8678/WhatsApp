import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import dayjs from 'dayjs';

const {width, height} = Dimensions.get('window');

const user = 'Gia';
const Message = ({message}) => {
  return (
    <View
      style={[
        styles.msgBox,
        {
          backgroundColor: message.user === user ? '#E1FAC8' : '#FFFFFF',
          alignSelf: message.user === user ? 'flex-end' : 'flex-start',
        },
      ]}>
      <Text style={styles.text}>{message.text}</Text>
      <Text style={styles.time}>
        {dayjs(message.createdAt).format('HH:mm')}
      </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  msgBox: {
    marginHorizontal: 6,
    marginVertical: 3,
    paddingVertical: 3,
    paddingHorizontal: 8,
    maxWidth: width * 0.7,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#36454F',
  },
  time: {
    fontSize: 10,
    fontWeight: '400',
    color: '#ccc',
    textAlign: 'right',
  },
});
