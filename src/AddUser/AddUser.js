/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// import {ActivityIndicator} from 'react-native';
import {Divider} from 'react-native-elements';

export default function AddUsers({navigation}) {
  const TambahData = () => {
    navigation.navigate('Form');
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <Text style={styles.label}>Total User : </Text>
        <TouchableOpacity style={styles.tombol} onPress={TambahData}>
          <Text style={styles.textTombol}>Add User</Text>
        </TouchableOpacity>
      </View>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 20,
    width: 170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 15,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 15,
    marginLeft: 15,
  },
  tombol: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#66ccff',
  },
});
