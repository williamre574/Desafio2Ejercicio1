import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './Principal'; // Importa la pantalla inicial
import Canciones from './canciones';
import MusicPlayer from './MusicPlayer';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Canciones" component={Canciones} />
        <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;