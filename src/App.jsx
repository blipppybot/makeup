import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <div className="grid grid-cols-2 grid-rows-2 gap-px bg-gray-400 items-stretch border-y border-gray-400">

          <ProductCard
          showSecondaryLabel
          image={{
          src: "/images/300Wx300H-90063.jpg",
          alt: "Lash Sensational Firework Mascara Washable Electro Black 10mL",
          }}
          labelSecondary="Sponsored"
          brand="Maybelline"
          description="Lash Sensational Firework Mascara Washable Electro Black 10mL"
          showSupplementary
          supplementary="6 colours"
          showLabelPrimary
          showRating
          labelPrimary="Free gift"
          rating="4.6"
          pricing={{ type: "promotion", was: 29.98, now: 14.99 }}
        />

        <ProductCard
          image={{
          src: "/images/300Wx300H-89623.jpg",
          alt: "Thrill Seeker Lip Latex #150 Magnetic 6mL",
          }}
          brand="Rimmel London"
          description="Thrill Seeker Lip Latex #150 Magnetic 6mL"
          showSupplementary
          supplementary="6 colours"
          showRating
          rating="4.8"
          pricing={{ type: "default", now: 29.99 }}
        />
        <ProductCard
          image={{
          src: "/images/300Wx300H-94809.jpg",
          alt: "Pro Artist Finishing Touch Setting Spray 80mL",
          }}
          brand="No7"
          description="Pro Artist Finishing Touch Setting Spray 80mL"
          showSupplementary
          supplementary="Sister Club Exclusive"
          pricing={{ type: "sisterClub", was: 38.99, now: 19.49 }}
        />

        <ProductCard
          image={{
          src: "/images/300Wx300H-66247.jpg",
          alt: "Mineral Eyeshadow Palette Sunset 6g",
          }}
          brand="Natio"
          description="Mineral Eyeshadow Palette Sunset 6g"
          pricing={{ type: "promotion", was: 19.95, now: 13.96 }}
        />

        <ProductCard
          image={{
          src: "/images/300Wx300H-195950.jpg",
          alt: "Good As New Nail Perfector 13.5mL",
          }}
          brand="Nude By Nature"
          description="Good As New Nail Perfector 13.5mL"
          pricing={{ type: "default", now: 20.99 }}
        />

        <ProductCard
          image={{
          src: "/images/300Wx300H-91107.jpg",
          alt: "Perfect Skin Filter Foundation N6 Olive 30g",
          }}
          brand="Natio"
          description="Perfect Skin Filter Foundation N6 Olive 30g"
          showSupplementary
          supplementary="9 colours"
          pricing={{ type: "default", now: 29.98 }}
        />
      </div>{/* end grid */}
      
    </>
  )
}

export default App
