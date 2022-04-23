import * as React from 'react'
import Svg, { SvgProps, Circle } from 'react-native-svg'
import { memo } from 'react'

const SvgComponent = (props: SvgProps) => (
  <Svg {...props} width={121} height={121} fill="none">
    <Circle cx={60.5} cy={60.5} r={60.5} fill="#817EFF" />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
