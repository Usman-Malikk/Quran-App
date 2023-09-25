import { View, Text } from 'react-native'
import CustomSplashScreen from "./src/Screens/SplashScreen/SplashScreen.js";
import NavigationCont from './src/Navigation/NavigationCont.js';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux'
import { store } from './src/Redux/store.js';




const App = () => {
  return (
    <>
    <Provider store={store}>
      <NavigationCont />
    </Provider>
      <Toast />
    </>
  )
}

export default App;