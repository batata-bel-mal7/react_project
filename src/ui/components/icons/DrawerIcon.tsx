import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const DrawerIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M1.599 8.333H13.5M1.6 1h22m-22 14.667h22"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default DrawerIcon
