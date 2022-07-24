import React from 'react'
import ImageHero from '../assets/images/img-hero.jpg'
import ImageHeroFrame from '../assets/images/img-hero-frame.jpg'
import IconCities from '../assets/images/icons/icon-cities.svg'
import IconTraveler from '../assets/images/icons/icon-traveler.svg'
import IconTreasure from '../assets/images/icons/icon-treasure.svg'
import { Container,Row,Col } from 'react-bootstrap'
import Button from '../components/Buttons'
import Fade from 'react-reveal/Fade';

const Hero = (props) => {
 const showMostPicked = () =>{
     window.scrollTo({
        top : props.refMostPicked.current.offsetTop - 30,
        behavior : "smooth"
     })
 }

 const numberFormat = (number)=>{
    const formatNumbering = new Intl.NumberFormat('id-ID')
    return formatNumbering.format(number)
 }
  return (
   <Fade bottom>
        <section>
            <Container className='pt-4 mt-3'>
                <Row className='align-items-center'>
                    <Col md={6} className='pr-md-5' style={{width:"422"}}>
                        <h1 className=' font-weight-bold judul-h1 line-height-1 mb-3'>
                        Forget Busy Work, <br /> Start Next Vacation
                        </h1>
                        <p className='mb-3 font-weight-light text-gray-500 w-75 p-style' >
                        We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
                        </p>
                        <Button style={{borderRadius:"4px",boxShadow:"0px 0px 10px #3252DF",minHeight:"50px"}} className='btn px-5' isPrimary hasShadow onClick={showMostPicked}>Show Me Now</Button>

                        <div className='row mb-3' style={{marginTop:"80px"}}>
                            <div className='col-auto'>
                                <img src={IconTraveler} width="36" alt={`${props.data.travelers} Travelers`} />
                                <h6 className='mt-3'>
                                    {numberFormat(props.data.travelers)}
                                    <span className='text-gray-500 font-weight-light'> Travelers</span>
                                    </h6>
                            </div>
                            <div className='col-auto'>
                                <img src={IconTreasure} width="36" alt={`${props.data.treasures} Treasures`} />
                                <h6 className='mt-3'>
                                    {numberFormat(props.data.treasures)}
                                    <span className='text-gray-500 font-weight-light'> Treasures</span>
                                    </h6>
                            </div>
                            <div className='col-auto'>
                                <img src={IconCities} width="36" alt={`${props.data.cities} cities`} />
                                <h6 className='mt-3'>
                                    {numberFormat(props.data.cities)}
                                    <span className='text-gray-500 font-weight-light'> Cities</span>
                                    </h6>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="pl-md-5">
                        <div>
                            <img src={ImageHero} className="img-fluid" />
                            {/* <img src={ImageHeroFrame} className="img-fluid position-absolute" style={{margin:"0 -15px -15px 0"}}/> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
   </Fade>
  )
}

export default Hero