import { FormEvent, useState } from "react";
import { useTranslation } from 'react-i18next';

const add = () => {
  const {t, i18n} = useTranslation(['add']); // "home" is namespace
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string | undefined>("");
  const [image, setImage] = useState<string>("");
  const handleResetState = (): void => {
    setTitle("");
    setPrice("");
    setCategory("");
    setDescription("");
    setImage("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!title) {
      return alert("عنوان محصول الزامی می باشد");
    }
    if (!price) {
      return alert("قیمت محصول الزامی می باشد");
    }
    if (!image) {
      return alert("تصویر محصول الزامی می باشد");
    }
    if (!category) {
      return alert("دسته بندی محصول الزامی می باشد");
    }
    handleResetState();
  };

  return (
    <>
    {t('Welcome to Virgool')}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="inputTitle" className="form-label">
            product name:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTitle"
            aria-describedby="titleHelp"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="inputDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default add;
