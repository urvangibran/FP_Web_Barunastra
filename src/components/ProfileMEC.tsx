import * as React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'

import { Reveal } from '@/components/Reveal';

export const ProfileMEC = () => {
  return (
    <>
      <div id='MEC' className='layout absolute bottom-[-4500px] md:bottom-[-3230px] flex flex-col justify-center items-center '>
        <Reveal>
          <h5 className='my-3 text-[44px] font-[1000] gotham uppercase'>Meet</h5>
        </Reveal>
        <Reveal>
          <h1 className='text-[64px] font-[1000] gotham leading-[70px] text-center uppercase'>The Mechanics</h1>
        </Reveal>
        <Reveal>
          <p className='text-center ml-[115px] md:ml-[277px] mt-3 gotham w-[50%]'>Our specialist are out pride. <br /> Responsible for inspecting, maintaining, and repairing boats and their engines to ensure they are running safely and efficiently.
          </p>
        </Reveal>
      </div>
      <div className='mt-[2370px] md:mt-[320px]'>
        <Reveal>
          <div className='flex flex-col md:flex-row  justify-center align-middle mt-8 '> {/* w-full h-[460px] bg-gray-800 rounded-xl */}
            {photoList.map((photo) => (
              <div key={photo.id} className='mt-10'>
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
    id: 4,
    name: "Fajri",
    subdiv: "Production",
    ig: "fajri_romadlon",
    departement: "Sistem Perkapalan",
    urlPhoto: './images/team/fajri.png'
  },
  {
    id: 5,
    name: "Fian",
    subdiv: "Design",
    ig: "alfian.rijek",
    departement: "Sistem Perkapalan",
    urlPhoto: './images/team/fiyan.png'
  },
  {
    id: 6,
    name: "Faiq",
    subdiv: "Production",
    ig: "fajri_romadlon",
    departement: "Sistem Perkapalan",
    urlPhoto: './images/team/faiq.png'
  },
];
