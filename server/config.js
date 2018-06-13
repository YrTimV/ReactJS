const ApplicationConfig = {
	DEFAULT_PORT: 3000
};

const ConnectionConfig = {
	host: 'masterworks.universe.local',
	database: 'test'
}

ConnectionConfig.connectionString =
	`mongodb://${ConnectionConfig.host}/${ConnectionConfig.database}`;


module.exports = {
	application: ApplicationConfig,
	connection: ConnectionConfig
};
