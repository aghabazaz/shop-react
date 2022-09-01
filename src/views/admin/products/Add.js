import { FormEvent, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { handleFormValues } from "../../../utils/handleForms";
import ProductDataService from "../../../services/products.service";

import product from "../../../types/product.type";
import * as Yup from "yup";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const Add = () => {
  const intialValues = {
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, i18n } = useTranslation();
  const handleResetState = (): void => {
    setFormValues({
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
  };
  const schema = Yup.object().shape({
    title: Yup.string().max(255).required(),
    price: Yup.string().required(),
    category: Yup.string().required(),
    image: Yup.string().required(),
    description: Yup.string(),
  });
  const handleChange = (e) => {
    console.log("handle changes", e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };
  const validate = async (formValues) => {
    try {
      const result = await schema.validate(formValues, { abortEarly: false });
      return result;
    } catch (error) {
      setFormErrors(error.errors);
    }
  };
  const submitForm = async () => {
    try {
      const result = await ProductDataService.create(formValues);
      console.log("result", result);
      if (result.status === 200) {
        MySwal.fire({
          title: "success!",
          text: "Success done!",
          icon: "success",
          button: "ok!",
        });
      }
    } catch (error) {
      return error;
    } finally {
      handleResetState();
    }
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);
  return (
    <>
      <div className="container-fluid">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Add Product</h6>
          </div>
          <div className="card-body">
            {formErrors.length > 0 && (
              <div className="alert alert-danger">
                <ul>
                  {formErrors.map((error, index) => (
                    <li key={index}>{error} </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="container">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="inputTitle" className="form-label">
                    product name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputTitle"
                    name="title"
                    aria-describedby="titleHelp"
                    value={formValues.title}
                    onChange={handleChange}
                  />
                  <div id="titleHelp" className="form-text">
                    We'll never share your title with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPrice" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputText"
                    name="price"
                    value={formValues.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputCategory" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCategory"
                    name="category"
                    value={formValues.category}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputImage" className="form-label">
                    Image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputImage"
                    name="image"
                    value={formValues.image}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    name="description"
                    className="form-control"
                    id="inputDescription"
                    value={formValues.description}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Add;
