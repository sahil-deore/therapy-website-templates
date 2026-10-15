'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { site } from '@/content/site';
export function FAQ(){const [active,setActive]=useState<number|null>(0);return <div className="faq-list">{site.faqs.map((f,i)=><div className="faq-item" key={f.q}><h3><button className="faq-button" aria-expanded={active===i} aria-controls={`answer-${i}`} onClick={()=>setActive(active===i?null:i)}><span>{f.q}</span>{active===i?<Minus size={19}/>:<Plus size={19}/>}</button></h3><div id={`answer-${i}`} hidden={active!==i} className="faq-answer">{f.a}</div></div>)}</div>}
