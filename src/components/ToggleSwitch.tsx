import React from 'react';
import PropTypes from "prop-types";
import '../styles/ToggleSwitch.scss';

interface ToggleSwitchProps {
  id?: string;
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  optionLabels?: string[];
  small?: boolean;
  disabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ id = 'toggle-switch', name, checked, onChange, optionLabels = ['Dark', 'Light'], small, disabled }) => {
  return (
    <div className={'toggle-switch' + (small ? ' small-switch' : '')}>
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      {id ? (
        <label className="toggle-switch-label" htmlFor={id}>
          <span
            className={
              disabled ? 'toggle-switch-inner toggle-switch-disabled' : 'toggle-switch-inner'
            }
            data-yes={optionLabels[0]}
            data-no={optionLabels[1]}
          />
          <span
            className={
              disabled ? 'toggle-switch-switch toggle-switch-disabled' : 'toggle-switch-switch'
            }
          />
        </label>
      ) : null}
    </div>
  );
};

ToggleSwitch.defaultProps = {
  optionLabels: ['Dark', 'Light']
};

ToggleSwitch.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool
};

export default ToggleSwitch;
