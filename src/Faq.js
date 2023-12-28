import React, { useState } from 'react'

import iconStar from './assets/images/icon-star.svg'
import iconPlus from './assets/images/icon-plus.svg'
import iconMinus from './assets/images/icon-minus.svg'


const Faq = () => {
    const [open, setOpen] = useState(true);
    const [number, setNumber] = useState(0);

    const toggle = (num, bool) => {
        setOpen(bool);
        setNumber(num); 
    }
  return (
    <section className='faq'>
        <header>
            <img src={iconStar} alt="" width={30}/>
            <h1>FAQs</h1>
        </header>

        <article>
            <div class="question">
                <h2>What is Frontend Mentor, and how will it help me?</h2>
                {open && number === 1?
                <img 
                    src={iconMinus}
                    onClick={() => toggle(1, false)}
                    alt=""/>:
                <img 
                    src={iconPlus} 
                    onClick={() => toggle(1, true)}
                    alt=""/>
                }    
            </div>
            <p className={`${open && number === 1? 'open': ''}`}>
                Frontend Mentor offers realistic coding challenges to help developers improve their 
                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                all levels and ideal for portfolio building.
            </p>
        </article>

        
        <article>
            <div class="question">
                <h2>Is Frontend Mentor free?</h2>
                {open && number === 2?
                <img 
                    src={iconMinus}
                    onClick={() => toggle(2, false)}
                    alt=""/>:
                <img 
                    src={iconPlus} 
                    onClick={() => toggle(2, true)}
                    alt=""/>
                }    
            </div>
            <p className={`${open && number === 2? 'open': ''}`}>      
                Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                option providing access to a range of projects suitable for all skill levels.
            </p>
        </article>

        
        <article>
            <div class="question">
                <h2>Can I use Frontend Mentor projects in my portfolio?</h2>
                {open && number === 3?
                <img 
                    src={iconMinus}
                    onClick={() => toggle(3, false)}
                    alt=""/>:
                <img 
                    src={iconPlus} 
                    onClick={() => toggle(3, true)}
                    alt=""/>
                }    
            </div>
            <p className={`${open&& number === 3? 'open': ''}`}>
                Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                way to showcase your skills to potential employers!
            </p>
        </article>

        
        <article>
            <div class="question">
                <h2>How can I get help if I'm stuck on a Frontend Mentor challenge?</h2>
                {open && number === 4?
                <img 
                    src={iconMinus}
                    onClick={() => toggle(4, false)}
                    alt=""/>:
                <img 
                    src={iconPlus} 
                    onClick={() => toggle(4, true)}
                    alt=""/>
                }    
            </div>
            <p className={`${open&& number === 4? 'open': ''}`}>
            The best place to get help is inside Frontend Mentor's Discord community. There's a help 
            channel where you can ask questions and seek support from other community members.
            </p>
        </article>

    </section>
  )
}

export default Faq