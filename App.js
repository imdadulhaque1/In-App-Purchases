import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import IAP from "react-native-iap";

const items = Platform.select(({
  ios: ["com.imdadulhaque.hss"],
  android: [""]
}))

const App = () => {
  const [purchased, setPurchase] = useState(false);
  const [products, setProducts] = useState({})

  useEffect(() => {
    IAP.initConnection().catch(() => {
      console.log("Error Occur to connecting to Store....")
    }).then(() => {
      console.log("Successfully Connected to Store!!!");
      IAP.getSubscriptions(items).catch(() => {
        console.log("Error finding Purchases!!!");
      }).then((res) => {
        console.log("Got Products!!!")
        setProducts(res)
        console.log(products);
      })
    })
  }, [])
  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  }
})