import React,{useState,useRef} from "react";
import './carSlider.css' ;
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Data =[
    {
      id: 1,
      image: "/image/first_(1).png"
    },
    {
      id: 2,
      image: "/image/first_(2).png"
    },
    {
      id: 3,
      image: "/image/first_(3).png"
    },
    {
      id: 4,
      image: "/image/first_(4).png"
    },
    {
      id: 5,
      image: "/image/first_(5).png"
    },
  ];

const CarSlider = () => {
    const [slideIndex, setSlideIndex] = useState(1);

  // making an auto play slider
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideIndex((prevIndex) =>
          prevIndex === Data.length ? 1 : prevIndex + 1
        ),
      2000
    );

    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  const nextSlide = () => {
    if (slideIndex !== Data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Data.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
   <div> 
       <h1 className="fw-bolder text-center mt-3" style={{color:"green"}}><span className="bd-title">Best</span> Collection</h1>
    <div style={{position: "relative"}}>
      <div className="container-slider">
        {Data.map((item, index) => {
          return (
            <div
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
              key={item.id}
            >
              <img src={item?.image} />
            </div>
          );
        }).reverse()}
        <div className="btn-slide">
          <button className="next-button" onClick={() => prevSlide()}>
            <AiOutlineLeft color="#000" size={20} />
          </button>
        </div>
        <div className="btn-slide2">
          <button className="next-button" onClick={() => nextSlide()}>
            <AiOutlineRight color="#000" size={20} />
          </button>
        </div>
      </div>

      {/* dots container */}
      <div className="container-dots">
        {Array.from({ length: Data.length }).map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          );
        })}
      </div>
      {/* dots container */}

    </div>
    </div> 
  );
};

export default CarSlider;
