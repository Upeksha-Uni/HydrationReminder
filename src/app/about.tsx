import { View, Text } from 'react-native';
import styles from './styleSheet';

export default function tips() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Why Hydrate?</Text>
      <Text style={{ textAlign: 'center' }}>
        Built for Mobile Application Development Lab 6. Demonstrates local
        notifications and Expo Router tab navigation.
        {'\n\n'}
        Developed with React Native and Expo. Created by Upeksha Mataraarachchi.
      </Text>
    </View>
  );
}
