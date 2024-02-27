import { beforeEach, describe, expect, test } from "vitest";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import Nav from "./Nav"

describe("Testing Nav", () => {
    beforeEach(() => {
        render(<Nav/>);
    });
    
    test("Render navbar", () => {
        const navbar = screen.getByText(/Navbar/i);
        expect(navbar).toBeDefined();
    });

    test("Render title", () => {
        const title = screen.getByText(/Mi lista de tareas/i);
        expect(title).toBeDefined();
    });
})