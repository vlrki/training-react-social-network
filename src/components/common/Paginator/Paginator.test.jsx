import React, { useState } from 'react';
import { create } from "react-test-renderer";
import Paginator from './Paginator';

describe("Paginator component tests", () => {
    test("If page 1/236", () => {
        const component = create(<Paginator totalItemsCount={2354} pageSize={10} currentPage={1} portionSize={7} />);
        const root = component.root;
        let li = root.findAllByType("li");
        expect(li.length).toBe(8);
    });
    
    test("If page 236/236", () => {
        const component = create(<Paginator totalItemsCount={2354} pageSize={10} currentPage={236} portionSize={7} />);
        const root = component.root;
        let li = root.findAllByType("li");
        expect(li.length).toBe(8);
    });
    
    test("If page 230/236", () => {
        const component = create(<Paginator totalItemsCount={2354} pageSize={10} currentPage={230} portionSize={7} />);
        const root = component.root;
        let li = root.findAllByType("li");
        expect(li.length).toBe(15);
    });
})