import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (
    <main className="my-5">
      <div className="container shadow-lg">
        <section className="text-center">
          <h2 className="mb-5 my-3">
            <strong>Latest posts</strong>
          </h2>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div className="bg-image hover-overlay ripple">
                  <img
                    src='https://www.kindpng.com/picc/m/235-2350682_new-svg-image-small-user-login-icon-hd.png'
                    className="img-fluid"
                    alt="Sample"
                  />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Demo</h5>
                  <p className="card-text">Demo Content</p>
                  <a href="#!" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-primary text-lg-start">
        <div className="text-center p-3 text-white">
          © 2022 Copyright : <a href="https://mdbootstrap.com/" className="text-white mx-2">MuskanBlogger</a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
