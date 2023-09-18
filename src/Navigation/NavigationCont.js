// In App.js in a new project
import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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
import {DrawerActions} from '@react-navigation/native';

// import { MaterialCommunityIcons } from '@expo/vector-icons';



const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()





const BottomNavigation = () => {
  return (
    <BottomTab.Navigator initialRouteName='Quran' headerShown={false} screenOptions={{
      tabBarStyle: { position: 'absolute', backgroundColor: Colors.BottomTabs, height: 70, borderWidth: 1, borderColor: Colors.BottomTabs },
      headerShown:false
    }} >
      <BottomTab.Screen options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => (
          <View style>
            <Image source={focused ? Images.BottomNav3Selected : Images.BottomNav3} />
          </View>

        ),
      

      }} name='Quran' component={Home} />
      <BottomTab.Screen options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style>
            <Image source={focused ? Images?.BottomNav2Selected : Images.BottomNav2} />

          </View>

        )
      }} name='Idea' component={CustomSplashScreen} />
      <BottomTab.Screen options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style>
            <Image source={focused ? Images.BottomNav1Selected : Images.BottomNav1} />

          </View>

        )
      }} name='Prayer' component={Login} />
      <BottomTab.Screen options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style>
            <Image source={focused ? Images.BottomNav4Selected : Images.BottomNav4} />

          </View>

        )
      }} name='Dua' component={CustomSplashScreen} />
      <BottomTab.Screen options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) =>
          <View style>
            <Image source={focused ? Images.BookMarkSelcted : Images.BookMark} />
          </View>
      }} name='Bookmark' component={Login} />
    </BottomTab.Navigator>)
}

const DrawerNavigation = ({navigation}) => {
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
        headerLeft:false,
        headerTitle:
          (props) => {
            return <View style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: "space-between",marginTop:0 }}>
              <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", gap: 30 }}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Image style={{}} source={Images.SidemenuLogo} />
                </TouchableOpacity>
                <Text style={{ color: "white", fontWeight: '800', fontSize: 30 }}>Quran</Text>
              </View>
              <Image source={Images.SearchIcon} />

            </View>
          }
      }}>
      <Drawer.Screen name="Home" component={BottomNavigation} />
      <Drawer.Screen name="Profile" component={Home} />
    </Drawer.Navigator>
  )
}

function NavigationCont() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={CustomSplashScreen} />
        <Stack.Screen name='LoginHome' options={{ headerShown: false }} component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationCont;