import { Injectable } from '@angular/core';

export interface Client {
  name: string;
  email: string;
  admin: boolean;
  senha: string
}

@Injectable({providedIn: 'root'})
export class ClientMockService {
  clients: Client[] = [
    {
      name: 'João Sistem',
      email: 'joao.sistem@gmail.com',
      admin: false,
      senha: "12345678"
    },
    {
      name: 'Wakin',
      email: 'Wakin.sistem@gmail.com',
      admin: true,
      senha: "12345678"
    },
    {
      name: 'Sinyo',
      email: 'Sinyo.sistem@gmail.com',
      admin: false,
      senha: "12345678"
    },
    {
      name: 'Xuwo',
      email: 'Xuwo.sistem@gmail.com',
      admin: true,
      senha: "12345678"
    },
    {
      name: 'Bubea',
      email: 'Bubea.sistem@gmail.com',
      admin: false,
      senha: "12345678"
    },
    {
      name: 'Vesye',
      email: 'Vesye.sistem@gmail.com',
      admin: true,
      senha: "12345678"
    },
    {
      name: 'Sanodimu',
      email: 'Sanodimu.sistem@gmail.com',
      admin: false,
      senha: "12345678"
    },
    {
      name: 'Elryo',
      email: 'Elryo.sistem@gmail.com',
      admin: true,
      senha: "12345678"
    },
    {
      name: 'Gaaer',
      email: 'Gaaer.sistem@gmail.com',
      admin: false,
      senha: "12345678"
    },
    {
      name: 'Mioss',
      email: 'Mioss.sistem@gmail.com',
      admin: true,
      senha: "12345678"
    },
  ]
}
