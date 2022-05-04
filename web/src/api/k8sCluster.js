import service from '@/utils/request'

export const k8sCluster = (data) => {
     return service({
         url: "/k8s/cluster",
         method: 'post',
         data
     })
 }


 export const fetchK8SCluster = (data) => {
     return service({
         url: "/k8s/cluster",
         method: 'get',
         data
     })
 }


 export const getK8SClusterDetail = (data) => {
     return service({
         url: "/k8s/cluster/detail",
         method: 'get',
         data
     })
 }