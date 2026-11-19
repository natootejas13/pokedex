import { NativeTabs } from "expo-router/native-tabs";
import {SymbolView} from "expo-symbols";

export default function RootLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon sf="list" md="list" color="black" />
        <NativeTabs.Trigger.Label>Pokedex</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="favourites">
        <NativeTabs.Trigger.Icon sf="favorite" md="favorite" color="red" />
        <NativeTabs.Trigger.Label>Favourites</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
