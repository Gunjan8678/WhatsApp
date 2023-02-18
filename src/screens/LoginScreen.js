import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState, useContext} from 'react';
import {AuthContext} from '../features/Context';
// import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  // const navigation = useNavigation();
  const authCtxt = useContext(AuthContext);
  console.log('first', authCtxt);
  const [data, setData] = useState({
    country: 'United States',
    number: '',
    crtyCode: '1',
  });

  // const onLoggingIn = () => {

  // };

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View>
        <Text style={styles.headText}>Verify your Number</Text>
        <TextInput
          editable={false}
          style={[styles.ctryBox, styles.text]}
          value={data.country}
        />
        <View style={styles.numBox}>
          <TextInput
            editable={false}
            style={[styles.numCtry, styles.text]}
            keyboardType="number"
            maxLength={3}
            value={data.crtyCode}
          />
          <TextInput
            editable={true}
            style={[styles.number, styles.text]}
            keyboardType="numeric"
            maxLength={10}
            value={data.number}
            onChangeText={text => {
              setData({...data, number: text});
            }}
          />
        </View>
      </View>

      {/* <Button
        // onPress={onPressLearnMore}
        title="Next"
        color="#286453"
        // accessibilityLabel="Next"
      /> */}
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          styles.btn,
        ]}
        // onPress={onLoggingIn}
      >
        <Text style={{...styles.text, color: '#fff'}}>Next</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  heading: {
    borderColor: 'red',
    borderWidth: 1,
  },
  headText: {
    textAlign: 'center',
    color: '#286453',
    fontSize: 16,
    fontWeight: '800',
    marginVertical: 20,
  },
  ctryBox: {
    borderBottomColor: '#286453',
    borderBottomWidth: 1,
    padding: 2,
    fontWeight: '500',
    alignSelf: 'center',
    width: '60%',
    textAlign: 'center',
  },
  numBox: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  numCtry: {
    borderBottomColor: '#286453',
    borderBottomWidth: 1,
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  number: {
    width: '80%',
    borderBottomColor: '#286453',
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  btn: {
    backgroundColor: '#286453',
    alignSelf: 'center',
    paddingVertical: 7,
    paddingHorizontal: 20,
    color: '#fff',
    marginBottom: 20,
    borderRadius: 3,
  },
});
