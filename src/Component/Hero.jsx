import React from 'react'
import profile from '../assets/images/avatar-michelle.jpg'
import share from '../assets/images/icon-share.svg'

const Hero = () => {
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
                            <div className='share'>
                                <button className='share__btn'>
                                <img src={share} alt="" className='sharebtn' />
                                </button>
                            </div>

                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default Hero
