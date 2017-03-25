import {ROLE_MEMBER, ROLE_EDITOR, ROLE_ADMIN} from '../constants/roleConstants';
// Set user info from request
export function setUserInfo(request) {
  const getUserInfo = {
    _id: request._id,
    firstName: request.profile.firstName,
    lastName: request.profile.lastName,
    email: request.email,
    role: request.role
  };

  return getUserInfo;
}

export function getRole(checkRole) {
  let role;

  switch (checkRole) {
    case ROLE_ADMIN:
      role = 3;
      break;
    case ROLE_EDITOR:
      role = 2;
      break;
    case ROLE_MEMBER:
      role = 1;
      break;
    default:
      role = 1;
  }

  return role;
}
