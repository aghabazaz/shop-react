const validate = (formValues, schema) => {
  const { error } = schema.validate(formValues);
  console.log("error", error);
  if (error) {
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    const errorMessage = { notice: error, type: "formValidation" };
    console.log(errorMessage);
    throw errorMessage;
  }
};
export const handleFormValues = (formValues, schema) => {
  /* event.preventDefault();
    const formValues={};
    const form =event.target.elements;
    console.log('form',event.target.elements)
    const data=new FormData(form);
    console.log(data)
    data.forEach((value,key)=>{
        console.log('value',value)
        formValues[key]=value;
    })*/
  console.log("handleForm Values", formValues);
  validate(formValues, schema);
  return formValues;
};
