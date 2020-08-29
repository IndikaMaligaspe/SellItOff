import React from 'react'
import { Text } from 'react-native'

import defaultStyles from '../../configs/styles'

export default function AppText({children, numberOfLines=3, style}) {
    return (
    <Text numberOfLines={numberOfLines} style={[defaultStyles.text, style]}>{children}</Text>
    )
}

