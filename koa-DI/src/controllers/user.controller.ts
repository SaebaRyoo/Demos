import { Controller, Inject } from '../decorators';
import { UserService } from '../services/user.service';
import { Context } from 'koa';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  public async getUsers(ctx: Context) {
    ctx.body = this.userService.getUsers();
  }

  public async getUserById(ctx: Context) {
    const id = parseInt(ctx.params.id);
    const user = this.userService.getUserById(id);
    if (user) {
      ctx.body = user;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'User not found' };
    }
  }
}