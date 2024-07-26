import React, { useState } from 'react'
import './About.css'
function About({cart, deleteFromCart, addProduct}) {
  const [check, setCheck] = useState(false)
  const [count, setCount] = useState(0)
var total = 0 
  
  return (
    <body>
    <div className="container1">
      <span className='line'>
        <ul>
          <li>Eshiklar</li>
          <li>Derazalar</li>
          <li>Ko’p sotilgan</li>
          <li>Chegirma</li>
          <li>Brendlar</li>
        </ul>
        <button>
        <i class="fa-solid fa-sliders"></i> Filter
        </button>
      </span>
      <h3>Bosh sahifa  •  Savatcha</h3> <br /><br />
       <h1>Savatcha</h1><br /><br />
       <div className="products">
        <div className="right">
        <span className='checkbox'> <input type="checkbox"  /><p>Barchasini belgilash</p></span>
        <hr />
      {cart.map((item)=>{
        total += item.price * item.count
        return(
          <div className="product">
     
          <span className='checkbox2'><input type="checkbox" /></span>
          <div className="pictures66">
            <img src={item.img} alt="" />
            </div>
            <div className="info22">
              <h2>{item.name}</h2> <br />
              <div className="box22">
                <p><span>Rangi:</span> Jigarrang</p>
                <p><span>O‘lchami:</span> 120x200 sm</p>
                <p><span>Brend:</span> MDF</p>
              </div>
            </div>
            <div className="button2">
              <button>
                <span onClick={()=>{if(count>0){}}} className='minus' >-</span>
                <span>{item.count}</span>
                <span onClick={()=>{addProduct(item.id)}} className='plus'>+</span>
              </button>
            </div>
            <div className="price22">
              <h3><span></span>1 200 000 so‘m</h3>  
             <h2> {item.price}</h2>
            </div>
            <span className='top-right'><img src="./public/imgs/like2.svg" alt="" /></span>
            <span onClick={()=>{deleteFromCart(item.id)}} className='top-right2'><img src="./public/imgs/delete.svg" alt="" /></span>
            
          </div>
        )
      })}
        </div>
        <div className="left2">
          <p>Savatdagi mahsulotlar: <span> {cart.length}</span></p>
          <p>Jami miqdor: <b> {total}</b></p>
          <button>Rasmiylashitirish</button>

        </div>
       
       
       </div>

    </div>
    </body>
  )
}

export default About