import { View, Image, ImageProps, Dimensions } from 'react-native'
import { styles } from './styles'
import React from 'react'

type PictureProps = ImageProps & {
  diameter: number
}

export function Picture({ diameter, ...props }: PictureProps) {
  const width = Dimensions.get('window').width

  return (
    <View
      style={{
        ...styles.container,
        height: width * diameter,
        width: width * diameter,
        borderRadius: (width * diameter) / 2,
      }}
    >
      <Image
        {...props}
        resizeMode="cover"
        style={{
          borderRadius: (width * diameter) / 2,
          height: '100%',
          width: '100%',
        }}
      />
    </View>
  )
}
