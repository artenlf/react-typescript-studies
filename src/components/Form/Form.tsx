import React from "react";
import Button from "../Button/Button";
import "./Form.scss";

class Form extends React.Component {
  render() {
    return (
      <form className="newTask">
        <div className="inputContainer">
          <label htmlFor="task">Add a new study topic</label>
          <input type="text" name="tarefa" id="tarefa" placeholder="What would you like to study?" required />
        </div>
        <div className="inputContainer">
          <label htmlFor="time">Time</label>
          <input type="time" step="1" name="time" min="00:00:00" max="01:30:00" required />
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
