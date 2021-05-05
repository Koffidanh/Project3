import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Card from "../../components/Card";

function HomePage() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <h1>Home</h1>
        <Card />
      </Container>
    </div >
  );
}

export default HomePage;
