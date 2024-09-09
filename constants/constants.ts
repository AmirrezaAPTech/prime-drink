// Prime Items
import GlowberryImg from '@/public/Images/Banner-Bottle.png'
import PrimeXImg from '@/public/Images/PrimeX_Web_ProductPage_Pink_Front_UK_2000x_bbc71be8-20b8-429d-9331-c6a478f74ea9_2000x2000.png'
import CherryFreezeImg from '@/public/Images/Cherry-Freeze-Bottle.png'
import StrawberryBanana from '@/public/Images/Strawberry-Banana.png'
import IcePop from '@/public/Images/Ice-Pop.png'
import StrawberryWatermelon from '@/public/Images/StrawberryWatermelon.png'

// Prime Items Hydration
import CoconutWaterImg from '@/public/Images/Group-Bottle-Options/2.png'
import CaffeineFreeImg from '@/public/Images/Group-Bottle-Options/3.png'
import ElectrolyteImg from '@/public/Images/Group-Bottle-Options/4.png'
import BVitaminImg from '@/public/Images/Group-Bottle-Options/5.png'
import Antioxidants from '@/public/Images/Group-Bottle-Options/6.png'
import { StaticImageData } from 'next/image'

// Prime Items HydrationPlus
import CherryFreezeStick from '@/public/Images/Sticks/Cherry-Freeze-Stick.png'
import LemonadeStick from '@/public/Images/Sticks/Lemonade-Stick.png'
import StrawberryWatermelonStick from '@/public/Images/Sticks/Strawberry-Watermelon-Stick.png'
import IcePopStick from '@/public/Images/Sticks/Ice-Pop-Stick.png'
import TropicalPunchStick from '@/public/Images/Sticks/Tropical-Punch-Stick.png'
import BlueRaspberryStick from '@/public/Images/Sticks/Blue-Raspberry-Stick.png'

// Prime Items Energy Cans
import DreamPopCan from '@/public/Images/EnergyCans/Dream-Pop-Can.png'
import OriginalCan from '@/public/Images/EnergyCans/Original-Can.png'
import IcePopCan from '@/public/Images/EnergyCans/Ice-Pop-Can.png'
import StrawberryWatermelonCan from '@/public/Images/EnergyCans/Strawberry-Watermelon-Can.png'
import BlueRaspberryCan from '@/public/Images/EnergyCans/Blue-Raspberry-Can.png'


// Header
export const HeaderLinksList = [
    {
        name: "SHOP",
        link: "/"
    },
    {
        name: "ABOUT PRIME",
        link: "/"
    },
    {
        name: "WHERE TO BUY",
        link: "/"
    },
    {
        name: "VERIFY YOUR PRIME",
        link: "/"
    },
]
export const HeaderDropDownLinks = {
    shop: {
        shopPrime: ["HYDRATION", "HYDRATION+ STICKS", "ENERGY"],
        Featured: ["GLOWBERRY HYDRATION", "PRIME X HYDRATION", "DREAM POP ENERGY", "CHERRY FREEZE HYDRATION", "STRAWBERRY BANANA HYDRATION"]
    },
    aboutPrime: ["Teams + Athletes", "Creators", "Artists", "Ambassadors"]
}

// Prime Items

export interface ProductItem {
    name: string;
    priceDollar: string;
    pricePK: string;
    imageUrl: StaticImageData
  }
  
export interface PrimeItemsProps {
    hydration: ProductItem[];
    hydrationPlus: ProductItem[];
    energyCans: ProductItem[];
  }

export const PrimeItems:PrimeItemsProps ={
    hydration:[
    {
        name: "Glowberry",
        priceDollar: "$29.99",
        pricePK: "12PK",
        imageUrl: GlowberryImg
    },
    {
        name: "X",
        priceDollar: "$29.99",
        pricePK: "12PK",
        imageUrl: PrimeXImg
    },
    {
        name: "Strawberry Banana",
        priceDollar: "$29.99",
        pricePK: "12PK",
        imageUrl: StrawberryBanana
    },
    {
        name: "Cherry Freeze",
        priceDollar: "$29.99",
        pricePK: "12PK",
        imageUrl: CherryFreezeImg
    },
    {
        name: "Ice Pop",
        priceDollar: "$29.99",
        pricePK: "12PK",
        imageUrl: IcePop
    },
    {
        name: "Strawberry Watermelon",
        priceDollar: "$29.99",
        pricePK: "12PK",
        imageUrl: StrawberryWatermelon
    },
],
hydrationPlus: [
    {
        name: "Cherry Freeze",
        priceDollar: "$13.99",
        pricePK: "6PK",
        imageUrl: CherryFreezeStick
    },
    {
        name: "Lemonade",
        priceDollar: "$13.99",
        pricePK: "6PK",
        imageUrl: LemonadeStick
    },
    {
        name: "Strawberry Watermelon",
        priceDollar: "$13.99",
        pricePK: "6PK",
        imageUrl: StrawberryWatermelonStick
    },
    {
        name: "Ice Pop",
        priceDollar: "$13.99",
        pricePK: "6PK",
        imageUrl: IcePopStick
    },
    {
        name: "Tropical Punch",
        priceDollar: "$13.99",
        pricePK: "6PK",
        imageUrl: TropicalPunchStick
    },
    {
        name: "Blue Raspberry",
        priceDollar: "$13.99",
        pricePK: "6PK",
        imageUrl: BlueRaspberryStick
    },
],
energyCans: [
    {
        name: "Dream Pop",
        priceDollar: "$29.99",
        pricePK: "12PK",
        imageUrl: DreamPopCan
    },
    {
        name: "Original",
        priceDollar: "$29.99",
        pricePK: "12PK",
        imageUrl: OriginalCan
    },
    {
        name: "Ice Pop",
        priceDollar: "$29.99",
        pricePK: "12PK",
        imageUrl: IcePopCan
    },
    {
        name: "Strawberry Watermelon",
        priceDollar: "$29.99",
        pricePK: "12PK",
        imageUrl: StrawberryWatermelonCan
    },
    {
        name: "Blue Raspberry",
        priceDollar: "$29.99",
        pricePK: "12PK",
        imageUrl: BlueRaspberryCan
    },
]
}


// Prime Group

export const PrimeGroupOptions = [CoconutWaterImg, CaffeineFreeImg, ElectrolyteImg, BVitaminImg, Antioxidants]

// Footer Items

interface FooterItemsProps {
    PrimeTopics: string[];
    PrimeSection: string[];
    MoreInfo: string[];
}

export const FooterItems: FooterItemsProps  = {
    PrimeTopics: ["PRIME X", "Energy", "Hydration", "Hydration+ Sticks"],
    PrimeSection: ["About PRIME", "Teams + Athletes", "Creators", "Artists", "Ambassadors", "FAQS"],
    MoreInfo: ["Terms of Use", "Privacy Policy", "Return Policy", "Where To Buy", "Contact Us", "PRIME X OFFICIAL RULES", "PRIME X REWARDS T&C"]
}