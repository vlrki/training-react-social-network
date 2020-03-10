import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status="test status" />);
        const root = component.root;

        expect(root.props.status).toBe("test status"); // ?root.state
    });

    test("After creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="test status" />);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("After creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="test status" />);
        const root = component.root;
        let span = root.findByType("span");

        expect(span.children[0]).toBe("test status");
    });

    test("Input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="test status" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("test status");
    });

    // test("Callback should be called", () => {
    //     const mockCallback = jest.fn();
    //     const component = create(<ProfileStatus status="test status" updateStatus={mockCallback} />);
    //     const instance = component.getInstance();
    //     instance.deactivateEditMode();
    //     expect(mockCallback.mock.calls.length).toBe(1);
    // });
});