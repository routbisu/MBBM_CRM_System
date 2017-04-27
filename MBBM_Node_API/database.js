import mongoose from 'mongoose';

export default function(callback) {
	// mongoose.connect('mongodb://admin:admin@ds113841.mlab.com:13841/nayakashu_mbbm');
	// mongoose.connect('mongodb://admin:password@ds137110.mlab.com:37110/mbbm');

	var connectionString = 'mongodb://localhost:27017/training';
	mongoose.connect(connectionString);

	mongoose.connection.on('error', function(error) {
		console.log('Connecting to database failed -> ' + connectionString);
		console.error('Database connection error:', error);
	});

	mongoose.connection.once('open', function() {
		console.log('Connecting to database succeeded -> ' + connectionString);
		console.log('Database connected');
	});

	callback();
}