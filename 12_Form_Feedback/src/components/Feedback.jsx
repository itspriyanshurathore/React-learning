import React, { useState } from "react";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Please enter the name and message.");
      return;
    }
    // Save the feedback
    setFeedback({ name, message });
    // Clear the input fields
    setName("");
    setMessage("");
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h1>Feedback Project</h1>

      {/* Show live typing */}
      <h3>Live Preview:</h3>
      <p>Name: {name}</p>
      <p>Message: {message}</p>

      {/* Show submitted feedback */}
      {feedback && (
        <div style={{ marginTop: "20px", background: "#f9f9f9", padding: "10px" }}>
          <h3>Last Submitted Feedback:</h3>
          <p><b>Name:</b> {feedback.name}</p>
          <p><b>Message:</b> {feedback.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Message: </label>
          <textarea
            id="message"
            rows="2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}
