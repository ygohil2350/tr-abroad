import { Fragment } from "react";
import "./testimonial17.css";

interface Testimonial17propTypes {
  author2Position: JSX.Element;
  author1Position: JSX.Element;
  author3Alt: string;
  author1Name: JSX.Element;
  author1Src: string;
  author3Name: JSX.Element;
  review2: JSX.Element;
  author2Name: JSX.Element;
  author4Position: JSX.Element;
  author4Name: JSX.Element;
  author4Src: string;
  author1Alt: string;
  author2Src: string;
  author3Src: string;
  author2Alt: string;
  author4Alt: string;
  content1: JSX.Element;
  author3Position: JSX.Element;
  review1: JSX.Element;
  heading1: JSX.Element;
  review3: JSX.Element;
  review4: JSX.Element;
}
const Testimonial17 = (props: Testimonial17propTypes) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text35 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text32 thq-body-small">
                  Read what our clients have to say about their experience with
                  our education consultancy.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text26 thq-body-large">
                            John Doe
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25 thq-body-small">
                            Master&apos;s Degree Student
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text34 thq-body-small">
                        I was struggling to find the right university for my
                        master&apos;s degree, but thanks to the guidance and
                        support from the team at Education Consultancy, I found
                        the perfect fit. Highly recommended!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text29 thq-body-large">
                            Jane Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24 thq-body-small">
                            College Applicant
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text28 thq-body-small">
                        The consultants at Education Consultancy truly care
                        about their clients&apos; success. They went above and
                        beyond to help me with my college applications and I
                        couldn&apos;t be happier with the results.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text27 thq-body-large">
                            Emily Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33 thq-body-small">
                            International Student
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text36 thq-body-small">
                        I can&apos;t thank Education Consultancy enough for
                        their expert advice on studying abroad. They made the
                        entire process smooth and stress-free. I am now pursuing
                        my dream course in a top university.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text31 thq-body-large">
                            Michael Brown
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30 thq-body-small">
                            PhD Candidate
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text37 thq-body-small">
                        Choosing Education Consultancy was one of the best
                        decisions I made for my academic career. Their
                        personalized approach and attention to detail set them
                        apart from other consultancy services.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Testimonial17.defaultProps = {
  author2Position: undefined,
  author1Position: undefined,
  author3Alt: "Image of Emily Johnson",
  author1Name: undefined,
  author1Src:
    "https://images.unsplash.com/photo-1541190990694-4a612732721c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDA1NzQ2M3w&ixlib=rb-4.0.3&q=80&w=1080",
  author3Name: undefined,
  review2: undefined,
  author2Name: undefined,
  author4Position: undefined,
  author4Name: undefined,
  author4Src:
    "https://images.unsplash.com/photo-1539614474468-f423a2d2270c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDA1NzQ2M3w&ixlib=rb-4.0.3&q=80&w=1080",
  author1Alt: "Image of John Doe",
  author2Src:
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDA1NzQ2M3w&ixlib=rb-4.0.3&q=80&w=1080",
  author3Src:
    "https://images.unsplash.com/photo-1632377082368-66155ad702d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDA1NzQ2NHw&ixlib=rb-4.0.3&q=80&w=1080",
  author2Alt: "Image of Jane Smith",
  author4Alt: "Image of Michael Brown",
  content1: undefined,
  author3Position: undefined,
  review1: undefined,
  heading1: undefined,
  review3: undefined,
  review4: undefined,
};

export default Testimonial17;
