import { View, Text } from 'react-native';
import styles from './styleSheet';

export default function tips() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Why Hydrate?</Text>
      <Text style={{ textAlign: 'center' }}>
        Boosts skin health and beauty Regulates body temperature Flushes body
        waste Maintains blood pressure
      </Text>
    </View>
  );
}
