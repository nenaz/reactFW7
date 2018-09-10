import * as React from 'react'
import { Input, Label } from 'framework7-react'

type BaseInputProps = {
  typeLabel?: boolean,
  typeInput?: string,
};

export const BaseInput = (props) => {
  const typeInput = props.typeInput
    ? props.typeInput
    : 'text'; 
  const floating = props.floating
    ? true
    : false; 
  return (
    <div {...props} >
      <Label
        floating={floating}
        inline={props.inline}
      >Password</Label>
      <Input type={typeInput} placeholder="Your password" clearButton></Input>
    </div>
  );
};