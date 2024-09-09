import BgFixedBox from '@/components/BgFixedBox'
import BottlesGroup from '@/components/BottlesGroup'
import HeroBanner from '@/components/HeroBanner'
import ProductsBox from '@/components/ProductsBox'
import { PrimeGroupOptions, PrimeItems } from '@/constants/constants'
import BottlesImg from '@/public/Images/GB_Hydration_Group_Image_600x.png'
import SticksImg from '@/public/Images/Stick-Groups.png'
import CansImg from '@/public/Images/Cans-Group.png'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <div className='h-full'>
    <HeroBanner />
    <ProductsBox title={"HYDRATION"} itemsList={PrimeItems.hydration}/>
    <BottlesGroup groupImg={BottlesImg} OptionsList={PrimeGroupOptions}  />
    <BgFixedBox imgUrl={'/Images/63e4c512ee787030b3226fc8_Prime%20-%20Logan%20Paul%20_%20KSI%20-%20Banner1.png'}/>
    <ProductsBox title={"HYDRATION+"} itemsList={PrimeItems.hydrationPlus}/>
    <BottlesGroup groupImg={SticksImg} OptionsList={PrimeGroupOptions} />
    <BgFixedBox imgUrl={'/Images/LoganPaulKSIPrimeBgFixed.jpg'}/>
    <ProductsBox title={"ENERGY"} itemsList={PrimeItems.energyCans}/>
    <BottlesGroup groupImg={CansImg} OptionsList={PrimeGroupOptions} />
    </div>
  )
}
