import React from 'react'
import"./recentTrip.css";
const andman = "https://images.unsplash.com/photo-1542429296407-20c78e10f375?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5kYW1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
const rio ="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";
const rome = "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Um9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";




const RecentTrips = () => {
  return (
    <div className='recenttrip'>
     <h1> Recent Trip</h1>
    <p> You can discover unique destination Using Google Maps</p>
        <div className='container'>
            <div className='box'>
            <img className="place-img" alt='andaman image' src={andman}></img>
            <h2 className='place'> Trip in Andaman</h2>
            <p className='desc'>Andaman Nicobar Islands is famous for its absolutely stunning beaches, rich biodiversity, beautiful marine ecosystem and tropical evergreen forests teeming with wildlife.</p>
            </div>
            <div className='box'>
            <img className="place-img" alt='rio image' src={rio}></img>
            <h2 className='place'>Trip in Rio</h2>
            <p className='desc'>Rio de Janeiro is one of the most visited cities in South America. It is most known for Carnival and balneário beaches such as Barra de Tijuca, Ipanema, and Leblon.</p>
            </div>
            <div className='box'>
            <img className="place-img" alt='rome img' src={rome}></img>
            <h2 className='place'>Trip in Rome</h2>
            <p className='desc'>Rome, the “Eternal City,” brims with ancient history, from the Colosseum to the port of Ostia Antica to majestic Vatican City and the Sistine Chapel. Because of its history, art, architecture, and beauty and pasta!</p>
            </div>
        </div>

    </div>
  )
}

export default RecentTrips