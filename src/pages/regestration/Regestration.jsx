import React from 'react'
import './Regestration.css'
import { Link } from 'react-router-dom'

function Regestration( {modal, setModal} ) {
  return (
    <body>
        <div className="login-wrap">
            <Link to={"/"}>
            <button onClick={() => setModal(false)} className='button5'>X</button>
            </Link>
	<div className="login-html">

		<input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Ro‘yxatdan o‘tish</label>
		<input  type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Iltimos quyidagi ma’lumotlarni kiriting </label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">F.I.SH </label>
					<input id="user" type="text" className="input" placeholder='F.I.SH kiriting'/>
				</div>
				<div className="group">
					<label for="pass" className="label">Yashash manzil  </label>
					<input  type="password" className="input" placeholder='Yashash manzilingizni kiriting' data-type="password"/>
				</div>
                <div className="group">
					<label for="pass" className="label">Telefon raqam</label>
					<input  type="password" className="input" data-type="number"/>
				</div>
				<div className="group">
					
					<label for="check"><input  type="checkbox"  /> Ommaviy oferta</label>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In"/>
                    </div>
                    <div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
            </div>
    </div>
    </div>
    </body>
  )
}

export default Regestration