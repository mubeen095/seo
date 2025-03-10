'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>

            <footer className='lg:p-[0px_140px_0px_140px] relative'>

                <div className="slogan-container rounded-[20px] border border-[rgba(211,211,211,1)] w-full flex justify-between items-center p-[0px_68px_0px_50px] bg-[rgba(255,255,255,1)] transition">
                    <Image src={require('../../public/image/IT-removebg-preview.png')} loading="lazy" className="rinex-header-logo transition w-[250px] h-[180px] " alt="" />
                    <h6 className="sloag-heading text-[45px] font-bold bg-clip-text text-black textbackgroud" >Educate.Improve.Inspire</h6>
                </div>

                <div className="site-map-section">
                    <div className="site-map-left-side">
                        <p className="site-map-para">SITE MAP</p>
                        <h6 className="site-map-heading">Find all our links here</h6>
                        <p className="site-coffee-para">MEET FOR A COFFEE HERE</p>
                        <p className="footer-adress">
                            It Nova Technologies Pvt. Ltd. 15th floor manjeera trinity coorporate , kphb, Hyderabad, Telengana 500081
                        </p>
                    </div>
                    <div className="site-map-right-side">
                        <ul>
                            <li className="link-heading">EXPLORE</li>
                            <li className="">
                                <Link href="/" className="nav-foot-link">Home</Link>
                            </li>
                            <li>
                                <Link href="/#partnerNav" className="nav-foot-link">Partner</Link>
                            </li>
                            <li>
                                <Link href="/#contactNav" className="nav-foot-link">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/#communityNav" className="nav-foot-link">Community</Link>
                            </li>
                            <li>
                                <Link href="/#reviewNav" className="nav-foot-link">Reviews</Link>
                            </li>
                            <li>
                                <Link href="/#demoNav" className="nav-foot-link">Demo Session</Link>
                            </li>
                            {/* <li>
                                <Link href="/certificateVerify" className="nav-foot-link">
                                    <div>
                                        <span>Verify Certificate</span>
                                    </div>
                                </Link>
                            </li> */}
                        </ul>
                        <ul>
                            <li className="link-heading">PROGRAMS</li>
                            <li>
                                <Link className="nav-foot-link" href="/program/1">Artificial Intelligence</Link>
                            </li>
                            <li>
                                <Link className="nav-foot-link" href="/program/4">Machine Learning</Link>
                            </li>
                            <li>
                                <Link className="nav-foot-link" href="/program/3">Data Science</Link>
                            </li>
                            <li>
                                <Link className="nav-foot-link" href="/program/2">Cyber Security and ethical hacking</Link>
                            </li>
                            <li>
                                <Link className="nav-foot-link" href="/program/6">AutoCAD</Link>
                            </li>
                            <li>
                                <Link className="nav-foot-link" href="/program/7">Internet of Things and Robotics</Link>
                            </li>
                            <li>
                                <Link className="nav-foot-link" href="/program/8">AutoCAD &amp; MATLAB</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="link-heading">COMPANY</li>
                            <li>
                                <Link className="nav-foot-link" href="/about">About Us</Link>
                            </li>
                            {/* <li>
                                <Link href="/blogNav" className="nav-foot-link">Blogs</Link>
                            </li> */}
                            <li>
                                <Link className="nav-foot-link" href="/career">
                                    Career
                                    <span className="hiring-chip">WE ARE HIRING</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="link-heading">USER</li>
                            <li>
                                <a className="footerSignIn" href="https://graphy.com/?signin" target="_blank" style={{ textDecoration: "none" }}>Login</a>
                            </li>
                            <li>
                                <a className="footerSignUp" href="https://graphy.com/?signin" target="_blank" style={{ textDecoration: "none" }}>Sign Up</a>
                            </li>
                        </ul>
                        <p className="site-coffee-para-mobile">MEET FOR A COFFEE HERE</p>
                        <p className="footer-adress-mobile">It Nova Technologies Pvt. Ltd. 15th floor manjeera trinity coorporate , kphb, Hyderabad, Telengana 500081</p>
                    </div>
                </div>
                <div className="social-media-section">
                    <h5 className="social-media-heading">
                        <div className="flex items-center">
                            <p className='flex-1 w-full text-nowrap'>Find us on</p>
                            <Image className="red-heart" src={require("../../public/image/red_heart.svg")} alt="" />
                        </div>
                        <span>social media</span>
                    </h5>
                    <div>
                        <a href="https://www.linkedin.com/company/it-nova-pvt-ltd/" target="_blank" className="social-nav-link">
                            <Image src={require("../../public/image/linkedin_logo.svg")} alt="" />
                            LinkedIn
                            <Image src={require("../../public/image/tilt_arrow_grey.svg")} alt="" />
                        </a>
                        {/* <Link href="mailto:help@rinex.ai" target="_blank" className="social-nav-link">
                            <Image src={require("../../public/image/mail_logo.svg")} alt="" />
                            Mail
                            <Image src={require("../../public/image/tilt_arrow_grey.svg")} alt="" />
                        </Link>
                        <Link href={'/'} target="_blank" className="social-nav-link" style={{ cursor: "not-allowed" }}>
                            <Image src={require("../../public/image/twitter_logo.svg")} alt="" />
                            X
                            <Image src={require("../../public/image/tilt_arrow_grey.svg")} alt="" />
                        </Link> */}
                        <a href="https://www.instagram.com/itnova.in?igsh=c2g0eXljeG4ycThm" target="_blank" className="social-nav-link">
                            <Image src={require("../../public/image/insta_logo.svg")} alt="" />
                            Instagram
                            <Image src={require("../../public/image/tilt_arrow_grey.svg")} alt="" />
                        </a>
                        {/* <a href="https://www.facebook.com/rinexai/?_rdr" target="_blank" className="social-nav-link">
                            <Image src={require("../../public/image/fb_logo.svg")} alt="" />Facebook
                            <Image src={require("../../public/image/tilt_arrow_grey.svg")} alt="" />
                        </a> */}
                    </div>
                </div>
                <div className="copyright-section">
                    <p className="copyright-para">©it NOVA 2020 · 2024</p>
                    <div className="copyright-nav-container">
                        <Link href="/termsandconditions">User Agreement</Link>
                        <Link href="/termsandconditions">Terms and Condition</Link>
                        <Link href="/privacypolicy">Privacy policy</Link>
                    </div>
                </div>
                <div className="footer-brand-banner-section pb-2">
                    {/* <p className="footer-slogan">EDUCATE. IMPROVE. INSPIRE</p> */}
                    {/* <Image src={require("../../public/image/rinex_footer_banner.png")} alt="" /> */}
                </div>
            </footer>

        </>
    )
}

export default Footer