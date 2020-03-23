// APROVISIONAMIENTO
export const USUARIO = {
    getUserByEmal: 'http://localhost:8080/personas/getByEmail?email='
};

export const CALCULOS = {
    getDataTableCalc: '/calculoController/getCalculos',
    getDataDetailCalc: '/calculoController/listCalcParams',
    getDataTableParam: '/calculoController/getFicherosCalculo',
    postManualCalculate: '/calculoController/calculoManual',
    getFiltrosActivos: '/filterController/getFiltrosActivos',
    updateCalculoAutomatico: '/calculoController/updateCalculoAutomatico'
};

export const OUTPUTS = {
    getDataTableOutput: '/outputsController/getCriterio',
    findAllDataMon: '/outputsController/findAllEnvios',
    addEnvio: '/outputsController/addEnvio',
    updatePanico: '/outputsController/reestablecer'
};

export const USERDATA = {
    getPerimetroByUser: '/userController/getPerimetroByUser',
    getUserByGroupDist: '/userController/getUserByGroupDist'
};

export const NOTIFICACIONES = {
    getNotifications: '/notificacionController/getNotifications',
    updateNotifications: '/notificacionController/updateNotifications'
};
