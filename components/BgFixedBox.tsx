import React from 'react'
import BgBannerImg from '../public/Images/63e4c512ee787030b3226fc8_Prime - Logan Paul _ KSI - Banner.png'

interface BgFixedBoxProps {
    imgUrl: string
}
const BgFixedBox: React.FC<BgFixedBoxProps> = ({imgUrl}) => {
  return (
    <div className="flex h-[85vh] w-screen flex-col items-start justify-center bg-fixed bg-center bg-cover row-span-4" style={{ backgroundImage: `url(${imgUrl})` }}>
  </div>
  )
}

export default BgFixedBox