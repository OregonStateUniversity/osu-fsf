import { Tabs, router } from "expo-router";
import { useAuth } from "../../lib/supabase";
import { useEffect } from "react";
import IconHome from "../../../assets/icons/IconHome";
import IconCalendar from "../../../assets/icons/IconCalendar";
import IconProfile from "../../../assets/icons/IconProfile";
import IconSettings from "../../../assets/icons/IconSettings";

export default function ProtectedLayout() {
  const { session } = useAuth();

  useEffect(() => {
    if (!session) router.replace("/(auth)/sign-in");
  }, [session]);

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          href: "/home",
          tabBarIcon: ({ color }) => {
            return <IconHome color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          href: "/events",
          tabBarIcon: ({ color }) => {
            return <IconCalendar color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          href: "/profile",
          tabBarIcon: ({ color }) => {
            return <IconProfile color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          href: "/settings",
          tabBarIcon: ({ color }) => {
            return <IconSettings color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
