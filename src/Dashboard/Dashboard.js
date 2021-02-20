/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
// import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Dashboard() {
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <View style={{marginTop: 5}}>
      <KeyboardAwareScrollView>
        <View>
          <Text style={styles.text}> Nama : </Text>
          <TextInput placeholder="Nama" style={styles.input} />
        </View>
        <View>
          <Text style={styles.text}> Jenis Kelamin : </Text>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Pilih Jenis Kelamin" />
            <Picker.Item label="Pria" value="pria" />
            <Picker.Item label="Wanita" value="wanita" />
          </Picker>
        </View>
        <View>
          <Text style={styles.text}> Umur : </Text>
          <TextInput placeholder="Umur" style={styles.input} />
        </View>
        <View>
          <Text style={styles.text}> Status : </Text>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Status" />
            <Picker.Item label="Single" value="single" />
            <Picker.Item label="Married" value="married" />
          </Picker>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.buttonStyle}
              onPress={() => captureImage('photo')}>
              <Text style={styles.textStyle}>Choose Image </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.buttonStyle}
              onPress={() => chooseFile('photo')}>
              <Text style={styles.textStyle}>Take Picture</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 50}}>
            <Text style={styles.text}> Location(Latitude/Longtitude) : </Text>
            <TextInput placeholder="Location" style={styles.input} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#383838',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    marginTop: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#383838',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    marginTop: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    margin: 24,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pickerStyle: {
    height: 150,
    width: '80%',
    color: '#344953',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#66ccff',
    padding: 5,
    marginVertical: 10,
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    borderRadius: 25,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
});
