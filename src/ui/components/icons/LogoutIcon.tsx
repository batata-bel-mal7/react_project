import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgComponent = (props: SvgProps) => (
  <Svg {...props} width={24} height={24} fill="none">
    <Path
      d="M15.016 7.39v-.934a3.685 3.685 0 0 0-3.685-3.685H6.456a3.685 3.685 0 0 0-3.684 3.685v11.13a3.685 3.685 0 0 0 3.684 3.686h4.885a3.675 3.675 0 0 0 3.675-3.674v-.944M21.81 12.021H9.767M18.881 9.106l2.928 2.915-2.928 2.916"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
