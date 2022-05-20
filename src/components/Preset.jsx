import React from 'react';

const Preset = ({preset, click}) => {

  return (
    <div className="preset-container">
      <div onClick={() => {click(preset)}}>{preset.presetName}</div>
    </div>
  );
}

export default Preset;