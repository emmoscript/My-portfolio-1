import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { SiGithub} from "react-icons/si";
import { SiX} from "react-icons/si";

export default function Navbar({className}:{className?: string}) {

    const socials = [
        {
            link: 'https://www.linkedin.com/in/emil-moquete-4290b2186/',
            label: 'LinkedIn',
            Icon: SiLinkedin,
        },
        {
            link: 'https://github.com/emmoscript',
            label: 'GitHub',
            Icon: SiGithub,
        },
        {
            link: '',
            label: 'x',
            Icon: SiX,
        }
    ]

  return (
    <nav className={cn('py-10 flex justify-between items-center animate-move-down z-100', className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>
            EmmoScript 🧑🏻‍💻
        </h1>
        <div className='flex items-center gap-5'>
            {socials.map((social, index)=>{

                const Icon = social.Icon;

                return <Link
                    href={social.link}
                    key={index}
                    aria-label={social.label}
                    >
                        <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                </Link>
            })}
        </div>
    </nav>
  )
}
