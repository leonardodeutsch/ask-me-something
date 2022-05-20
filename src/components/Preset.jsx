import React from 'react';

const Preset = ({preset, click}) => {

  return (
    <div className="preset-container">
      <div className="preset-icon" onClick={() => {click(preset)}} style={{background: preset.presetColor}}>
        <i class={preset.presetIcon}></i>
      </div>
      <div >{preset.presetName}</div>
    </div>
  );
}

export default Preset;