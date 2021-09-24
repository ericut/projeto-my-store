import { IUserData } from '../../interfaces/IUserData';

export function getUserInitial(user: IUserData) {
  let name: any = user?.name.split(' ');
  let initials = name[0].substring(0, 1).toUpperCase();
  if (name.length > 1) {
    initials += name[name.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}

export function getWelcomeMsg() {
  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  if (currentHour > 18 && currentHour < 5) {
    return 'Boa Noite';
  } else if (currentHour > 5 && currentHour < 12) {
    return 'Bom Dia';
  } else if (currentHour > 12 && currentHour < 18) {
    return 'Boa Tarde';
  }
}
