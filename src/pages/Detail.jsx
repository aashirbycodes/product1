import {useParams} from "react-router-dom"


function Details() {
  const params = useParams();
    const id = params.id;
  const products = [
    {
      id: 1,
      name: "RTX 5070",
      price: 499.99,
      description: "The RTX 5070 is a high-performance graphics card designed for gaming and professional workloads.",
      image: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/50-series/rtx-5090/geforce-rtx-5090-learn-more-og-1200x630.jpg"
    },
    {
      id: 2,
      name: "Samsung S25 Ultra",
      price: 200,
      description: "The Samsung S25 Ultra is a high-end smartphone with cutting-edge features and exceptional performance.",
      image: "https://www.lahorecentre.com/cdn/shop/files/Samsung-Galaxy-S25-Ultra-512GB-Storage-12GB-RAM-Titanium-White-Silver-600x600_5f61c2b6-9f44-44da-b4d1-e2abb2ff6407.webp?v=1784115793&width=1200"
    },

  ];
  const productsInfo = products.filter((product) => product.id === parseInt(id)[0]);
    return(
        <div>
            <h1>
            Details For the Product Id: {id}
            </h1>
            <h2>{productsInfo[0].name}</h2>
            <p>${productsInfo[0].price.toFixed(2)}</p>
            <p>{productsInfo[0].description}</p>
            <img src={productsInfo[0].image} alt={productsInfo[0].name} width ={200} />


        </div>
    )
}
export default Details