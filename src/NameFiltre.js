import React from 'react'
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

export default function NameFiltre({value, onChange}) {
  return (
    <div className="name-filter">
        <InputGroup className="mb-3">
             <FormControl
             placeholder="Type movie name to search"
             aria-label="Recipient's username"
             aria-describedby="basic-addon2"
             value={value}
             onChange={(e) => {onChange(e.target.value)}}
             />
             <InputGroup.Append>
               <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
             </InputGroup.Append>
        </InputGroup>
    </div>
  )
}
