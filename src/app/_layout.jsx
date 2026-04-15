import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen
                name="(tabs)"
                options={{
                    title: "Tela principal",
                    animation: "slide_from_right",
                    headerShown: false,
                    statusBarStyle: 'dark'
                }}
            />

            <Stack.Screen
                name="filme/[id]"
                options={{
                    title: "Videoaulas",
                    headerTintColor: "#FFF",
                    animation: "slide_from_right",
                    headerStyle: {
                        backgroundColor: "#49328B"
                    },
                    statusBarStyle: "light"
                    // headerShown: false
                }}
            />

            <Stack.Screen
                name="leituras/[id]"
                options={{
                    title: "Leituras",
                    headerTintColor: "#FFF",
                    animation: "slide_from_right",
                    headerStyle: {
                        backgroundColor: "#006BB3"
                    },
                    statusBarStyle: "light"
                }}
            />

            <Stack.Screen
                name="glossariosRota/[id]"
                options={{
                    title: "Glossário",
                    headerTintColor: "#FFF",
                    animation: "slide_from_right",
                    headerStyle: {
                        backgroundColor: "#7D2B88"
                    },
                    statusBarStyle: "light"
                    // headerShown: false
                }}
            />
        </Stack>

    )
}


