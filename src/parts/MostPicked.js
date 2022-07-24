import React from 'react'
import Button from '../components/Buttons'
import Fade from 'react-reveal/Fade';

const MostPicked = (props) => {
  return (
    <section className='container'>
        <Fade bottom>
        <h4 className='mb-3'>
            Most Picked
        </h4>
        <div className='container-grid'>
            {
                props.data.map((item,index)=>{
                    return(
                        <div className={`item column-4 ${index == 0? "row-2" : "row-1"} `}>
                            <Fade delay={400 * index}>
                            <div className='card card-featured'>
                                <div className='tag'>
                                     ${item.price}
                                     <span className='font-weight-light'>per {item.unit}</span>
                                </div>
                                <figure className='img-wrapper'>
                                    <img src={item.imageUrl} alt={item.name} className="img-fluid"/>
                                </figure>
                                <div className='meta-wrapper'>
                                    <Button type='link' className='streched-link d-block text-white' href={`/properties/${item._id}`}>
                                        <h5>{item.name}</h5>
                                    </Button>
                                    <span>
                                        {item.city},{item.country}
                                    </span>
                                </div>
                            </div>
                            </Fade>
                        </div>
                    )
                })
            }
        </div>
        </Fade>
    </section>
  )
}

export default MostPicked