import React, {useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

// function App(){
//   let [name, setName] = useState('');
//   let [email, setEmail] = useState('');
//   const [list, setList] = useState([]);
//   let handleSubmit =(event) =>{
//     event.preventDefault()
//     setList([...list, [name, email]]);
//     setEmail('');
//     setName('');
//   }
//   return (
//     <div>
//       <h1>FACEBOOK POST</h1>
//       <h3>Anyone knows how to create a visual basic panel. thnks</h3>
//       {
//       list.map((item, index)=>
//       <div key={index}>
//         <h3>{item[0]}</h3>
//         <p>{item[1]}</p>
//       </div>
//       )}
      
//       <form onSubmit={handleSubmit}>
//         <p>Your name:</p>
//         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
//         <p>Message:</p>
//         <input type="text" class="message"value={email} onChange={(e)=>setEmail(e.target.value)} />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

//---------------------------------------------------CONTACT LIST-----------------------------------------------------------------
// function LightsOff(props){
// return (
//     <>
//       <h1>LIGHTS OFF</h1>
//       <button onClick={props.you}>PATAY</button>
//     </>
// )
// }
// function LightsOnn(props){
// return (
//     <>
//       <h1>LIGHTS ONN</h1>
//       <button onClick={props.you}>BUKAS</button>
//     </>
// )
// }
// function App(){
//   let [me, setMe] = useState(true);
//   let handleOff=()=>{
//     setMe(false)
//   }
//   let handleOn=()=>{
//     setMe(true)
//   }
//   if(me){
//     return <LightsOff you={handleOff} />
//   }
//   else{
//     return <LightsOnn you={handleOn}  />
//   }
// }
//-------------------------------------------------------ORDER LIST-------------------------------------------------------------

// function App(){
//     let [name, setName] = useState('');
//     let [address, setAddress] = useState('');
//     let [number, setNumber] = useState('');
//     let [shirt, setShirt] = useState('');
//     let [shirtqty, setShirtqty] = useState('');
//     let [cap, setCap] = useState('');
//     let [capqty, setCapqty] = useState('');
//     let [submited, setSubmited] = useState(false);
//     let handleSubmit =(event)=>{
//         event.preventDefault();
//         setSubmited(true);
        
//     }
//     if(submited){
//         return (
//             <div className="modal">
//                 <h1>Order Complete</h1>
//                 <p>Customer Name: {name}</p>
//                 <p>Delivery Address: {address}</p>
//                 <p>Contact #: {number}</p>
//                 <p>Order Details</p>
//                 <p>{shirt + " = " + shirtqty}<br />{cap + " = " + capqty}</p>
//             </div>
//         )
//     }
//     return (
//         <>
//             <h1>Order Form</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Customer Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//                 </label>
//                 <label>
//                     Delivery Address: <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />
//                 </label>
//                 <label>
//                     Contact Number: <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} />
//                 </label>
//                 <h2>Products</h2>
//                 <label>
//                     <input type="radio" value="Tshirt" onChange={(e)=>setShirt(e.target.value)}/>Limited Edition Benhur T-Shirt <span>QTY<input type="number" onChange={(e)=>setShirtqty(e.target.value)}/></span>
//                 </label>
//                 <label>
//                     <input type="radio" value="Cap" onChange={(e)=>setCap(e.target.value)}/>Limited Edition Benhur Cap <span>QTY<input type="number" onChange={(e)=>setCapqty(e.target.value)} /></span>
//                 </label>
//                 <input type="submit"></input>
//             </form>
//         </>
//     )
// }
function Home(){
    return (
        <h1 className="animate__animated animate__flipInX">Hello I'm Home!</h1>
    )
}
function AboutMe(){
    return (
        <h1 className="animate__animated animate__flipInX">Hello I'm About Me!</h1>
    )
}
function Gallery(){
    return (
        <h1 className="animate__animated animate__flipInX">Hello I'm Gallery</h1>
    )
}

function App(){
    return (
        
        <Router>
            <div className="MyWebsite">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutMe">About Me</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/aboutMe' element={<AboutMe />}></Route>
                    <Route exact path='/gallery' element={<Gallery />}></Route>
                </Routes>
            </div>
            
        </Router>
        
    )
}
export default App;