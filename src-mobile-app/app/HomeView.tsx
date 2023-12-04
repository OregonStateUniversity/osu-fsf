import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

/**
 * 
 * Home view
 * Figma View
 * @returns
 */
export default function HomeView() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Walktober 2023</Text> 
      <View style={styles.lines}></View>
      <Text style={styles.tip}>13 days remaining</Text>
      <View style={styles.row}>
        <Text>Daily Progress(steps)</Text>
        <Text>2 out of 3 leaves</Text>
      </View>
      <View style={styles.process}>
        <View style={styles.percent}></View>
      </View>

      <Text style={styles.title1}>My Team</Text>
      <View style={styles.lines}></View>
      <View style={styles.row}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>FootstepsUnited</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>284 leaves</Text>
      </View>
      <View style={styles.col}>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>1. @FitJess26 -80 leaves</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>2.@RunDavid23 (me) -76 leaves</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>3.@SamWalks19-68 leaves</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>4.@ChrisStrides16-60 leaves</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        height: 40,
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        boxShadow: '0 0 10px #ccc',
        marginBottom: 20,
        padding: 10,
      }}>
        <Ionicons name='bar-chart' color='gray' size={20}/>
        <TextInput
          placeholder='How are other teams doing?'
          style={{marginLeft: 10}}
        ></TextInput>
      </View>

      <Text style={styles.title1}>My Activities</Text>
      <View style={styles.lines}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  col: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title1: {
    fontSize: 20,
  },
  tip: {
    fontSize: 16,
    marginBottom: 10,
    color: '#c64b24',
    fontWeight: 'bold'
  },
  lines: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginTop: 10,
    marginBottom: 10,
  },
  process: {
    width: '100%',
    height: 15,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20
  },
  percent: {
    width: '50%',
    height: 15,
    backgroundColor: '#c64b24',
    borderRadius: 10,
  }
});