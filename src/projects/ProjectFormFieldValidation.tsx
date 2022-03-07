import React from "react";
import { Project } from "./Project";

export function validate(project: Project) {
  let errors: any = { name: "", description: "", budget: "" };
  if (project.name.length === 0) {
    errors.name = "Name is required.";
  }

  if (project.name.length > 0 && project.name.length < 3) {
    errors.name = "Name needs to be at least three(3) characters.";
  }

  if (project.description.length === 0) {
    errors.description = "Description is required.";
  }

  if (project.budget === 0) {
    errors.budget = "Budget must be more than $0.00";
  }
  return errors;
}

export function validateField(name: string, value: string) {
  let errors: any = { name: "", description: "", budget: "", imageUrl: "" };

  if (name === "name" && (!value || value.length === 0)) {
    errors.name = "Name is required.";
  }

  if (name === "name" && value.length > 0 && value.length <= 3) {
    errors.name = "Project Name should be more than 3 characters.";
  }

  if (name === "description") {
    if(value.length === 0) errors.description = "Project description is required.";
    if(value.length > 300) errors.description = "Project description cannot exceed 300 characters.";
  }

  if (name === "imageUrl" && (value.length === 0 || value.length < 10)) {
    errors.imageUrl = "Image Url is required.";
  }

  if (name === "budget") {
    const budget = Number(value);
    if (budget === 0) {
      errors.budget = "Budget must be more than $0.00";
    }
  }
  return errors;
}

export function isValid(errors: any){
  return (
    errors.name.length === 0 &&
    errors.description.length === 0 &&
    errors.budget.length === 0
  );
}

const ProjectFormFieldValidation = () => {
  return <div/>;
};

export default ProjectFormFieldValidation;
