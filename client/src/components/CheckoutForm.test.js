import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

   render(<CheckoutForm />)
   const formHeader = screen.getByText(/checkout form/i)

});

test("form shows success message on submit with form details", () => {

   render(<CheckoutForm />)
   const firstNameInput = screen.getByLabelText(/first name/i)
   const lastNameInput = screen.getByLabelText(/last name/i)
   const addressInput = screen.getByLabelText(/address/i)
   const cityInput = screen.getByLabelText(/city/i)
   const stateInput = screen.getByLabelText(/state/i)
   const zipInput = screen.getByLabelText(/zip/i)
   const button = screen.getByRole('button', {name: /checkout/i})

   fireEvent.change(firstNameInput, {target: {name: 'firstName', value: 'Panda' }})
   fireEvent.change(lastNameInput, {target: {name: 'lastName', value: 'King'}})
   fireEvent.change(addressInput, {target: {name: 'address', value: 'jungle'}})
   fireEvent.change(cityInput, {target: {name: 'city', value: 'tree'}})
   fireEvent.change(stateInput, {target: {name: 'state', value: 'Asia'}})
   fireEvent.change(zipInput, {target: {name: 'zip', value: 'Korea'}})
   fireEvent.click(button)

   expect(screen.getByTestId('successMessage')).toBeInTheDocument()

});
