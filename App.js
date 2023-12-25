import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import GetPostNative from './components/GetPostNative';
import PostRequest from './components/PostRequest';
import ErrorRequest from './components/ErrorRequest';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <GetPostNative /> */}
      {/* <PostRequest /> */}
      <ErrorRequest />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
  },
});