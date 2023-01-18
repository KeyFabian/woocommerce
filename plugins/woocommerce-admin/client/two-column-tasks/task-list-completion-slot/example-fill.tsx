/**
 * External dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { Fill } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './example-fill.scss';

const MyTaskListCompletionItem = () => (
	<Fill name="woocommerce_task_list-completion_item">
		<div className="woocommerce-experiments-placeholder-tasklist-completion-slotfill">
			<div className="placeholder-tasklist-completion-slotfill-content">
				Task List Completion Slotfill goes in here!
			</div>
		</div>
	</Fill>
);

registerPlugin( 'my-tasklist-completion-extension', {
	render: MyTaskListCompletionItem,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	scope: 'woocommerce-admin',
} );
