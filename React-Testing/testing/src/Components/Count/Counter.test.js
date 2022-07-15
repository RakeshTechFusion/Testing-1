import { fireEvent, render,screen } from "@testing-library/react";
import Counter from "./Counter";


it("should render correctly", ()=>{
    render(<Counter />);
})

it("should have initial count is zero",()=>{
    render(<Counter/>);
   let counterValue = screen.getByTestId("count-value");
   expect(counterValue).toHaveTextContent("0");
})

// it("should have button with + sign,Onclick increment the counter", ()=>{
//     render(<Counter/>);
//     let plusButton = screen.getByRole("plus-button");
//     fireEvent.click(plusButton)
//     expect(screen.getByTestId("count-value")).toHaveTextContent(1)
//     fireEvent.click(plusButton)
//     fireEvent.click(plusButton)
//     fireEvent.click(plusButton)
//     expect(screen.getByTestId("count-value")).not.toHaveTextContent(1)
//     expect(screen.getByTestId("count-value")).toHaveTextContent(4)

//     expect(plusButton).toHaveTextContent("+");
//     let minusButton = screen.getByRole("minus-button");
//     expect(minusButton).toHaveTextContent("-");
// })

// it("should have button with + sign,Onclick decrement the counter", ()=>{
//     render(<Counter/>);
//     expect(screen.getByTestId("count-value")).toHaveTextContent(0)
//     let minusButton = screen.getByRole("plus-button");
//     fireEvent.click(minusButton)
//     expect(screen.getByTestId("count-value")).toHaveTextContent(-1)
//     fireEvent.click(minusButton)
//     fireEvent.click(minusButton)
//     fireEvent.click(minusButton)
//     expect(screen.getByTestId("count-value")).not.toHaveTextContent(-1)
//     expect(screen.getByTestId("count-value")).toHaveTextContent(-3)

//     expect(plusButton).toHaveTextContent("-");
// })

it("should have button with +/-", ()=>{
    render(<Counter/>);
    let count = screen.getByTestId("count-value");
    let minusButton = screen.getByRole("plus-button");
    let plusButton = screen.getByRole("plus-button");
    expect(count).toHaveTextContent(0);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(count).toHaveTextContent(2)
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    expect(count).toHaveTextContent(0)


})







