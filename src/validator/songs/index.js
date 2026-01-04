import { AlbumPayloadSchema, SongPayloadSchema } from './schema';
import InvariantError from '../../exceptions/InvariantError';

const AlbumsValidator = {
  validateAlbumPayload: (payload) => {
    const validateResult = AlbumPayloadSchema.validate(payload);
    if (validateResult.error) {
      throw new InvariantError(validateResult.error.message);
    }
  },
};

const SongsValidator = {
  validateSongPayload: (payload) => {
    const validateResult = SongPayloadSchema.validate(payload);
    if (validateResult.error) {
      throw new InvariantError(validateResult.error.message);
    }
  },
};

export { AlbumsValidator, SongsValidator };
