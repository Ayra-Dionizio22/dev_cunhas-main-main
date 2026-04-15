import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { filmes } from '../../lib/filmes';

export default function Trailers() {
    const { id } = useLocalSearchParams();

    const filme = filmes.find(filme => filme.id === Number(id));

    const player = useVideoPlayer(filme.trailer, player => {
        player.loop = true;
        player.play();
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    return (
        <View style={styles.contentContainer}>
            <VideoView
                style={styles.video}
                player={player}
                fullscreenOptions={{ enable: true }}
                allowsPictureInPicture
            />
            <View style={styles.controlsContainer}>
                <Button
                    title={isPlaying ? 'Pause' : 'Play'}
                    onPress={() => {
                        if (isPlaying) {
                            player.pause();
                        } else {
                            player.play();
                        }
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
    },
    video: {
        width: 350,
        height: 275,
    },
    controlsContainer: {
        padding: 10,
    },
});