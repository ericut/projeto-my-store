export function getWelcomeMsg() {
  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  if ((currentHour >= 18 && currentHour < 24) || (currentHour >= 24 && currentHour < 5)) {
    return 'Boa Noite';
  } else if (currentHour >= 5 && currentHour < 12) {
    return 'Bom Dia';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Boa Tarde';
  } else {
    return 'Olá';
  }
}
