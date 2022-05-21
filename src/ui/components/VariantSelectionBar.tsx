import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import VariantSelectionButton from './VariantSelectionButton'

const VariantSelectionBar = ({
  variants,
  onVarientChange,
  title,
}: {
  variants: Array<{ text: string; icon: JSX.Element }>
  onVarientChange: (index: string) => void
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
      <ScrollView horizontal>
        {variants.map((item, index) => (
          <View
            key={index}
            style={{
              minWidth: 150,
              maxWidth: 150,
              minHeight: 50,
              marginHorizontal: 10,
            }}
          >
            <VariantSelectionButton
              text={item.text}
              icon={item.icon}
              onPress={() => {
                setSelectedVariant(index)
                onVarientChange(variants[index].text)
              }}
              active={selectedVariant === index}
              width={'100%'}
              height={50}
            />
          </View>
        ))}
        {/* {variants.map((variant, index) => (
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
              style={{ flex: 1, minWidth: 120 }}
              onPress={() => {
                onVarientChange(variant)
                setSelectedVariant(index)
              }}
            />
          </View>
        ))} */}
      </ScrollView>
    </View>
  )
}
export default VariantSelectionBar
