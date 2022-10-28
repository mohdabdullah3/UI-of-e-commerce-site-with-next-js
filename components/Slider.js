import Image from 'next/image'

const Slider = () => {
   return (
      <div className="container-fluid">
         <div className="row">

            <div className="col-xl-3 col-md-6 col-sm-6 col-6">
               <Image className="d-block" src="/ban1.webp" width={250} height={250} alt="First slide" />
            </div>

            <div className="col-xl-3 col-md-6 col-sm-6 col-6">
               <Image className="d-block" src="/ban2.webp" width={250} height={250} alt="First slide" />
            </div>

            <div className="col-xl-6 col-sm-12">
               <Image className="d-block" src="/banner.jpg" width={1000} height={385} alt="First slide" />
            </div>

         </div> <br />
      </div>
   )
}

export default Slider