export const ERROR_CONSTANT = {
    'internal_error': {
        status: 500,
        message: 'something went wrong, please try again!',
        error_code: 'internal_error'
    },
    'test_error': {
        status: 500,
        message: 'error test api working',
        error_code: 'test_error'
    },
    invalid_path: {
        status: 404,
        message: 'invalid path',
        error_code: 'invalid_path'
    },
    invalid_token: {
        status: 401,
        message: 'invalid user auth token',
        error_code: 'invalid_token'
    }
};