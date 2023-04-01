import { connect } from 'mongoose';

connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('Database connection established');
}).catch(err => {
  console.error('Database connection error:', err);
});