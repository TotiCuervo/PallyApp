import React, { useState, useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Text, Button } from "library";
import { openComposer } from "react-native-email-link";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from "../../types";
import TextArea from "../reusable/TextArea";
import { Track } from "../reusable/Track";
import { useTheme } from "theme";
type InputScreenNavigationProp = StackNavigationProp<HomeStackParamList, "InputScreen">;
type InputScreenRouteProp = RouteProp<HomeStackParamList, "InputScreen">;

type IProps = {
    navigation: InputScreenNavigationProp;
    route: InputScreenRouteProp;
};

export default function FeedBackScreen({ route, navigation }: IProps) {
    const { theme } = useTheme();
    const [canContact, setCanContact] = useState(true);
    const [message, setMessage] = useState("");

    const canSend = !(message.length > 0);

    const bulletPoints = [
        { text: "Notice a bug/something isn't working for you" },
        { text: "You have an idea that you would like to see added" },
        { text: "Just want to say hello!" },
    ];

    function handleSubmit() {
        openComposer({
            to: "pallymedicine@gmail.com",
            subject: "Feedback for PallyMedicine!",
            body: message,
        });
        Track("Feedback Send Button Pressed", { message: message });
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={false}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                extraHeight={300}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 20,
                        paddingTop: 20,
                    }}
                >
                    Send us a message!
                </Text>

                <View style={{ alignSelf: "center" }}>
                    {bulletPoints.map((bullet, index) => {
                        return (
                            <View key={index}>
                                <Text style={{ paddingTop: 15 }}>• {bullet.text}</Text>
                            </View>
                        );
                    })}
                </View>

                <View style={{ paddingTop: 20 }}>
                    <Text>Message</Text>
                    <TextArea onChangeText={setMessage} value={message} />
                </View>
                <View style={{ paddingTop: 30 }}>
                    <Button
                        mode="contained"
                        color={theme.colors.primary}
                        style={{ borderRadius: 10, padding: 5 }}
                        uppercase={false}
                        onPress={() => handleSubmit()}
                        disabled={canSend}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "500",
                                fontSize: 15,
                                paddingLeft: 10,
                            }}
                        >
                            Send
                        </Text>
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}
