import InvariantError from '../../exceptions/InvariantError.js';
import AlbumPayloadSchema from './schema.js';

const AlbumsValidator = {
  validateAlbumPayload: (payload) => {
    const validateResult = AlbumPayloadSchema.validate(payload);
    if (validateResult.error) {
      throw new InvariantError(validateResult.error.message);
    }
  },
};

export default AlbumsValidator;
