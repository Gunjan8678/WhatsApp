import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.headerBox}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
        WhatsApp
      </Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Ionicons name="camera-outline" size={23} style={styles.icons} />
        <Ionicons name="search" size={20} style={styles.icons} />
        <Ionicons name="ellipsis-vertical" size={19} style={styles.icons} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBox: {
    backgroundColor: '#286453',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icons: {
    color: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
  },
});
