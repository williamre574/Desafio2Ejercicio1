import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
  
  const DATA = [
    {
      title: "Starboy",
      artist: "TheWeeknd",
      id: "1"
    },
    {
      title: "Party Monster",
      artist: "TheWeeknd",
      id: "2"
    },
    {
      title: "Secrets",
      artist: "TheWeeknd",
      id: "3"
    },
    {
      title: "True Colors",
      artist: "TheWeeknd",
      id: "4"
    },
    {
      title: "Reminder",
      artist: "TheWeeknd",
      id: "5"
    },
    {
      title: "Secrets",
      artist: "TheWeeknd",
      id: "6"
    },
    {
      title: "False Alarm",
      artist: "TheWeeknd",
      id: "7"
    },
    {
      title: "Six Feet Under",
      artist: "TheWeeknd",
      id: "8"
    },
    {
      title: "Sidewalks",
      artist: "TheWeeknd",
      id: "9"
    },
    {
      title: "Die For You",
      artist: "TheWeeknd",
      id: "10"
    },
  ];
  
  const Canciones = () => {
    const navigation = useNavigation();
    const goToOtherScreen = () => {
        navigation.navigate('MusicPlayer'); // Navega a la pantalla 'Other'
      };
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
            <TouchableOpacity onPress={goToOtherScreen} >
              <Text style={styles.item}>{item.title} - {item.artist}</Text>
              </TouchableOpacity>
            </View>
          )}
        />      
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: '#27374D'
    },
    item: {
      backgroundColor: '#add8e6',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 22,
      fontWeight: 'bold',
      borderRadius: 12
    }
  });
  
  export default Canciones;
  