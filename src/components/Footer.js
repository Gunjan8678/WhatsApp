import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Footer = ({onPress}) => {
  return (
    <Pressable
      style={({pressed}) => [{opacity: pressed ? 0.5 : 1}, styles.footer]}
      onPress={onPress}>
      <MaterialIcons name="chat" color="#fff" size={20} />
    </Pressable>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#286453',
  },
});
