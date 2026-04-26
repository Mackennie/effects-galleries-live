import React, { useEffect, useState } from 'react';

function Navbar() {
  return (
    <header style={{padding:'20px',background:'#062f4f',color:'#f2eee3',position:'sticky',top:0}}>
      <h2>Effects Galleries</h2>
      <small>Vercel Deploy Ready</small>
    </header>
  );
}

function Loader() {
  const [show,setShow] = useState(true);

  useEffect(()=>{
    const t = setTimeout(()=>setShow(false),1200);
    return ()=>clearTimeout(t);
  },[]);

  if(!show) return null;

  return (
    <div style={{
      position:'fixed',
      inset:0,
      background:'#062f4f',
      color:'#fff',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      zIndex:9999,
      fontSize:'28px',
      fontWeight:'bold'
    }}>
      Effects Galleries
    </div>
  );
}

function Hero() {
  return (
    <section style={{padding:'60px 30px'}}>
      <h1 style={{fontSize:'52px'}}>We Build Brands That Win.</h1>
      <p>Websites, branding, automation and growth systems.</p>
    </section>
  );
}

function Portfolio() {
  const items = [
    "WiseWin Holdings",
    "Green Sight Creations",
    "Competent Hub",
    "Naties Media",
    "Studio Designer Africa"
  ];

  return (
    <section style={{padding:'40px 30px'}}>
      <h2>Portfolio</h2>
      {items.map(item => (
        <div key={item} style={{
          padding:'15px',
          margin:'10px 0',
          background:'#0b3c63',
          borderRadius:'10px'
        }}>
          {item}
        </div>
      ))}
    </section>
  );
}

function Contact() {
  return (
    <section style={{padding:'40px 30px'}}>
      <h2>Launch Your Project</h2>
      <p>+267 75 911 547</p>
      <p>info@effectsgalleries.co.bw</p>
    </section>
  );
}

export default function App() {
  useEffect(()=>{
    document.title = "Effects Galleries";
  },[]);

  return (
    <div style={{
      fontFamily:'Arial',
      background:'#062f4f',
      color:'#f2eee3',
      minHeight:'100vh'
    }}>
      <Loader />
      <Navbar />
      <Hero />
      <Portfolio />
      <Contact />
    </div>
  );
}
