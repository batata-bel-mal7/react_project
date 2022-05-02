import * as React from 'react'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
import { memo } from 'react'

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M4.24 10.391a7.678 7.678 0 0 1 15.356.052v.087c-.052 2.757-1.591 5.305-3.479 7.296a20.18 20.18 0 0 1-3.59 2.956.93.93 0 0 1-1.218 0 19.816 19.816 0 0 1-5.052-4.73 9.826 9.826 0 0 1-2.018-5.635v-.026Z"
      stroke="#200E32"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx={11.917}
      cy={10.539}
      r={2.461}
      stroke="#200E32"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
