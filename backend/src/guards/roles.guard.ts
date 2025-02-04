import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { PermissionsService } from 'src/modules/permissions/permissions.service';
import { UsersService } from 'src/modules/users/users.service';
import { AppHelper } from 'src/utils/AppHelper';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly usersService: UsersService,
    private readonly permissionService: PermissionsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const method = request.method
    const path = request.path.split('/');
    const [st, nd, rd, th] = path;
    const user = request.user;
    const isUser = await this.usersService.findByUserName(user?.userName);
    if (!isUser) throw new UnauthorizedException();
    const userPermissions = await this.permissionService.findByRole(
      isUser.role_id,
    );
    if (!userPermissions || userPermissions?.length == 0) throw new ForbiddenException();
    const pers = AppHelper.transformUserPermissions(userPermissions)
    let isOk = AppHelper.hasPermission(`/${th}`, pers, method)
    if (!isOk) throw new ForbiddenException()
    return true;
  }
}
