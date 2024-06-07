import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DroneReviews from "./DroneReviews";
import "./Blog.css";

const Blog = props => {

  const [drone, setDrone] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    if (id) {

      fetch(`http://localhost:3001/drones/${id}`)
        .then((response) => response.json())
        .then((json) => {
          setDrone(json);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching drone data:", error);
          setLoading(false);
        });
    }
  }, [id]);


  if (loading) {
    return <div>loading</div>;
  } else {
    
    return (

        <Container className="container-fluid">
        <div className="blog-details-div">
          <div className="blog-details-covertitle">
          <Image className="blog-details-cover" src={drone.cover} fluid />
          <h1 className="blog-details-title">{drone.title}</h1>
          </div>
          <div className="blog-details-softwares">
            <h4>Here there are all the compatible software to plan your flight:</h4>
            <ul> 
                {drone.software && drone.software.map(({name, link}, index) => (
                    <li key={index}>
                        <a href={link}>{name}</a>
                    </li>
                ))}
            </ul>
          </div>
        </div>  
          <div className="blog-details-container">
              <h4>Made by                         <a href={drone.author}>DJI</a></h4>
              <a href={drone.info}>Click here to go directly to the technical specifications</a>
          </div>
          <div className="drone-reviews">
            <DroneReviews droneId={id} />
          </div>  
        </Container>

    );
  }
};

export default Blog;
