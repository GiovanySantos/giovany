import React from 'react';
import Header from './Header';
import IconBox from './IconsBox';
import ButtonsBox from './ButtonsBox';
// import Home from './screens/Home';
// import Portfolio from './screens/Portfolio';
// import About from './screens/About';
// import { motion } from 'framer-motion';

export enum EnumPage {
  Home = 0,
  Portfolio = 1,
  About = 2,
}

const Blog: React.FC = () => {
  return (
    <div className="flex items-center justify-center max-w-full">
      <div className="flex flex-col p-5 text-center gap-7">
        <Header />
        <IconBox />
        <ButtonsBox />
      </div>
      {/* <Home setCurrentPage={setCurrentPage} /> */}
      {/* {currentPage !== EnumPage.Home && (
        <div className="" data-testid="switcher">
          <motion.div
            hidden={currentPage !== EnumPage.Portfolio}
            initial="hidden"
            animate={currentPage === EnumPage.Portfolio ? 'visible' : 'hidden'}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            {currentPage === EnumPage.Portfolio && <Portfolio />}
          </motion.div>
          <motion.div
            hidden={currentPage !== EnumPage.About}
            initial="hidden"
            animate={currentPage === EnumPage.About ? 'visible' : 'hidden'}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            {currentPage === EnumPage.About && <About />}
          </motion.div>
        </div>
      )} */}
    </div>
  );
};

export default Blog;
