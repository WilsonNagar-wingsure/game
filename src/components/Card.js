import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';

export default function Card({ OnClick, item, children }) {
  return (
      <TouchableOpacity onPress={ ()=> OnClick(item.id) } style={(item.visible)?(styles.cardOpen):(styles.cardHide)}>
        <View style={styles.cardContent}>
            { (item.visible)?children:<Text style={styles.cardText}> </Text> }
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardOpen: {
    borderRadius: 6,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#BBE1FA",
    backgroundColor: "#A8A9AD",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 4,
    width : '22%',
  },
  cardHide: {
    borderRadius: 6,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#BBE1FA",
    backgroundColor: "#2C2C2B",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 4,
    width : '22%',
    height : Dimensions.get('window').width*0.22
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  cardText: {
    fontSize: 24,
    color: "#FF0000"
  }
});