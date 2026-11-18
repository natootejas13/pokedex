import { NativeTabs } from "expo-router/native-tabs";

export default function RootLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon sf="list" md="list" />
        <NativeTabs.Trigger.Label>Pokedex</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="favourites">
        <NativeTabs.Trigger.Icon sf="favorite" md="favorite" />
        <NativeTabs.Trigger.Label>Favourites</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
