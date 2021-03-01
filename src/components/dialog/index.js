import React, { Fragment } from "react";
import Dialog from "@material-ui/core/Dialog";
import playvideo from "../../images/img-carousel/play-video.png";

export default function Dialog1(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <img src={playvideo} alt="playVideo" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <iframe
          title="123"
          width="560"
          height="315"
          src={props.trailer}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Dialog>
    </Fragment>
  );
}
