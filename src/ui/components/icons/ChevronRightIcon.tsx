import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ChevronRightIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m9 18 6-6-6-6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ChevronRightIcon
