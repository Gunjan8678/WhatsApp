import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

const Input = () => {
  const [input, setInput] = useState('');
  const onSend = () => {
    console.log('input', input);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.inputBox}>
      <TextInput
        placeholder="Message"
        keyboardType="default"
        multiline={true}
        value={input}
        style={styles.input}
        scrollEnabled
        onChangeText={text => setInput(text)}
      />
      <MaterialIcons
        style={styles.sendBtn}
        name="send"
        size={25}
        color="white"
        light
      />
    </KeyboardAvoidingView>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputBox: {
    // backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingRight: 5,
  },
  input: {
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 20,
    margin: 3,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: width * 0.86,
    backgroundColor: '#FFFFFF',
  },
  sendBtn: {
    backgroundColor: '#286453',
    padding: 6,
    borderRadius: 30,
  },
});
