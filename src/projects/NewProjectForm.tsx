import React from 'react';


function handleSubmit() {}

function handleChange(){}

function onCancel(){}

const NewProjectForm = () => {
  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" placeholder="enter name" onChange={handleChange}/>
      {/*{errors.name.length > 0 && (*/}
      {/*  <div className="card error">*/}
      {/*    <p>{errors.name}</p>*/}
      {/*  </div>*/}
      {/*)}*/}
      <label htmlFor="description">Project Description</label>
      <textarea name="description" placeholder="enter description" onChange={handleChange}/>
      {/*{errors.description.length > 0 && (*/}
      {/*  <div className="card error">*/}
      {/*    <p>{errors.description}</p>*/}
      {/*  </div>*/}
      {/*)}*/}
      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="enter budget" onChange={handleChange}/>
      {/*{errors.budget.length > 0 && (*/}
      {/*  <div className="card error">*/}
      {/*    <p>{errors.budget}</p>*/}
      {/*  </div>*/}
      {/*)}*/}
      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive" onChange={handleChange}/>

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span/>
        <button type="button" className="bordered medium" onClick={onCancel}>cancel</button>
      </div>
    </form>
  );
};

export default NewProjectForm;