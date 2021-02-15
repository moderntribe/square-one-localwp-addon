// https://getflywheel.github.io/local-addon-api/modules/_local_main_.html
import * as LocalMain from '@getflywheel/local/main';

export default function (context) {
	const { electron, fileSystem } = context;
	const { ipcMain } = electron;

	ipcMain.on('save-sq', async (event, siteId, path ) => {
		const site   = __dirname+'/../conf/site.conf.hbs';
		const confSQ = __dirname+'/../conf/includes/sq1.conf.hbs';
		try {
			if (fileSystem.existsSync( site )) {
				fileSystem.copyFile( site, path+'/conf/nginx/site.conf.hbs', (err) => {
					if (err) throw err;
					LocalMain.getServiceContainer().cradle.localLogger.log('info', `site.conf updated for ${siteId}`);
				});
			}
		} catch(err) {
			LocalMain.getServiceContainer().cradle.localLogger.log('info', `Error moving site.conf ${siteId}: ${err}`);
		}

		try {
			if (fileSystem.existsSync( confSQ )) {
				fileSystem.copyFile( confSQ, path+'/conf/nginx/includes/sq1.conf.hbs', (err) => {
					if (err) throw err;
					LocalMain.getServiceContainer().cradle.localLogger.log('info', `sq1.conf updated for ${siteId}`);
				});
			}
		} catch(err) {
			LocalMain.getServiceContainer().cradle.localLogger.log('info', `Error moving sq1.conf ${siteId}: ${err}`);
		}

		const squareOneActive = 'Active';
		LocalMain.SiteData.updateSite(siteId, {
			id: siteId,
			squareOneActive,
		});
	});
}
