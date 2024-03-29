import React from "react";
import Modal from "react-modal";
import { css } from "linaria";
import { purple } from "../styles/variables";

const globals = css`
  :global() {
    .ReactModal__Overlay--after-open {
      overflow-y: scroll !important;
    }

    .ReactModal__Content {
      bottom: auto !important;
    }
  }
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "560px"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

if (typeof window !== `undefined`) {
  Modal.setAppElement("#___gatsby");
}

class BioModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button
          className="ff-odudomono--r"
          onClick={this.openModal}
          css={`
            background: #fdfdfd;
            border-color: ${purple};
            border-width: 2px;
            border-radius: 3px;
            color: ${purple};
            cursor: pointer;
            display: block;
            font-size: 15px;
            margin-bottom: 35px;
            padding-top: 3px;
            padding-bottom: 3px;
            width: 100%;
            &:hover {
              color: white;
              background: #772858;
            }
          `}
        >
          Bio
        </button>
        <Modal
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel={this.props.bioName + " bio"}
        >
          <div>
            <div
              css={`
                display: inline-block;
              `}
            >
              <img
                css={`
                  width: 100px;
                  float: left;
                  margin-right: 1rem;
                  border-radius: 3px;
                `}
                src={this.props.pic}
              />
              <div
                css={`
                  float: left;
                `}
              >
                <h2 ref={subtitle => (this.subtitle = subtitle)}>
                  {this.props.bioName} Contact & Bio
                </h2>
                <a href={this.props.twitterLink}>{this.props.twitterHandle}</a>
                <br />
                <a href={this.props.siteLink}>{this.props.siteTitle}</a>
              </div>
            </div>
            <div>{this.props.bio}</div>
            <button
              onClick={this.closeModal}
              className="ff-odudomono-r"
              css={`
                float: right;
                border-color: ${purple};
                background: ${purple};
                border-radius: 3px;
                border-style: solid;
                color: white;
                cursor: pointer;
                font-size: 24px;
                height: 40px;
                width: 100%;
              `}
            >
              close
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default BioModal;
