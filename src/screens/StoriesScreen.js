import React from 'react'
import { View, Text } from 'react-native'
import StatBar from '../components/StatBar'

export default function StoriesScreen() {
  return (
    <View>
      <View style={{ height:93}}>
        <StatBar screen="story" static='true' />
      </View>
        <Text>
         Stories Page
        </Text>
    </View>
  )
}