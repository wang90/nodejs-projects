import http from '@/libs/http'


export function getTemps(page=1,pageSize=10){
    return http({
        url: `template?page=${page}=page_size=${pageSize}`,
        method: "get"
      });
}
export function getTemp(id){
    return http({
        url: `template/${id}`,
        method: "get"
    });
}

export function createTemp(data){
    return http({
        url:`template/`,
        method:'post',
        data,
    })
}
export function updateTemp(id,data){
    return http({
        url:`template/${id}`,
        method:'put',
        data,
    })
}
export function deleteTemp(id){
    return http({
        url:`template/${id}`,
        method:'delete',
    })
}