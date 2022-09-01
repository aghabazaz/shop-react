import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ProductDataService from "../../../services/products.service";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const AddFormik = () => {
  const intialValues = {
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  };
  return (
    <Formik
      initialValues={intialValues}
      validationSchema={Yup.object().shape({
        title: Yup.string().max(255).required(),
        price: Yup.string().required(),
        category: Yup.string().required(),
        image: Yup.string().required(),
        description: Yup.string(),
      })}
      onSubmit= {async (values, { setSubmitting }) => {
        try {
          const result =await ProductDataService.create(values);
          console.log("result", result.data);
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
          setSubmitting(false)
        }
      }}
    >
      {formik => (
     <div className="container">
              <form onSubmit={formik.handleSubmit}>
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
                    {...formik.getFieldProps('title')}
                  />
                           <ErrorMessage name="title" />

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
                    {...formik.getFieldProps('price')}
                  />
                     <ErrorMessage name="price" />
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
                    {...formik.getFieldProps('category')}
                 
                  />   <ErrorMessage name="category" />
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
                    {...formik.getFieldProps('image')}
                  />   <ErrorMessage name="image" />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    name="description"
                    className="form-control"
                    id="inputDescription"
                    {...formik.getFieldProps('description')}
                  /><ErrorMessage name="description" />
                </div>

                <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting }>
                  Submit
                </button>
              </form>
            </div>
)}
    </Formik>
  );
};
export default AddFormik;
