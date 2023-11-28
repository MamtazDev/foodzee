import React from "react";
import googlePlay from "../../assets/google-play.png";
import appStore from "../../assets/appstore.png";
import qr from "../../assets/qr.png";
import download from "../../assets/download.png";
import close from "../../assets/close-modal.png";

const AddModal = ({ modalRef }) => {
  return (
    <div className="add_modal">
      <button
        ref={modalRef}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row m-0">
                <div className="col-lg-7 pt-5 pb-1 ps-5">
                  <h1>
                    <span>Download the Foodzee App</span> - <br /> Your Gateway
                    to Savings
                  </h1>
                  <p>
                    Are you ready to embark on a transformative journey filled
                    with savings and sustainable dining experiences? Look no
                    further – download the Foodzee app on your Android or iOS
                    device and unlock a world of possibilities that redefine the
                    way you dine.
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-4">
                    <img src={qr} alt="" />
                    <div className="d-flex flex-column gap-2 align-items-center">
                      <img src={googlePlay} alt="" />
                      <img src={appStore} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 download_sec text-end p-0">
                  <button data-bs-dismiss="modal">
                    <img className="p-2" src={close} alt="" />
                  </button>

                  <img className="img-fluid" src={download} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
