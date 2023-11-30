import React, { useContext } from "react";
import googlePlay from "../../assets/google-play.png";
import appStore from "../../assets/appstore.png";
import qr from "../../assets/qr.png";
import Cqr from "../../assets/customer-qr.png";
import Rqr from "../../assets/resturant-qr.png";
import download from "../../assets/download.png";
import close from "../../assets/close-modal.png";
import { MyContext } from "../../MyContext";

const AddModal = ({ modalRef }) => {
  const { activeButton } = useContext(MyContext);
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
            <div className="modal-body p-0">
              <div className="row m-0">
                <div className="col-lg-7  p-3 pt-lg-5 pb-lg-1 ps-lg-5">
                  <button
                    data-bs-dismiss="modal"
                    className="d-flex justify-content-end w-100 "
                  >
                    <img className="d-block d-lg-none" src={close} alt="" />
                  </button>
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
                  <div className="d-flex  align-items-center gap-4">
                    <img
                      className="img-fluid"
                      src={activeButton === "customer" ? Cqr : Rqr}
                      alt=""
                    />
                    <div className="d-flex flex-column gap-2 align-items-center">
                      <img className="img-fluid" src={googlePlay} alt="" />
                      <img className="img-fluid" src={appStore} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 download_sec text-end p-0">
                  <div className="d-flex justify-content-end w-100 ">
                    <button
                      data-bs-dismiss="modal"
                      className="d-none d-lg-block"
                    >
                      <img className="p-2" src={close} alt="" />
                    </button>
                  </div>

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
