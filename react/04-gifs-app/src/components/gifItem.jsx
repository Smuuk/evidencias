import PropTypes from 'prop-types' //new, for testing


export const GifItem = ({ title, url, id }) => {

  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}


//new, for testing

GifItem.propTypes = {
  title: PropTypes.string.isRequired, 
  url  : PropTypes.string.isRequired, 
}

