import { Service } from '../decorators';

@Service()
export class UserService {
  private users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];

  public getUsers() {
    return this.users;
  }

  public getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }
}