import { createStackNavigator } from '@react-navigation/stack';
import NotificationIntem from '../screens/NotificationList/NotificationIntem';
import Details from '../screens/Details/Details';
import Action from '../screens/Action/Action';
import Contenus from '../screens/Contenus/Contenus';
import Login from '../screens/Login/Login';
import Devoir from '../screens/ListeDevoir/Devoir';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="NotificationIntem" component={NotificationIntem} options={{headerShown:false}} />
      <Stack.Screen name="Details" component={Details}  options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Action" component={Action} options={{headerShown:false}}/>
      <Stack.Screen name="Contenus" component={Contenus} options={{headerShown:false}}/>
      <Stack.Screen name="Devoir" component={Devoir} options={{headerShown:false}}/>
      
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation