import React from 'react'
import "./destination.css"
import DestinationData from './DestinationData'
const img1 = "https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbml0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
const img2 = "https://images.unsplash.com/photo-1643224357772-397a3e2e8387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJpc2hpa2VzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
const masooriImg ="https://media.istockphoto.com/id/962097344/photo/birds-eye-view-of-gangtok-the-capital-city-of-sikkim-india.webp?b=1&s=170667a&w=0&k=20&c=a5JsNQUPgNphSAEnUix6HbTsLdAMUfuPMbVuXa-lknI=";
const manaliImg = "https://images.unsplash.com/photo-1606667544139-81e47935d769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
const Destination = () => {
  return (
    <div className='destination'>
    <h1> Popular Destination</h1>
    <p> Tours gives you some quality time to spend and get Relax</p>
    
    <DestinationData 
        heading ="Nainital , Rishikesh"
        text = "Nainital, the charming Himalayan lake town, is a picture-postcard perfect hill-station and one of the most popular in Northern India. Commonly known as the 'Lake District', Nainital is nestled high up in the Kumaon Himalayas at an altitude of around 2,000 m above sea level. Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of the Indian state Uttarakhand. It is situated on the right bank of the Ganges River and is a pilgrimage town for Hindus, with ancient sages and saints meditating here in search of higher knowledge."
       img1= {img1}
       img2={img2}
 
    />
    <DestinationData 
        heading ="Masoori , Manali"
        text = " Mussoorie, also known as Queen of the Hills, is among the most popular hill stations of the country. A Britisher, Captain Frederick Young, accompanied by an official named FJ Shore, had climbed up the hill from the Doon valley in 1827 and found this ridge offering great views and a salubrious climate. It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the plains. The tourism industry in Manali started booming only in the early 20th century, mainly because of its natural bounties and salubrious climate."
       img1= {masooriImg}
       img2={manaliImg}
 
    />
 </div>
  )
}

export default Destination
