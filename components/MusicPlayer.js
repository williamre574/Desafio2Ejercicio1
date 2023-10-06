import React, { useEffect, useRef, useState } from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  Animated,
} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import songs from '../data/data';

const { width, height } = Dimensions.get('window');

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add(songs);
};
const togglePlayback = async playbackState => {
  try {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      if (playbackState == State.Ready || playbackState == State.Paused) {
        await TrackPlayer.play();
        console.log('play');
      } else {
        await TrackPlayer.pause();
        console.log('pause');
      }
    }
  } catch (error) {
    console.log(error);
  }
};
const MusicPlayer = () => {
  const playbackState = usePlaybackState();

  const progress = useProgress();

  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);
  const songSlider = useRef(null);
  useEffect(() => {
    setupPlayer();

    scrollX.addListener(({ value }) => {
      // console.log("Scroll x",scrollX);
      // console.log("Device width",width);

      const index = Math.round(value / width);
      setSongIndex(index);

      //console.log("Index:", index);
    });
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const skipToNext = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };
  const skipToPrevious = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  const renderSongs = ({ index, item }) => {
    return (
      <Animated.View
        style={{
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <View style={styles.artWorkWrapper}>
          <Image source={{ uri: item.artwork }} style={styles.artWorkImg} />
        </View>
      </Animated.View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.mainContainer}>
        <View style={{ width: width }}>
          <Animated.FlatList
            ref={songSlider}
            data={songs}
            renderItem={renderSongs}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { x: scrollX },
                  },
                },
              ],
              { useNativeDriver: true },
            )}
          />
        </View>
        <View>
          <Text style={styles.title}>{songs[songIndex].title}</Text>
          <Text style={styles.artist}>{songs[songIndex].artist}</Text>
        </View>
        <View>
          <Slider
            style={styles.progressContainer}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#FFF"
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
          />
          <View style={styles.progressLabelContainer}>
            <Text style={styles.progressLabelTxt}>
              {new Date(progress.position * 1000).toISOString().substr(14, 5)}
            </Text>
            <Text style={styles.progressLabelTxt}>
              {new Date((progress.duration - progress.position) * 1000)
                .toISOString()
                .substr(14, 5)}
            </Text>
          </View>
        </View>
        <View style={styles.musicControls}>
          <TouchableOpacity onPress={skipToPrevious}>
            <Ionicons
              name="play-skip-back-outline"
              size={30}
              color="#FFD369"
              style={{ marginTop: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglePlayback(playbackState)}>
            <Ionicons
              name={
                playbackState === State.Playing
                  ? 'pause'
                  : 'play'
              }
              size={75}
              color="#FFD369"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToNext}>
            <Ionicons
              name="play-skip-forward-outline"
              size={30}
              color="#FFD369"
              style={{ marginTop: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.bottomContainer}>
        <View style={styles.bottomControls}>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="home" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="repeat" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="share-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="ellipsis-horizontal" size={30} color="#777777" />
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaView>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  artWorkWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },
  artWorkImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#EEEEEE',
  },
  artist: {
    fontSize: 16,
    fontWeight: '200',
    textAlign: 'center',
    color: '#EEEEEE',
  },
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelTxt: {
    color: '#fff',
  },
  musicControls: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  bottomContainer: {
    borderTopColor: '#393E46',
    borderTopWidth: 1,
    alignItems: 'center',
    width: width,
    paddingVertical: 15,
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});
