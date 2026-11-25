import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import styles from './styleSheet';

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState('Time to drink a glass of water!');
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  useEffect(() => {
    async function requestPermission() {
      const { status } = await Notifications.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Permission required',
          'We need notification permission to remind you to drink water!',
        );
      }
    }

    requestPermission();
  }, []);

  async function scheduleReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: '💧 Hydration Alert',
        body: message,
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: intervalMinutes * 60,
        repeats: true,
      },
    });

    setIsReminding(true);

    Alert.alert('Set!', `Reminding you every ${intervalMinutes} minutes.`);
  }

  async function stopReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();

    setIsReminding(false);

    Alert.alert('Stopped', 'Your water reminders have been stopped.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥤</Text>

      <Text style={styles.heading}>Stay Hydrated!</Text>

      <Text style={styles.subtitle}>
        Keep your body healthy. Don't forget to drink water!
      </Text>

      <Text style={styles.label}>Add a Custom Message</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your reminder message..."
        value={message}
        onChangeText={setMessage}
      />

      <Text style={styles.label}>Set Interval (minutes)</Text>

      <TextInput
        style={styles.input}
        value={intervalMinutes.toString()}
        onChangeText={(text) => setIntervalMinutes(parseInt(text) || 1)}
        keyboardType="numeric"
      />

      <Text style={styles.status}>
        Status: {isReminding ? '🟢 Active' : '🔴 Inactive'}
      </Text>

      <Button
        title="Start Reminder"
        onPress={scheduleReminder}
        color="#0EA5E9"
      />

      <View style={{ height: 10 }} />

      <Button title="Stop Reminder" onPress={stopReminder} color="#EF4444" />
    </View>
  );
}
