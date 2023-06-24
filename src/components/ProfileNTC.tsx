import { Reveal } from '@/components/Reveal';
import * as React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'

export const ProfileNTC = () => {
  return (
    <>
      <div id='NTC' className='layout absolute bottom-[-6400px] md:bottom-[-4120px] flex flex-col justify-center items-center'>
        <Reveal>
          <h5 className='my-3 text-[44px] font-[1000] gotham uppercase'>Meet</h5>
        </Reveal>
        <Reveal>
          <h1 className='text-[64px] font-[1000] gotham leading-[70px] text-center uppercase'>Non-Techinal</h1>
        </Reveal>
        <Reveal>
          <p className='text-center ml-[18px] mt-3 gotham'>Our specialist are out pride. <br /> These people create stunning design and come up with crazy ideas.</p>
        </Reveal>
      </div>
      <div className='mt-[3640px] md:mt-[330px]'>
        <Reveal>
          <div className='flex flex-col md:flex-row justify-center align-middle mt-8'>
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
    id: 7,
    name: "Egi",
    subdiv: "Sponext",
    ig: "lefranzy",
    departement: "Teknik Kelautan",
    urlPhoto: './images/team/egi.png'
  },
  {
    id: 8,
    name: "Al",
    subdiv: "Sponext",
    ig: "fathonialfadh",
    departement: "Teknik Kelautan",
    urlPhoto: './images/team/al.png'
  },
  {
    id: 9,
    name: "Nopal",
    subdiv: "Sosbrand",
    ig: "naufal_irsh",
    departement: "Teknik Komputer",
    urlPhoto: './images/team/nofal.png'
  },
  {
    id: 10,
    name: "Alifa",
    subdiv: "Finad",
    ig: "alifakhf",
    departement: "Matematika",
    urlPhoto: './images/team/alifa.png'
  },
];
