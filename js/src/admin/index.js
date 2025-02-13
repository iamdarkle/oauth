import app from 'flarum/admin/app';

import AuthSettingsPage from './components/AuthSettingsPage';

app.initializers.add('fof/oauth', () => {
  app.extensionData.for('fof-oauth').registerPage(AuthSettingsPage);
});
