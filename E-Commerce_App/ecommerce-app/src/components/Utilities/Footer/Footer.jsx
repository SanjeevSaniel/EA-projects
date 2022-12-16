import React from "react";
import PaymentGateways from "../PaymentGateways/PaymentGateways";
import "./Footer.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Footer = () => {
  return (
    <section className="section-container">
      <div className="footer-container">
        <div className="box-footer-items">
          <ul>
            <p>Information</p>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="box-footer-items">
          <ul>
            <p>Service</p>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="box-footer-items">
          <ul>
            <p>Extras</p>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="box-footer-items">
          <ul>
            <p>My Account</p>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="box-footer-items">
          <ul>
            <p>Useful Links</p>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="box-footer-items">
          <ul>
            <p>Our Offers</p>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="footer__container__mobile">
        <Accordion
          sx={{
            backgroundColor: "rgba(250, 246, 245, 0.05)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="box-footer-items">
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "rgba(250, 246, 245, .05)" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Service</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="box-footer-items">
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "rgba(250, 246, 245, .05)" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Extras</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="box-footer-items">
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "rgba(250, 246, 245, .05)" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography> My Account</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="box-footer-items">
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "rgba(250, 246, 245, .05)" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Useful Links</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="box-footer-items">
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "rgba(250, 246, 245, .05)" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Our Offers</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="box-footer-items">
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* <hr className="hr-one" /> */}
      <PaymentGateways />
    </section>
  );
};

export default Footer;
