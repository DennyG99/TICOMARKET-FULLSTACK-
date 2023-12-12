import React from "react";

const Error404 = () => {
  return (
    <div className="error-404 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="card py-5">
          <div className="row g-0">
            <div className="col col-xl-5">
              <div className="card-body p-4">
                <h1 className="display-1">
                  <span className="text-primary">4</span>
                  <span className="text-danger">0</span>
                  <span className="text-success">4</span>
                </h1>
                <h2 className="font-weight-bold display-4">¿Estás perdido?</h2>
                <p>
                  La página no fue encontrada. <br />
                  Creo que hubo una confusión. <br />
                  No te preocupes, tan solo pulsa el botón para seguir con tu vida.
                </p>
                <div className="mt-5 ">
                  <a
                    href="javascript:;"
                    className="btn btn-primary btn-lg px-md-5 radius-30"
                  >
                    Volver al Dashboard
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <img
                src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/03/shutterstock_1338315902.png"
                className="img-fluid"
                alt="true"
              />
            </div>
          </div>
          {/*end row*/}
        </div>
      </div>
    </div>
  );
};

export default Error404;
