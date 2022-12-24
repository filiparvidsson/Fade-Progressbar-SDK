import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import MainPage from './QuickPressSDK/pages/MainPage';
import QuizPage from './QuickPressSDK/pages/QuizPage';

import QuickPress from './QuickPressSDK/QuickPress/QuickPress';

export default function App() {

  // a color array
  const colors = ["#ff0000", "#00ff00"];

  // an array of motivational quotes
  const quotes = ["You can do it!", "You are awesome!", "You are the best!"];

  return (
    <View style={styles.container}>

      {/* render the QuickPress component */}
      <QuickPress>
        <MainPage>
          <Text style={styles.coolText}>Welcome to todays quiz</Text>
        </MainPage>
        <Text> What kind of animal is this? </Text>
        <MainPage>
          <Image source={require("./assets/anka.jpg")} style={styles.image}/>
        </MainPage> 
        <QuizPage>
         <Text>Dog</Text>
          <Text>Cat</Text>
          <Text>Duck</Text>
          <Text>Goose</Text>
        </QuizPage> 
        <Text>How many seconds lasts each slide?</Text>   
        <QuizPage>
         <Text>5 sec</Text>
          <Text>2 sec</Text>
          <Text>7 sec</Text>
          <Text>10 sec</Text>
        </QuizPage>  
        <QuizPage>
         <Text>5 sec</Text>
          <Text>2 sec</Text>
          <Text>7 sec</Text>
          <Text>10 sec</Text>
        </QuizPage>  

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
