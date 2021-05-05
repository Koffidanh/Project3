import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Card from "../../components/Card";


function PortfolioPage() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <h1>Portfolio</h1>
        <Card />
      </Container>
    </div>
  );
}

export default PortfolioPage;
