// LIBRARY IMPORTS
import { View, Text, StyleSheet } from 'react-native'
// MY IMPORTS
import HoursList from './HourList'

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
    )
  }

export default Forecast