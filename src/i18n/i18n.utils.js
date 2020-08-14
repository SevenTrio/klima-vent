import _ from 'lodash'

export function prefixPath (path, prefix) {
    return `/${prefix}/${_.trim(path, '/')}`
}

export function localizeRoutes (routes) {
    return routes.map(route => {
        if (route.localize !== false)  {
            return {
                ...route,
                path: prefixPath(route.path, ':locale')
            }
        }
        return { ...route }
    })
}