// In App.js in a new project
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomSplashScreen from '../Screens/SplashScreen/SplashScreen';
import Login from '../Screens/Session/Login';
import { Colors } from '../Assets/Colors/Colors'
import { Images } from '../Assets/Images/Images';
import Home from '../Screens/Home/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../Components/CustomDrawer';
import { DrawerActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import ChapterDetail from '../Screens/ChapterDetail';
import Search from '../Screens/Search';
import Prayer from '../Screens/Prayer';
import Dua from '../Screens/Dua';
import Profile from '../Screens/Profile';
import Settings from '../Screens/Settings';


// import { MaterialCommunityIcons } from '@expo/vector-icons';



const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()





const BottomNavigation = () => {
  return (
    <BottomTab.Navigator initialRouteName='Quran' headerShown={false} screenOptions={{
      tabBarStyle: { position: 'absolute', backgroundColor: Colors.BottomTabs, height: 70, borderWidth: 1, borderColor: Colors.BottomTabs },
      headerShown: false
    }} >
      <BottomTab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => (
          <View style>
            <Image source={focused ? Images.BottomNav3Selected : Images.BottomNav3} />
          </View>

        ),


      }} name='Quran' component={Home} />
      {/* <BottomTab.Screen options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style>
            <Image source={focused ? Images?.BottomNav2Selected : Images.BottomNav2} />

          </View>

        )
      }} name='Idea' component={CustomSplashScreen} /> */}
      <BottomTab.Screen options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style>
            <Image source={focused ? Images.BottomNav1Selected : Images.BottomNav1} />

          </View>

        )
      }} name='Prayer' component={Prayer} />
      <BottomTab.Screen options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style>
            <Image source={focused ? Images.BottomNav4Selected : Images.BottomNav4} />

          </View>

        )
      }} name='Dua' component={Dua} />
      <BottomTab.Screen options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) =>
          <View style>
            <Image style={{height:40,objectFit:'contain',width:40}} source={focused ? Images.SettingsActive : Images.SettingsUnactive} />
          </View>
      }} name='Settings' component={Settings} />
    </BottomTab.Navigator>)
}
const DrawerNavigation = ({ navigation }) => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} backBehavior='history'
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.MainBlue,
          shadowOffset: false,
          shadowOpacity: false,
          elevation: 0,
        },
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: Colors.MainBlue,
        drawerInactiveTintColor: "black",
        headerTitleStyle: {
          color: "white",
        },
        headerLeft: false,
        headerTitle:
          (props) => {
            return <View style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: "space-between", marginTop: 0 }}>
              <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", gap: 10 }}>
                <TouchableOpacity style={{height:50,width:50,justifyContent:"center"}} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                  <Image style={{}} source={Images.SidemenuLogo} />
                </TouchableOpacity>
                <Text style={{ color: "white", fontWeight: '800', fontSize: 30 }}>Quran</Text>
              </View>
              <TouchableOpacity style={{height:50,width:50,justifyContent:"center",alignItems:"flex-end"}} onPress={()=>{navigation.navigate('Search')}}>
              <Image source={Images.SearchIcon} />
              </TouchableOpacity>

            </View>
          }
      }}>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Search" component={Search} />

    </Drawer.Navigator>
  )
}
const StackNavigator = () => {
  return (<Stack.Navigator  screenOptions={{headerShown:false}} initialRouteName='BottomTabs'>
    <Stack.Screen name='BottomTabs' component={BottomNavigation} />
    <Stack.Screen name='ChapterDetail' component={ChapterDetail} />


  </Stack.Navigator>
  )
}
function NavigationCont() {
  const loading = useSelector((state) => state.loader.loader)
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen'>
          <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={CustomSplashScreen} />
          <Stack.Screen name='LoginHome' options={{ headerShown: false }} component={DrawerNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
      {
        loading && <View style={{ height: "100%", width: "100%", position: 'absolute', top: 0, left: 0, backgroundColor: '#ffffff4f', zIndex: 999, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="100" color={'white'} />
        </View>
      }
    </>
  );
}

export default NavigationCont;