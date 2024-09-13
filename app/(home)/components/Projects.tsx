import React from 'react'
import Title from './Title'
import {SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiMongodb, SiShadcnui, SiAxios, SiAntdesign, SiRefine, SiGraphql,SiVite     } from 'react-icons/si'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

export default function Projects() {

    const projects = [
        {
        title: "Nutrifuel Eccomerce",
        tech: [SiNextdotjs, SiTailwindcss, SiShadcnui, SiTypescript, SiMongodb, SiAxios ],
        link: "https://nutrifuel-ecommerce-r1pr29kq8-emmoscripts-projects.vercel.app/",
        cover: "/project-1.png",
        background: "bg-cyan-500",
        },
        {
        title: "Marketing Company Admin Dashboard",
        tech: [SiRefine, SiVite,  SiAntdesign, SiGraphql, SiTypescript],
        link: "http://localhost:3000",
        cover: "/project-2.png",
        background: "bg-green-500",
        },
        {
        title: "SAAS Platform",
        tech: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
        link: "http://localhost:3000",
        cover: "/project-3.png",
        background: "bg-indigo-500",
        },
        {
        title: "Project 4",
        tech: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
        link: "http://localhost:3000",
        cover: "/project-3.png",
        background: "bg-fuchsia-500",
        }
    ]

  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title text="Projects 🏗️" 
        className="flex flex-col items-center justify-center -rotate-6"/>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projects.map((project, index) => {
                return (
                    
                    <Link href="project.link" key={index}>
                        <div className={cn("p-5 rounded-md",
                        project.background)}>
                            
                            <DirectionAwareHover
                            imageUrl={project.cover}
                            className='w-full space-y-5 cursor-pointer'>

                                <div className='space-y-5'>
                                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                                    <div className='flex items-center gap-5'>
                                        {project.tech.map((Icon, index) => {
                                            return <Icon className="w-8 h-8" key={index}/>;   
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>

                        </div>
                    </Link>
                );
            })}
        </div>
    </div>
  )
}
