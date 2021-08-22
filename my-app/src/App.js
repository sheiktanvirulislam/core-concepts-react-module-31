import React , { useState,useEffect} from 'react';

// import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['anwar',"khan","salman","bappi",'shuvo',"sakib"];
  const products = [{ name:"PhotoShop", price:"20$/m"},
  {name:"Illustrator", price:"60$/m"},
   {name:"Pdf Reader", price:"40$/m"},
   {name:"Pro element", price:"40$/m"},
   {name:'Ally',price:'34$/m'}
  ]
  const friendName = [{name:'hasan',job:"Web Developer"},
{name:"kahn",job:'Senior Programmer'},
{name:"Akbar",job:"Sales Manager"},
{name:"Anik",job:"Banker(Islamic)"}
]
  // const productNames = product.map(product => product.name) 
  // console.log(productNames) 
  // const name3 = names.map(names=> names)
  // console.log(name3)  
  return (
    <div className="App">
      <header className="App-header">
        <p>i  am a react person </p>
         
         <ul>
           
             {names.map(name => <li>{name}</li> )}
             {/* {console.log(names.map(names => <li>{names}</li>))}  */}
           

           
           {/* <li>{names[0]}</li>
           <li>{names[1]}</li>
           <li>{names[2]}</li>
           <li>{names[3]}</li> */}
          {
            // products.map(product => <li>{product1.name}</li>)
          }
         </ul>
         {
          //  products.map(pd => <Product product={pd}></Product>)
         }
        {
          friendName.map(fName => <Friends totalData={fName}></Friends>)
        }
         <Counter></Counter>
         <Users></Users>       
          {/* <Person name={names[0]} name2="tanvir" food="fried rice" ></Person>            
         <Person name="khan" name2="hasan khan" food="chicken rice. " ></Person>  */}
      </header> 
    </div>
    

  );


   
}




function Product(props) {
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'10px',
    backgroundColor:'white',
    height:'300px',
    width:'300px',
    float:'left',
    color:'black',
    margin:'50px'
  }
  const priceStyle = {
    padding:'0px',
    textAlign:'top',
    fontSize:'40px'
  }
  const {name,price} = props.product ;
  console.log(name ,price)
  return (
    <div style={productStyle}>
     <h2>{name}</h2> 
     <h1 style = {priceStyle}>{price}</h1>
     <button>Buy Now</button>
    </div>
  ) 


}


function Counter() {
   const [count,setCount] = useState(0)
   const handleIncrease = () => {
     const newCount = count + 1;
     setCount(newCount);
   }
   const decrease = () =>{
     const countNew = count -1;
     if (countNew<0) {
       return "stop"
     }
     else{
      setCount(countNew);
     } 
    }

   return(
     <div>
         <h1>Count:{count}</h1>
        <button  onClick={handleIncrease}>Increase</button>
        <button onClick={decrease}>Decrease</button>
     </div>
   );

}











function Friends(props) {
  
const {name,job} = props.totalData;  
  return(
    <div>
      <h1>{name}</h1>
      <h2>{job}</h2>
    </div>
  )


}
function Users() {
  const[users,setUsers] = useState([]);
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => {
     setUsers(data)
   })
  },[]) 
  
  return (
   <div>
     <h3>Dynamic Users:</h3>
     <ul>
       {
       users.map(user=> <li>
         {user.name}
       </li> )
       }
       {
         users.map(user2 =>
           <li>
             {user2.email}
          </li>
          )
       }
     </ul>
   </div>
  );

}

















function Person(props) {
  
  
  const person = {
    border :'2px solid red', 
    margin:'5px',
    padding:'10px',
    boxShadow:'5px 5px 10px lightgray' 
  }
  console.log(props)
  return (
  <div style ={person}>
  
     <h1>Name: {props.name}</h1>
     <br />
  <h3>Name: {props.name2}</h3> 
   <h2>food:{props.food}</h2>
  <input type="text" />
  </div>
  );
}

export default App;
 