import React from "react";
import { Container } from "react-bootstrap";
import "./MobileHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faSearch } from "@fortawesome/free-solid-svg-icons";
const MobileHeader = () => {
  return (
    <section
      style={{ zIndex: "10" }}
      className="bg-white position-sticky d-block d-md-none w-100 top-0 mb-3 shadow-sm"
    >
      <Container>
        <div className="py-1 d-flex align-items-center">
          <h4 className="text-blue-green birdstory-logo mb-0 fw-bold">
            Birdstory
          </h4>
          <div className="ms-auto d-flex align-items-center">
            <input
              type="text"
              className="header-input  ms-2"
              placeholder="Search"
            />
            <button className="rounded-circle ms-2 border-0 outline-none p-2 bg-grey">
              <FontAwesomeIcon
                className="text-blue-green d-block mx-auto text-center"
                icon={faSearch}
              />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MobileHeader;
