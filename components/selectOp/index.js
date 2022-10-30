import React from 'react'
import Select from "react-select";

export default function SelectOp(props) {

    const options = [
        { value: "Abe", label: "Abe", customAbbreviation: "A" },
        { value: "John", label: "John", customAbbreviation: "J" },
        { value: "Dustin", label: "Dustin", customAbbreviation: "D" }
      ];

    return (
        <div className="form-group row">
        <label className="col-sm-4 col-form-label">{props.title}</label>
        <div className="col-sm-8">
            <Select className='circle set_ra_15'
                defaultValue={options[0]}
                options={options}
            />
        </div>
      </div>
  )
  }
