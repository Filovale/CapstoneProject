import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import posts from "../../data/drone.json";
import "./Blog.css";

const Blog = props => {

  const [drone, setDrone] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const { id } = params;
    const drone = posts.find(post => post._id.toString() === id);

    if (drone) {
      setDrone(drone);
      setLoading(false);
    } else {
      navigate("/404");
    }
  }, []);

  if (loading) {
    return <div>loading</div>;
  } else {
    
    return (

        <Container className="container-fluid">
          <Image className="blog-details-cover" src={drone.cover} fluid />
          <h1 className="blog-details-title">{drone.title}</h1>

          <div className="blog-details-container">
            <div className="blog-details-author">
              <h4><a href={drone.author}>DJI</a></h4>
            </div>
            <div className="blog-details-info">
              <a href={drone.info}>{drone.info}</a>
            </div>
          </div>
            <div className="blog-details-softwares">
              <h4>Here there are all the compatible software to plan your flight:</h4>
              <ul>
                {drone.software.name.map((name, index) => (
                    <li key={index}>
                        <a href={drone.software.link[index]}>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
            </div>
        </Container>

    );
  }
};

export default Blog;
