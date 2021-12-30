import '@testing-library/jest-dom';
import React from "react";
import { Dropdown } from "./dropdown";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Given dropdown is render with no options", () => {
    test("Then the default option should be display", () => {
        render(<Dropdown />)
        expect(screen.getByTestId("selected-value")).toHaveTextContent('Options');
    })
})

describe("Given dropdown is render with options", () => {
    const options = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' },
    ];

    test.each(options)("Then clicking on dropdown display %p", (option) => {
        render(<Dropdown options={options} />)
        fireEvent.click(screen.getByText('Options'))
        expect(screen.getByTestId('select')).toHaveTextContent(option.label);
    })

    test("Then selecting an option call onChange with this option", () => {
        const onChange = jest.fn();
        render(<Dropdown options={options} onChange={onChange} />);
        fireEvent.click(screen.getByText('Options'))
        fireEvent.click(screen.getByText('Legal'))
        expect(onChange).toHaveBeenCalledWith('Legal');
    })

    test("Then passing the props value display it as the selected option", () => {
        render(<Dropdown options={options} value="Marketing" />);
        expect(screen.getByTestId("selected-value")).toHaveTextContent('Marketing')
        expect(screen.getByTestId("selected-value")).not.toHaveTextContent('Options');
    })
})