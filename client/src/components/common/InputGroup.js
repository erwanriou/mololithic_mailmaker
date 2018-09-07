import React, {Fragment } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const InputGroup = ({
  name,
  placeholder,
  type,
  value,
  error,
  onChange,
}) => {
  return (
    <Fragment>
      <input
        className={classnames('', {
          'invalid': error
        })}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
      { error && (<p>{error}</p>) }
    </Fragment>
  )
}

InputGroup.proptypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}
InputGroup.defaultProps = {
  type: 'text'
}

export default InputGroup
