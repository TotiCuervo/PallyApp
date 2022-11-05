import React from "react";
import { TextInput, Platform, View } from "react-native";
import { TextInput as PaperTextInput } from "react-native-paper";
import { Colors } from "colors";
import useStyles from "styles";
import { useTheme } from "theme";

type IProps = {
    onChangeText: any;
    value?: string;
};
export default function TextArea({ onChangeText, value }: IProps) {
    const styles = useStyles();
    const { theme } = useTheme();
    return (
        <PaperTextInput
            style={styles.textAreaContainer}
            multiline={true}
            mode={"outlined"}
            render={(props) => (
                <TextInput
                    {...props}
                    style={styles.textAreaInput}
                    placeholder={"Message"}
                    placeholderTextColor={"gray"}
                />
            )}
            theme={{ dark: theme.dark, roundness: 10, colors: { primary: theme.colors.primary } }}
            onChangeText={onChangeText}
            value={value}
            outlineColor="gray"
        />
    );
}
