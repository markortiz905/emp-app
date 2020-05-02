import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export default function SearchBar(props) {
  return (
    <InputGroup
      fixed="top"
      className="mb-4"
      onChange={(e) => props.callback(e.target.value)}
    >
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Filter Names: </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Name"
        aria-label="Name"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
}
