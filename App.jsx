import { TextInput, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import Forecasts from './Forecasts';





function App() {

  const [forecasts, setForecasts] = useState(undefined)
  const [input, setInput] = useState('')

  async function getForecasts() {

    try {
      const response = await fetch(`https://gpa.madbob.org/query.php?stop=${input}`)
      const json = await response.json()
      setForecasts([...aggregateByLine(json)])
    } catch (error) {
      console.log(error)
    }
  }
  
  function aggregateByLine(data) {
    return data.reduce((result, item) => {
      const existingItem = result.find((obj) => obj.line === item.line);
      if (existingItem)
        existingItem.hours.push(item.hour)
      else result.push({ line: item.line, hours: [item.hour] })
      return result
    }, []);
  }


  useEffect(function () {
    getForecasts()
  }, [input])



  return (
    <View style={{
      paddingHorizontal: 16}}>
      <View style={{
        marginVertical: 16,
        backgroundColor: "#EEEA",
        borderRadius: 20}}>
        <TextInput style={{
          fontSize: 20,
          paddingHorizontal: 16,
          fontWeight: 'bold'}}
          value={input}
          onChangeText={setInput}
          placeholder="Inserisci nome e/o numero fermata"
          onSubmitEditing={getForecasts}>
        </TextInput>
      </View>
      <Forecasts forecasts={forecasts}></Forecasts>
    </View>
  )
}

export default App