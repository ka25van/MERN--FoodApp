import React, {useState, useEffect} from 'react'
//import { Await } from 'react-router-dom'
import Card from '../component/Card'
import Carousel from '../component/Carousel'
import Footer from '../component/Footer'
import Navheader from '../component/Navheader'

export default function Home() {

    // const [food, setFood]= useState([]);
    // const [fooditem,setFoodItem]=useState([]);


    // //endpoiont
    // const loadData= async ()=>{
    //   let response =await fetch("http://localhost:5000/api/fooditemdata",{
    //     method:"POST",
    //     headers:{
    //       "Content-Type":"application/json"
    //       }


    //   });
    //   setFood(response[0]);
    //   setFoodItem(response[1]);


    // }
    // useEffect(()=>{

    //   loadData ()
    // }, [])


  return (
    <div >
      <div><Navheader /></div>
      <div><Carousel/></div>
      {/* <div className='container'>
        {
          food !==[]? food.map((data)=>{
            return (<div>
              <div key={data._id} className="fs-3 m-3">{data.Food}</div>
              <hr />
            {fooditem !==[]? fooditem.filter((item)=> data.item===data.Food).map(filterItems=>{
                  return(
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                        <Card></Card>
                    </div>
                  )
           }):""
                
          }  
            </div>
           
            )
          }):[""]
          
        }
       
      </div>*/}
      <div><Card/></div>
      <div> <Footer /></div>
    </div>
  )
}
