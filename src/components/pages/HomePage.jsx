// import React from 'react'
import Navbar from './../common/Navbar'
import Button from './../common/Button'
import Card from './../common/Card'
import './../../assets/styles/homePage.css'
import homeImg from './../../assets/images/smarce1.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <div className='home pb-5'>
      <Navbar />
      <div className='hoe container flex items-center justify-between m-auto'>
        <div>
          <h1 className='text-8xl mb-5 font-spaceGrotesk'>BEAUTY SHIELD</h1>
          <p className='text-xl mb-5 font-spaceGrotesk'>
            FIND AND TRACE FAKE PRODUCTS IN SUPPLY CHAIN
          </p>

          <Link to='/ProductAuthenticity'>
            <Button text='Check Authenticity' />
          </Link>
          
        </div>
        <div className='bg-#F087FF4D'>
          <img className='w-700' src={homeImg} alt='hero-img' />
        </div>
      </div>

      <div className='chooseUsSection mb-20 container m-auto flex justify-between mt-20 border-r-purple-700 border-r-2 border-t-2 border-t-purple-700 border-b-2 border-b-purple-700 pt-28 pb-28 rounded-r-full '>
        <div className='w-1/3 ml-28'>
          <h1 className='font-spaceGrotesk text-5xl mt-28 mb-10'>
            Why choose us?
          </h1>
          <p className=''>
            Smarce is the optimal choice for tracing and counterfeit
            identification, leveraging blockchain for heightened security and
            reliability. Its decentralized nature ensures tamper resistance,
            preventing unauthorized alterations. Smarce excels in accurate
            tracing, employing robust authentication mechanisms to prevent fake
            identifications
          </p>
        </div>

        <div className='flex relative h-05 border-purple-700'>
          <Card positionClasses={'absolute bottom-0 right-80'} text='Trust'>
            <svg
              width='53'
              height='62'
              viewBox='0 0 53 62'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M37.2399 0.129517V61.058L52.8122 48.654V8.5935L37.2399 0.129517ZM29.997 47.7502L17.4584 53.2262V5.42522L29.997 9.13678V47.7502ZM0.619324 46.3463L10.2156 43.8102V13.3002L0.66502 11.7618L0.619324 46.3463Z'
                fill='url(#paint0_linear_53_475)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_53_475'
                  x1='26.7158'
                  y1='0.129513'
                  x2='97.8503'
                  y2='17.3756'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C92BB9' />
                  <stop
                    offset='0.609375'
                    stopColor='#60E7CE'
                    stopOpacity='0.5'
                  />
                  <stop offset='1' stopColor='#060ED0' stopOpacity='0.28' />
                </linearGradient>
              </defs>
            </svg>
          </Card>

          <Card positionClasses='absolute right-96' text='Protection'>
            <svg
              width='49'
              height='52'
              viewBox='0 0 49 52'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.5567 0.482605L39.0841 6.27081C39.6008 6.43213 40.0524 6.75439 40.373 7.19055C40.6936 7.62671 40.8665 8.15394 40.8662 8.69526V13.176H45.9436C46.6169 13.176 47.2626 13.4435 47.7387 13.9196C48.2148 14.3957 48.4823 15.0414 48.4823 15.7147V20.7921H15.4793V15.7147C15.4793 15.0414 15.7468 14.3957 16.2229 13.9196C16.699 13.4435 17.3447 13.176 18.018 13.176H35.7888V10.5612L20.5567 5.79861L5.3246 10.5612V29.3576C5.32423 30.9119 5.68065 32.4455 6.36638 33.8403C7.05212 35.2351 8.04888 36.4539 9.27987 37.4027L9.75968 37.748L20.5567 45.1127L30.158 38.5629H18.018C17.3447 38.5629 16.699 38.2954 16.2229 37.8193C15.7468 37.3433 15.4793 36.6975 15.4793 36.0242V25.8695H48.4823V36.0242C48.4823 36.6975 48.2148 37.3433 47.7387 37.8193C47.2626 38.2954 46.6169 38.5629 45.9436 38.5629L37.769 38.5654C36.7865 39.8602 35.5934 41.0026 34.2149 41.9419L20.5567 51.2563L6.89858 41.9444C4.84865 40.5468 3.17116 38.6695 2.01197 36.4759C0.852771 34.2823 0.246966 31.8387 0.247223 29.3576V8.69526C0.247529 8.15437 0.420581 7.62772 0.741156 7.19206C1.06173 6.75641 1.51307 6.43454 2.02938 6.27335L20.5567 0.482605Z'
                fill='url(#paint0_linear_53_482)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_53_482'
                  x1='24.3648'
                  y1='0.482602'
                  x2='89.2767'
                  y2='17.9355'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FD5A14' />
                  <stop
                    offset='0.609375'
                    stopColor='#FFF06B'
                    stopOpacity='0.59'
                  />
                  <stop offset='1' stopColor='#060ED0' stopOpacity='0.28' />
                </linearGradient>
              </defs>
            </svg>
          </Card>

          <Card
            positionClasses='absolute right-8 bottom-0'
            text='Fast & Secure'
          >
            <svg
              width='50'
              height='50'
              viewBox='0 0 50 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18.7178 18.9285H30.9035V16.8976C30.9035 15.2817 30.2615 13.7319 29.1189 12.5893C27.9763 11.4467 26.4265 10.8047 24.8106 10.8047C23.1947 10.8047 21.645 11.4467 20.5023 12.5893C19.3597 13.7319 18.7178 15.2817 18.7178 16.8976V18.9285Z'
                fill='url(#paint0_linear_53_463)'
              />
              <path
                d='M15.6714 27.0523H33.9499V25.0214H15.6714V27.0523Z'
                fill='url(#paint1_linear_53_463)'
              />
              <path
                d='M33.9499 32.1297H15.6714V30.0988H33.9499V32.1297Z'
                fill='url(#paint2_linear_53_463)'
              />
              <path
                d='M15.6714 37.2071H33.9499V35.1761H15.6714V37.2071Z'
                fill='url(#paint3_linear_53_463)'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0.439331 0.649963H49.1821V49.3927H0.439331V0.649963ZM11.6096 18.9285C11.0709 18.9285 10.5543 19.1425 10.1735 19.5234C9.79258 19.9042 9.5786 20.4208 9.5786 20.9595V41.269C9.5786 41.8076 9.79258 42.3242 10.1735 42.7051C10.5543 43.0859 11.0709 43.2999 11.6096 43.2999H38.0119C38.5505 43.2999 39.0671 43.0859 39.448 42.7051C39.8289 42.3242 40.0428 41.8076 40.0428 41.269V20.9595C40.0428 20.4208 39.8289 19.9042 39.448 19.5234C39.0671 19.1425 38.5505 18.9285 38.0119 18.9285H34.9655V16.8976C34.9655 11.2891 30.4192 6.74281 24.8107 6.74281C19.2023 6.74281 14.656 11.2891 14.656 16.8976V18.9285H11.6096Z'
                fill='url(#paint4_linear_53_463)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_53_463'
                  x1='24.8106'
                  y1='10.8047'
                  x2='39.7097'
                  y2='17.1299'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#00DD9C' />
                  <stop
                    offset='0.609375'
                    stopColor='#253FE0'
                    stopOpacity='0.619792'
                  />
                  <stop offset='1' stopColor='#060ED0' stopOpacity='0.28' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_53_463'
                  x1='24.8106'
                  y1='25.0214'
                  x2='28.333'
                  y2='33.9936'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#00DD9C' />
                  <stop
                    offset='0.609375'
                    stopColor='#253FE0'
                    stopOpacity='0.619792'
                  />
                  <stop offset='1' stopColor='#060ED0' stopOpacity='0.28' />
                </linearGradient>
                <linearGradient
                  id='paint2_linear_53_463'
                  x1='24.8106'
                  y1='30.0988'
                  x2='28.333'
                  y2='39.071'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#00DD9C' />
                  <stop
                    offset='0.609375'
                    stopColor='#253FE0'
                    stopOpacity='0.619792'
                  />
                  <stop offset='1' stopColor='#060ED0' stopOpacity='0.28' />
                </linearGradient>
                <linearGradient
                  id='paint3_linear_53_463'
                  x1='24.8106'
                  y1='35.1761'
                  x2='28.3331'
                  y2='44.1484'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#00DD9C' />
                  <stop
                    offset='0.609375'
                    stopColor='#253FE0'
                    stopOpacity='0.619792'
                  />
                  <stop offset='1' stopColor='#060ED0' stopOpacity='0.28' />
                </linearGradient>
                <linearGradient
                  id='paint4_linear_53_463'
                  x1='24.8107'
                  y1='0.649961'
                  x2='89.9317'
                  y2='19.0806'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#00DD9C' />
                  <stop
                    offset='0.609375'
                    stopColor='#253FE0'
                    stopOpacity='0.619792'
                  />
                  <stop offset='1' stopColor='#060ED0' stopOpacity='0.28' />
                </linearGradient>
              </defs>
            </svg>
          </Card>
          <Card positionClasses='absolute right-24' text='Tansparancy'>
            <svg
              width='53'
              height='46'
              viewBox='0 0 53 46'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M46.4095 45.7238H7.01801C5.20572 45.7238 3.65845 45.0863 2.37617 43.8113C1.0939 42.5363 0.452759 40.9978 0.452759 39.1958V13.0836C0.452759 12.1996 0.769053 11.4346 1.40164 10.7886C2.03423 10.1425 2.81214 9.81954 3.73538 9.81954H28.3551C28.3551 9.58154 28.5517 9.10554 28.9449 8.39153C29.3381 7.67753 29.7228 7.01452 30.099 6.40252L30.7144 5.53551C30.9538 4.8895 31.4325 4.354 32.1506 3.929C32.8687 3.50399 33.6209 3.29149 34.4074 3.29149H46.7172C47.5379 3.29149 48.3073 3.50399 49.0253 3.929C49.7434 4.354 50.2221 4.8895 50.4615 5.53551C52.137 7.71153 52.9747 9.13954 52.9747 9.81954V39.1958C52.9747 40.9978 52.3336 42.5363 51.0513 43.8113C49.769 45.0863 48.2218 45.7238 46.4095 45.7238ZM33.279 22.8756C33.279 21.0736 32.6379 19.5351 31.3556 18.2601C30.0733 16.9851 28.526 16.3476 26.7137 16.3476C24.9015 16.3476 23.3542 16.9851 22.0719 18.2601C20.7896 19.5351 20.1485 21.0736 20.1485 22.8756C20.1485 24.2017 20.5332 25.4172 21.3025 26.5222C22.0719 27.6272 23.0721 28.4177 24.3031 28.8937L20.1485 39.1958H33.279L29.1244 28.8937C30.3554 28.4177 31.3556 27.6272 32.1249 26.5222C32.8943 25.4172 33.279 24.2017 33.279 22.8756ZM2.81214 2.27148C3.0515 1.62548 3.53022 1.08997 4.24829 0.664971C4.96637 0.239968 5.71863 0.0274658 6.5051 0.0274658H18.8149C19.6356 0.0274658 20.405 0.239968 21.123 0.664971C21.8411 1.08997 22.3369 1.62548 22.6105 2.27148L25.0724 6.55552H0.452759L2.81214 2.27148Z'
                fill='url(#paint0_linear_53_456)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_53_456'
                  x1='26.7137'
                  y1='0.0274632'
                  x2='95.2519'
                  y2='22.3226'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#05D2FF' />
                  <stop
                    offset='0.609375'
                    stopColor='#253FE0'
                    stopOpacity='0.619792'
                  />
                  <stop offset='1' stopColor='#060ED0' stopOpacity='0.28' />
                </linearGradient>
              </defs>
            </svg>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
