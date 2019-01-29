import React, {Fragment} from 'react';

const SongDetail = (props) => {
  if (!props.song) return null;
  console.log(props.song);
  console.log(props.song["im:artist"].label);

  return (
    <Fragment>
    <h3>{props.song["im:name"].label}</h3>

    <img className="image" src={props.song["im:image"][2].label} />
    <h4>{props.song["im:artist"].label}</h4>
    </Fragment>
  );
}
export default SongDetail;
