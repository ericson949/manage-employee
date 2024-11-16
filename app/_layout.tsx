import { Slot, Stack } from "expo-router";
import { SessionProvider } from "../src/session/ctx";

export default function RootLayout() {
  return <SessionProvider>
  <Slot />
</SessionProvider>
}
