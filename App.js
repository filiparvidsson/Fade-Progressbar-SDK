import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import MainPage from './QuickPressSDK/pages/MainPage';
import QuickPress from './QuickPressSDK/QuickPress/QuickPress';

export default function App() {

  // a color array
  const colors = ["#ff0000", "#00ff00"];

  // an array of motivational quotes
  const quotes = ["You can do it!", "You are awesome!", "You are the best!"];

  return (
    <View style={styles.container}>

      {/* render the QuickPress component */}
      <QuickPress background={colors}>
         <MainPage>
          <Image source={require("./assets/favicon.png")} style={styles.image}/>
        </MainPage>
        <MainPage>
          <Image source={require("./assets/favicon.png")} style={styles.image}/>
        </MainPage>
        <MainPage>
          <Image source={require("./assets/anka.jpg")} style={styles.image}/>
          <Text> Duck </Text>
        </MainPage>
        {/* <Text> Hello </Text>
        <Text> World </Text>
        <Text> Goodbye </Text> */}
     

      </QuickPress>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});
