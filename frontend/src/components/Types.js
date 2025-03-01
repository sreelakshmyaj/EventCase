import React from 'react'

const Types = () => {
    const eventTypes = [
        { name: 'Weddings', image: 'https://cdn.pixabay.com/photo/2022/11/22/02/06/wedding-7608565_640.jpg' },
        { name: 'Parties', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/audience-1850119_640.jpg' },
        { name: 'Corporate Events', image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg' },
        { name: 'Festivals', image: 'https://cdn.pixabay.com/photo/2022/09/02/06/40/kids-7426792_640.jpg' },
        { name: 'Exhibitions', image: 'https://cdn.pixabay.com/photo/2020/05/24/08/41/city-5213076_960_720.jpg'},
        { name: 'And Many More...', image: 'https://cdn.pixabay.com/photo/2012/02/22/15/44/chairs-15364_640.jpg'}
    ]
  return (
    <div className='types' style={{padding: '2rem'}}>
        <h1 style={{textAlign: 'center'}}>We Handle All Types of Events</h1>
        <div className='event-types'>
            {eventTypes.map((event, index) => (
                <div
                    key={index}
                    className='event-type'
                    style={{backgroundImage: `url(${event.image})`}}
                >
                    <div className='overlay'>
                        <h3>{event.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Types