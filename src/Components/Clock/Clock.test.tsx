import React from "react";
import { render } from '@testing-library/react';
import Clock from "./Clock";

test('Renders correctly', () => {
    const component = render(<Clock/>);
    expect(component).toMatchSnapshot();
});
