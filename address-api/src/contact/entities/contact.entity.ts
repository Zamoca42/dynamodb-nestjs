export class contactUserId {
  id: string;
}

export class Contact extends contactUserId {
  name: string;
  phoneNumber?: string;
  email?: string;
}
