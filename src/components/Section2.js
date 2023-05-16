import React, { useState, useEffect } from 'react'

const Section2 = () => {
  const first = 600, second = 650;
  const data = [
    {
      "imgurl": "/img1.png",
      "heading": `A keyboard`,
      "subHeading": " first experience.",
      "para": "Powerful shortcuts and a keyboard-first ",
      "des": "workflow means you will get to your finish line ",
      "short": "in no time!"
    },
    {
      "imgurl": "/img2.png",
      "heading": "Bullets to visuals  ",
      "subHeading": "in a click.",
      "para": "Transform any block to any other  and try ",
      "des": "different options without any design hassle",
      "short": ""
    },
    {
      "imgurl": "/img3.png",
      "heading": "A powerful assistant",
      "subHeading": " just a click away",
      "para": "Insert blocks,perform powerful actions and ",
      "des": "leverage the limitless power of AI- all without ",
      "short": "leaving your keyboard"
    }
  ]

  const [currindex, setCurrindex] = useState(0);
  const [scroll, setscroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setscroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const heading = scroll < first ? data[0].heading : scroll < second ? data[1].heading : data[2].heading;
  const subHeading = scroll < first ? data[0].subHeading : scroll < second ? data[1].subHeading : data[2].subHeading;
  const para = scroll < first ? data[0].para : scroll < second ? data[1].para : data[2].para;
  const des = scroll < first ? data[0].des : scroll < second ? data[1].des : data[2].des
  const short = scroll < first ? data[0].short : scroll < second ? data[1].short : data[2].short

  const handleClick = () => {
    setCurrindex((currindex + 1) % data.length);
  }

  if (scroll < second && scroll > first) {
    var imgurl = data[currindex].imgurl;
  }
  else {
    imgurl = scroll > second ? data[2].imgurl : data[1].imgurl
  }

  return (
    <div className='my-24'>
      <div className="flex flex-col md:flex-row w-[90%] m-auto">
        <div className="md:w-1/2 p-12 space-y-4">
          <span className='text-violet-400 text-4xl'>&diams; Workflow</span>
          <h2 className='text-7xl'>Create at the speed of thought.</h2>
          <p className='text-gray-400'>Focus on your getting your thoughts out and  crafting the best<br /> message   while Chronicle does the heavy lifting for you</p>
        </div>
        <div className="flex">
          <div className="card flex rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <img className='md:w-[40vw] rounded-lg p-4' src={imgurl} alt="" />
              {scroll > first && scroll < second ? <img onClick={handleClick} className='w-10 h-10 relative -top-24' src="/loader.png" alt="" /> : ""}
              <div className="content text-center">
                <h4 className='text-4xl font-bold'>{heading} </h4>
                <h4 className='text-xl text-gray-200'>{subHeading}</h4>
                <p className='text-gray-300'>{para}</p>
                <p className='text-gray-300'>{des}</p>
                <p className='text-gray-300'>{short}</p>
              </div>
            </div>
            <div className={`float-right w-1 transition-all delay-150 ease-in-out bg-violet-400 ${scroll < first ? "h-[33%]" : scroll < second ? "h-[66%]" : "h-full"} rounded-sm`}>
              <span className='ml-2'>{scroll < first ? "01" : scroll < second ? "02" : "03"}</span>
              <div className="scrollbar h-[95%]">
                <div className="scroller"></div>
              </div>
              <span className='ml-2'>03</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


export default Section2