"use client"
import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'
import Spline from '@splinetool/react-spline';


export default function HeroSection() {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center
    justify-between animate-move-up -z-50'>

            <div className='space-y-10 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl font-bold'>Nice to meet you! 👋<br/> 
            <span className='underline underline-offset-8 decoration-green-500'>{"I'm EmmoScript"}</span></h1>
            <p className='md:w-96 text-lg text-gray-300'> {"Based in Dominican Republic, I'm a Junior FullStack developer who likes to build good-looking and functional web applications."}</p>
            <Link href={"mailto:someone@gmail.com"} className='inline-block group'>
                <Title text="Contact Me 📬"/>
            </Link>
            </div>
            
            {/* These are the figures */}
            <div className='relative -z-40'>
                <div className='flex items-center justify-center h-40 w-40'>
                  
                    <Spline scene="https://prod.spline.design/o8UfaMf5tMgg0Eat/scene.splinecode" className='w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] lg:-translate-x-60 md:-translate-x-44 items-center justify-center md:justify-start'/>
                    {/* Glow Light */}
                    <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
                  
                </div>
                
                

            </div>
    </div>
  )
}
