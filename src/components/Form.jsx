import React, { Component } from "react";

const Form = props => {
  return (
    <div>
      <form onSubmit={event => props.onGetWeather(event)}>
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="country" placeholder="Country" />
        <button>Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
