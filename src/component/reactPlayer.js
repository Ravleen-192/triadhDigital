import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";
import video from '../video/video.mp4';
import 'react-responsive-modal/styles.css';
class Player extends Component {
  render() {
    const { open, toggleModal } = this.props;
    return (
      <Modal
        open={open}
        onClose={toggleModal}
        styles={{
          modal: {
            marginTop:"80px"
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)"
          },
          closeButton: {
            background: "#B0EADE"
          }
        }}
        center
      >
        <div className="mt_20 player">
        <ReactPlayer
          url={video}
          width="100%"
          height="calc(100vh - 200px)"
          type="video/mp4"
          playing
          controls
        />
        </div>
      </Modal>
    );
  }
}

export default Player;
