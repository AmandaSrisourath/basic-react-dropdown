# basic-react-dropdown

## Installation
```
npm install basic-react-dropdown
```

## Usage
```
import React, { useState } from "react";
import Dropdown from "basic-react-dropdown";

function Dropdown() {
    const [department, setDepartment] = useState('');
    
    const onEditDepartment = (value) => {
        setDepartment(value);
    }

    const departmentOptions = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' },
    ];
    
    return (
        <Dropdown options={departmentOptions} onChange={onEditDepartment} value={department}/>
    )
}

export default Dropdown;
```

## Development
```
npm run start
npm run test
```