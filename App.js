import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LOGINPAGE from './screens/login/loginpage';
import WELCOME from './screens/login/welcome';
import BEATBOOK from './screens/home/beatbook';
import DASHBOARD from './screens/home/dashboard';
import DIRECTORY from './screens/home/directory';
import NOTIFICATIONS from './screens/home/notifications';
import PROFILE from './screens/home/profile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">

      <Stack.Screen name="Welcome" component={WELCOME} />
	  <Stack.Screen name="LoginPage" component={LOGINPAGE} />
	  <Stack.Screen name="BeatBook" component={BEATBOOK} />
	  <Stack.Screen name="DashBoard" component={DASHBOARD} />
	  <Stack.Screen name="Directory" component={DIRECTORY} />
	  <Stack.Screen name="Notifications" component={NOTIFICATIONS} />
	  <Stack.Screen name="Profile" component={PROFILE} />
	  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
