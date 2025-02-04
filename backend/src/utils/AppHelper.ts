// import { Permissions } from "src/database/models/permissions.model";

export class AppHelper {
    static isDebug() {
        return process.env.NODE_ENV === 'development';
    }

    static transformUserPermissions(perms: any[]) {
        let newPerms = perms.map(el => {
            el.dataValues.GET = el.dataValues.can_read
            el.dataValues.POST = el.dataValues.can_create
            el.dataValues.PATCH = el.dataValues.can_update
            el.dataValues.DELETE = el.dataValues.can_delete
            return el.dataValues
        })
        newPerms.map(item => {
            item.role = item.role.dataValues.name
            item.route = item.route.dataValues.route
        })
        return newPerms
    }

    static hasPermission(path, perms, act): Boolean {

        let validRoute = perms.filter(el => el.route === path)[0]
        return validRoute ? validRoute[act] : false
    }
}