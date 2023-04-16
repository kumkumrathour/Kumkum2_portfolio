import React from 'react';

import foodOrderItem from '../Image/Image_more/foodOrderItem.png'
import expenceItem from '../Image/Image_more/expenceItem.png'
import todoList from '../Image/Image_more/todoList.png'
import portfolioMy from '../Image/Image_more/portfolioMy.png'
import duplicateCharacter from '../Image/Image_more/duplicateCharacter.png'
import tailwindPortfolio from '../Image/Image_more/tailwindPortfolio.png';




// https://kumkumrathour.netlify.app/


const Portfolio = () => {
  const portfolio=[{
    id:1,
    src:foodOrderItem,
   link:' https://lucent-duckanoo-52db3f.netlify.app/',
   code:'https://github.com/kumkumrathour/foodOrderItemProject',
  },{
    id:2,
    src:expenceItem,
    link:'https://peaceful-cat-dbd42b.netlify.app/',
    code:'https://github.com/kumkumrathour/expense-manager-final/tree/master/src',
  },{
    id:3,
    src:todoList,
    link:'https://tooddle.netlify.app/',
    code:'https://github.com/kumkumrathour/toodle',
  },
  {
    id:5,
    src:portfolioMy,
    link:'https://kumkum-portfolio.netlify.app/',
    code:'https://github.com/kumkumrathour/Kumkum2_portfolio',
  },
  {
    id:6,
    src:duplicateCharacter,
    link:'',
    code:'https://github.com/kumkumrathour/duplicateRemover',
  },
  {
    id:8,
    src:tailwindPortfolio,
    link:'https://kumkumrathour.netlify.app/',
    code:'https://github.com/kumkumrathour/My_portfolio',
  }
]



  return (
    <div name='portfolio'
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white '>
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pd-8'>
          <p className = " text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-12 font-bold">Check out some of my work right here </p>
        </div>

        <div className='grid sm-grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {portfolio.map(({id,src,link,code})=>(
          <div  key={id}className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 '/>
            <div  className='flex items-center justify-center '>
              <a  href={link} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">Demo</a>
              <a href={code} className= " w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">Code</a>
            </div>
          </div>
     ))}
     </div>
       </div>
    </div>
  );
}
export default Portfolio;


