import React from "react";

function Result() {
  const result = {
    calories: "2200 kcal/day",
    protein: "70 g",
    carbs: "300 g",
    fats: "60 g",
    status: "Healthy"
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Nutrition Analysis Result</h1>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          width: "350px"
        }}
      >
        <h3>Status: {result.status}</h3>

        <p>
          <strong>Calories:</strong> {result.calories}
        </p>

        <p>
          <strong>Protein:</strong> {result.protein}
        </p>

        <p>
          <strong>Carbohydrates:</strong> {result.carbs}
        </p>

        <p>
          <strong>Fats:</strong> {result.fats}
        </p>
      </div>
    </div>
  );
}

export default Result;