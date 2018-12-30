/**
 * Created by guangqiang on 2017/9/14.
 */
import OIcon from './oneIconFont'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

const iconMap = {
  oneIcon: OIcon
}

class Icon extends Component {

  render() {
    const {name, size, color} = this.props

    return (
      <OIcon name={name} size={size} color={color}/>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}

export {Icon}
