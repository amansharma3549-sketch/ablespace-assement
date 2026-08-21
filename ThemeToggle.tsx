'use client';
import {Moon,Sun} from 'lucide-react';
import {useEffect,useState} from 'react';
export default function ThemeToggle(){const [dark,setDark]=useState(false);useEffect(()=>{const d=localStorage.getItem('theme')==='dark';setDark(d);document.documentElement.classList.toggle('dark',d)},[]);function toggle(){const n=!dark;setDark(n);localStorage.setItem('theme',n?'dark':'light');document.documentElement.classList.toggle('dark',n)}return <button aria-label="Toggle theme" onClick={toggle} className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">{dark?<Sun size={18}/>:<Moon size={18}/>}</button>}
