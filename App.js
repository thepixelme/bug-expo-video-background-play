import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

const videoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function App() {

  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.staysActiveInBackground = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView
        style={styles.video}
        player={player}
        nativeControls={true}
        allowsPictureInPicture={true}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
