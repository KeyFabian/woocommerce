/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import classnames from 'classnames';
import { createElement } from '@wordpress/element';
import StarIcon from 'gridicons/dist/star';
import PropTypes from 'prop-types';

type RatingProps = {
	rating?: number;
	totalStars?: number;
	size?: number;
	className?: string;
	icon?: React.ReactNode;
	outlineIcon?: React.ReactNode;
};

/**
 * Use `Rating` to display a set of stars, filled, empty or half-filled, that represents a
 * rating in a scale between 0 and the prop `totalStars` (default 5).
 */
const Rating: React.VFC< RatingProps > = ( {
	rating = 0,
	totalStars = 5,
	size = 18,
	className,
	icon,
	outlineIcon,
} ) => {
	const stars = ( _icon: React.ReactNode ) => {
		const starStyles = {
			width: size + 'px',
			height: size + 'px',
		};

		const _stars = [];
		for ( let i = 0; i < totalStars; i++ ) {
			const Icon = _icon || StarIcon;
			_stars.push( <Icon key={ 'star-' + i } style={ starStyles } /> );
		}
		return _stars;
	};

	const classes = classnames( 'woocommerce-rating', className );
	const perStar = 100 / totalStars;
	const outlineStyles = {
		width: Math.round( perStar * rating ) + '%',
	};

	const label = sprintf(
		__( '%1$s out of %2$s stars.', 'woocommerce' ),
		rating,
		totalStars
	);
	return (
		<div className={ classes } aria-label={ label }>
			{ stars( icon ) }
			<div
				className="woocommerce-rating__star-outline"
				style={ outlineStyles }
			>
				{ stars( outlineIcon || icon ) }
			</div>
		</div>
	);
};

Rating.propTypes = {
	/**
	 * Number of stars that should be filled. You can pass a partial number of stars like `2.5`.
	 */
	rating: PropTypes.number,
	/**
	 * The total number of stars the rating is out of.
	 */
	totalStars: PropTypes.number,
	/**
	 * The size in pixels the stars should be rendered at.
	 */
	size: PropTypes.number,
	/**
	 * Additional CSS classes.
	 */
	className: PropTypes.string,
	/**
	 * Icon used, defaults to StarIcon
	 */
	icon: PropTypes.elementType,
	/**
	 * Outline icon used, the not selected rating. Defaults to props.icon or StarIcon
	 */
	outlineIcon: PropTypes.elementType,
};

export default Rating;