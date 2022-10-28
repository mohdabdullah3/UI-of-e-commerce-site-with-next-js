import Image from 'next/image'

const Product = (props) => {
   return (
      <>
         <div className="card">
            <Image src={props.img} width={300} height={450} className="card-img-top" alt="..." />
            <div className="card-body text-center">
               <h5 className="card-title">{props.title}</h5>
               <p className="card-text">PKR. {props.price}</p>
            </div>
         </div>
      </>
   )
}

export default Product