

const Hero = () => {
  return (
    <div className="relative h-[20vh] md:h-[30vh] grid place-items-center bg-hero-pattern bg-center bg-cover rounded-2xl p-5">
        <img src="bg.jpg" alt="" className="absolute w-full h-full z-[-1] rounded-2xl object-cover object-center" />
      
       <div className="text-white text-center">
        <h1 className="text-2xl font-bold mb-5">OdaNet ile konaklama rezervasyonu yap.</h1>
        <p>Dünya çapında 1,456,021 oda seni bekliyor!</p>
        </div>
    </div>
  )
}

export default Hero