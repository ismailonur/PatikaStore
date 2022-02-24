import { Text, View, StyleSheet, SafeAreaView, TextInput, FlatList, Image } from 'react-native'
import React, { Component } from 'react'

import DATA from './data';

export default class App extends Component {
  state = {
    text: '',
  }

  render() {
    const renderItem = ({ item }) => (
      <View style={styles.renderItem}>
        <View style={styles.imageView}>
          <Image
            style={[styles.image]}
            source={{ uri: item.imgURL }}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        {
          !item.inStock &&
          <Text style={styles.noStock}>STOKTA YOK</Text>
        }
      </View>
    );

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            PATIKASTORE
          </Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder="Ara..."
        />

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20,
    marginLeft: 10
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#800080"
  },
  input: {
    height: 50,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#eceff1"
  },
  renderItem: {
    flex: 1,
    margin: 5,
    backgroundColor: "#eceff1",
    padding: 10,
    borderRadius: 10
  },
  imageView: {
    backgroundColor: '#fff',
    height: 230,
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: 230,
    resizeMode: 'contain',
    borderRadius: 5
  },
  textView: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#010101"
  },
  price: {
    fontWeight: "bold",
    fontSize: 15
  },
  noStock: {
    color: "red",
    fontWeight: 'bold',
    fontSize: 16
  }
});