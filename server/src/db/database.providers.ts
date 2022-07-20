import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://victoryju:chltmdwn@nestcluster.vxgek.mongodb.net/?retryWrites=true&w=majority',
      ),
  },
];
