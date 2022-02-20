import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Modal.css";
function Modal(props) {
  const modal = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backgroundBlendMode: "multiply",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const cancelModal = {
    position: "absolute",
    right: "10px",
    top: "5px",
    backgroundColor: "#80808010",
    color: "red",
    width: "35px",
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
  };
  const donationTitle = {
    marginTop: "2rem",
  };
  const mpesa = {
    marginTop: "1.5rem",
  };
  const bank_account = {
    marginTop: "1.5rem",
  };
  return (
    <div style={modal}>
      <div className="modal_container">
        <h2 style={cancelModal} onClick={props.close}>
          X
        </h2>

        <Typography variant="h5" style={donationTitle}>
          YOUTH IN PRISON ORGANIZATION DONATION
        </Typography>
        <Box style={mpesa}>
          <Typography variant="h5" style={{ color: "RED" }}>
            LIPA NA MPESA
          </Typography>
          <Typography variant="h6">PAYBILL:247247</Typography>
          <Typography variant="h6">ACCOUNT:163162</Typography>
        </Box>
        <Box style={bank_account}>
          <Typography variant="h5" style={{ color: "RED" }}>
            BANK ACCOUNT DETAILS
          </Typography>
          <Typography variant="h6">
            ACCOUNT NAME:YOUTH IN PRISON (ORG)
          </Typography>
          <Typography variant="h6">ACCOUNT NUMBER:0020280382329</Typography>
          <Typography style={{ marginTop: "1rem" }}>
            For more information call: +254 722 15 30 98
          </Typography>
        </Box>
      </div>
    </div>
  );
}

export default Modal;
