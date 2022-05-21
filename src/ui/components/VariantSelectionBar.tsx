import React from 'react'
import { Text, View } from 'react-native'
import VariantSelectionButton from './VariantSelectionButton'

const VariantSelectionBar = ({
  variants,
  onVarientChange,
  title,
}: {
  variants: Array<{ text: string; icon: JSX.Element }>
  onVarientChange: (index: { text: string; icon: JSX.Element }) => void
  title: string
}) => {
  const [selectedVariant, setSelectedVariant] = React.useState(0)

  return (
    <View>
      <Text
        style={{
          fontFamily: 'Raleway-Bold',
          color: 'black',
          fontSize: 17,
          margin: 15,
        }}
      >
        {title}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        {variants.map((variant, index) => (
          <View
            key={index}
            style={{
              minHeight: 40,
              flex: 1,
              marginHorizontal: '2%',
              alignItems: 'center',
            }}
          >
            <VariantSelectionButton
              active={index === selectedVariant}
              text={variant.text}
              icon={variant.icon}
              width={'100%'}
              height={40}
              style={{ flex: 1, maxWidth: 120 }}
              onPress={() => {
                onVarientChange(variant)
                setSelectedVariant(index)
              }}
            />
          </View>
        ))}
      </View>
    </View>
  )
}
export default VariantSelectionBar
