import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Regestration from './pages/regestration/Regestration'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    const [data, setData] = useState([
      
      {
        id: 0,
        name: "Bmw x5",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X5-2023/10452/1688992642182/front-left-side-47.jpg?impolicy=resize&imwidth=420",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita provident magnam iure enim? Nulla alias magni nihil iste quasi doloremque quae delectus temporibus corporis veniam. Provident officiis veritatis eos!",
        price: "40000",
        count: 1,
        sale: true,
      },
      {
        id: 1,
        name: "BMW x7",
        img: "https://media.ed.edmunds-media.com/bmw/x7/2025/oem/2025_bmw_x7_4dr-suv_m60i_fq_oem_1_1600.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita provident magnam iure enim? Nulla alias magni nihil iste quasi doloremque quae delectus temporibus corporis veniam. Provident officiis veritatis eos!",
        price: "50000",
        count: 1,
        sale: false,
      },
      {
        id: 2,
        name: "Lamborghini Urus",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lamborghini_Urus_19.09.20_JM_%282%29_%28cropped%29.jpg/1200px-Lamborghini_Urus_19.09.20_JM_%282%29_%28cropped%29.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita provident magnam iure enim? Nulla alias magni nihil iste quasi doloremque quae delectus temporibus corporis veniam. Provident officiis veritatis eos!",
        price: "35000",
        count: 1,
        sale: true,
      },
      {
        id: 3,
        name: "BMW x6",
        img: "https://i.ytimg.com/vi/sHCb0vbzsyw/sddefault.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita provident magnam iure enim? Nulla alias magni nihil iste quasi doloremque quae delectus temporibus corporis veniam. Provident officiis veritatis eos!",
        price: "35000",
        count: 1,
        sale: true,
      },
      {
        id: 4,
        name: "mercedes benz",
        img: "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-benz-glc-class-106-1654031586.jpg?crop=0.519xw:0.778xh;0.299xw,0.140xh&resize=1200:*",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita provident magnam iure enim? Nulla alias magni nihil iste quasi doloremque quae delectus temporibus corporis veniam. Provident officiis veritatis eos!",
        price: "65000",
        count: 1,
        sale: false,
      },
      {
        id: 5,
        name: "mercedes g63",
        img: "https://dreamexperiencemallorca.com/wp-content/uploads/2024/01/alquilar-mercedes-g63-amg-1-1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita provident magnam iure enim? Nulla alias magni nihil iste quasi doloremque quae delectus temporibus corporis veniam. Provident officiis veritatis eos!",
        price: "70000",
        count: 1,
        sale: false,
      },
    ]);

    const [cart, setCart] = useState([]);
    const deleteFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }
    const [modal, setModal] = useState(false);
    const addProduct = (id)=>{
       if(cart.find((item)=> item.id === id)){
        const newProducts = cart.map((item)=>{
          if(item.id == id){
           return{
              id: item.id,
              name: item.name,
              img: item.img,
              desc: item.desc,
              price: item.price,
              count: item.count + 1,
              sale: item.sale,
            }

           }else{
            return{
              id: item.id,
              name: item.name,
              img: item.img,
              desc: item.desc,
              price: item.price,
              sale: item.sale,
              count: item.count ,

            }
           } 
          
        })   
         setCart(newProducts)
         toast("Wow so easy!");
       }else{
        const product = data.filter((item)=>{
          return item.id == id
      })

      setCart([...cart, product[0]])
      toast("Wow so easy!"); 
       }
    }
    const removeCount = (id) => {
     
    }
  

  return (
    <>
     <BrowserRouter>
     <ToastContainer />
     <Navbar cart={cart}  />
     <Routes>
      <Route path='/' element={<Home data={data} cart={cart} setCart={setCart} addProduct={addProduct} />}/>
      <Route path='/about' element={<About cart={cart} deleteFromCart={deleteFromCart} addProduct={addProduct} />}/>
      <Route path='/login' element={<Regestration setModal={setModal} modal={modal}  />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
