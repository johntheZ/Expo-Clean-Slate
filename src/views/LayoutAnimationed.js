import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
    Platform,
    UIManager,
    LayoutAnimation
  } from 'react-native';

function AccordionItem({ children, title, expanded, onHeaderPress }) {
    const body = <View style={styles.accordBody}>{children}</View>;

    return (
        <View style={styles.accordContainer} onLayout={(e) => {
            console.warn('onlayout inside view')
            console.log(e.nativeEvent.layout)
        }}>
            <TouchableOpacity style={styles.accordHeader} onPress={onHeaderPress} onLayout={(e) => {
                        console.warn('touch inside')
                        console.log(e.nativeEvent.layout)
                    }}>
                <Text style={styles.accordTitle}>{title}</Text>
                {/* <Icon name={expanded ? 'chevron-up' : 'chevron-down'}
                    size={20} color="#bbb" /> */}
            </TouchableOpacity>
            {expanded && body}
        </View>
    );
}

function Accordion({ data }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    function handleHeaderPress(index) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedIndex(expandedIndex === index ? null : index);
    }

    return (
        <>
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    expanded={expandedIndex === index}
                    onHeaderPress={() => handleHeaderPress(index)}
                    >
                    {item.content}
                    
                </AccordionItem>
            ))}
        </>
    );
}

export function LayoutAnimationed() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.container}
                onLayout={()=>{
                    console.log("out")
                }}
                >
                <Accordion data={[
                    {
                        title: 'Native development',
                        content: <Text style={styles.textSmall}>
                            React Native lets you create truly native apps and
                            doesn't compromise your users' experiences. It provides a core set of platform
                            agnostic native components
                        </Text>
                    },
                    {
                        title: 'Fast refresh',
                        content: <Text style={styles.textSmall}>
                            See your changes as soon as you save.
                            With the power of JavaScript, React Native lets you iterate at
                            lightning speed.
                        </Text>
                    },
                    {
                        title: 'Cross-platform',
                        content: <><Text style={styles.textSmall}>React components wrap existing native code
                            and interact with native APIs via React’s declarative UI paradigm
                            and JavaScript. This enables native app development for whole new teams
                            of developers</Text>
                            <View style={styles.seperator}></View>
                            <Button title="See more..." />
                        </>
                    }
                ]
                } />
            </ScrollView>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    accordContainer: {
      paddingBottom: 4
    },
    accordHeader: {
      padding: 12,
      backgroundColor: '#666',
      color: '#eee',
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    accordTitle: {
      fontSize: 20,
    },
    accordBody: {
      padding: 12
    },
    textSmall: {
      fontSize: 16
    },
    seperator: {
      height: 12
    }
  });