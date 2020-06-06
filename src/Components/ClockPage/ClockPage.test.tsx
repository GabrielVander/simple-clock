import React from "react";
import {render} from "@testing-library/react";
import ClockPage from "./ClockPage";

test('Renders correctly', () => {
    const component = render(<ClockPage/>);
    expect(component).toMatchSnapshot();
});