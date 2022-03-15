import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NewProjectForm from "./NewProjectForm";
import userEvent from "@testing-library/user-event";

test("should call the cancel button", () => {
  const onCancelHandler = jest.fn();
  const handler = jest.fn();
  render(
    <NewProjectForm
      onCancel={onCancelHandler}
      onReset={handler}
      onSave={handler}
    />
  );

  const cancel = screen.getByTestId("on-cancel-button");
  fireEvent.click(cancel);
  expect(onCancelHandler).toBeCalledTimes(1);
});

test("should call the reset button", () => {
  const onResetHandler = jest.fn();
  const handler = jest.fn();
  render(
    <NewProjectForm
      onCancel={handler}
      onReset={onResetHandler}
      onSave={handler}
    />
  );

  const reset = screen.getByTestId("on-reset-fields");
  fireEvent.click(reset);
  expect(onResetHandler).toBeCalledTimes(1);
});

test("should call the save button", () => {
  const handler = jest.fn();
  const onSaveHandler = jest.fn();
  render(
    <NewProjectForm
      onCancel={handler}
      onReset={handler}
      onSave={onSaveHandler}
    />
  );
  const onSave = screen.getByTestId("on-save-button");
  userEvent.click(onSave);
  expect(onSaveHandler).toBeCalledTimes(1);
});


it("submits", () => {
  const onSubmit = jest.fn();
  const handler = jest.fn();
  render(<NewProjectForm onCancel={handler} onReset={handler} onSave={onSubmit}/>);
  fireEvent.submit(screen.getByTestId("form-submission"));
  expect(onSubmit).toBeCalledTimes(1);
});