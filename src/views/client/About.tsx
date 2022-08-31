import Layout from "../../components/layout/layout";
import { useTranslation } from 'react-i18next';

const About = () => {
  const {t, i18n} = useTranslation(['About']); // "home" is namespace

  return (
    <>
      <Layout>
        <div className="blue_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>About</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="about_text">
                  <h3>The standard Lorem Ipsum </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    {t("greeting")}
                  </p>
                  <a className="read_more" href="#">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-7">
                <div className="about_img">
                  <figure>
                    <img src="images/black-red.png" alt="#" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
