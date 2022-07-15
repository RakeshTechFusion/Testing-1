import {render,screen } from "@testing-library/react";
import {Button} from "./Button";

describe("Button Tests", function(){
    it("should have button in dom", function(){
        render(<Button>Click me</Button>);

        let button = screen.getAllByAltText("Click me");
        expect(Button).toBeInTheDocument();
    });
    it("should render based on testid",function(){
        render(<Button>Click me</Button>);
    });
    let button = screen.getByTextId("cButton");
    expect(button).toBeInTheDocument();
});