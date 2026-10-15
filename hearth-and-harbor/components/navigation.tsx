'use client';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { site } from '@/content/site';
const links = [{href:'#approach', label:'The approach'}, {href:'#specialties', label:'What I help with'}, {href:'#about', label:'About'}, {href:'#details', label:'The details'}];
export function Navigation() {
  const [open,setOpen]=useState(false);
  return <header className="nav-wrap"><div className="nav-inner"><a href="#top" className="wordmark" aria-label={`${site.brand} home`}><span className="mark" aria-hidden="true">✳</span><span>{site.brand}<small>{site.descriptor}</small></span></a><nav className="desktop-nav" aria-label="Main navigation">{links.map(l=><a href={l.href} key={l.href}>{l.label}</a>)}</nav><a className="nav-contact" href="#contact">Let’s connect <ArrowUpRight size={16}/></a><button className="menu-button" type="button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?<X size={24}/>:<Menu size={24}/>}</button></div>{open&&<nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">{links.map(l=><a key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</a>)}<a href="#contact" onClick={()=>setOpen(false)}>Let’s connect ↗</a></nav>}</header>;
}
