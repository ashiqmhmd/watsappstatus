import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { StoryContainer } from 'react-native-stories-view';


function StatusView({ navigation, route }) {

    return (
        <SafeAreaView style={styles.container} >
            <StoryContainer
                visible={true}
                enableProgress={true}
                images={route.params.image}
                duration={20}
                onComplete={() => navigation.navigate("Home")}
                containerStyle={{
                    width: '100%',
                    height: '100%',
                }}
                userProfile={{
                    userImage: { uri: route.params.profile },
                    userName: route.params.name,
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        marginTop: StatusBar.currentHeight
    },
}
)

export default StatusView;