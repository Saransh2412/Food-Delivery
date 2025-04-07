import React from 'react'

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit :"contain !important"}}> 
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption" style={{zIndex: '10'}}>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqOMqr744Yf9fAfNDYxsYqJC6WSSOUYvATD6YZW3WQHQapziGSH3poEg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqOMqr744Yf9fAfNDYxsYqJC6WSSOUYvATD6YZW3WQHQapziGSH3poEg&s" style={{filter:'brightness(30%)'}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1292635321/photo/veg-steam-momo-nepalese-traditional-dish-momo-stuffed-with-vegetables-and-then-cooked-and.jpg?s=1024x1024&w=is&k=20&c=EsDMBt5L1SzZh6OrEVCdEDGzZxQ9zFQ-CpOnLw1WYmI="style={{filter:'brightness(30%)'}}   className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://image.made-in-china.com/155f0j00ypukwrlcfToJ/New-Sexy-Underwear-Steel-Bowknot-Bikini-Sexy-Hollow-Three-Point-Lingerie-Set.webp" style={{filter:'brightness(30%)'}} className="d-block w-100" alt="..."/>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
