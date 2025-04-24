import BgFixedBox from '@/components/LandingPage/BgFixedBox'
import BottlesGroup from '@/components/LandingPage/BottlesGroup'
import HeroBanner from '@/components/LandingPage/HeroBanner/HeroBanner'
import ProductsBox from '@/components/LandingPage/ProductsBox'
import { PrimeGroupOptions, PrimeItems } from '@/constants/constants'
import BottlesImg from '@/public/Images/GB_Hydration_Group_Image_600x.png'
import SticksImg from '@/public/Images/Stick-Groups.png'
import CansImg from '@/public/Images/Cans-Group.png'
import ClientProvider from '@/components/ClientProvider'
export default function Home() {
  return (
    <ClientProvider>
    <div className='h-full'>
    <HeroBanner />
    <ProductsBox title={"HYDRATION"} itemsList={PrimeItems.hydration} category="hydration"/> 
    <BottlesGroup groupImg={BottlesImg} OptionsList={PrimeGroupOptions}  />
    <BgFixedBox imgUrl={'../../Images/63e4c512ee787030b3226fc8_Prime%20-%20Logan%20Paul%20_%20KSI%20-%20Banner1.png'}/>
    <ProductsBox title={"HYDRATION+"} itemsList={PrimeItems.hydrationPlus} category="hydrationPlus"/>
    <BottlesGroup groupImg={SticksImg} OptionsList={PrimeGroupOptions} />
    <BgFixedBox imgUrl={'../../Images/LoganPaulKSIPrimeBgFixed.jpg'}/>
    <ProductsBox title={"ENERGY"} itemsList={PrimeItems.energyCans} category="energyCans"/>
    <BottlesGroup groupImg={CansImg} OptionsList={PrimeGroupOptions} />
    </div>
    </ClientProvider>
  )
}
