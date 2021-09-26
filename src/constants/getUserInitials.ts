import { IUserData } from '../interfaces/IUserData';

export function getUserInitial(user: IUserData) {
  let name: any = user?.name.split(' ');
  let initials = name[0].substring(0, 1).toUpperCase();
  if (name.length > 1) {
    initials += name[name.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}
