import {
    Pressable,
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    StatusBar,
    Platform
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  
  import Canciones from './canciones';
  import MusicPlayer from './MusicPlayer';
  
  
  
  function Principal() {
    const navigation = useNavigation();
    const goToOtherScreen = () => {
        navigation.navigate('Canciones'); // Navega a la pantalla 'Other'
      };
    return (
        <View style={styles.container}>
        <ScrollView>
  
          <View>
            <Text style={styles.titulo}> Pop </Text>
            <ScrollView horizontal>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/the-weeknd.jpg')}
                  />
                  <Text style={styles.sub_titulo}>The Weeknd - Starboy</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/the-weeknd.jpg')}
                  />
                  <Text style={styles.sub_titulo}>The Weeknd - Starboy</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/the-weeknd.jpg')}
                  />
                  <Text style={styles.sub_titulo}>The Weeknd - Starboy</Text>
                </Pressable>
              </View>
            </ScrollView>
  
            <Text style={styles.titulo}> Electronica </Text>
            <ScrollView horizontal>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/the-weeknd.jpg')}
                  />
                  <Text style={styles.sub_titulo}>The Weeknd - Starboy</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/theweeknd.jpeg')}
                  />
                  <Text style={styles.sub_titulo}>The Weeknd - Starboy</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/the-weeknd.jpg')}
                  />
                  <Text style={styles.sub_titulo}>The Weeknd - Starboy</Text>
                </Pressable>
              </View>
            </ScrollView>
  
            <Text style={styles.titulo}> Trap </Text>
            <ScrollView horizontal>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/the-weeknd.jpg')}
                  />
                  <Text style={styles.sub_titulo}>The Weeknd - Starboy</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/the-weeknd.jpg')}
                  />
                  <Text style={styles.sub_titulo}>The Weeknd - Starboy</Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={goToOtherScreen}>
                  <Image
                    style={styles.album}
                    source={require('../assets/img/theweeknd.jpeg')}
                  />
                  <Text style={styles.sub_titulo}>The Weeknd - Starboy</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
  
        </ScrollView>      
      </View>
    );
  }
  
 /* const CustomTheme = {
    ...DefaultTheme, // Usa DefaultTheme como base
    colors: {
      ...DefaultTheme.colors,
      primary: '#27374D', // Cambia el color principal de navegación
      background: '#27374D', // Cambia el color de fondo
      card: '#27374D', // Cambia el color de las tarjetas
      text: 'white', // Cambia el color del texto
    },
  };
  */

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#27374D',
      // backgroundColor: "#DDE6ED",
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      padding: 10,
    },
    album: {
      width: 175,
      height: 175,
      marginRight: 10,
      borderRadius: 18,
    },
    titulo: {
      fontWeight: 'bold',
      fontSize: 24,
      marginVertical: 10,
      color: '#fff',
    },
    sub_titulo: {
      color: '#DDE6ED',    
      // color:#400A8A,
      fontSize: 16,
      marginBottom: 20,
    },
  });
  
  export default Principal;