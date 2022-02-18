# basic-react-dropdown

[npm basic-react-dropdown](https://www.npmjs.com/package/basic-react-dropdown)

![](https://github.com/AmandaSrisourath/basic-react-dropdown/blob/main/public/dropdown.png)

## Installation
```
npm install basic-react-dropdown
```

## Usage
```js
import React, { useState } from "react";
import Dropdown from "basic-react-dropdown";

function Form() {
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

export default Form;
```

## API
### Props
<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>options</td>
          <td>array</td>
          <td>Array of object with value and label as property</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>function</td>
          <td>Launch function when user select value</td>
        </tr>
        <tr>
          <td>value</td>
          <td>string</td>
          <td>Display value of selected option</td>
        </tr>
    </tbody>
</table>

## Development
```
npm run start
npm run test
```
