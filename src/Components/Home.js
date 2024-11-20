import React, { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "beige",
          height: "calc(100vh - 56px)",
          padding: "20px",
        }}
      >
        <div
          style={{
            fontFamily:
              "gt-super, Georgia, Cambria, Times New Roman, Times, serif",
            marginTop: "90px",
            marginLeft: "40px",
          }}
        >
          <p style={{ fontSize: "80px" }}>Unleash Your Voice 🌟</p>
          <p style={{ fontSize: "70px" }}>Write, Share, and Inspire 📝✨</p>

          <a href="/login">
            <button
              type="button"
              style={{
                fontSize: "20px",
                borderRadius: "4px",
                color: "beige",
                backgroundColor: "black",
                border: "none",
                padding: "3px 14px",
                marginTop: "120px",
              }}
            >
              Start Writing
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
