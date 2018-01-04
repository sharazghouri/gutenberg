/**
 * Internal dependencies
 */
import CopyContentsButton from '../copy-contents-button';

export default function EditorActions( { onClose } ) {
	return (
		<div className="components-choice-menu">
			{ /* Should we close the ellipsis menu after copying? */ }
			<CopyContentsButton onCopy={ onClose } />
		</div>
	);
}
