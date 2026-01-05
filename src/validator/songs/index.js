import SongPayloadSchema from './schema.js';
import InvariantError from '../../exceptions/InvariantError.js';

const SongsValidator = {
  validateSongPayload: (payload) => {
    const validateResult = SongPayloadSchema.validate(payload);
    if (validateResult.error) {
      throw new InvariantError(validateResult.error.message);
    }
  },
};

export default SongsValidator;
