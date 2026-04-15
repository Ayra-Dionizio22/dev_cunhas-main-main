import { Tabs } from "expo-router";
import { PagHomeIcon } from "../../../../assets/components/PagHomeIcon";
import { VideosIcon } from "../../../../assets/components/VIdeosIcon";
import { LeiturasIcon } from "../../../../assets/components/LeiturasIcon";
import { GlossarioIcon } from "../../../../assets/components/GlossarioIcon";



export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#006BB3",   // cor quando selecionado
                tabBarInactiveTintColor: "#49328B", // cor normal
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color, size }) => (
                       <PagHomeIcon width={size} height={size} fill={color} />
                    ),
                    title: "Home",
                    headerShown: false,

                }}
            />
            <Tabs.Screen
                name="videoaulas"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <VideosIcon width={size} height={size} fill={color} />
                    ),
                    title: "Videoaulas",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="explorer"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <LeiturasIcon width={size} height={size} fill={color} />
                    ),
                    title: "Leituras",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="glossario"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <GlossarioIcon width={size} height={size} fill={color} />
                    ),
                    title: "Glossário",
                    headerShown: false
                }}
            />
        </Tabs>
    )
}