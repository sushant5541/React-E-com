import React from "react";

function Carousel() {
  return (

    <div className="container-fluid">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{ height: "60vh" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQbZloNaB10QFkQzesUcigVtPg1JtvtgypA&s" className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img style={{ height: "60vh" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvg73ugDQe8ILF_7dnzqtOQdz4uMW3SexnyaxAJekJz5QCz2ehtrFPU3edu0MvRm3x7cE&usqp=CAU" className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img style={{ height: "60vh" }} src="..." className="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel