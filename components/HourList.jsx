import { View, Text, FlatList, StyleSheet } from 'react-native'

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
    )
  
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
    )
  }

  export default HoursList