/**
 * External dependencies
 */
import { connect } from 'react-redux';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ClipboardButton } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { getEditedPostContent } from '../../../store/selectors';

function CopyContentsButton( { editedPostContent, onCopy } ) {
	return (
		<ClipboardButton
			text={ editedPostContent }
			className="components-menu-items__toggle"
			onCopy={ onCopy }
		>
			{ __( 'Copy All Content' ) }
		</ClipboardButton>
	);
}

export default connect(
	( state ) => ( {
		editedPostContent: getEditedPostContent( state ),
	} )
)( CopyContentsButton );
