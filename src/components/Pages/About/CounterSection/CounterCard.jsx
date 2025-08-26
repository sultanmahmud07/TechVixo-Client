"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

const CounterCard = ({ data }) => {
  const { logo, countNumber, name } = data;
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Change this threshold as needed for visibility
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef?.current);
      }
    };
  }, []);

  return (
    <div className="single_count flex flex-col gap-2 md:gap-3 justify-center items-center text-white" ref={countRef}>
     <h4 className="text-3xl md:text-5xl font-semibold">
        <CountUp duration={2.75} start={0} end={isVisible ? parseFloat(countNumber) : 0} />+
      </h4>
      <p className='text-base md:text-lg text-center'>{name}</p>
    </div>
  );
};

export default CounterCard;
