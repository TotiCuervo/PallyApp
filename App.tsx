import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Provider as ReactNativeProvider } from 'react-native-paper';
import AppNavigator from './components/navigation/AppNavigator';
import { ThemeProvider } from './context/ThemeContext';
import { PillFormProvider } from './context/PillFormContext/PillFormContext';
import { PurchaseProvider } from './context/PurchaseContext';
export default function App() {
    return (
        <ReactNativeProvider>
            <PurchaseProvider>
                <ThemeProvider>
                    <PillFormProvider>
                        <AppNavigator />
                    </PillFormProvider>
                </ThemeProvider>
            </PurchaseProvider>
        </ReactNativeProvider>
    );
}
