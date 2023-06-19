import * as React from 'react';

export const Profile = () => {
  return (
    <div className='flex justify-center align-middle mt-8'>
      {photoList.map((photo) => (
        <div key={photo.id} className="">
          <div className="card-profile card1-profile bg-no-repeat bg-center mx-10" style={{ backgroundImage: `url(${photo.urlPhoto})` }}>
            <div className="border-profile">
              <h2>{photo.name}</h2>
              <div className="icons-profile">
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const photoList = [
  {
    id: 1,
    name: "Gibran",
    subdiv: "Programming",
    urlPhoto: "./images/1.jpeg"
  },
  {
    id: 2,
    name: "Zuhri",
    subdiv: "Programming",
    urlPhoto: './images/large-og.png'
  },
  {
    id: 3,
    name: "Iyan",
    subdiv: "Electrical",
    urlPhoto: './images/1.jpeg'
  },
  {
    id: 4,
    name: "Fajri",
    subdiv: "Production",
    urlPhoto: './images/1.jpeg'
  },
  {
    id: 5,
    name: "Fian",
    subdiv: "Design",
    urlPhoto: './images/1.jpeg'
  },
  {
    id: 6,
    name: "Faiq",
    subdiv: "",
    urlPhoto: './images/1.jpeg'
  },
  {
    id: 7,
    name: "Egi",
    subdiv: "Sponext",
    urlPhoto: './images/1.jpeg'
  },
  {
    id: 8,
    name: "Al",
    subdiv: "Sponext",
    urlPhoto: './images/1.jpeg'
  },
  {
    id: 9,
    name: "Nopal",
    subdiv: "Sosbrand",
    urlPhoto: './images/1.jpeg'
  },
  {
    id: 10,
    name: "Alifa",
    subdiv: "Finad",
    urlPhoto: './images/1.jpeg'
  },
];
