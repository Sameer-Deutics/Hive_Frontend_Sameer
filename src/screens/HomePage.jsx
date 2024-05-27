import {useState} from 'react'
import Hive from "../assets/Hive.svg"
import SVGS from '../assets/svgs/SVGS';
import LoginModal from '../components/global/Modals/LoginModal'



const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
  <>
 <div className="mx-auto max-w-full h-screen overflow-hidden lg:grid lg:grid-cols-5  md:grid md:grid-cols-5
      flex sm:flex-col-reverse flex-col-reverse " >
    {/* left side */}
    <div className="col-span-3 lg:p-5 md:p-5 p-0 lg:h-auto md:h-auto h-1/2" >
      <div  className="bg-gradient-to-r from-[#08A5DE] to-[#00739C] h-full w-full lg:rounded-xl md:rounded-xl rounded-t-[40px] space-y-3 flex
      flex-col justify-center items-center " >
        <h1 className="text-white lg:text-7xl md:text-6xl text-4xl">Welcome</h1>
        <p  className="text-white text-center w-auto lg:text-lg md:text-lg
        text-[10px] leading-6">Please sign in with your<br/> Beaconhouse Email ID (bh.edu.pk)</p>

        {/* login button */}
        <button className="bg-white px-12 py-3 rounded-full flex items-center gap-2" onClick={openModal}  >
        <SVGS/>
          Continue with Google</button>

           {/* Modal Component */}
      {isModalOpen && (
      <LoginModal isOpen={isModalOpen} closeModal={closeModal} />
      )}
      </div>
    </div>

    {/* right side */}
    <div className="col-span-2 flex justify-center items-center lg:h-auto md:h-auto h-1/2" >
      <img src={Hive} alt="" className='lg:w-[330px] md:w-[280px] sm:w-[250px] w-[200px]'/>
    </div>

    </div>
  </>
  )
}

export default HomePage
