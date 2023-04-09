export class contactKey {
  id: number;
}

export class Contact extends contactKey {
  name: string;
  phoneNumber?: string;
  email?: string;
}
