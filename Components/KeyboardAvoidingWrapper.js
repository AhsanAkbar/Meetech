import React  from 'react';
//keyboard avoiding view
import {SafeAreaView ,KeybaordAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';

const KeyboardAvoidingWrapper = ({Children})=> {
    return (
        <>
        <SafeAreaView>
        <KeybaordAvoidingView style={{flex: 1}} behavior='position'>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {Children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeybaordAvoidingView>
        </SafeAreaView>
        </>
    );
};

export default KeyboardAvoidingWrapper;