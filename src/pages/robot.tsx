import * as React from 'react';
import { Link } from 'react-scroll';

import { Footer } from '@/components/Footer';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import { Navbar } from '@/components/Navbar';
import NextImage from '@/components/NextImage';
import { Reveal } from '@/components/Reveal';
import { RevealX } from '@/components/RevealX';
import Seo from '@/components/Seo';
import { CardSpesification } from '@/components/CardsSpesification';

export default function RobotPage() {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const image = new Image();
    image.onload = handleImageLoad;
    image.src = '/images/robotKapal.jpeg';

    return () => {
      image.onload = null;
    };
  }, []);


  return (
    <Layout>
      <Seo
        templateTitle='Detail Boat Kelompok 4'
        description='Pre-built components with awesome default'
      />
      <main id='Robot'>
        <section id='Robot'>
          <Navbar />
          <div className='top-[20px] right-[200px] active z-50 font-bold text-[20px] text-white gotham px-5 cursor-pointer hover:scale-95 fixed hidden md:block '>Robot</div>
          <div className='absolute top-[100px] left-5 z-50'>
            <ArrowLink
              direction='left'
              className='mt-2 fixed'
              href='/'
            >Back to main</ArrowLink>
            <ArrowLink
              direction='right'
              className='mt-2 fixed right-5'
              href='/robot'
            >Back to top</ArrowLink >
          </div>
          <div className='layout flex flex-col justify-center items-center my-20'>
            <Reveal>
              <h5 className='mt-10 mb-5 text-[20px] font-bold gotham uppercase'>Welcome to</h5>
            </Reveal>
            <Reveal>
              <h1 className='text-[40px] md:text-[64px] mb-2 font-bold gotham leading-[70px] text-center uppercase'>Barunastra ITS</h1>
            </Reveal>
            <Reveal>
              <p className='gotham text-center w-[300px] md:w-[550px]'>Barunastra ITS Roboboat team is a research team from Sepuluh Nopember Institute of Technology ITS which focuses on developing unmaned vessels since 2012.</p>
            </Reveal>
          </div>
        </section>
        <section className='layout bg-[#eaeaea] h-full flex flex-col justify-center items-center '>
          <div className='grid grid-flow-row-dense md:grid-cols-2 md:gap-10 gap-0'>
            <div className='p-20 gotham order-last md:order-first'>
              <RevealX>
                <h1 className='small-caps gotham text-[60px] mb-3 py-2 text-[#2E3FA2] '>Pasupastra</h1>
              </RevealX>
              <RevealX>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non maxime, ea eveniet illo laboriosam sed ratione incidunt assumenda iste vero doloribus dignissimos qui veritatis repellat, repellendus accusantium adipisci molestiae quisquam, est ipsam eaque et aspernatur? Quos eligendi rem labore ipsum ipsa temporibus commodi nemo, molestias odit. Omnis corrupti non rem.</p>
              </RevealX>
              <RevealX>
                <Link
                  to="Anatomy"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className='font-bold text-[15px] text-white gotham'
                >
                  <div className='bg-[#2E3FA2] hover:bg-[#373737] active:scale-[.98] md:w-[370px] cursor-pointer mt-4 py-3 rounded-3xl px-3 '>
                    Anatomy
                  </div>
                </Link>
              </RevealX>
              <RevealX>
                <Link
                  to="RobotInfo"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className='font-bold text-[15px] text-white gotham '
                >
                  <div className='bg-[#2E3FA2] hover:bg-[#373737] px-3 active:scale-[.98] md:w-[370px] cursor-pointer w-full mt-3 py-3 rounded-3xl '>
                    Robot Information
                  </div>
                </Link>
              </RevealX>
            </div>
            <div className='flex items-center justify-center w-full md:mt-0 mt-20'>
              <div
                className={`grid justify-center mr-0 md:mr-16 ${imageLoaded ? 'fade-in' : ''}`}
                style={{ opacity: imageLoaded ? 1 : 0 }}
              >
                <NextImage
                  className='w-[350px] md:w-fit '
                  src="/images/robotKapal.jpeg"
                  width={502}
                  height={560}
                  alt='Logo'
                  style={{ borderRadius: '4%' }}
                />
              </div>
            </div>
          </div>
          <div id='Anatomy' className='h-full flex flex-col justify-center items-center'>
            <Reveal>
              <h1 className='text-center gotham my-1 mb-10 text-[60px] text-[#2E3FA2] small-caps'>Anatomy</h1>
            </Reveal>
            <div>
              <div
                className={` ${imageLoaded ? 'fade-in' : ''}`}
                style={{ opacity: imageLoaded ? 1 : 0 }}
              >
                <Reveal>
                  <NextImage
                    className='md:visible grid justify-center w-[300px] md:w-[562px]'
                    src="/images/robotKapal1.jpeg"
                    width={502}
                    height={560}
                    alt='Logo'
                    style={{ borderRadius: '4%' }}
                  />
                </Reveal>
              </div>
            </div>
            <CardSpesification />
          </div>
        </section>
        <section className='layout h-full bg-[#eaeaea] flex flex-col items-center '>
          <RevealX>
            <div className='layout w-screen md:w-[960px] h-[120vh] flex flex-col justify-center items-center '>
              <div className='w-[80%] h-full '>
                <div id='RobotInfo' className='flex justify-center '>
                  <Reveal>
                    <h1 className='text-center gotham text-[60px] py-2 text-[#2E3FA2] small-caps leading-[50px] '>Robot Information</h1>
                  </Reveal>
                </div>
                <hr
                  className='mt-10 bg-[#0E0C3D]'
                  style={{
                    height: '40px',
                  }}
                />
                <div className='grid relative h-full md:h-screen auto-cols-fr gotham text-[17 px] ' style={{ gridTemplateColumns: "1fr 2fr 2fr" }}>
                  <div className='py-2 ml-1'>
                    <h5>CPU</h5>
                  </div>
                  <div className='py-2'>
                    <p className='mb-4'>Main Controller</p>
                    <p>Sub Controller</p>
                  </div>
                  <div className='py-2'>
                    <p className='mb-4'>Intel NUC i7 Gen 12 Fullset</p>
                    <p>STM32f4</p>
                    <div className='absolute w-[100%] bg-black h-[2px] mt-[20px] left-0'></div>
                  </div>
                  <div className='py-2 ml-1'>
                    <h5>Actuator</h5>
                  </div>
                  <div className='py-2'>
                    <p className='mb-4'>Control</p>
                  </div>
                  <div className='py-2'>
                    <p className='mb-4'>Servo Savox SB-2290SG</p>
                    <div className='absolute w-[100%] bg-black h-[2px] mt-[20px] left-0'></div>
                  </div>
                  <div className='py-2 ml-1'>
                    <h5>Power</h5>
                  </div>
                  <div className='py-2'>
                    <p className='mb-4'>Lithium Pollymer Battery</p>
                  </div>
                  <div className='py-2'>
                    <p className='mb-4'>Battery Baterai LIPO ONBO 4S</p>
                    <div className='absolute w-[100%] bg-black h-[2px] mt-[20px] left-0'></div>
                  </div>
                  <div className='py-2 ml-1'>
                    <h5>Sensors</h5>
                  </div>
                  <div className='py-2'>
                    <p className='mb-4'>Camera</p>
                    <p className='mb-4'>Ultrasonik</p>
                    <p className='mb-4'>IMU</p>
                    <p className='mb-4'>GPS</p>
                  </div>
                  <div className='py-2'>
                    <p className='mb-4'>Logitech Webcam C930e HD C930e PRO</p>
                    <p className='mb-4'>Sensor Ultrasonic 100</p>
                    <p className='mb-4'>Pixhawk Cube Orange+ Standard Set (IMU V8)</p>
                    <p className='mb-4'>ZED-F9P-02B</p>
                    <div className='absolute w-[100%] bg-black h-[2px] mt-[20px] left-0'></div>
                  </div>
                  <div className='py-2 ml-1'>
                    <h5>Communication</h5>
                  </div>
                  <div className='py-2'>
                    <p className='mb-4'>Ship</p>
                    <p className='mb-4'>Ground</p>
                  </div>
                  <div className='py-2'>
                    <p className='mb-4'>Mikrotik GrooveA</p>
                    <p className='mb-4'>Ubiquiti AMO 5G13 AirMax Omni 5Ghz 13dBi</p>
                    <div className='absolute w-[100%] bg-black h-[2px] mt-[20px] left-0'></div>
                  </div>
                  <div className='py-2 ml-1'>
                    <h5>Dimension</h5>
                  </div>
                  <div className='py-2'>
                    <p className='mb-4'>Robot Height</p>
                    <p className='mb-4'>Robot Weight</p>
                  </div>
                  <div className='pt-2 pb-12'>
                    <p className='mb-4'>53cm</p>
                    <p className='mb-4'>18kg</p>
                    <div className='absolute w-[100%] bg-black h-[2px] mt-[55px] left-0'></div>
                  </div>
                </div>
              </div>
            </div>
          </RevealX>
        </section>
        <div className='mt-32 hidden md:block '>
          <Footer />
        </div>
      </main>
    </Layout >

  );
}