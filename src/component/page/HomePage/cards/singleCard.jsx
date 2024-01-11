import React from 'react'
import "./activityCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SingleCard(props){

    return(
    <>
    
    <div className="col-sm-3">
            <div className="card">
              <img
                src={props.src}
                style={props.styles}
                class="card-img-top  imgCard"
                alt="No Img"
              ></img>
              <div className="card-body">
                <p className="card-text">
                 {props.para}
                </p>
                <a
                  href={props.link}
                    target="_blank"
                  className="btn btn-primary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
    
    </>
  )
}

export default SingleCard
