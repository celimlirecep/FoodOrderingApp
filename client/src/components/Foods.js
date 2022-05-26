import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Foods({ food }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");

  return (
    <div className="bg-light mt-5 shadow-lg p-3">
      <div onClick={handleShow}>
        <h1 className="pt-5">{food.name}</h1>
        <img
          src={food.img}
          className="img-fluid"
          style={{ height: "200px" }}
        ></img>
      </div>
      <div className="flex-container">
        <div className="w-100 p-1">
          <p>Özellik</p>
          <select
            className="form-select"
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
          >
            {food.varients.map((varient) => (
              <option value={varient}>{varient}</option>
            ))}
          </select>
        </div>
        <div className="w-100 p-1">
          <p>Miktar</p>
          <select
            className="form-select"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1>Tutar: {food.prices[0][varient] * quantity} TL</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn">Sepete Ekle</button>
        </div>
      </div>

      {/*Modal kurulumu burada yapılacak*/}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            className="img-fluid"
            src={food.img}
            style={{ height: "300px" }}
          />
          <h1>Kategori: {food.category}</h1>
          <p>{food.desc}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Kapat
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Foods;
