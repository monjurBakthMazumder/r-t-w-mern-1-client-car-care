import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, title, img} = service || {}
    return (
        <div className='border'>
            <figure className='h-60'><img src={img} alt="" className='h-full w-full object-cover'/></figure>
            <Link to={`/services/${_id}`}>
            <h1 className='px-5 py-3 text-xl font-bold text-primary hover:text-secondary'>{title}</h1>
            </Link>
        </div>
    );
};

ServiceCard.propTypes = {
    service : PropTypes.object,
};

export default ServiceCard;