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
    urlPhoto: "./images/1.jpeg"
  },
  {
    id: 2,
    name: "Urvan",
    urlPhoto: './images/large-og.png'
  },
  {
    id: 3,
    name: "Add",
    urlPhoto: './images/1.jpeg'
  },
  {
    id: 4,
    name: "da",
    urlPhoto: './images/1.jpeg'
  },
  {
    id: 1,
    name: "da",
    urlPhoto: './images/1.jpeg'
  },
];
