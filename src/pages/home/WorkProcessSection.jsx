import React from "react";
import { Row, Col } from "react-bootstrap";
import subtitleIcon from "../../assets/images/icons/section-title.png";
import processImage1 from "../../assets/images/process/process-image1.png";
import processImage2 from "../../assets/images/process/process-image2.png";
import processImage3 from "../../assets/images/process/process-image3.png";
import processArry from "../../assets/images/process/process-arry.png";

const WorkProcessSection = () => {
  // Process data with actual images from process folder
  const processSteps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
      image: processImage1
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
      image: processImage2
    },
    {
      id: 3,
      title: "Development",
      description: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
      image: processImage3
    }
  ];

  return (
    <section className="section" style={{ background: "#fff", padding: "120px 0" }}>
      <div className="container">
        {/* Section Header */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
              <img 
                src={subtitleIcon} 
                alt="Section Icon" 
              />
              <span style={{ 
                color: "var(--primary-color)", 
                fontSize: 16, 
                fontWeight: 600, 
                textTransform: "uppercase",
                letterSpacing: 1
              }}>
                Work Process
              </span>
            </div>
            <h2 style={{ 
              color: "var(--secondary-color)", 
              fontSize: 40, 
              fontWeight: 700,
              margin: 0
            }}>
              Our Development Process
            </h2>
          </Col>
        </Row>

        {/* Process Steps */}
        <Row className="g-4">
          {processSteps.map((step, index) => (
            <Col key={step.id} lg={4} md={12} className="d-flex justify-content-center">
              <div className="text-center"
              style={{
                position: "relative",
                marginBottom: index < 2 ? "100px" : "0"
              }}
              >
                {/* Process Shape Between Columns - Only show for first 2 steps */}
                {index < 2 && (
                  <div style={{
                    position: "absolute",
                    top: "18%",
                    right: "-40%",
                    transform: "translate(-50%, -50%)"
                  }} className="bobble__animation">
                    <img 
                      src={processArry} 
                      alt="Process Arrow" 
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }}
                    />
                  </div>
                )}
                {/* Circular Image with Rotating Border */}
                <div style={{
                  position: "relative",
                  width: 200,
                  height: 200,
                  margin: "0 auto 30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {/* Rotating Dashed Border */}
                  <div style={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    border: "1px dashed var(--primary-color)",
                    content: "",
                    borderRadius: "50%",
                    position: "absolute",
                    animation: "rotate 20s linear infinite"
                  }}></div>
                  
                  {/* Circular Image */}
                  <img
                    src={step.image}
                    alt={step.title}
                    style={{
                      width: 180,
                      height: 180,
                      borderRadius: "50%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 1
                    }}
                  />

                  {/* Number Span */}
                  <span style={{
                    width: "40px",
                    height: "40px",
                    lineHeight: "40px",
                    textAlign: "center",
                    borderRadius: "50%",
                    transition: "var(--transition)",
                    background: "var(--main-gradient)",
                    color: "#fff",
                    fontSize: "18px",
                    position: "absolute",
                    top: "5px",
                    left: "5px",
                    zIndex: 2,
                    fontWeight: 600
                  }}>
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <div style={{ maxWidth: "280px", margin: "0 auto" }}>
                  <h4 style={{
                    color: "var(--secondary-color)",
                    fontSize: 20,
                    fontWeight: 600,
                    marginBottom: 15
                  }}>
                    {step.title}
                  </h4>
                  <p style={{
                    color: "#666",
                    fontSize: 14,
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>


        {/* CSS for Rotate Animation */}
        <style>
          {`
            @keyframes rotate {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            .bobble__animation {
              animation: 3s ease-in-out 0s infinite alternate none running bobble;
            }

            @keyframes bobble {
              0% {
                transform: translateY(0px) scale(1);
              }
              100% {
                transform: translateY(-20px) scale(1.1);
              }
            }

            @media (max-width: 1200px) {
              .bobble__animation {
                right: -20% !important;
              }
            }

            @media (max-width: 992px) {
              .bobble__animation {
                top: unset !important;
                right: unset !important;
                bottom: -110px !important;
                left: 40% !important;
              }
              
              .bobble__animation img {
                transform: rotate(90deg) !important;
              }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default WorkProcessSection; 