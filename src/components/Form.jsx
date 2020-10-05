import React, { Fragment } from "react";

const Form = () => {
  return (
    <Fragment>
      <form className="col-12">
        <fieldset className="text-center">
          <legend>Search drinks by categories or ingredients</legend>
        </fieldset>
        <div className="row mt-10">
          <div className="col-md-4">
            <input
              name="name"
              className="form-control"
              type="text"
              placeholder="Search by ingredient"
            />
          </div>
          <div className="col-md-4">
            <select className="form-control" name="category"></select>
          </div>
          <div className="col-md-4">
            <input
              name="name"
              className="btn btn-block btn-primary"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;

/**
 * <form className="col-12">
			<fieldset className="text-center">
				<legend>Search drinks by categories or ingredients</legend>
				<div className="row">
					<div className="col-md-4">
						<input
							name="name"
							className="form-control"
							type="text"
							placeholder="Search by ingredient"
						/>
					</div>
				</div>
			</fieldset>
		</form>
 */
