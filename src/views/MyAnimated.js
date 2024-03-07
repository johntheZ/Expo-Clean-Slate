import React, { useState, useEffect, useRef } from "react";
import { Text, ViewBase, View, TouchableOpacity, StyleSheet } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withRepeat,
    withSequence,
    withTiming,
    LinearTransition,
    CurvedTransition
} from "react-native-reanimated";

export const MyAnimated = ({
    ...props
}) => {
    const [expand, setExpand] = useState(false)
    const [contentHeight, setContentHeight] = useState(0)
    const eleHeight = useSharedValue('auto')
    const translateX = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return ({
            // height: withSpring(eleHeight.value),
        })
    })

    const getContentHeight = (event) => {
        const height = event.nativeEvent.layout.height;
        console.warn('-------onlayout', height)
        console.log("contentHeight.current ", contentHeight.current)
        console.log(eleHeight.value)
        console.log(expand)

        if (contentHeight.current === 0) {
            console.log('conent is zero now', contentHeight, height)
            contentHeight.current = height;
            eleHeight.value = height
            console.log('updated to ', contentHeight.current, height)
        }
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'pink',
        }}>
            <TouchableOpacity onPress={(e) => {
                setExpand(!expand)
                console.log("contentHeight from onpress", contentHeight)
                // eleHeight.value = contentHeight.current
                // translateX.value = translateX.value + 50;
            }}>
                <Animated.View
                    style={[animatedStyles, localStyles.addressContainer, {
                    }]}
                    // onLayout={getContentHeight}
                    layout={CurvedTransition.duration(150)}
                >
                    <Text>
                        alkwhdlk
                    </Text>
                    {
                        expand && (<>
                            <Text>aksjd</Text><Text>aksjd</Text><Text>aksjd</Text>
                            <Text>aksjd</Text><Text>aksjd</Text><Text>aksjd</Text>
                            <Text>aksjd</Text><Text>aksjd</Text><Text>aksjd</Text>
                            <Text>aksjd</Text><Text>aksjd</Text><Text>aksjd</Text>
                        </>
                        )
                    }
                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}

const localStyles = StyleSheet.create({
    addressContainer: {
        padding: 15,
        borderRadius: 15,
        marginHorizontal: 5,
        backgroundColor: 'lightgreen',
        overflow: 'hidden',
    },
})