import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../utilities/Colors";
import { useTheme } from "theme";
import useStyles from "styles";

export default function BackButton() {
    const { theme } = useTheme();
    const styles = useStyles();
    return (
        <View style={styles.backButton}>
            <Ionicons name="md-chevron-back-outline" size={24} color={"white"} />
        </View>
    );
}
