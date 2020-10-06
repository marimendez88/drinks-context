import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "./../context/CategoriesContext";

const Form = () => {
  const { categories } = useContext(CategoriesContext);

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
            <select className="form-control" name="category">
              <option>- Select Category -</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </select>
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
