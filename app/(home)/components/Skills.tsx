"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiBootstrap, SiCsharp, SiCss3, SiDotnet, SiFigma, SiHtml5, SiJavascript, SiMicrosoftazure, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function Skills() {

    const skills = [
        {
        text: "React",
        Icon: SiReact,
        },
        {
        text: "Next.js",
        Icon: SiNextdotjs,
        },
        {
        text: "TailwindCSS",
        Icon: SiTailwindcss,
        },
        {
        text: "Node.js",
        Icon: SiNodedotjs,
        },
        {
        text: "MongoDB",
        Icon: SiMongodb,
        },
        {
        text: "Figma",
        Icon: SiFigma,
        },
        {
        text: "TypeScript",
        Icon: SiTypescript,
        },
        {
        text: "JavaScript",
        Icon: SiJavascript,
        },
        {
        text: "HTML",
        Icon: SiHtml5,
        },
        {
        text: "CSS",
        Icon: SiCss3,
        },
        {
        text: ".NET",
        Icon: SiDotnet,
        },
        {
        text: "Bootstrap",
        Icon: SiBootstrap,
        },
        {
        text: "Azure",
        Icon: SiMicrosoftazure,
        },
        {
        text: "C Sharp",
        Icon: SiCsharp,
        },
        {
        text: "Python",
        Icon: SiPython,
        }
    ]

  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title text="Skills 🧠" 
        className="flex flex-col items-center justify-center -rotate-6"/>

        <HoverEffect items={skills}/>
    </div>
  )
}
