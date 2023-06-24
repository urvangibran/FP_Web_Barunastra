import { Reveal } from '@/components/Reveal';
import * as React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'

export const ProfileEPR = () => {
  return (
    <>
      <div id='EPR' className='layout absolute bottom-[-2600px] md:bottom-[-2230px] flex flex-col justify-center items-center'>
        <Reveal>
          <h5 className='my-3 text-[44px] font-[1000] gotham uppercase'>Meet</h5>
        </Reveal>
        <Reveal>
          <h1 className='text-[58px] md:text-[64px] font-[1000] gotham leading-[70px] text-center uppercase'>The Programmer</h1>
        </Reveal>
        <Reveal>
          <p className='text-center ml-[115px] md:ml-[277px] mt-3 gotham w-[50%]'>Our specialist are out pride. <br /> Team gracefully orchestrates the symphony of code, navigating the digital waters with precision and innovation.</p>
        </Reveal>
      </div>
      <div className='mt-[1170px] md:mt-[300px]'>
        <Reveal>
          <div className='flex md:flex-row flex-col justify-center align-middle mt-8'>
            {photoList.map((photo) => (
              <div key={photo.id} className="">
                <div className="card-profile card1-profile bg-no-repeat bg-center mx-10" style={{ backgroundImage: `url(${photo.urlPhoto})` }}>
                  <div className="border-profile">
                    <h2>{photo.name}</h2>
                    <h3 className='gotham ml-5'>{photo.subdiv}</h3>
                    <div className="icons-profile">
                      <a target='_blank' href={`https://instagram.com/${photo.ig}`}>
                        <AiOutlineInstagram size="2em" className='fa icon-profile' />
                      </a>
                      <AiFillLinkedin size="2em" className='fa icon-profile' />
                      <AiFillGithub size="2em" className='fa icon-profile' />
                    </div>
                  </div>
                </div>
                <p className='mt-14 gotham font-bold text-[24px] text-center small-caps leading-8 '>{photo.departement} <br /> 2022</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </>


  )
}

const photoList = [
  {
    id: 1,
    name: "Gibran",
    subdiv: "Programming",
    ig: "urvangibran",
    departement: "Teknik Informatika",
    urlPhoto: "./images/team/gibran.png"
  },
  {
    id: 2,
    name: "Zuhri",
    subdiv: "Programming",
    ig: "yorebare",
    departement: "Teknik Elektro",
    urlPhoto: './images/team/zuhri.png'
  },
  {
    id: 3,
    name: "Iyan",
    subdiv: "Electrical",
    ig: "brli.nd",
    departement: "Teknik Elektro",
    urlPhoto: './images/team/berlian.png'
  },
];
