import { ipcRenderer } from 'electron';
import { TableListRow, TextButton } from '@getflywheel/local-components';

export default function (context) {
	const { hooks } = context;

	hooks.addContent( 'SiteInfoOverview_TableList', (site) => {
		return (
			<li class="TableListRow_VfExz_v14-0-1 TableListRow">
				<strong>SquareOne Config:</strong>
				<div>
					{site.squareOneActive}
				</div>
			</li>
		);
	});

	hooks.addContent('siteInfoUtilities', ( site ) => {
		return (
			<TableListRow key="square-one" label="Square One">
				<TextButton
					disabled={site.squareOneActive == 'Active' ? "true" : ""}
					style={{paddingLeft: 0}}
					onClick={(event) => {
						ipcRenderer.send('save-sq', site.id, site.path);
						event.target.setAttribute('disabled', 'true');
					}}
				>Apply Nginx config files for SquareOne development.
				</TextButton>
				<ul>
					<li><small>Requires PHP ^7.4</small></li>
					<li><small>After applying config files, clone repo into <code>{site.path}/app/public</code>.</small></li>
					<li>
						<small>
							Add the below lines to <code>{site.path}/app/public/.env</code>.
							<ul>
								<li>DISABLE_OBJECT_CACHE=true</li>
								<li>DB_NAME=local</li>
								<li>DB_USER=root</li>
								<li>DB_PASSWORD=root</li>
								<li>DB_HOST=localhost</li>
								<li>DB_TABLE_PREFIX=wp_</li>
							</ul>
						</small>
					</li>
				</ul>
			</TableListRow>
		);
	});
}
