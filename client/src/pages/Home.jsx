import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';
import state from '../store';
import {CustomButton} from '../components';

const Home = () => {
    const snap = useSnapshot(state);
    
  return (
    <>
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img src="./threejs.png" alt="logo" className='w-8 h-8 object-contain'     
                        />
                    </motion.header>
                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div className='head-text'>
                            Lets <br className='xl:block hidden'/>DO IT
                        </motion.div>
                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                            <p className='max-w-md font-normal text-gray-600 text-base '>
                                Create your own unique 3D model with just a few clicks using AI.<strong> Unleash ur imagination</strong>
                            </p>
                        </motion.div>
                        <CustomButton 
                            type="filled"
                            title='Customse IT'
                            handleClick={() => state.intro = false}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    </>
  )
}

export default Home