import React, { useState } from 'react'
import profile from '../assets/images/avatar-michelle.jpg'
import share from '../assets/images/icon-share.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pins from '../assets/images/icon-pinterest.svg'

const Hero = () => {
    const[show,setShow]=useState(false)
    const share_btn = ()=>{
        console.log('hello');
        setShow(!show);
    }
    
    return (
        <>
            <main className='d-f '>
                <article className='article '>
                    <div className='article__img '></div>
                    <div className='article__contant '>
                        <h1>Shift the overall look and feel by adding these wonderful touches to furnituure in your home </h1>
                        <p className='title '>Ever been in a room and felt like something was missing?
                            Perhaps it felt slightly bare and uninviting .
                            I've got some simple tips to help you make any room feel complete.
                        </p>
                        <div className='article__contant__author '>
                            <div className='article__contant__author__profile'>
                                <img src={profile} alt="image" />
                                <h5>Michelle Appleton
                                    <p>28 jun 2020</p>
                                </h5>
                            </div>
                            <div className='share' onClick={share_btn}>
                                <button className='share__btn'>
                                <img src={share} alt="" className='sharebtn' />
                                </button>
                            </div>
                        </div>
                        <div className={` ${show ?'':'hide'} share_svg_btn`}>
                            <p>share</p>
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={pins} alt="" />
                            <div className='share_svg_btn__mobile_share'></div>
                            <div className='share_svg_btn__triangle_down'></div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default Hero
