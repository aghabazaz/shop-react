import { FormEvent, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { handleFormValues } from "../../../utils/handleForms";
import * as Yup from "yup";
import { Formik } from "formik";
const Add = () => {
  const intialValues = {
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, i18n } = useTranslation(["add"]); // "home" is namespace
  /* const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string | undefined>("");
  const [image, setImage] = useState<string>("");*/
  const handleResetState = (): void => {};
  /*const schema=Joi.object({
    title: Joi.string().max(255).required(),
    price:Joi.string().required(),
    category:Joi.string().required(),
    image:Joi.string().required(),
    description:Joi.string()
  })*/
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
      console.log(error.errors);
      setFormErrors(error.errors);
    }
  };
  const submitForm = () => {
    console.log(formValues);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);
  return (
    <>
      {formErrors.length > 0 && (
        <div className="alert alert-danger">
          <ul>
            {formErrors.map((error,index) => <li key={index}>{error} </li>)}
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
    </>
  );
};
export default Add;
