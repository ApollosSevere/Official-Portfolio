import React from "react";
// import photo from "../../../../public/assets/img/portfolio/self.jpg";
import "./homeBody.css";
function HomeBody() {
  return (
    <div className="homeBody">
      <div className="container2">
        <div className="homeBody__left">
          <div className="image">
            <img src="/assets/img/portfolio/self.jpeg" alt="pic" />
          </div>
        </div>
        <div className="homeBody__right">
          <span class="head-trans">Stephen</span>
          <h1 class="font-weight-normal text-color text-md">
            <i class="ti-minus mr-2"></i>Theme Developer
          </h1>
          <h2 class="mt-3 text-lg mb-3 text-capitalize">William Stephen.</h2>
          <p class="animated fadeInUp lead mt-4 mb-5 text-white-50 lh-35">
            I work in the sweet spot for innovation, somewhere between strategy,
            design and technology.I love the Web and the work we do.
          </p>
          <a href="#about" class="btn btn-solid-border">
            About Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
