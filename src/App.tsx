import React, { Component, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { currencyByRupee } from './constant'
import Snackbar from 'react-native-snackbar'

interface Currency {
  name: string;
  value: number;
  flag: string;
  symbol: string;
}

export default function App() {

  const Currencybtn = ({ listitem }) => {
    return (
      <View style={styles.btncon}>
        <Text style={styles.flag}>{listitem.flag}</Text>
        <Text style={styles.symbol}>{listitem.symbol}</Text>

      </View>
    )
  }


  var amount
  const [input, setinput] = useState('')
  var [result, setresult] = useState('')

  const btnpressed = (item: Currency) => {
    var inputAmount = parseFloat(input)
    if (!input) {
      Snackbar.show({
        text: 'please enter a value',
        backgroundColor: '#a8dadc',
        textColor: '#000000'
      })

    }
    else {
      amount = inputAmount * item.value
      result = `${item.symbol} ${amount.toFixed(2)}`
      setresult(result)


    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.rupee}>
            <View style={styles.rupee1}>

            <Text style={styles.text} >₹</Text>
            <TextInput
              style={styles.inputtxt}
              maxLength={10}
              value={input}
              onChangeText={setinput}
              placeholder='Enter a amount'
              keyboardType='number-pad'
            />
            </View>
            <View style={styles.rupee2}>

            {result && (
              <Text style={styles.text2}>{result}</Text>
              )}
            </View>
              </View>
          <FlatList
            data={currencyByRupee}
            numColumns={3}
            keyExtractor={item => item.name}
            renderItem={({ item }: { item: Currency }) => (
              <Pressable
                style={styles.btn}
                onPress={() => { btnpressed(item) }}
              >
                <Currencybtn listitem={item} />
              </Pressable>

            )}
          />
        </View>

      </View>
    </>
  )
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:80,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor:'#a8dadc'
  },
  rupee: {
    flex: 1,
   
    alignItems: 'center',
    gap: 4
  },
  rupee1:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    gap:8,
  },
  rupee2:{
  //  marginTop:-130,
  },
  symbol: {
    fontSize:16,
    color:'#000000'
  },
  text: {
    color: '#000',
    fontSize: 24,
  },
  text2:{
   fontSize:24,
   fontWeight:'700',
   color:'#000'
  },
  inputtxt: {
    color: '#000',
    fontSize: 16,
    borderColor: '#000',
    borderWidth: 1,
    padding: 4,
    height:40,
  },
  btn: {},
  flag: {
    fontSize:24,
    color: "#FFFFFF",
  },
  btncon:{
    backgroundColor:'#ffd6a5',
    padding:8,
    margin:10,
    width:80,
    height:80,
    borderRadius:7,
    justifyContent:'center',
    alignItems:'center',
  },
})

