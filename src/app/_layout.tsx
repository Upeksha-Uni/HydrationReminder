import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import * as Notification from 'expo-notifications';

Notification.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowBanner: true,
    shouldSetBadge: false,
    shouldShowList: true,
  }),
});

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#0EA5E9' }}>
      <Tabs.Screen
        name="index"
        options={{ title: 'Reminder', tabBarIcon: () => <Text>🕒</Text> }}
      />
      <Tabs.Screen
        name="tips"
        options={{ title: 'Reminder', tabBarIcon: () => <Text>💡</Text> }}
      />
      <Tabs.Screen
        name="about"
        options={{ title: 'About', tabBarIcon: () => <Text>💡</Text> }}
      />
    </Tabs>
  );
}
