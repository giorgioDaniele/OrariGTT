import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


function Forecasts (props) {


  function renderForecast(props) {
    return (
        <Forecast
            line={props.item.line}
            hours={props.item.hours}>
        </Forecast>
    )
  }

  return (
    <FlatList 
      data={props.forecasts} 
      renderItem={renderForecast}/>
  );
};


function Forecast (props) {

  const styles = StyleSheet.create({
      card: {
          backgroundColor: 'white',
          padding: 16,
          borderRadius: 20,
          marginBottom: 16,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
      },
      busLineContainer: {
          backgroundColor: '#09F',
          borderRadius: 10,
          padding: 8,
          marginBottom: 16,
      },
      busLineText: {
          fontSize: 40,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
      },
      hourContainer: {
          backgroundColor: 'white',
          padding: 8,
          borderRadius: 4,
      },
      hourText: {
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
      },
  })


  return (
      <View style={styles.card}>
          <View style={styles.busLineContainer}>
              <Text style={styles.busLineText}>Linea {props.line}</Text>
          </View>
          <HoursList data={props.hours}/>
      </View>
  );
}


function HoursList (props) {

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
          backgroundColor: 'white',
      },
      listContainer: {
          justifyContent: 'center',
          alignItems: 'center',
      },
      item: {
          backgroundColor: 'white',
          margin: 8,
          padding: 16,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 14,
          marginBottom: 8,
      },
      itemText: {
          fontSize: 16,
          fontWeight: 'bold',
      },
  });

  const renderItem = ({item}) => (
      <View style={styles.item}>
          <Text style={styles.itemText}>{item.substring(0, 5)}</Text>
      </View>
  );

  return (
      <View style={styles.container}>
          <FlatList
              data={props.data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.listContainer}
              horizontal
          />
      </View>
  );
}

export default Forecasts;