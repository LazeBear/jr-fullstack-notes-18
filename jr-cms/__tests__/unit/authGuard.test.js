const authGuard = require('../../src/middleware/authGuard');
const { validateToken } = require('../../src/utils/jwt');
jest.mock('../../src/utils/jwt');
// validateToken = jest.fn()

describe('authentication guard middleware', () => {
  // let req;
  // let res;
  // let next;
  // beforeEach(()=>{
  //   req = {};
  // })
  it('should return 401 if authorization header is missing', () => {
    // setup
    const req = {
      header: jest.fn(),
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };
    res.status.mockReturnValue(res);
    const next = jest.fn();

    // execute
    authGuard(req, res, next);

    // compare
    expect(req.header).toHaveBeenCalledWith('Authorization');
    expect(res.status).toHaveBeenCalledWith(401);
    // expect(res.json).toHaveBeenCalled();
    // message file
    expect(res.json).toHaveBeenCalledWith({
      error: 'missing authorization header',
    });
  });

  test('should call next when token is valid', () => {
    const token = 'any_token';
    const payload = {};
    const req = {
      header: jest.fn().mockReturnValue(`Bearer ${token}`),
    };
    const res = {};
    const next = jest.fn();
    validateToken.mockImplementation((token) => {
      return payload;
    });

    authGuard(req, res, next);

    // jest
    expect(validateToken).toHaveBeenCalledWith(token);
    expect(req.user).toEqual(payload);
    // toBe
    expect(next).toHaveBeenCalled();
  });
});

// snapshot
