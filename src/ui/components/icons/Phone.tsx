import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { memo } from 'react'

const Phone = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M2.99 4.873c.317-.524 2.06-2.43 3.303-2.372.372.031.7.256.968.517.613.599 2.368 2.863 2.468 3.34.242 1.168-1.15 1.842-.724 3.02 1.086 2.659 2.958 4.53 5.618 5.616 1.177.427 1.851-.966 3.02-.723.475.1 2.74 1.855 3.34 2.468.26.266.485.596.516.967.046 1.31-1.977 3.077-2.371 3.303-.93.666-2.145.654-3.624-.034-4.13-1.718-10.73-8.193-12.48-12.478-.67-1.472-.716-2.694-.034-3.624Z"
      stroke="#200E32"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const Memo = memo(Phone)
export default Memo
