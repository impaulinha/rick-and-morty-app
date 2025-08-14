import { View, Image, ImageProps } from 'react-native'
import { styles } from './styles'
import React from 'react'

type PictureProps = ImageProps & {
  diameter: number
}

export function Picture({ diameter, ...props }: PictureProps) {
  return (
    <View
      style={{
        ...styles.container,
        height: diameter,
        width: diameter,
        borderRadius: diameter / 2,
      }}
    >
      <Image
        {...props}
        resizeMode="cover"
        style={{ borderRadius: diameter / 2, height: '100%', width: '100%' }}
      />
    </View>
  )
}
