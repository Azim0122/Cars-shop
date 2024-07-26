import React from 'react'
import "./Home.css"
function Home({data, cart, setCart, addProduct}) {
    const addBusket=(id)=>{
        console.log(id);
        const product = data.filter((item)=>{
            return item.id == id
        })

        console.log(product);
        setCart([...cart, product[0]])
    }

    console.log(cart);
  return (
    <main>
        <div className="container">
        <div className="cards">
            {data.map((item) => {
                return(
                    <div id="container">	
                    <div class="product-details">
                    
                    <h1>{item.name.slice(0, 9)}..</h1>
                    
                
                        <span class="hint-star star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                    <h5 class="koment">40 komment</h5>
    
                <div class="control">
                    <button onClick={()=>{ addProduct(item.id)}} className="btn">
                     <span class="price">{item.price}</span>
                   <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                   <span class="buy">Get now</span>
                 </button>
                </div>   
                </div>  
                <div class="product-image">
                {item.sale && <span className='sale'>Chegirma</span>}
        
                    <img src={item.img} alt=""/>
                <div class="info">
                    <h2> Description</h2>
                    <ul>
                        <li><strong>Quantity : </strong>10 piece </li>
                        <li><strong>colour : </strong>black</li>   
                        <li><strong>Price:</strong>{item.price}</li>
                    </ul>
                </div>
                </div>
                </div>)}
                
            )}
        </div>
        </div>
    </main>
  )
}

export default Home